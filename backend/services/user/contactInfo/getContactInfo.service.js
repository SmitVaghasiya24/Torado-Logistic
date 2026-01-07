import { getActiveContactInfo } from "../../../models/contactInfo.model.js";

export const getActiveContactInfoService = async () => {
    const data = await getActiveContactInfo();

    return data;
};
