import { updateRequestQuoteStatus } from "../../../models/requestQuote.model.js";
import AppError from "../../../utils/AppError.js";

export const updateRequestQuoteStatusService = async (
    quoteId,
    status,
    updatedBy
) => {
    const allowedStatus = ["pending", "contacted", "closed"];

    if (!quoteId) {
        throw new AppError(
            "Quote ID is required",
            400
        );
    }

    if (!status || !allowedStatus.includes(status)) {
        throw new AppError(
            "Invalid status value",
            400
        );
    }

    const result = await updateRequestQuoteStatus(
        quoteId,
        status,
        updatedBy || null
    );

    if (!result) {
        throw new AppError(
            "Failed to update quote status",
            500
        );
    }

    return {
        id: Number(quoteId),
        status,
    };
};
