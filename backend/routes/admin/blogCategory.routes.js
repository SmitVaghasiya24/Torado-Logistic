import express from "express";
import { addBlogCategoryController, getBlogCategoriesAdminController, updateBlogCategoryController, deleteBlogCategoryController, updateBlogCategoryStatusController } from "../../controllers/admin/blogCategory.controller.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";
import authorize from "../../middlewares/authorizeRole.js";

const router = express.Router();

router.post("/add_blog_category", verifyToken, authorize(["superadmin", "admin", "content_manager"]), addBlogCategoryController);
router.get("/get_blog_categories", verifyToken, authorize(["superadmin", "admin", "content_manager"]), getBlogCategoriesAdminController);
router.put("/update_blog_category/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), updateBlogCategoryController);
router.patch("/update_blog_category_status/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), updateBlogCategoryStatusController);
router.delete("/delete_blog_category/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), deleteBlogCategoryController);

export default router;
