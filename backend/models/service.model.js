import db from "../config/db.js";

export const addService = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_add_service(?,?,?,?,?,?,?,?)",
        [
            data.title,
            data.slug,
            data.short_description,
            data.description,
            data.banner_image || null,
            data.thumbnail || null,
            data.status || "active",
            data.created_by || null,
        ]
    );

    return rows?.[0]?.[0];
};



export const getServicesAdmin = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_services_admin()"
    );

    return rows?.[0] || [];
};

export const getServiceById = async (id) => {
    const [rows] = await db.execute(
        `SELECT 
            id,
            banner_image,thumbnail
             FROM tbl_services WHERE id = ? LIMIT 1`,
        [id]
    );

    return rows?.[0] || null;
};



export const updateService = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_update_service(?,?,?,?,?,?,?,?,?)",
        [
            data.id,
            data.title,
            data.slug,
            data.short_description,
            data.description,
            data.banner_image,
            data.thumbnail,
            data.status,
            data.updated_by || null,
        ]
    );

    return rows?.[0]?.[0];
};


export const deleteService = async (id) => {
    const [rows] = await db.execute(
        "CALL sp_delete_service(?)",
        [id]
    );

    return rows?.[0]?.[0];
};



export const updateServiceStatus = async (id, status, updatedBy) => {
    const [rows] = await db.execute(
        "CALL sp_update_service_status(?,?,?)",
        [id, status, updatedBy || null]
    );

    return rows?.[0]?.[0];
};



export const getServicesUser = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_services_user()"
    );

    return rows?.[0] || [];
};



export const getServiceBySlug = async (slug) => {
    const [rows] = await db.execute(
        "CALL sp_get_service_by_slug(?)",
        [slug]
    );

    return rows?.[0]?.[0] || null;
};