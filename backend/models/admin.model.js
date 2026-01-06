import db from "../config/db.js";

export const adminSignupModel = async (data) => {
    const [rows] = await db.execute(
        "CALL sp_admin_signup(?,?,?,?,?)",
        [
            data.name,
            data.email,
            data.password,
            data.role,
            data.created_by || null
        ]
    );

    return rows?.[0]?.[0];
};



export const getPendingAdmins = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_pending_admins()"
    );

    return rows[0];
};



export const getAllAdmins = async () => {
    const [rows] = await db.execute(
        "CALL sp_get_all_admins()"
    );

    return rows[0];
};


export const adminLoginModel = async (email) => {
    const [rows] = await db.execute(
        "CALL sp_admin_login(?)",
        [email]
    );

    return rows?.[0]?.[0];
};




export const approveAdmin = async (adminId, updatedBy) => {
    const [result] = await db.execute(
        "CALL sp_approve_admin(?, ?)",
        [adminId, updatedBy]
    );

    return result;
};




export const rejectAdmin = async (adminId, reason, updatedBy) => {
    const [result] = await db.execute(
        "CALL sp_reject_admin(?, ?, ?)",
        [adminId, reason, updatedBy]
    );

    return result;
};



export const resubmitAdmin = async (adminId) => {
    const [result] = await db.execute(
        "CALL sp_resubmit_admin(?)",
        [adminId]
    );
    return result;
};
