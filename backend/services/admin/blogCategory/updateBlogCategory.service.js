import slugify from "slugify";
import db from "../../../config/db.js";
import { updateBlogCategory } from "../../../models/blogCategory.model.js";
import AppError from "../../../utils/AppError.js";

export const updateBlogCategoryService = async (id, data, adminId) => {
    const { name, status } = data;

    if (!id) {
        throw new AppError("Category ID is required", 400);
    }

    if (!name || name.trim() === "") {
        throw new AppError("Category name is required", 400);
    }

    const allowedStatus = ["active", "inactive"];
    if (!status || !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    let baseSlug = slugify(name, { lower: true, strict: true });
    let finalSlug = baseSlug;
    let count = 1;

    while (true) {
        const [existing] = await db.execute(
            "SELECT id FROM tbl_blog_categories WHERE slug = ? AND id != ?",
            [finalSlug, id]
        );

        if (existing.length === 0) break;

        finalSlug = `${baseSlug}-${count}`;
        count++;
    }

    const result = await updateBlogCategory({
        id,
        name: name.trim(),
        slug: finalSlug,
        status,
        updated_by: adminId,
    });

    if (!result || result.affectedRows === 0) {
        throw new AppError("Blog category not found", 404);
    }

    return {
        id,
        name: name.trim(),
        slug: finalSlug,
        status,
    };
};
