import { getActiveContactInfoService } from "../../services/user/contactInfo/index.js";

export const getActiveContactInfoController = async (req, res, next) => {
    try {
        const data = await getActiveContactInfoService();

        res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    } catch (error) {
        next(error);
    }
};
