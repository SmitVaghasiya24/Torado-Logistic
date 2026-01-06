import { Router } from "express";
import { createRequestQuoteController } from "../../controllers/user/requestQuote.controller.js";

const router = Router();

router.post("/quote", createRequestQuoteController);

export default router;
