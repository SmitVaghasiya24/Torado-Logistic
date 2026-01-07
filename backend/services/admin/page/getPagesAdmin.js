import { getPagesAdmin } from "../../../models/page.model.js";

export const getPagesAdminService = async () => {
    const pages = await getPagesAdmin();

    return pages;
};
