import { getBlogTagsUserService } from "../../services/user/blogTag/index.js";

export const getBlogTagsUserController = async (req, res, next) => {
    try {
        const tags = await getBlogTagsUserService();

        res.status(200).json({
            success: true,
            count: tags.length,
            data: tags,
        });
    } catch (error) {
        next(error);
    }
}; 