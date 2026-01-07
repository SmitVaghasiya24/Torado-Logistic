import { updateContactInfo } from "../../../models/contactInfo.model.js";
import AppError from "../../../utils/AppError.js";

export const updateContactInfoService = async (id, data, adminId) => {
    const { contact_type, title, value, status } = data;

    const allowedTypes = ["call", "email"];
    const allowedStatus = ["active", "inactive", "draft"];

    if (!id) {
        throw new AppError("Contact info ID is required", 400);
    }

    if (!contact_type || !allowedTypes.includes(contact_type)) {
        throw new AppError(
            "Invalid contact type. Allowed values: call, email",
            400
        );
    }

    if (!title || title.trim() === "") {
        throw new AppError("Title is required", 400);
    }

    if (!value || value.trim() === "") {
        throw new AppError("Value is required", 400);
    }

    if (!status || !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    const result = await updateContactInfo({
        id,
        contact_type,
        title: title.trim(),
        value: value.trim(),
        status,
        updated_by: adminId,
    });

    if (!result || result.affectedRows === 0) {
        throw new AppError(
            "Contact information not found or no changes made",
            404
        );
    }

    return {
        id,
        contact_type,
        title: title.trim(),
        value: value.trim(),
        status,
    };
};
