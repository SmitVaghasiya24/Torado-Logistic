import db from "../config/db.js";

export const addContactEnquiry = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_add_contact_enquiry(?,?,?,?,?,?)",
        [
            data.name,
            data.email,
            data.phone || null,
            data.message,
            data.agree_terms,
            data.created_by || null,
        ]
    );

    return rows?.[0]?.[0];
};



export const getContactEnquiriesAdmin = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_contact_enquiries_admin()"
    );

    return rows?.[0] || [];
};





export const updateContactEnquiryStatus = async (id, status, updatedBy) => {
    const [rows] = await db.execute(
        "CALL sp_update_contact_enquiry_status(?,?,?)",
        [
            id,
            status,
            updatedBy || null,
        ]
    );

    return rows?.[0]?.[0];
};
