import { getFaqsAdmin } from "../../../models/faq.model.js";

export const getFaqsAdminService = async () => {
    const data = await getFaqsAdmin();

    return data;
};
