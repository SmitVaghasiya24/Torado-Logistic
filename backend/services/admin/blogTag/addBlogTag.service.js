import slugify from "slugify";
import db from "../../../config/db.js";
import { addBlogTag } from "../../../models/blogTag.model.js";
import AppError from "../../../utils/AppError.js";

export const addBlogTagService = async (data, adminId) => {
    const { name, status } = data;

    if (!name || name.trim() === "") {
        throw new AppError("Tag name is required", 400);
    }

    const allowedStatus = ["active", "inactive"];
    if (status && !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    let baseSlug = slugify(name, { lower: true, strict: true });
    let finalSlug = baseSlug;
    let count = 1;

    while (true) {
        const [existing] = await db.execute(
            "SELECT id FROM tbl_blog_tags WHERE slug = ?",
            [finalSlug]
        );

        if (existing.length === 0) break;

        finalSlug = `${baseSlug}-${count}`;
        count++;
    }

    const result = await addBlogTag({
        name: name.trim(),
        slug: finalSlug,
        status,
        created_by: adminId,
    });

    if (!result?.id) {
        throw new AppError("Failed to add blog tag", 500);
    }

    return {
        id: result.id,
        name: name.trim(),
        slug: finalSlug,
        status: status || "active",
    };
};
