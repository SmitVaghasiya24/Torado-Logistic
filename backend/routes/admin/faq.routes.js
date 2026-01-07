import express from "express";
import { addFaqController, getFaqsAdminController, updateFaqController, updateFaqStatusController, deleteFaqController } from "../../controllers/admin/faq.controller.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";
import authorize from "../../middlewares/authorizeRole.js";

const router = express.Router();

router.post("/add_faqs", verifyToken, authorize(["superadmin", "admin", "content_manager"]), addFaqController);
router.get("/get_faqs", verifyToken, authorize(["superadmin", "admin", "content_manager"]), getFaqsAdminController);
router.put("/update_faqs/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), updateFaqController);
router.patch("/update_faqs_status/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), updateFaqStatusController);
router.delete("/delete_faqs_status/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), deleteFaqController);

export default router;
