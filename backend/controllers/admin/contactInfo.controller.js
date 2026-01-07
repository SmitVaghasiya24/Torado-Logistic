import { addContactInfoService, getContactInfoAdminService, updateContactInfoService, updateContactInfoStatusService, deleteContactInfoService } from "../../services/admin/contactInfo/index.js";

export const addContactInfoController = async (req, res, next) => {
    try {
        const adminId = req.admin_id;

        const result = await addContactInfoService(
            req.body,
            adminId
        );

        return res.status(201).json({
            success: true,
            message: "Contact information added successfully",
            data: result,
        });

    } catch (error) {
        next(error);
    }
};


export const getContactInfoAdminController = async (req, res, next) => {
    try {
        const data = await getContactInfoAdminService();

        res.status(200).json({
            success: true,
            message: "Contact information fetched successfully",
            count: data.length,
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const getActiveContactInfoController = async (req, res, next) => {
    try {
        const data = await getActiveContactInfoService();

        res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    } catch (error) {
        next(error);
    }
};



export const updateContactInfoController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await updateContactInfoService(
            Number(id),
            req.body,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Contact information updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


export const updateContactInfoStatusController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const result = await updateContactInfoStatusService(
            Number(id),
            status,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Status updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


export const deleteContactInfoController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await deleteContactInfoService(
            Number(id),
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Contact information deleted successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};