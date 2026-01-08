import AppError from "../../../utils/AppError.js";
import { updateBlogCategoryStatus } from "../../../models/blogCategory.model.js";

export const updateBlogCategoryStatusService = async (id, status, adminId) => {
    const allowedStatus = ["active", "inactive"];

    if (!id) {
        throw new AppError("Category ID is required", 400);
    }

    if (!status || !allowedStatus.includes(status)) {
        throw new AppError(
            "Invalid status value. Allowed: active, inactive",
            400
        );
    }

    const result = await updateBlogCategoryStatus(
        id,
        status,
        adminId
    );

    if (!result || result.affectedRows === 0) {
        throw new AppError("Blog category not found", 404);
    }

    return {
        id,
        status,
    };
};
