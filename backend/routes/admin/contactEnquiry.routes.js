import express from "express";
import { getContactEnquiriesAdminController, updateContactEnquiryStatusController } from "../../controllers/admin/contactEnquiry.controller.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";
import authorize from "../../middlewares/authorizeRole.js";

const router = express.Router();

router.get("/contact_enquiries", verifyToken, authorize(["superadmin", "admin", "content_manager"]), getContactEnquiriesAdminController);
router.patch("/update_contact_enquiries_status/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), updateContactEnquiryStatusController);

export default router;
