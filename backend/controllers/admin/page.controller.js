import { addPageService, getPagesAdminService, updatePageService,updatePageStatusService ,deletePageService} from "../../services/admin/page/index.js";

export const addPageController = async (req, res, next) => {
    try {
        const result = await addPageService(
            req.body,
            req.admin_id
        );

        res.status(201).json({
            success: true,
            message: "Page added successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const getPagesAdminController = async (req, res, next) => {
    try {
        const pages = await getPagesAdminService();

        res.status(200).json({
            success: true,
            count: pages.length,
            data: pages,
        });
    } catch (error) {
        next(error);
    }
};




export const updatePageController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await updatePageService(
            Number(id),
            req.body,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Page updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const updatePageStatusController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const result = await updatePageStatusService(
            Number(id),
            status,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Page status updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


export const deletePageController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await deletePageService(
            Number(id)
        );

        res.status(200).json({
            success: true,
            message: "Page deleted successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
