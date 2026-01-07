import { updateContactInfoStatus } from "../../../models/contactInfo.model.js";
import AppError from "../../../utils/AppError.js";

export const updateContactInfoStatusService = async (id, status, adminId) => {
    const allowedStatus = ["active", "inactive", "draft"];

    if (!id) {
        throw new AppError("Contact info ID is required", 400);
    }

    if (!status || !allowedStatus.includes(status)) {
        throw new AppError(
            "Invalid status value. Allowed: active, inactive, draft",
            400
        );
    }

    const result = await updateContactInfoStatus(
        id,
        status,
        adminId
    );

    if (!result || result.affectedRows === 0) {
        throw new AppError(
            "Contact information not found",
            404
        );
    }

    return {
        id,
        status,
    };
};
