import { Router } from "express";
import { addContactInfoController, getContactInfoAdminController, updateContactInfoController, updateContactInfoStatusController, deleteContactInfoController } from "../../controllers/admin/contactInfo.controller.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";
import authorize from "../../middlewares/authorizeRole.js";

const router = Router();

router.post("/add_contact_info", verifyToken, authorize(["superadmin", "admin", "content_manager"]), addContactInfoController);
router.get("/get_contact_info", verifyToken, authorize(["superadmin", "admin", "content_manager"]), getContactInfoAdminController);
router.put("/update_contact_info/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), updateContactInfoController);
router.patch("/update_contact_info_status/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), updateContactInfoStatusController);
router.delete("/delete_contact_info/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), deleteContactInfoController);

export default router;