import AppError from "../../../utils/AppError.js";
import { getProjectBySlug } from "../../../models/project.model.js";

export const getProjectBySlugService = async (slug) => {
    if (!slug || slug.trim() === "") {
        throw new AppError("Project slug is required", 400);
    }

    const project = await getProjectBySlug(slug);

    if (!project) {
        throw new AppError("Project not found", 404);
    }

    return project;
};
