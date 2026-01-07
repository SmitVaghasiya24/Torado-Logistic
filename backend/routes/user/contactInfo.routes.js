import express from "express";
import { getActiveContactInfoController } from "../../controllers/user/contactInfo.controller.js";

const router = express.Router();

router.get("/user_contact_info",getActiveContactInfoController);

export default router;