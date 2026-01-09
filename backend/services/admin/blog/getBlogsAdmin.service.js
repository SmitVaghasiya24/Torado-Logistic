import { getBlogsAdmin } from "../../../models/blog.model.js";

export const getBlogsAdminService = async () => {
    const blogs = await getBlogsAdmin();

    return blogs.map((blog) => ({
        ...blog,
        tags: blog.tags
            ? blog.tags.split(", ").map((t) => t.trim())
            : [],
    }));
};
