import { addBlogCategoryService, getBlogCategoriesAdminService, updateBlogCategoryService, deleteBlogCategoryService, updateBlogCategoryStatusService } from "../../services/admin/blogCategory/index.js";

export const addBlogCategoryController = async (req, res, next) => {
    try {
        const result = await addBlogCategoryService(req.body, req.admin_id);

        res.status(201).json({
            success: true,
            message: "Blog category added successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


export const getBlogCategoriesAdminController = async (req, res, next) => {
    try {
        const categories = await getBlogCategoriesAdminService();

        res.status(200).json({
            success: true,
            count: categories.length,
            data: categories,
        });
    } catch (error) {
        next(error);
    }
};




export const updateBlogCategoryController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await updateBlogCategoryService(
            Number(id),
            req.body,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Blog category updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};




export const deleteBlogCategoryController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await deleteBlogCategoryService(
            Number(id)
        );

        res.status(200).json({
            success: true,
            message: "Blog category deleted successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const updateBlogCategoryStatusController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const result = await updateBlogCategoryStatusService(
            Number(id),
            status,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Blog category status updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
