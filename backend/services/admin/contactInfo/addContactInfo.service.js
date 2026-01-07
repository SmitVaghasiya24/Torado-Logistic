import { addContactInfo } from "../../../models/contactInfo.model.js";
import AppError from "../../../utils/AppError.js";

export const addContactInfoService = async (data, adminId) => {
    const { contact_type, title, value, status } = data;

    const allowedTypes = ["call", "email"];
    const allowedStatus = ["active", "inactive", "draft"];

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

    if (status && !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    const result = await addContactInfo({
        contact_type,
        title: title.trim(),
        value: value.trim(),
        status,
        created_by: adminId,
    });

    if (!result?.id) {
        throw new AppError(
            "Failed to add contact information",
            500
        );
    }

    return {
        id: result.id,
        contact_type,
        title: title.trim(),
        value: value.trim(),
        status: status || "active",
    };
};
