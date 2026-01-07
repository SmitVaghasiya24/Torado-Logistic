import { getPageBySlug } from "../../../models/page.model.js";
import AppError from "../../../utils/AppError.js";

export const getPageBySlugService = async (slug) => {
    if (!slug || slug.trim() === "") {
        throw new AppError("Page slug is required", 400);
    }

    const page = await getPageBySlug(slug);

    if (!page) {
        throw new AppError("Page not found", 404);
    }

    return page;
};
