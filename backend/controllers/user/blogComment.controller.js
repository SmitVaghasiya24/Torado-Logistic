import { addBlogCommentService ,getBlogCommentsByBlogIdService} from "../../services/user/blogComment/index.js";

export const addBlogCommentController = async (req, res, next) => {
    try {
        const result = await addBlogCommentService(req.body);

        res.status(201).json({
            success: true,
            message: "Comment submitted successfully and awaiting approval",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const getBlogCommentsByBlogIdController = async (req, res, next) => {
    try {
        const { blogId } = req.params;

        const comments = await getBlogCommentsByBlogIdService(
            Number(blogId)
        );

        res.status(200).json({
            success: true,
            data: comments,
        });
    } catch (error) {
        next(error);
    }
};
