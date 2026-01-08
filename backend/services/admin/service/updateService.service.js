import slugify from "slugify";
import db from "../../../config/db.js";
import { updateService } from "../../../models/service.model.js";
import AppError from "../../../utils/AppError.js";

export const updateServiceService = async (id, data, adminId) => {
    const {
        title,
        short_description,
        description,
        banner_image,
        thumbnail,
        status,
    } = data;

    if (!id) throw new AppError("Service ID is required", 400);
    if (!title?.trim()) throw new AppError("Title is required", 400);
    if (!short_description?.trim())
        throw new AppError("Short description is required", 400);
    if (!description?.trim())
        throw new AppError("Description is required", 400);

    const allowedStatus = ["active", "inactive"];
    if (!status || !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    let baseSlug = slugify(title, { lower: true, strict: true });
    let finalSlug = baseSlug;
    let count = 1;

    while (true) {
        const [existing] = await db.execute(
            "SELECT id FROM tbl_services WHERE slug = ? AND id != ?",
            [finalSlug, id]
        );
        if (existing.length === 0) break;
        finalSlug = `${baseSlug}-${count++}`;
    }

    const result = await updateService({
        id,
        title: title.trim(),
        slug: finalSlug,
        short_description: short_description.trim(),
        description: description.trim(),
        banner_image,
        thumbnail,
        status,
        updated_by: adminId,
    });

    if (!result || result.affectedRows === 0) {
        throw new AppError("Service not found", 404);
    }

    return {
        id,
        title: title.trim(),
        slug: finalSlug,
        short_description: short_description.trim(),
        description: description.trim(),
        banner_image,
        thumbnail,
        status,
    };
};
