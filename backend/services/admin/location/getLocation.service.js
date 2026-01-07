import { getLocationsAdmin } from "../../../models/location.model.js";

export const getLocationsAdminService = async () => {
    const data = await getLocationsAdmin();

    return data;
};
