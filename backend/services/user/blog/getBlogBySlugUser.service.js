import AppError from "../../../utils/AppError.js";
import { getBlogBySlugUser } from "../../../models/blog.model.js";

export const getBlogBySlugUserService = async (slug) => {
    if (!slug) {
        throw new AppError("Blog slug is required", 400);
    }

    const blog = await getBlogBySlugUser(slug);

    if (!blog) {
        throw new AppError("Blog not found", 404);
    }

    return {
        ...blog,
        tags: blog.tags
            ? blog.tags.split(", ").map((t) => t.trim())
            : [],
    };
};
