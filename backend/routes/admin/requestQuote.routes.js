import { Router } from "express";
import { getAllRequestQuotesController, updateRequestQuoteStatusController } from "../../controllers/admin/requestQuote.controller.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";
import authorize from "../../middlewares/authorizeRole.js";


const router = Router();

router.get("/quotes", getAllRequestQuotesController);
router.patch("/quote/:id/status", verifyToken, authorize(["superadmin", "admin"]), updateRequestQuoteStatusController);

export default router;
