import fs from "fs";
import path from "path";
import AppError from "../../../utils/AppError.js";
import {
    deleteBlog,
    getBlogThumbnailById,
} from "../../../models/blog.model.js";

export const deleteBlogService = async (id) => {
    if (!id) {
        throw new AppError("Blog ID is required", 400);
    }

    const existing = await getBlogThumbnailById(id);
    if (!existing) {
        throw new AppError("Blog not found", 404);
    }

    if (existing.thumbnail) {
        const imagePath = path.join(process.cwd(), existing.thumbnail);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
    }

    const result = await deleteBlog(id);

    if (!result || result.affectedRows === 0) {
        throw new AppError("Failed to delete blog", 500);
    }

    return { id };
};
