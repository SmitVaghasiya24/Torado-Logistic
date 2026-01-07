import { addContactEnquiryService } from "../../services/user/contactEnquiry/inedx.js";

export const addContactEnquiryController = async (req, res, next) => {
    try {
        const result = await addContactEnquiryService(req.body);

        res.status(201).json({
            success: true,
            message: "Your message has been sent successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
