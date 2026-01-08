import { deleteBlogCategory } from "../../../models/blogCategory.model.js";
import AppError from "../../../utils/AppError.js";

export const deleteBlogCategoryService = async (id) => {
    if (!id) {
        throw new AppError("Category ID is required", 400);
    }

    const result = await deleteBlogCategory(id);

    if (!result || result.affectedRows === 0) {
        throw new AppError("Blog category not found", 404);
    }

    return {
        id,
        deleted: true,
    };
};
