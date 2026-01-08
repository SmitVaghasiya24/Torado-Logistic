import db from "../config/db.js";

export const addProject = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_add_project(?,?,?,?,?,?,?,?)",
        [
            data.title,
            data.slug,
            data.short_description,
            data.thumbnail,
            data.duration || null,
            data.budget || null,
            data.status || "active",
            data.created_by || null,
        ]
    );

    return rows?.[0]?.[0];
};



export const getProjectsAdmin = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_projects_admin()"
    );

    return rows?.[0] || [];
};


export const getProjectById = async (id) => {
    const [rows] = await db.execute(
        "SELECT thumbnail FROM tbl_projects WHERE id = ? LIMIT 1",
        [id]
    );

    return rows?.[0] || null;
};



export const updateProject = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_update_project(?,?,?,?,?,?,?,?,?)",
        [
            data.id,
            data.title,
            data.slug,
            data.short_description,
            data.thumbnail,
            data.duration,
            data.budget,
            data.status,
            data.updated_by,
        ]
    );

    return rows?.[0]?.[0];
};





export const deleteProject = async (id) => {
    const [rows] = await db.execute(
        "CALL sp_delete_project(?)",
        [id]
    );

    return rows?.[0]?.[0];
};



export const updateProjectStatus = async (id, status, updatedBy) => {
    const [rows] = await db.execute(
        "CALL sp_update_project_status(?,?,?)",
        [id, status, updatedBy || null]
    );

    return rows?.[0]?.[0];
};




export const getProjectsUser = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_projects_user()"
    );

    return rows?.[0] || [];
};


export const getProjectBySlug = async (slug) => {
    const [rows] = await db.execute(
        "CALL sp_get_project_by_slug(?)",
        [slug]
    );

    return rows?.[0]?.[0] || null;
};
