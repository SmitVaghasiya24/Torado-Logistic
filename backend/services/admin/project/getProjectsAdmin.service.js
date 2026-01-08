import { getProjectsAdmin } from "../../../models/project.model.js";

export const getProjectsAdminService = async () => {
    const projects = await getProjectsAdmin();
    return projects;
};