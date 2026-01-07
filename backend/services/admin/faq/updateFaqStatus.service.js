import { updateFaqStatus } from "../../../models/faq.model.js";
import AppError from "../../../utils/AppError.js";

export const updateFaqStatusService = async (id, status, adminId) => {
    const allowedStatus = ["active", "inactive"];

    if (!id) {
        throw new AppError("FAQ ID is required", 400);
    }

    if (!status || !allowedStatus.includes(status)) {
        throw new AppError(
            "Invalid status value. Allowed: active, inactive",
            400
        );
    }

    const result = await updateFaqStatus(
        id,
        status,
        adminId
    );

    if (!result || result.affectedRows === 0) {
        throw new AppError(
            "FAQ not found",
            404
        );
    }

    return {
        id,
        status,
    };
};
