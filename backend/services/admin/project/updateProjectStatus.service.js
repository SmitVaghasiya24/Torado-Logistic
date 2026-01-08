import { updateProjectStatus } from "../../../models/project.model.js";
import AppError from "../../../utils/AppError.js";

export const updateProjectStatusService = async (id, status, adminId) => {
    const allowedStatus = ["active", "inactive"];

    if (!id) {
        throw new AppError("Project ID is required", 400);
    }

    if (!status || !allowedStatus.includes(status)) {
        throw new AppError(
            "Invalid status value. Allowed: active, inactive",
            400
        );
    }

    const result = await updateProjectStatus(
        id,
        status,
        adminId
    );

    if (!result || result.affectedRows === 0) {
        throw new AppError("Project not found", 404);
    }

    return {
        id,
        status,
    };
};
