import db from "../config/db.js";

export const addBlogCategoryModel = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_add_blog_category(?,?,?,?)",
        [
            data.name,
            data.slug,
            data.status,
            data.created_by,
        ]
    );

    return rows[0][0];
};


export const getBlogCategoriesAdmin = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_blog_categories_admin()"
    );

    return rows?.[0] || [];
};




export const updateBlogCategory = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_update_blog_category(?,?,?,?,?)",
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



export const deleteBlogCategory = async (id) => {
    const [rows] = await db.execute(
        "CALL sp_delete_blog_category(?)",
        [id]
    );

    return rows?.[0]?.[0];
};



export const updateBlogCategoryStatus = async (id, status, updatedBy) => {
    const [rows] = await db.execute(
        "CALL sp_update_blog_category_status(?,?,?)",
        [id, status, updatedBy || null]
    );

    return rows?.[0]?.[0];
};



export const getBlogCategoriesUser = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_blog_categories_user()"
    );

    return rows?.[0] || [];
};
