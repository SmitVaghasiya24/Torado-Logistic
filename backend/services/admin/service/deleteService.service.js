import AppError from "../../../utils/AppError.js";
import { deleteService, getServiceById } from "../../../models/service.model.js";

export const deleteServiceService = async (id) => {
    if (!id) {
        throw new AppError("Service ID is required", 400);
    }

    const existing = await getServiceById(id);
    if (!existing) {
        throw new AppError("Service not found", 404);
    }

    const result = await deleteService(id);

    if (!result || result.affectedRows === 0) {
        throw new AppError("Failed to delete service", 500);
    }

    return {
        id,
        banner_image: existing.banner_image,
        thumbnail: existing.thumbnail,
    };
};
