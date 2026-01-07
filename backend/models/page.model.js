import db from "../config/db.js";

export const addPage = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_add_page(?,?,?,?,?)",
        [
            data.slug,
            data.title,
            data.content,
            data.status || "active",
            data.created_by || null,
        ]
    );

    return rows?.[0]?.[0];
};



export const getPagesAdmin = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_pages_admin()"
    );

    return rows?.[0] || [];
};


export const getPageBySlug = async (slug) => {
    const [rows] = await db.execute(
        "CALL sp_get_page_by_slug(?)",
        [slug]
    );

    return rows?.[0]?.[0] || null;
};




export const updatePage = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_update_page(?,?,?,?,?)",
        [
            data.id,
            data.title,
            data.content,
            data.status,
            data.updated_by || null,
        ]
    );

    return rows?.[0]?.[0];
};




export const updatePageStatus = async (id, status, updatedBy) => {
    const [rows] = await db.execute(
        "CALL sp_update_page_status(?,?,?)",
        [
            id,
            status,
            updatedBy || null,
        ]
    );

    return rows?.[0]?.[0];
};



export const deletePage = async (id) => {
    const [rows] = await db.execute(
        "CALL sp_delete_page(?)",
        [id]
    );

    return rows?.[0]?.[0];
};
