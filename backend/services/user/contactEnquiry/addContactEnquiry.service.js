import { addContactEnquiry } from "../../../models/contactEnquiry.model.js";
import AppError from "../../../utils/AppError.js";

export const addContactEnquiryService = async (data) => {
    const { name, email, phone, message, agree_terms } = data;

    if (!name || name.trim() === "") {
        throw new AppError("Name is required", 400);
    }

    if (!email || email.trim() === "") {
        throw new AppError("Email is required", 400);
    }

    if (!message || message.trim() === "") {
        throw new AppError("Message is required", 400);
    }

    if (!agree_terms) {
        throw new AppError("You must agree to Terms & Conditions", 400);
    }

    const result = await addContactEnquiry({
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        message: message.trim(),
        agree_terms: agree_terms ? 1 : 0,
        created_by: null,
    });

    if (!result?.id) {
        throw new AppError("Failed to submit enquiry", 500);
    }

    return {
        id: result.id,
        name,
        email,
        phone,
        message,
        status: "new",
    };
};
