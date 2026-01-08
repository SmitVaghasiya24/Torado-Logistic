import AppError from "../../utils/AppError.js";
import { addServiceService, getServicesAdminService, updateServiceService,deleteServiceService,updateServiceStatusService } from "../../services/admin/service/index.js";
import fs from "fs";
import path from "path";
import { getServiceById } from '../../models/service.model.js'

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

        const existing = await getServiceById(id);
        if (!existing) throw new AppError("Service not found", 404);

        let bannerImagePath = existing.banner_image;
        let thumbnailPath = existing.thumbnail;

        if (req.files?.banner_image) {
            const newPath = req.files.banner_image[0].path.replace(/\\/g, "/");

            if (existing.banner_image) {
                const oldPath = path.join(process.cwd(), existing.banner_image);
                if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
            }

            bannerImagePath = newPath;
        }

        if (req.files?.thumbnail) {
            const newPath = req.files.thumbnail[0].path.replace(/\\/g, "/");

            if (existing.thumbnail) {
                const oldPath = path.join(process.cwd(), existing.thumbnail);
                if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
            }

            thumbnailPath = newPath;
        }

        const payload = {
            ...req.body,
            banner_image: bannerImagePath,
            thumbnail: thumbnailPath,
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
                banner_image: bannerImagePath
                    ? `${req.protocol}://${req.get("host")}/${bannerImagePath}`
                    : null,
                thumbnail: thumbnailPath
                    ? `${req.protocol}://${req.get("host")}/${thumbnailPath}`
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
