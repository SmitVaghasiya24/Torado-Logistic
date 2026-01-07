import express from "express";
import { getActiveLocationsController } from "../../controllers/user/location.controller.js";

const router = express.Router();

router.get("/get_locations", getActiveLocationsController);

export default router;
