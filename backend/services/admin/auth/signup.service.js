import bcrypt from "bcrypt";
import { adminSignupModel } from "../../../models/admin.model.js";
import AppError from "../../../utils/AppError.js";

export const adminSignupService = async (data) => {
    const { name, email, password, role, created_by } = data;

    if (!name || !email || !password) {
        throw new AppError(
            "Name, email, and password are required",
            400
        );
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordRegex.test(password)) {
        throw new AppError(
            "Password must be at least 6 characters, include one uppercase letter and one special character",
            400
        );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const finalRole = role || "admin";

    try {
        const result = await adminSignupModel({
            name,
            email,
            password: hashedPassword,
            role: finalRole,
            created_by: created_by || null,
        });

        if (!result || !result.admin_id) {
            throw new AppError(
                "Admin created but data not returned",
                500
            );
        }

        return result;

    } catch (error) {

        if (error.sqlState === "45000") {
            throw new AppError(
                error.message || "Email already registered",
                400
            );
        }

        if (error.code === "ER_DUP_ENTRY") {
            throw new AppError(
                "Email already registered",
                400
            );
        }

        throw error;
    }
};
