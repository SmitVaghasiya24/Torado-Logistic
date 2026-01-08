import { addBlogTagService, getBlogTagsAdminService, updateBlogTagService, deleteBlogTagService, updateBlogTagStatusService } from "../../services/admin/blogTag/index.js";

export const addBlogTagController = async (req, res, next) => {
    try {
        const result = await addBlogTagService(
            req.body,
            req.admin_id
        );

        res.status(201).json({
            success: true,
            message: "Blog tag added successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const getBlogTagsAdminController = async (req, res, next) => {
    try {
        const tags = await getBlogTagsAdminService();

        res.status(200).json({
            success: true,
            count: tags.length,
            data: tags,
        });
    } catch (error) {
        next(error);
    }
};



export const updateBlogTagController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await updateBlogTagService(
            Number(id),
            req.body,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Blog tag updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const deleteBlogTagController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await deleteBlogTagService(
            Number(id)
        );

        res.status(200).json({
            success: true,
            message: "Blog tag deleted successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const updateBlogTagStatusController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const result = await updateBlogTagStatusService(
            Number(id),
            status,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Blog tag status updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
