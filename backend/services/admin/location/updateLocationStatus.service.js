import { updateLocationStatus } from "../../../models/location.model.js";
import AppError from "../../../utils/AppError.js";

export const updateLocationStatusService = async (id, status, adminId) => {
    const allowedStatus = ["active", "inactive"];

    if (!id) {
        throw new AppError("Location ID is required", 400);
    }

    if (!status || !allowedStatus.includes(status)) {
        throw new AppError(
            "Invalid status value. Allowed: active, inactive",
            400
        );
    }

    const result = await updateLocationStatus(
        id,
        status,
        adminId
    );

    if (!result || result.affectedRows === 0) {
        throw new AppError(
            "Location not found",
            404
        );
    }

    return {
        id,
        status,
    };
};
