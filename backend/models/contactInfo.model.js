import db from "../config/db.js";

export const addContactInfo = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_add_contact_info(?,?,?,?,?)",
        [
            data.contact_type,
            data.title,
            data.value,
            data.status || "active",
            data.created_by || null,
        ]
    );

    return rows?.[0]?.[0];
};



export const getContactInfoAdmin = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_contact_info_admin()"
    );

    return rows?.[0] || [];
};

export const getActiveContactInfo = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_contact_info_user()"
    );

    return rows?.[0] || [];
};




export const updateContactInfo = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_update_contact_info(?,?,?,?,?,?)",
        [
            data.id,
            data.contact_type,
            data.title,
            data.value,
            data.status,
            data.updated_by || null,
        ]
    );

    return rows?.[0]?.[0];
};


export const updateContactInfoStatus = async (id, status, updatedBy) => {
    const [rows] = await db.execute(
        "CALL sp_update_contact_info_status(?,?,?)",
        [
            id,
            status,
            updatedBy || null,
        ]
    );

    return rows?.[0]?.[0];
};



export const deleteContactInfo = async (id, deletedBy) => {
    const [rows] = await db.execute(
        "CALL sp_delete_contact_info(?,?)",
        [
            id,
            deletedBy || null,
        ]
    );

    return rows?.[0]?.[0];
};
