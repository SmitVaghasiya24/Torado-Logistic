import AppError from "../../../utils/AppError.js";
import { updateBlogCommentStatus } from "../../../models/blogComment.model.js";

export const updateBlogCommentStatusService = async (id, status) => {
    const allowedStatus = [
        "pending",
        "approved",
        "rejected",
        "spam",
    ];

    if (!id) {
        throw new AppError("Comment ID is required", 400);
    }

    if (!status || !allowedStatus.includes(status)) {
        throw new AppError(
            "Invalid status value",
            400
        );
    }

    const result = await updateBlogCommentStatus(id, status);

    if (!result || result.affectedRows === 0) {
        throw new AppError("Comment not found", 404);
    }

    return {
        id,
        status,
    };
};
