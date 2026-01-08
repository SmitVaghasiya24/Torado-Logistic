import express from "express";
import { addBlogTagController, getBlogTagsAdminController, updateBlogTagController, deleteBlogTagController, updateBlogTagStatusController } from "../../controllers/admin/blogTag.controller.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";
import authorize from "../../middlewares/authorizeRole.js";

const router = express.Router();

router.post("/add_blog_tags", verifyToken, authorize(["superadmin", "admin"]), addBlogTagController);
router.get("/get_blog_tags", verifyToken, authorize(["superadmin", "admin"]), getBlogTagsAdminController);
router.put("/update_blog_tags/:id", verifyToken, authorize(["superadmin", "admin"]), updateBlogTagController);
router.patch("/update_blog_tags_status/:id", verifyToken, authorize(["superadmin", "admin"]), updateBlogTagStatusController);
router.delete("/delete_blog_tags/:id", verifyToken, authorize(["superadmin", "admin"]), deleteBlogTagController);

export default router;