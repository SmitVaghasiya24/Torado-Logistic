import { getActiveLocations } from "../../../models/location.model.js";

export const getActiveLocationsService = async () => {
    const data = await getActiveLocations();

    return data;
};