import { getServicesUserService,getServiceBySlugService } from "../../services/user/service/index.js";

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


export const getServiceBySlugController = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const service = await getServiceBySlugService(slug);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found"
      });
    }

    const baseUrl = `${req.protocol}://${req.get("host")}`;

    service.banner_image = service.banner_image
      ? `${baseUrl}/${service.banner_image}`
      : null;

    service.thumbnail = service.thumbnail
      ? `${baseUrl}/${service.thumbnail}`
      : null;

    res.status(200).json({
      success: true,
      data: service
    });

  } catch (error) {
    next(error);
  }
};
