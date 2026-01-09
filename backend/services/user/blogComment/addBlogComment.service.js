import AppError from "../../../utils/AppError.js";
import { addBlogComment } from "../../../models/blogComment.model.js";

export const addBlogCommentService = async (data) => {
    const {
        blog_id,
        name,
        email,
        phone,
        comment,
        agree_terms,
    } = data;

    if (!blog_id) {
        throw new AppError("Blog ID is required", 400);
    }

    if (!name?.trim()) {
        throw new AppError("Name is required", 400);
    }

    if (!email?.trim()) {
        throw new AppError("Email is required", 400);
    }

    if (!comment?.trim()) {
        throw new AppError("Comment is required", 400);
    }

    if (!agree_terms) {
        throw new AppError("You must agree to the terms", 400);
    }

    const result = await addBlogComment({
        blog_id,
        name: name.trim(),
        email: email.trim(),
        phone: phone || null,
        comment: comment.trim(),
        agree_terms: agree_terms ? 1 : 0,
    });

    if (!result?.id) {
        throw new AppError("Failed to submit comment", 500);
    }

    return {
        id: result.id,
        status: "pending",
    };
};
