import { deleteFaq } from "../../../models/faq.model.js";
import AppError from "../../../utils/AppError.js";

export const deleteFaqService = async (id, adminId) => {
    if (!id) {
        throw new AppError("FAQ ID is required", 400);
    }

    const result = await deleteFaq(id, adminId);

    if (!result || result.affectedRows === 0) {
        throw new AppError(
            "FAQ not found",
            404
        );
    }

    return {
        id,
        deleted: true,
    };
};
