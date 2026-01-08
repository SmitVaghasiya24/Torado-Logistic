import slugify from "slugify";
import db from "../../../config/db.js";
import { addService } from "../../../models/service.model.js";
import AppError from "../../../utils/AppError.js";

export const addServiceService = async (data, adminId) => {
    const {
        title,
        short_description,
        description,
        banner_image,
        thumbnail,
        status,
    } = data;

    if (!title || title.trim() === "") {
        throw new AppError("Title is required", 400);
    }

    if (!short_description || short_description.trim() === "") {
        throw new AppError("Short description is required", 400);
    }

    if (!description || description.trim() === "") {
        throw new AppError("Description is required", 400);
    }

    const allowedStatus = ["active", "inactive"];
    if (status && !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    let baseSlug = slugify(title, { lower: true, strict: true });
    let finalSlug = baseSlug;
    let count = 1;

    while (true) {
        const [existing] = await db.execute(
            "SELECT id FROM tbl_services WHERE slug = ?",
            [finalSlug]
        );

        if (existing.length === 0) break;

        finalSlug = `${baseSlug}-${count}`;
        count++;
    }

    const result = await addService({
        title: title.trim(),
        slug: finalSlug,
        short_description: short_description.trim(),
        description: description.trim(),
        banner_image,
        thumbnail,
        status,
        created_by: adminId,
    });

    if (!result?.id) {
        throw new AppError("Failed to add service", 500);
    }

    return {
        id: result.id,
        title: title.trim(),
        slug: finalSlug,
        short_description: short_description.trim(),
        description: description.trim(),
        banner_image,
        thumbnail,
        status: status || "active",
    };
};
