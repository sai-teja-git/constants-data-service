import { Router } from "express";
import constantsRouter from "./constants.route.js"

const router = Router();

router.use("/constants", constantsRouter)

export default router;
