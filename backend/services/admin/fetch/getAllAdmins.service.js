import { getAllAdmins } from "../../../models/admin.model.js";
import AppError from "../../../utils/AppError.js";

export const getAllAdminsService = async () => {
    const admins = await getAllAdmins();

    if (!admins) {
        throw new AppError(
            "Failed to fetch admins",
            500
        );
    }

    return admins;
};
