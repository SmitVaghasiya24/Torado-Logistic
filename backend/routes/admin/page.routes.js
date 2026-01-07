import express from "express";
import { addPageController, getPagesAdminController, updatePageController, updatePageStatusController, deletePageController } from "../../controllers/admin/page.controller.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";
import authorize from "../../middlewares/authorizeRole.js";

const router = express.Router();

router.post("/add_pages", verifyToken, authorize(["superadmin", "admin"]), addPageController);
router.get("/get_pages", verifyToken, authorize(["superadmin", "admin"]), getPagesAdminController);
router.put("/update_pages/:id", verifyToken, authorize(["superadmin", "admin"]), updatePageController);
router.patch("/update_pages_status/:id", verifyToken, authorize(["superadmin", "admin"]), updatePageStatusController);
router.delete("/delete_pages/:id", verifyToken, authorize(["superadmin", "admin"]), deletePageController);

export default router;