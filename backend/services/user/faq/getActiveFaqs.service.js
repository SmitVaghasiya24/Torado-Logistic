import { getActiveFaqs } from "../../../models/faq.model.js";

export const getActiveFaqsService = async () => {
    const data = await getActiveFaqs();

    return data;
};
