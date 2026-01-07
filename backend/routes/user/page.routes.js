import express from "express";
import { getPageBySlugController } from "../../controllers/user/page.controller.js";


const router = express.Router();

router.get("/get_pages/:slug", getPageBySlugController);

export default router;