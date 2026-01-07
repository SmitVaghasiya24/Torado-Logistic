import { getActiveLocationsService } from "../../services/user/location/index.js";

export const getActiveLocationsController = async (req, res, next) => {
    try {
        const data = await getActiveLocationsService();

        res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    } catch (error) {
        next(error);
    }
};
