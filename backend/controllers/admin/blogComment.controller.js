import { updateBlogCommentStatusService } from "../../services/admin/blogComment/index.js";

export const updateBlogCommentStatusController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const result = await updateBlogCommentStatusService(
            Number(id),
            status
        );

        res.status(200).json({
            success: true,
            message: "Comment status updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
