import { getContactInfoAdmin } from "../../../models/contactInfo.model.js";
import AppError from "../../../utils/AppError.js";

export const getContactInfoAdminService = async () => {
    const data = await getContactInfoAdmin();

    if (!data || data.length === 0) {
        throw new AppError("No contact information found", 404);
    }

    return data;
};