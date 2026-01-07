import db from "../config/db.js";

export const addFaq = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_add_faq(?,?,?,?)",
        [
            data.question,
            data.answer,
            data.status || "active",
            data.created_by || null,
        ]
    );

    return rows?.[0]?.[0];
};


export const getFaqsAdmin = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_faqs_admin()"
    );

    return rows?.[0] || [];
};



export const getActiveFaqs = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_active_faqs()"
    );

    return rows?.[0] || [];
};


export const updateFaq = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_update_faq(?,?,?,?,?)",
        [
            data.id,
            data.question,
            data.answer,
            data.status,
            data.updated_by || null,
        ]
    );

    return rows?.[0]?.[0];
};


export const updateFaqStatus = async (id, status, updatedBy) => {
    const [rows] = await db.execute(
        "CALL sp_update_faq_status(?,?,?)",
        [
            id,
            status,
            updatedBy || null,
        ]
    );

    return rows?.[0]?.[0];
};




export const deleteFaq = async (id, deletedBy) => {
    const [rows] = await db.execute(
        "CALL sp_delete_faq(?,?)",
        [
            id,
            deletedBy || null,
        ]
    );

    return rows?.[0]?.[0];
};
