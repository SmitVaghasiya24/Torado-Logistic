import slugify from "slugify";
import db from "../../../config/db.js";
import { updateProject } from "../../../models/project.model.js";
import AppError from "../../../utils/AppError.js";

export const updateProjectService = async (id, data, adminId) => {
    const {
        title,
        short_description,
        thumbnail,
        duration,
        budget,
        status,
    } = data;

    if (!id) {
        throw new AppError("Project ID is required", 400);
    }

    if (!title || title.trim() === "") {
        throw new AppError("Title is required", 400);
    }

    if (!short_description || short_description.trim() === "") {
        throw new AppError("Short description is required", 400);
    }

    const allowedStatus = ["active", "inactive"];
    if (!status || !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    let baseSlug = slugify(title, { lower: true, strict: true });
    let finalSlug = baseSlug;
    let count = 1;

    while (true) {
        const [existing] = await db.execute(
            "SELECT id FROM tbl_projects WHERE slug = ? AND id != ?",
            [finalSlug, id]
        );

        if (existing.length === 0) break;

        finalSlug = `${baseSlug}-${count}`;
        count++;
    }

    const result = await updateProject({
        id,
        title: title.trim(),
        slug: finalSlug, 
        short_description: short_description.trim(),
        thumbnail,
        duration: duration?.trim() || null,
        budget: budget?.trim() || null,
        status,
        updated_by: adminId,
    });

    if (!result || result.affectedRows === 0) {
        throw new AppError("Project not found", 404);
    }

    return {
        id,
        title: title.trim(),
        slug: finalSlug,
        short_description: short_description.trim(),
        duration: duration?.trim() || null,
        budget: budget?.trim() || null,
        status,
        thumbnail,
    };
};
