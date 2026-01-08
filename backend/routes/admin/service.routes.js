import express from "express";
import { addServiceController, getServicesAdminController,updateServiceController,deleteServiceController,updateServiceStatusController } from "../../controllers/admin/service.controller.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";
import authorize from "../../middlewares/authorizeRole.js";
import getMulterUploader from '../../middlewares/upload.js';

const router = express.Router();

const upload = getMulterUploader("service");

router.post("/add_services", verifyToken, authorize(["superadmin", "admin", "content_manager"]),
    upload.fields([
        { name: "thumbnail", maxCount: 1 },
        { name: "banner_image", maxCount: 1 },
    ]),
    addServiceController
);
router.get("/get_services", verifyToken,authorize(["superadmin", "admin", "content_manager"]),getServicesAdminController);
router.put("/update_services/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]),
    upload.fields([
        { name: "thumbnail", maxCount: 1 },
        { name: "banner_image", maxCount: 1 },
    ]),
    updateServiceController
);
router.delete("/delte_services/:id", verifyToken,authorize(["superadmin", "admin", "content_manager"]),deleteServiceController);
router.patch("/update_services_status/:id", verifyToken,authorize(["superadmin", "admin", "content_manager"]),updateServiceStatusController);


export default router;