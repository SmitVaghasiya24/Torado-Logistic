import { resubmitAdmin } from "../../../models/admin.model.js";
import AppError from "../../../utils/AppError.js";

export const resubmitAdminService = async (adminId) => {
    if (!adminId) {
        throw new AppError(
            "Unauthorized",
            401
        );
    }


    const result = await resubmitAdmin(adminId);

    if (!result) {
        throw new AppError(
            "Failed to re-submit profile",
            500
        );
    }

    return true;
};
