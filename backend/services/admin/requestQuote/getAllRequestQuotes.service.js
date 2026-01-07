import { getAllRequestQuotes } from "../../../models/requestQuote.model.js";
import AppError from "../../../utils/AppError.js";

export const getAllRequestQuotesService = async () => {
    const quotes = await getAllRequestQuotes();

    if (!quotes) {
        throw new AppError(
            "Failed to fetch request quotes",
            500
        );
    }

    return quotes;
};
