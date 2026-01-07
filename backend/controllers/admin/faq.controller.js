import { addFaqService, getFaqsAdminService, updateFaqService, updateFaqStatusService, deleteFaqService } from "../../services/admin/faq/index.js";

export const addFaqController = async (req, res, next) => {
    try {
        const result = await addFaqService(
            req.body,
            req.admin_id
        );

        res.status(201).json({
            success: true,
            message: "FAQ added successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};




export const getFaqsAdminController = async (req, res, next) => {
    try {
        const data = await getFaqsAdminService();

        res.status(200).json({
            success: true,
            message: "FAQs fetched successfully",
            count: data.length,
            data,
        });
    } catch (error) {
        next(error);
    }
};



export const updateFaqController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await updateFaqService(
            Number(id),
            req.body,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "FAQ updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const updateFaqStatusController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const result = await updateFaqStatusService(
            Number(id),
            status,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "FAQ status updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};




export const deleteFaqController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await deleteFaqService(
            Number(id),
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "FAQ deleted successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
