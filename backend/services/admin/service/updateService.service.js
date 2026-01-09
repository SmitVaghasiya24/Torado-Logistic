import fs from "fs";
import path from "path";
import slugify from "slugify";
import db from "../../../config/db.js";
import AppError from "../../../utils/AppError.js";
import { updateService, getServiceById } from "../../../models/service.model.js";

export const updateServiceService = async (id, data, adminId) => {
    if (!id) throw new AppError("Service ID is required", 400);

    const existing = await getServiceById(id);
    if (!existing) throw new AppError("Service not found", 404);

    let bannerImagePath = existing.banner_image;
    let thumbnailPath = existing.thumbnail;

    if (data.banner_image) {
        if (existing.banner_image) {
            const oldPath = path.join(process.cwd(), existing.banner_image);
            if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
        }
        bannerImagePath = data.banner_image;
    }

    if (data.thumbnail) {
        if (existing.thumbnail) {
            const oldPath = path.join(process.cwd(), existing.thumbnail);
            if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
        }
        thumbnailPath = data.thumbnail;
    }

    let baseSlug = slugify(data.title, { lower: true, strict: true });
    let finalSlug = baseSlug;
    let count = 1;

    while (true) {
        const [rows] = await db.execute(
            "SELECT id FROM tbl_services WHERE slug = ? AND id != ?",
            [finalSlug, id]
        );
        if (rows.length === 0) break;
        finalSlug = `${baseSlug}-${count++}`;
    }

    const result = await updateService({
        id,
        title: data.title.trim(),
        slug: finalSlug,
        short_description: data.short_description.trim(),
        description: data.description.trim(),
        banner_image: bannerImagePath,
        thumbnail: thumbnailPath,
        status: data.status,
        updated_by: adminId,
    });

    if (!result || result.affectedRows === 0) {
        throw new AppError("Service not found", 404);
    }

    return {
        id,
        title: data.title,
        slug: finalSlug,
        banner_image: bannerImagePath,
        thumbnail: thumbnailPath,
        status: data.status,
    };
};
