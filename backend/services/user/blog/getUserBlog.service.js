import {
    getBlogsUserPaginated,
    getBlogsUserCount,
} from "../../../models/blog.model.js";

export const getBlogsUserService = async (page = 1, limit = 10) => {
    const currentPage = Number(page) > 0 ? Number(page) : 1;
    const pageLimit = Number(limit) > 0 ? Number(limit) : 10;

    const offset = (currentPage - 1) * pageLimit;

    const [blogs, total] = await Promise.all([
        getBlogsUserPaginated(pageLimit, offset),
        getBlogsUserCount(),
    ]);

    return {
        blogs,
        pagination: {
            total,
            page: currentPage,
            limit: pageLimit,
            totalPages: Math.ceil(total / pageLimit),
        },
    };
};
