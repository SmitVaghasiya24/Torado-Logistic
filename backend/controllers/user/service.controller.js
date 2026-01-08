import { getServicesUserService } from "../../services/user/service/index.js";

export const getServicesUserController = async (req, res, next) => {
    try {
        const services = await getServicesUserService();

        const data = services.map((item) => ({
            ...item,
            banner_image: item.banner_image
                ? `${req.protocol}://${req.get("host")}/${item.banner_image}`
                : null,
            thumbnail: item.thumbnail
                ? `${req.protocol}://${req.get("host")}/${item.thumbnail}`
                : null,
        }));

        res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    } catch (error) {
        next(error);
    }
};
