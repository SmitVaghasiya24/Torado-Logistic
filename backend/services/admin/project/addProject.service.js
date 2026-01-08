import slugify from "slugify";
import db from "../../../config/db.js";
import { addProject } from "../../../models/project.model.js";
import AppError from "../../../utils/AppError.js";

export const addProjectService = async (data, adminId) => {
    const {
        title,
        short_description,
        thumbnail,
        duration,
        budget,
        status,
    } = data;

    if (!title || title.trim() === "") {
        throw new AppError("Title is required", 400);
    }

    if (!short_description || short_description.trim() === "") {
        throw new AppError("Short description is required", 400);
    }

    if (!thumbnail) {
        throw new AppError("Thumbnail is required", 400);
    }

    const allowedStatus = ["active", "inactive"];
    if (status && !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    // 🔹 slug generate
    let baseSlug = slugify(title, { lower: true, strict: true });
    let finalSlug = baseSlug;
    let count = 1;

    while (true) {
        const [existing] = await db.execute(
            "SELECT id FROM tbl_projects WHERE slug = ?",
            [finalSlug]
        );

        if (existing.length === 0) break;
        finalSlug = `${baseSlug}-${count}`;
        count++;
    }

    const dbResult = await addProject({
        title: title.trim(),
        slug: finalSlug,
        short_description: short_description.trim(),
        thumbnail,
        duration: duration?.trim() || null,
        budget: budget?.trim() || null,
        status,
        created_by: adminId,
    });

    if (!dbResult?.id) {
        throw new AppError("Failed to add project", 500);
    }

    return {
        id: dbResult.id,
        title: title.trim(),
        slug: finalSlug,
        short_description: short_description.trim(),
        duration: duration?.trim() || null,
        budget: budget?.trim() || null,
        status: status || "active",
        thumbnail, 
    };
};
