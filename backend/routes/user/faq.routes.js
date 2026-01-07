import express from "express";
import { getActiveFaqsController } from "../../controllers/user/faq.controller.js";

const router = express.Router();

router.get("/get_faqs", getActiveFaqsController
);

export default router;
