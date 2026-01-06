import { getAllRequestQuotes, updateRequestQuoteStatus } from "../../models/requestQuote.model.js";

export const getAllRequestQuotesController = async (req, res, next) => {
    try {
        const quotes = await getAllRequestQuotes();

        return res.status(200).json({
            success: true,
            count: quotes.length,
            data: quotes,
        });

    } catch (error) {
        next(error);
    }
};




export const updateRequestQuoteStatusController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const allowedStatus = ["pending", "contacted", "closed"];

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Quote ID is required",
            });
        }

        if (!status || !allowedStatus.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status value",
            });
        }

        const updatedBy = req.admin_id || null;

        await updateRequestQuoteStatus(id, status, updatedBy);

        return res.status(200).json({
            success: true,
            message: "Quote status updated successfully",
            id: Number(id),
            status,
        });

    } catch (error) {
        next(error);
    }
};
