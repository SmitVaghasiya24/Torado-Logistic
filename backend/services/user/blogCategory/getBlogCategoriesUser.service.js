import { getBlogCategoriesUser } from "../../../models/blogCategory.model.js";

export const getBlogCategoriesUserService = async () => {
    return await getBlogCategoriesUser();
};
