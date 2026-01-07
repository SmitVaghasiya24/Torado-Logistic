import { addLocationService, getLocationsAdminService, updateLocationService, updateLocationStatusService,deleteLocationService } from "../../services/admin/location/index.js";

export const addLocationController = async (req, res, next) => {
    const adminId = req.admin_id;

    try {
        const result = await addLocationService(
            req.body,
            adminId
        );

        res.status(201).json({
            success: true,
            message: "Location added successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const getLocationsAdminController = async (req, res, next) => {
    try {
        const data = await getLocationsAdminService();

        res.status(200).json({
            success: true,
            message: "Locations fetched successfully",
            count: data.length,
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const updateLocationController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await updateLocationService(
            Number(id),
            req.body,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Location updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


export const updateLocationStatusController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const result = await updateLocationStatusService(
            Number(id),
            status,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Location status updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const deleteLocationController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await deleteLocationService(
            Number(id),
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Location deleted successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
