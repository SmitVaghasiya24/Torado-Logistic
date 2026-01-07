import { deleteLocation } from "../../../models/location.model.js";
import AppError from "../../../utils/AppError.js";

export const deleteLocationService = async (id, adminId) => {
    if (!id) {
        throw new AppError("Location ID is required", 400);
    }

    const result = await deleteLocation(id, adminId);

    if (!result || result.affectedRows === 0) {
        throw new AppError(
            "Location not found",
            404
        );
    }

    return {
        id,
        deleted: true,
    };
};
