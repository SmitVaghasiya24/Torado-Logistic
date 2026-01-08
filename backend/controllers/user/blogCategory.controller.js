import { getBlogCategoriesUserService } from "../../services/user/blogCategory/index.js";

export const getBlogCategoriesUserController = async (req, res, next) => {
    try {
        const categories = await getBlogCategoriesUserService();

        res.status(200).json({
            success: true,
            count: categories.length,
            data: categories,
        });
    } catch (error) {
        next(error);
    }
};
