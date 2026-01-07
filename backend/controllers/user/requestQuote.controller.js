import { createRequestQuoteService } 
from "../../services/user/requestQuote/index.js";

export const createRequestQuoteController = async (req, res, next) => {
    try {
        await createRequestQuoteService({
            ...req.body,
            created_by: null, 
        });

        return res.status(201).json({
            success: true,
            message: "Quote request submitted successfully",
        });

    } catch (error) {
        next(error);
    }
};
