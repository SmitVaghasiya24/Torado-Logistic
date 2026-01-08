import { getBlogCategoriesAdmin } from "../../../models/blogCategory.model.js";

export const getBlogCategoriesAdminService = async () => {
    return await getBlogCategoriesAdmin();
};
