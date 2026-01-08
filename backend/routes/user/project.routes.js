import express from "express";
import { getProjectsUserController ,getProjectBySlugController} from "../../controllers/user/project.controller.js";


const router = express.Router();

router.get("/get_projects", getProjectsUserController);
router.get("/get_project/:slug", getProjectBySlugController);

export default router;