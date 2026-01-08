import AppError from "../../../utils/AppError.js";
import { updateBlogTagStatus } from "../../../models/blogTag.model.js";

export const updateBlogTagStatusService = async (id, status, adminId) => {
    const allowedStatus = ["active", "inactive"];

    if (!id) {
        throw new AppError("Tag ID is required", 400);
    }

    if (!status || !allowedStatus.includes(status)) {
        throw new AppError(
            "Invalid status value. Allowed: active, inactive",
            400
        );
    }

    const result = await updateBlogTagStatus(
        id,
        status,
        adminId
    );

    if (!result || result.affectedRows === 0) {
        throw new AppError("Blog tag not found", 404);
    }

    return {
        id,
        status,
    };
};
