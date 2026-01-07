import { rejectAdmin } from "../../../models/admin.model.js";
import AppError from "../../../utils/AppError.js";

export const rejectAdminService = async (adminId, reason, updatedBy) => {
    if (!adminId) {
        throw new AppError(
            "Admin ID is required",
            400
        );
    }

    if (!reason || reason.trim() === "") {
        throw new AppError(
            "Rejection reason is required",
            400
        );
    }

    const result = await rejectAdmin(
        adminId,
        reason.trim(),
        updatedBy
    );

    if (!result) {
        throw new AppError(
            "Failed to reject admin",
            500
        );
    }

    return {
        admin_id: Number(adminId),
        reason: reason.trim(),
    };
};
