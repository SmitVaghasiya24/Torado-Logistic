import AppError from "../../utils/AppError.js";
import { addServiceService, getServicesAdminService, updateServiceService, deleteServiceService, updateServiceStatusService } from "../../services/admin/service/index.js";
import fs from "fs";
import path from "path";


export const addServiceController = async (req, res, next) => {
    try {
        const thumbnailPath = req.files?.thumbnail
            ? req.files.thumbnail[0].path.replace(/\\/g, "/")
            : null;

        const bannerImagePath = req.files?.banner_image
            ? req.files.banner_image[0].path.replace(/\\/g, "/")
            : null;

        if (!thumbnailPath) {
            throw new AppError("Thumbnail is required", 400);
        }

        const payload = {
            ...req.body,
            thumbnail: thumbnailPath,
            banner_image: bannerImagePath,
        };

        const result = await addServiceService(
            payload,
            req.admin_id
        );

        res.status(201).json({
            success: true,
            message: "Service added successfully",
            data: {
                ...result,
                thumbnail: thumbnailPath
                    ? `${req.protocol}://${req.get("host")}/${thumbnailPath}`
                    : null,
                banner_image: bannerImagePath
                    ? `${req.protocol}://${req.get("host")}/${bannerImagePath}`
                    : null,
            },
        });
    } catch (error) {
        next(error);
    }
};




export const getServicesAdminController = async (req, res, next) => {
    try {
        const services = await getServicesAdminService();

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




export const updateServiceController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const payload = {
            ...req.body,
            banner_image: req.files?.banner_image
                ? req.files.banner_image[0].path.replace(/\\/g, "/")
                : null,
            thumbnail: req.files?.thumbnail
                ? req.files.thumbnail[0].path.replace(/\\/g, "/")
                : null,
        };

        const result = await updateServiceService(
            Number(id),
            payload,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Service updated successfully",
            data: {
                ...result,
                banner_image: result.banner_image
                    ? `${req.protocol}://${req.get("host")}/${result.banner_image}`
                    : null,
                thumbnail: result.thumbnail
                    ? `${req.protocol}://${req.get("host")}/${result.thumbnail}`
                    : null,
            },
        });
    } catch (error) {
        next(error);
    }
};



export const deleteServiceController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await deleteServiceService(Number(id));

        if (result.banner_image) {
            const bannerPath = path.join(process.cwd(), result.banner_image);
            if (fs.existsSync(bannerPath)) fs.unlinkSync(bannerPath);
        }

        if (result.thumbnail) {
            const thumbPath = path.join(process.cwd(), result.thumbnail);
            if (fs.existsSync(thumbPath)) fs.unlinkSync(thumbPath);
        }

        res.status(200).json({
            success: true,
            message: "Service deleted successfully",
            data: { id },
        });
    } catch (error) {
        next(error);
    }
};


export const updateServiceStatusController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const result = await updateServiceStatusService(
            Number(id),
            status,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Service status updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
