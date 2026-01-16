import express from "express";
import { getServicesUserController ,getServiceBySlugController} from "../../controllers/user/service.controller.js";

const router = express.Router();

router.get("/get_services",getServicesUserController);
router.get("/get_service/:slug",getServiceBySlugController);

export default router;
