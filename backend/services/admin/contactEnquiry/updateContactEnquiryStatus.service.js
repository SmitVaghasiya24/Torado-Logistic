import { updateContactEnquiryStatus } from "../../../models/contactEnquiry.model.js";
import AppError from "../../../utils/AppError.js";

export const updateContactEnquiryStatusService = async (id, status, adminId) => {
    const allowedStatus = ["new", "read", "replied", "closed"];

    if (!id) {
        throw new AppError("Enquiry ID is required", 400);
    }

    if (!status || !allowedStatus.includes(status)) {
        throw new AppError(
            "Invalid status value. Allowed: new, read, replied, closed",
            400
        );
    }

    const result = await updateContactEnquiryStatus(
        id,
        status,
        adminId
    );

    if (!result || result.affectedRows === 0) {
        throw new AppError(
            "Contact enquiry not found",
            404
        );
    }

    return {
        id,
        status,
    };
};
