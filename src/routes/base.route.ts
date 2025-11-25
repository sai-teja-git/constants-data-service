import { Router } from "express";
import constantsRouter from "./constants.route.js"
import { HttpCodes } from "../constants/http-codes.js";
import { config } from "../config/index.js";

const router = Router();

router.use("/constants", constantsRouter);

router.get('/', (_, res) => {
    res.send({
        status: HttpCodes.OK,
        name: config.name,
        message: "Server Here!"
    })
});

export default router;
