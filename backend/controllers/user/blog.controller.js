import { getBlogsUserService,getBlogBySlugUserService } from "../../services/user/blog/inedx.js";

export const getBlogsUserController = async (req, res, next) => {
    try {
        const { page, limit } = req.query;

        const result = await getBlogsUserService(page, limit);

        const blogs = result.blogs.map((blog) => ({
            ...blog,
            thumbnail: blog.thumbnail
                ? `${req.protocol}://${req.get("host")}/${blog.thumbnail}`
                : null,
        }));

        res.status(200).json({
            success: true,
            pagination: result.pagination,
            data: blogs,
        });
    } catch (error) {
        next(error);
    }
};




export const getBlogBySlugUserController = async (req, res, next) => {
    try {
        const { slug } = req.params;

        const blog = await getBlogBySlugUserService(slug);

        res.status(200).json({
            success: true,
            data: {
                ...blog,
                thumbnail: blog.thumbnail
                    ? `${req.protocol}://${req.get("host")}/${blog.thumbnail}`
                    : null,
            },
        });
    } catch (error) {
        next(error);
    }
};
