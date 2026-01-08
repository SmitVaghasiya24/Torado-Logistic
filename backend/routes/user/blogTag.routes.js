import express from "express";
import { getBlogTagsUserController } from "../../controllers/user/blogTag.controller.js";

const router = express.Router();

router.get("/get_blog_tags",getBlogTagsUserController);

export default router;
