import { getBlogTagsUser } from "../../../models/blogTag.model.js";

export const getBlogTagsUserService = async () => {
    return await getBlogTagsUser();
};
