import { updateRequestQuoteStatusService, getAllRequestQuotesService } from "../../services/admin/requestQuote/index.js";

export const getAllRequestQuotesController = async (req, res, next) => {
    try {
        const quotes = await getAllRequestQuotesService();

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
        const updatedBy = req.admin_id || null;

        const result = await updateRequestQuoteStatusService(
            id,
            status,
            updatedBy
        );

        return res.status(200).json({
            success: true,
            message: "Quote status updated successfully",
            id: result.id,
            status: result.status,
        });

    } catch (error) {
        next(error);
    }
};