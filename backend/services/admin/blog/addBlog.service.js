import slugify from "slugify";
import db from "../../../config/db.js";
import AppError from "../../../utils/AppError.js";
import { getAdminNameById } from "../../../models/admin.model.js";

export const addBlogService = async (data, adminId) => {
    const {
        title,
        short_description,
        content,
        published_date,
        thumbnail,
        category_id,
        author,
        status,
        tags,
    } = data;

    if (!title?.trim()) {
        throw new AppError("Title is required", 400);
    }

    if (!content?.trim()) {
        throw new AppError("Content is required", 400);
    }

    const connection = await db.getConnection();

    try {
        await connection.beginTransaction();

        let baseSlug = slugify(title, { lower: true, strict: true });
        let finalSlug = baseSlug;
        let count = 1;

        while (true) {
            const [existing] = await connection.execute(
                "SELECT id FROM tbl_blogs WHERE slug = ?",
                [finalSlug]
            );
            if (existing.length === 0) break;
            finalSlug = `${baseSlug}-${count++}`;
        }

        let finalAuthor = author?.trim();

        if (!finalAuthor) {
            finalAuthor = await getAdminNameById(adminId);
        }

        const [blogResult] = await connection.execute(
            `CALL sp_add_blog(?,?,?,?,?,?,?,?,?,?)`,
            [
                title.trim(),
                finalSlug,
                short_description || null,
                content.trim(),
                published_date || null,
                thumbnail,
                category_id || null,
                finalAuthor,
                status || "active",
                adminId,
            ]
        );

        const blogId = blogResult?.[0]?.[0]?.id;
        if (!blogId) {
            throw new AppError("Failed to add blog", 500);
        }

        if (tags && Array.isArray(tags) && tags.length > 0) {
            for (const tagId of tags) {
                await connection.execute(
                    `INSERT INTO tbl_blog_tags_map (blog_id, tag_id)
                     VALUES (?, ?)`,
                    [blogId, tagId]
                );
            }
        }

        await connection.commit();

        return {
            id: blogId,
            title,
            slug: finalSlug,
            author: finalAuthor,
            status: status || "active",
        };
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
};
