import express from "express";
import { getBlogsUserController,getBlogBySlugUserController } from "../../controllers/user/blog.controller.js";

const router = express.Router();

router.get("/get_blogs", getBlogsUserController);
router.get("/get_blog/:slug", getBlogBySlugUserController);

export default router;
