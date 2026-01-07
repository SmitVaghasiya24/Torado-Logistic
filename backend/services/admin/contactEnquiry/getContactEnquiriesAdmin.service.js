import { getContactEnquiriesAdmin } from "../../../models/contactEnquiry.model.js";

export const getContactEnquiriesAdminService = async () => {
    const data = await getContactEnquiriesAdmin();

    return data;
};
