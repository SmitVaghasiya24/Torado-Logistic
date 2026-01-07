import { getPendingAdmins } from "../../../models/admin.model.js";
import AppError from "../../../utils/AppError.js";

export const getPendingAdminsService = async () => {
    const admins = await getPendingAdmins();

    if (!admins) {
        throw new AppError(
            "Failed to fetch pending admins",
            500
        );
    }

    return admins;
};