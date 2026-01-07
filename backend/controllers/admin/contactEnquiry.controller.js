import { getContactEnquiriesAdminService, updateContactEnquiryStatusService } from "../../services/admin/contactEnquiry/inedx.js";

export const getContactEnquiriesAdminController = async (req, res, next) => {
    try {
        const data = await getContactEnquiriesAdminService();

        res.status(200).json({
            success: true,
            message: "Contact enquiries fetched successfully",
            count: data.length,
            data,
        });
    } catch (error) {
        next(error);
    }
};




export const updateContactEnquiryStatusController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const result = await updateContactEnquiryStatusService(
            Number(id),
            status,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Enquiry status updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
