import { deleteProject } from "../../../models/project.model.js";
import AppError from "../../../utils/AppError.js";

export const deleteProjectService = async (id) => {
    if (!id) {
        throw new AppError("Project ID is required", 400);
    }

    const result = await deleteProject(id);

    if (!result || result.affectedRows === 0) {
        throw new AppError("Project not found", 404);
    }

    return {
        id,
        deleted: true,
    };
};
