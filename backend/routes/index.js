import express from "express";
import requestQuoteRoutes from "./user/requestQuote.routes.js";
import adminQuoteRoutes from "./admin/requestQuote.routes.js";
import adminAuthRoutes from "./admin/auth.routes.js";

const router = express.Router();


router.use("/user", requestQuoteRoutes);


router.use("/admin", adminQuoteRoutes);
router.use("/admin", adminAuthRoutes);


export default router;
