import express from "express";
import { getBlogCategoriesUserController } from "../../controllers/user/blogCategory.controller.js";

const router = express.Router();

router.get("/get_blog_categories",getBlogCategoriesUserController);

export default router;