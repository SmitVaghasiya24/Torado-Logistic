import { getPageBySlugService } from "../../services/user/page/index.js";





export const getPageBySlugController = async (req, res, next) => {
    try {
        const { slug } = req.params;

        const page = await getPageBySlugService(slug);

        res.status(200).json({
            success: true,
            data: page,
        });
    } catch (error) {
        next(error);
    }
};

