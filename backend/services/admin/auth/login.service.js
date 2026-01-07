import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { adminLoginModel } from "../../../models/admin.model.js";
import AppError from "../../../utils/AppError.js";

export const adminLoginService = async (data) => {
    const { email, password } = data;

    if (!email || !password) {
        throw new AppError("Email and password are required", 400);
    }

    const admin = await adminLoginModel(email);

    if (!admin) {
        throw new AppError("Invalid email or password", 401);
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        throw new AppError("Invalid password", 401);
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

        return {
            success: false,
            statusCode: 200,
            message: "Your account has been rejected",
            reason: admin.rejection_reason,
            token,
        };
    }

    if (admin.status === "pending") {
        throw new AppError("Your account is pending approval", 403);
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

    return {
        success: true,
        statusCode: 200,
        message: "Login successful",
        token,
        admin: {
            admin_id: admin.admin_id,
            name: admin.name,
            email: admin.email,
            role: admin.role,
        },
    };
};
