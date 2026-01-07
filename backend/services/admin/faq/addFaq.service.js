import { addFaq } from "../../../models/faq.model.js";
import AppError from "../../../utils/AppError.js";

export const addFaqService = async (data, adminId) => {
    const { question, answer, status } = data;

    if (!question || question.trim() === "") {
        throw new AppError("Question is required", 400);
    }

    if (!answer || answer.trim() === "") {
        throw new AppError("Answer is required", 400);
    }

    const allowedStatus = ["active", "inactive"];
    if (status && !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    const result = await addFaq({
        question: question.trim(),
        answer: answer.trim(),
        status,
        created_by: adminId,
    });

    if (!result?.id) {
        throw new AppError("Failed to add FAQ", 500);
    }

    return {
        id: result.id,
        question,
        answer,
        status: status || "active",
    };
};
