import bcrypt from "bcryptjs";
import { adminSignupModel, getPendingAdmins, getAllAdmins, adminLoginModel, approveAdmin, rejectAdmin, resubmitAdmin } from "../../models/admin.model.js";
import jwt from "jsonwebtoken";

export const adminSignupController = async (req, res, next) => {
    try {
        const { name, email, password, role, created_by } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email, and password are required",
            });
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                success: false,
                message:
                    "Password must be at least 6 characters, include one uppercase letter and one special character",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const finalRole = role || "admin";

        const result = await adminSignupModel({
            name,
            email,
            password: hashedPassword,
            role: finalRole,
            created_by: created_by || null,
        });

        if (!result || !result.admin_id) {
            return res.status(500).json({
                success: false,
                message: "Admin created but data not returned",
            });
        }

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
        const admins = await getPendingAdmins();

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
        const admins = await getAllAdmins();

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
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        const admin = await adminLoginModel(email);

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password",
            });
        }


        if (admin.status === "rejected") {
            const token = jwt.sign(
                {
                    admin_id: admin.admin_id,
                    role: admin.role,
                    status: admin.status,
                    scope: "resubmit_only",
                },
                process.env.JWT_SECRET,
                { expiresIn: "15m" }
            );

            return res.status(200).json({
                success: false,
                message: "Your account has been rejected",
                reason: admin.rejection_reason,
                token,
            });
        }

        if (admin.status === "pending") {
            return res.status(403).json({
                success: false,
                message: "Your account is pending approval",
            });
        }

        const token = jwt.sign(
            {
                admin_id: admin.admin_id,
                role: admin.role,
                status: admin.status,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            admin: {
                admin_id: admin.admin_id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
            },
        });


    } catch (error) {
        next(error);
    }
};





export const approveAdminController = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Admin ID is required",
            });
        }

        const updatedBy = req.admin_id;

        await approveAdmin(id, updatedBy);

        return res.status(200).json({
            success: true,
            message: "Admin approved successfully",
            admin_id: Number(id),
        });

    } catch (error) {
        next(error);
    }
};




export const rejectAdminController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { reason } = req.body;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Admin ID is required",
            });
        }

        if (!reason || reason.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Rejection reason is required",
            });
        }

        const updatedBy = req.admin_id;

        await rejectAdmin(id, reason.trim(), updatedBy);

        return res.status(200).json({
            success: true,
            message: "Admin rejected successfully",
            admin_id: Number(id),
            reason: reason.trim(),
        });

    } catch (error) {
        next(error);
    }
};



export const resubmitAdminController = async (req, res, next) => {
    try {
        const adminId = req.admin_id;

        if (!adminId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        await resubmitAdmin(adminId);

        return res.status(200).json({
            success: true,
            message: "Profile re-submitted successfully. Waiting for approval.",
        });

    } catch (error) {
        next(error);
    }
};
