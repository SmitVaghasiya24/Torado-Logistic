import express from "express";
import { addBlogController, getBlogsAdminController, updateBlogController, deleteBlogController ,updateBlogStatusController} from "../../controllers/admin/blog.controller.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";
import authorize from "../../middlewares/authorizeRole.js";
import getMulterUploader from "../../middlewares/upload.js";

const router = express.Router();

const upload = getMulterUploader("blogs");

router.post("/add_blog", verifyToken, authorize(["superadmin", "admin", "content_manager"]), upload.fields([{ name: "thumbnail", maxCount: 1 }]), addBlogController);
router.get("/get_blogs", verifyToken, authorize(["superadmin", "admin", "content_manager"]), getBlogsAdminController);
router.put("/update_blog/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), upload.fields([{ name: "thumbnail", maxCount: 1 }]), updateBlogController);
router.patch("/update_blog_status/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), updateBlogStatusController);
router.delete("/delete_blog/:id", verifyToken, authorize(["superadmin", "admin", "content_manager"]), deleteBlogController);


export default router;
