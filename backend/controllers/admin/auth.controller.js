import { adminSignupService, adminLoginService } from "../../services/admin/auth/index.js";
import { getPendingAdminsService, getAllAdminsService } from "../../services/admin/fetch/index.js";
import { approveAdminService, rejectAdminService, resubmitAdminService } from "../../services/admin/approval/index.js";



export const adminSignupController = async (req, res, next) => {
    try {
        const result = await adminSignupService(req.body);

        return res.status(201).json({
            success: true,
            message:
                result.status === "approved"
                    ? "Superadmin registered successfully. Full access granted."
                    : `${result.role} registered successfully. Waiting for superadmin approval.`,
            admin: {
                admin_id: result.admin_id,
                name: result.name,
                email: result.email,
                role: result.role,
                status: result.status,
            },
        });

    } catch (error) {
        next(error);
    }
};



export const getPendingAdminsController = async (req, res, next) => {
    try {
        const admins = await getPendingAdminsService();

        return res.status(200).json({
            success: true,
            count: admins.length,
            data: admins,
        });
    } catch (error) {
        next(error);
    }
};



export const getAllAdminsController = async (req, res, next) => {
    try {
        const admins = await getAllAdminsService();

        return res.status(200).json({
            success: true,
            count: admins.length,
            data: admins,
        });
    } catch (error) {
        next(error);
    }
};



export const adminLoginController = async (req, res, next) => {
    try {
        const result = await adminLoginService(req.body);

        return res.status(result.statusCode).json(result);

    } catch (error) {
        next(error);
    }
};




export const approveAdminController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedBy = req.admin_id;

        const result = await approveAdminService(id, updatedBy);

        return res.status(200).json({
            success: true,
            message: "Admin approved successfully",
            admin_id: result.admin_id,
        });

    } catch (error) {
        next(error);
        console.log(error);

    }
};




export const rejectAdminController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { reason } = req.body;
        const updatedBy = req.admin_id;

        const result = await rejectAdminService(
            id,
            reason,
            updatedBy
        );

        return res.status(200).json({
            success: true,
            message: "Admin rejected successfully",
            admin_id: result.admin_id,
            reason: result.reason,
        });

    } catch (error) {
        next(error);
    }
};

export const resubmitAdminController = async (req, res, next) => {
    try {
        const adminId = req.admin_id;

        await resubmitAdminService(adminId);

        return res.status(200).json({
            success: true,
            message: "Profile re-submitted successfully. Waiting for approval.",
        });

    } catch (error) {
        next(error);
    }
};