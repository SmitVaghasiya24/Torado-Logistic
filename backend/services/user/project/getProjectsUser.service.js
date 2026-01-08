import { getProjectsUser } from "../../../models/project.model.js";

export const getProjectsUserService = async () => {
    const data = await getProjectsUser();
    return data;
};
