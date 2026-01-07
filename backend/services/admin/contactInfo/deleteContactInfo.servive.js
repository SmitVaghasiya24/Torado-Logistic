import { deleteContactInfo } from "../../../models/contactInfo.model.js";
import AppError from "../../../utils/AppError.js";

export const deleteContactInfoService = async (id, adminId) => {
    if (!id) {
        throw new AppError("Contact info ID is required", 400);
    }

    const result = await deleteContactInfo(id, adminId);

    if (!result || result.affectedRows === 0) {
        throw new AppError(
            "Contact information not found",
            404
        );
    }

    return {
        id,
        deleted: true,
    };
};
