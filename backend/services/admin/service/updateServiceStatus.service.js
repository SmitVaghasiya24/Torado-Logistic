import AppError from "../../../utils/AppError.js";
import { updateServiceStatus } from "../../../models/service.model.js";

export const updateServiceStatusService = async (id, status, adminId) => {
    const allowedStatus = ["active", "inactive"];

    if (!id) {
        throw new AppError("Service ID is required", 400);
    }

    if (!status || !allowedStatus.includes(status)) {
        throw new AppError(
            "Invalid status value. Allowed: active, inactive",
            400
        );
    }

    const result = await updateServiceStatus(
        id,
        status,
        adminId
    );

    if (!result || result.affectedRows === 0) {
        throw new AppError("Service not found", 404);
    }

    return {
        id,
        status,
    };
};
