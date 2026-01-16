import { getServiceBySlug } from "../../../models/service.model.js";

export const getServiceBySlugService = async (slug) => {
    const service = await getServiceBySlug(slug);

    if (!service) {
        return null;
    }

    return service;
};
