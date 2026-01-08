import db from "../config/db.js";

export const addBlogTag = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_add_blog_tag(?,?,?,?)",
        [
            data.name,
            data.slug,
            data.status || "active",
            data.created_by || null,
        ]
    );

    return rows?.[0]?.[0];
};



export const getBlogTagsAdmin = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_blog_tags_admin()"
    );

    return rows?.[0] || [];
};


export const updateBlogTag = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_update_blog_tag(?,?,?,?,?)",
        [
            data.id,
            data.name,
            data.slug,
            data.status,
            data.updated_by || null,
        ]
    );

    return rows?.[0]?.[0];
};



export const deleteBlogTag = async (id) => {
    const [rows] = await db.execute(
        "CALL sp_delete_blog_tag(?)",
        [id]
    );

    return rows?.[0]?.[0];
};




export const updateBlogTagStatus = async (id, status, updatedBy) => {
    const [rows] = await db.execute(
        "CALL sp_update_blog_tag_status(?,?,?)",
        [id, status, updatedBy || null]
    );

    return rows?.[0]?.[0];
};




export const getBlogTagsUser = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_blog_tags_user()"
    );

    return rows?.[0] || [];
};
