import { getActiveFaqsService } from "../../services/user/faq/index.js";

export const getActiveFaqsController = async (req, res, next) => {
    try {
        const data = await getActiveFaqsService();

        res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    } catch (error) {
        next(error);
    }
};
