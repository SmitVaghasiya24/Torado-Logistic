import { getBlogTagsAdmin } from "../../../models/blogTag.model.js";

export const getBlogTagsAdminService = async () => {
    return await getBlogTagsAdmin();
};
