import slugify from "slugify";
import fs from "fs";
import path from "path";
import db from "../../../config/db.js";
import AppError from "../../../utils/AppError.js";
import { getBlogThumbnailById, updateBlog } from "../../../models/blog.model.js";

export const updateBlogService = async (id, data, adminId) => {
    if (!id) {
        throw new AppError("Blog ID is required", 400);
    }

    const existing = await getBlogThumbnailById(id);
    if (!existing) {
        throw new AppError("Blog not found", 404);
    }

    const {
        title,
        short_description,
        content,
        published_date,
        thumbnail,
        category_id,
        author,
        status,
    } = data;

    if (!title?.trim()) {
        throw new AppError("Title is required", 400);
    }

    if (!content?.trim()) {
        throw new AppError("Content is required", 400);
    }

    let baseSlug = slugify(title, { lower: true, strict: true });
    let finalSlug = baseSlug;
    let count = 1;

    while (true) {
        const [rows] = await db.execute(
            "SELECT id FROM tbl_blogs WHERE slug = ? AND id != ?",
            [finalSlug, id]
        );
        if (rows.length === 0) break;
        finalSlug = `${baseSlug}-${count++}`;
    }

    let finalThumbnail = existing.thumbnail;

    if (thumbnail) {
        if (existing.thumbnail) {
            const oldPath = path.join(process.cwd(), existing.thumbnail);
            if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
        }
        finalThumbnail = thumbnail;
    }

    const result = await updateBlog({
        id,
        title: title.trim(),
        slug: finalSlug,
        short_description: short_description || null,
        content: content.trim(),
        published_date: published_date || null,
        thumbnail: finalThumbnail,
        category_id: category_id || null,
        author: author || "Admin",
        status,
        updated_by: adminId,
    });

    if (!result || result.affectedRows === 0) {
        throw new AppError("Failed to update blog", 500);
    }

    return {
        id,
        title,
        slug: finalSlug,
        status,
        thumbnail: finalThumbnail,
    };
};
