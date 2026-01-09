import express from "express";
import { addBlogCommentController, getBlogCommentsByBlogIdController } from "../../controllers/user/blogComment.controller.js";

const router = express.Router();

router.post("/add_blog_comments", addBlogCommentController);
router.get("/get_blog_comments/:blogId", getBlogCommentsByBlogIdController);

export default router;