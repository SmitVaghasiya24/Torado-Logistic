import AppError from "../../../utils/AppError.js";
import { updateBlogStatus } from "../../../models/blog.model.js";

export const updateBlogStatusService = async (id, status, adminId) => {
    const allowedStatus = ["active", "inactive"];

    if (!id) {
        throw new AppError("Blog ID is required", 400);
    }

    if (!status || !allowedStatus.includes(status)) {
        throw new AppError(
            "Invalid status value. Allowed: active, inactive",
            400
        );
    }

    const result = await updateBlogStatus(
        id,
        status,
        adminId
    );

    if (!result || result.affectedRows === 0) {
        throw new AppError("Blog not found", 404);
    }

    return {
        id,
        status,
    };
};
