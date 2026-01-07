import express from "express";
import { addLocationController, getLocationsAdminController, updateLocationController, updateLocationStatusController, deleteLocationController } from "../../controllers/admin/location.controller.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";
import authorize from "../../middlewares/authorizeRole.js";

const router = express.Router();

router.post("/add_location", verifyToken, authorize(["superadmin", "admin", "content_manager"]), addLocationController);
router.get("/get_location", verifyToken, authorize(["superadmin", "admin", "content_manager"]), getLocationsAdminController);
router.put("/update_location/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), updateLocationController);
router.patch("/update_location_status/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), updateLocationStatusController);
router.delete("/delete_location_status/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), deleteLocationController);

export default router;