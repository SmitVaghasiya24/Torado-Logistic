import express from "express";
import { addContactEnquiryController } from "../../controllers/user/contactEnquiry.controller.js";

const router = express.Router();

router.post("/contact_enquiry",addContactEnquiryController);

export default router;
