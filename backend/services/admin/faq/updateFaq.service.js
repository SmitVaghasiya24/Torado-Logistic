import { updateFaq } from "../../../models/faq.model.js";
import AppError from "../../../utils/AppError.js";

export const updateFaqService = async (id, data, adminId) => {
    const { question, answer, status } = data;

    if (!id) {
        throw new AppError("FAQ ID is required", 400);
    }

    if (!question || question.trim() === "") {
        throw new AppError("Question is required", 400);
    }

    if (!answer || answer.trim() === "") {
        throw new AppError("Answer is required", 400);
    }

    const allowedStatus = ["active", "inactive"];
    if (!status || !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    const result = await updateFaq({
        id,
        question: question.trim(),
        answer: answer.trim(),
        status,
        updated_by: adminId,
    });

    if (!result || result.affectedRows === 0) {
        throw new AppError(
            "FAQ not found or no changes made",
            404
        );
    }

    return {
        id,
        question,
        answer,
        status,
    };
};
