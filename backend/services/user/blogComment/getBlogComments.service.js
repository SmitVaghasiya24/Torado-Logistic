import AppError from "../../../utils/AppError.js";
import { getBlogCommentsByBlogId } from "../../../models/blogComment.model.js";

export const getBlogCommentsByBlogIdService = async (blogId) => {
    if (!blogId) {
        throw new AppError("Blog ID is required", 400);
    }

    return await getBlogCommentsByBlogId(blogId);
};
