import express from "express";
import { addProjectController, getProjectsAdminController, updateProjectController, deleteProjectController, updateProjectStatusController } from "../../controllers/admin/project.controller.js";
import { verifyToken } from '../../middlewares/authMiddleware.js'
import authorize from "../../middlewares/authorizeRole.js";
import getMulterUploader from '../../middlewares/upload.js';


const router = express.Router();

const upload = getMulterUploader("projects");

router.post("/add_project", verifyToken, authorize(["superadmin", "admin", "content_manager"]), upload.single("thumbnail"), addProjectController);
router.get("/get_project", verifyToken, authorize(["superadmin", "admin", "content_manager"]), upload.single("thumbnail"), getProjectsAdminController);
router.put("/update_project/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), upload.single("thumbnail"), updateProjectController);
router.patch("/update_project_status/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), upload.single("thumbnail"), updateProjectStatusController);
router.delete("/delete_project/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), upload.single("thumbnail"), deleteProjectController);

export default router;
