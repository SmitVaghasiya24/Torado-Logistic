import { Router } from "express";
import {
    adminSignupController,
    getPendingAdminsController,
    getAllAdminsController,
    adminLoginController,
    approveAdminController,
    rejectAdminController,
    resubmitAdminController
} from "../../controllers/admin/auth.controller.js";

import { verifyToken } from "../../middlewares/authMiddleware.js";
import authorize from "../../middlewares/authorizeRole.js";
import { isRejectedAdmin } from "../../middlewares/authMiddleware.js";

const router = Router();

router.post("/signup", adminSignupController);
router.post("/login", adminLoginController);

// superadmin only
router.get("/pending-admins", verifyToken, authorize(["superadmin"]), getPendingAdminsController);
router.get("/all-admins", verifyToken, authorize(["superadmin"]), getAllAdminsController);
router.patch("/approve-admin/:id", verifyToken, authorize(["superadmin"]), approveAdminController);
router.patch("/reject-admin/:id", verifyToken, authorize(["superadmin"]), rejectAdminController);

// rejected admin self action
router.patch("/resubmit", verifyToken, isRejectedAdmin, resubmitAdminController);

export default router;
