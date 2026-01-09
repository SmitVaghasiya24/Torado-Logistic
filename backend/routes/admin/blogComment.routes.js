import express from "express";
import { updateBlogCommentStatusController } from "../../controllers/admin/blogComment.controller.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";
import authorize from "../../middlewares/authorizeRole.js";

const router = express.Router();

router.patch(
    "/update_blog_comment_status/:id",
    verifyToken,
    authorize(["superadmin", "admin", "content_manager"]),
    updateBlogCommentStatusController
);


export default router;