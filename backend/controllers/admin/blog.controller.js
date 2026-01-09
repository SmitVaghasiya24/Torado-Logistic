import AppError from "../../utils/AppError.js";
import { addBlogService, getBlogsAdminService, updateBlogService, deleteBlogService, updateBlogStatusService } from "../../services/admin/blog/index.js";
import { log } from "console";

export const addBlogController = async (req, res, next) => {
    try {
        const thumbnailPath = req.files?.thumbnail
            ? req.files.thumbnail[0].path.replace(/\\/g, "/")
            : null;

        const payload = {
            ...req.body,
            thumbnail: thumbnailPath,
            tags: req.body.tags ? JSON.parse(req.body.tags) : [],
        };

        const result = await addBlogService(
            payload,
            req.admin_id
        );

        res.status(201).json({
            success: true,
            message: "Blog added successfully",
            data: {
                ...result,
                thumbnail: thumbnailPath
                    ? `${req.protocol}://${req.get("host")}/${thumbnailPath}`
                    : null,
            }
        });
    } catch (error) {
        next(error);
        console.log(error);

    }
};


export const getBlogsAdminController = async (req, res, next) => {
    try {
        const blogs = await getBlogsAdminService();

        res.status(200).json({
            success: true,
            count: blogs.length,
            data: blogs,
        });
    } catch (error) {
        next(error);
    }
};


export const updateBlogController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const thumbnailPath = req.files?.thumbnail
            ? req.files.thumbnail[0].path.replace(/\\/g, "/")
            : null;

        const payload = {
            ...req.body,
            thumbnail: thumbnailPath,
        };

        const result = await updateBlogService(
            Number(id),
            payload,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            data: {
                ...result,
                thumbnail: result.thumbnail
                    ? `${req.protocol}://${req.get("host")}/${result.thumbnail}`
                    : null,
            },
        });
    } catch (error) {
        next(error);
    }
};


export const deleteBlogController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await deleteBlogService(Number(id));

        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
            data: result,
        });
    } catch (error) {
        next(error);
        console.log(error);

    }
};



export const updateBlogStatusController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const result = await updateBlogStatusService(
            Number(id),
            status,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Blog status updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};