import db from "../config/db.js";

export const addBlogComment = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_add_blog_comment(?,?,?,?,?,?)",
        [
            data.blog_id,
            data.name,
            data.email,
            data.phone,
            data.comment,
            data.agree_terms,
        ]
    );

    return rows?.[0]?.[0];
};




export const updateBlogCommentStatus = async (id, status) => {
    const [rows] = await db.execute(
        "CALL sp_update_blog_comment_status(?,?)",
        [id, status]
    );

    return rows?.[0]?.[0];
};



export const getBlogCommentsByBlogId = async (blogId) => {
    const [rows] = await db.execute(
        "CALL sp_get_blog_comments_by_blog_id(?)",
        [blogId]
    );

    return rows?.[0] || [];
};
