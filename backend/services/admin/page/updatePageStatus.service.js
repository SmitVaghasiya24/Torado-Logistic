import { updatePageStatus } from "../../../models/page.model.js";
import AppError from "../../../utils/AppError.js";

export const updatePageStatusService = async (id, status, adminId) => {
    const allowedStatus = ["active", "inactive"];

    if (!id) {
        throw new AppError("Page ID is required", 400);
    }

    if (!status || !allowedStatus.includes(status)) {
        throw new AppError(
            "Invalid status value. Allowed: active, inactive",
            400
        );
    }

    const result = await updatePageStatus(
        id,
        status,
        adminId
    );

    if (!result || result.affectedRows === 0) {
        throw new AppError(
            "Page not found",
            404
        );
    }

    return {
        id,
        status,
    };
};
