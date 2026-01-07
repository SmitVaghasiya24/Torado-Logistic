import { approveAdmin } from "../../../models/admin.model.js";
import AppError from "../../../utils/AppError.js";

export const approveAdminService = async (adminId, updatedBy) => {
    if (!adminId) {
        throw new AppError(
            "Admin ID is required",
            400
        );
    }

    const result = await approveAdmin(adminId, updatedBy);

    if (!result) {
        throw new AppError(
            "Failed to approve admin",
            500
        );
    }

    return {
        admin_id: Number(adminId),
    };
};