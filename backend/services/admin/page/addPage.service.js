import slugify from "slugify";
import db from "../../../config/db.js";
import { addPage } from "../../../models/page.model.js";
import AppError from "../../../utils/AppError.js";

export const addPageService = async (data, adminId) => {
    const { title, content, status } = data;

    if (!title || title.trim() === "") {
        throw new AppError("Title is required", 400);
    }

    if (!content || content.trim() === "") {
        throw new AppError("Content is required", 400);
    }

    const allowedStatus = ["active", "inactive"];
    if (status && !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    // 🔹 SLUG GENERATION
    let baseSlug = slugify(title, { lower: true, strict: true });
    let finalSlug = baseSlug;
    let count = 1;

    while (true) {
        const [existing] = await db.execute(
            "SELECT id FROM tbl_pages WHERE slug = ?",
            [finalSlug]
        );

        if (existing.length === 0) break;

        finalSlug = `${baseSlug}-${count}`;
        count++;
    }

    const result = await addPage({
        slug: finalSlug,
        title: title.trim(),
        content,
        status,
        created_by: adminId,
    });

    if (!result?.id) {
        throw new AppError("Failed to add page", 500);
    }

    return {
        id: result.id,
        slug: finalSlug,
        title,
        content,
        status: status || "active",
    };
};
