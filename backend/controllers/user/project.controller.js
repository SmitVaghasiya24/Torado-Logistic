import { getProjectsUserService, getProjectBySlugService } from "../../services/user/project/index.js";

export const getProjectsUserController = async (req, res, next) => {
    try {
        const projects = await getProjectsUserService();

        const data = projects.map((item) => ({
            ...item,
            thumbnail: item.thumbnail
                ? `${req.protocol}://${req.get("host")}/${item.thumbnail}`
                : null,
        }));

        res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    } catch (error) {
        next(error);
    }
};



export const getProjectBySlugController = async (req, res, next) => {
    try {
        const { slug } = req.params;

        const project = await getProjectBySlugService(slug);

        res.status(200).json({
            success: true,
            data: {
                ...project,
                thumbnail: project.thumbnail
                    ? `${req.protocol}://${req.get("host")}/${project.thumbnail}`
                    : null,
            },
        });
    } catch (error) {
        next(error);
    }
};
