import AppError from "../../../utils/AppError.js";
import { deleteBlogTag } from "../../../models/blogTag.model.js";

export const deleteBlogTagService = async (id) => {
    if (!id) {
        throw new AppError("Tag ID is required", 400);
    }

    const result = await deleteBlogTag(id);

    if (!result || result.affectedRows === 0) {
        throw new AppError("Blog tag not found", 404);
    }

    return {
        id,
        deleted: true,
    };
};
