import db from "../config/db.js";

export const addLocation = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_add_location(?,?,?,?,?,?,?,?,?,?)",
        [
            data.country,
            data.city,
            data.heading,
            data.description || null,
            data.phone,
            data.address_line,
            data.latitude || null,
            data.longitude || null,
            data.status || "active",
            data.created_by || null,
        ]
    );

    return rows?.[0]?.[0];
};




export const getLocationsAdmin = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_locations_admin()"
    );

    return rows?.[0] || [];
};



export const getActiveLocations = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_active_locations()"
    );

    return rows?.[0] || [];
};




export const updateLocation = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_update_location(?,?,?,?,?,?,?,?,?,?,?)",
        [
            data.id,
            data.country,
            data.city,
            data.heading,
            data.description || null,
            data.phone,
            data.address_line,
            data.latitude || null,
            data.longitude || null,
            data.status,
            data.updated_by || null,
        ]
    );

    return rows?.[0]?.[0];
};



export const updateLocationStatus = async (id, status, updatedBy) => {
    const [rows] = await db.execute(
        "CALL sp_update_location_status(?,?,?)",
        [
            id,
            status,
            updatedBy || null,
        ]
    );

    return rows?.[0]?.[0];
};



export const deleteLocation = async (id, deletedBy) => {
    const [rows] = await db.execute(
        "CALL sp_delete_location(?,?)",
        [
            id,
            deletedBy || null,
        ]
    );

    return rows?.[0]?.[0];
};
