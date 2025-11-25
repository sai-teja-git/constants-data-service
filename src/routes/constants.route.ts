import { Router } from "express";
import { ConstantsController } from "../controllers/constants.controller.js";
import { ConstantsService } from "../services/constants.service.js";
import { loadConstants } from "../loaders/load-constants.js";

const router = Router();

const constants = loadConstants();
const service = new ConstantsService(constants);
const controller = new ConstantsController(service);

router.get("/", controller.getAll);
router.get("/:key", controller.getByKey);

export default router;
