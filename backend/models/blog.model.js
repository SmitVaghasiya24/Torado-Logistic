import db from "../config/db.js";

export const addBlog = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_add_blog(?,?,?,?,?,?,?,?,?,?)",
        [
            data.title,
            data.slug,
            data.short_description,
            data.content,
            data.published_date,
            data.thumbnail,
            data.category_id,
            data.author,
            data.status || "active",
            data.created_by || null,
        ]
    );

    return rows?.[0]?.[0];
};




export const getBlogsAdmin = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_blogs_admin()"
    );

    return rows?.[0] || [];
};



export const getBlogThumbnailById = async (id) => {
    const [rows] = await db.execute(
        `SELECT thumbnail FROM tbl_blogs WHERE id = ? LIMIT 1`,
        [id]
    );

    return rows?.[0] || null;
};


export const updateBlog = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_update_blog(?,?,?,?,?,?,?,?,?,?,?)",
        [
            data.id,
            data.title,
            data.slug,
            data.short_description,
            data.content,
            data.published_date,
            data.thumbnail,
            data.category_id,
            data.author,
            data.status,
            data.updated_by,
        ]
    );

    return rows?.[0]?.[0];
};


export const deleteBlog = async (id) => {
    const [rows] = await db.execute(
        "CALL sp_delete_blog(?)",
        [id]
    );

    return rows?.[0]?.[0];
};




export const updateBlogStatus = async (id, status, updatedBy) => {
    const [rows] = await db.execute(
        "CALL sp_update_blog_status(?,?,?)",
        [id, status, updatedBy]
    );

    return rows?.[0]?.[0];
};



export const getBlogsUserPaginated = async (limit, offset) => {
    const [rows] = await db.execute(
        "CALL sp_get_blogs_user_paginated(?,?)",
        [limit, offset]
    );

    return rows?.[0] || [];
};

export const getBlogsUserCount = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_blogs_user_count()"
    );

    return rows?.[0]?.[0]?.total || 0;
};


export const getBlogBySlugUser = async (slug) => {
    const [rows] = await db.execute(
        "CALL sp_get_blog_by_slug_user(?)",
        [slug]
    );

    return rows?.[0]?.[0] || null;
};