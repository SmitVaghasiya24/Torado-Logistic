import express from "express";
import { getServicesUserController } from "../../controllers/user/service.controller.js";

const router = express.Router();

router.get("/get_services",getServicesUserController);

export default router;
