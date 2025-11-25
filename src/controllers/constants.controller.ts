import { Request, Response } from "express";
import { ConstantsService } from "../services/constants.service.js";

export class ConstantsController {
    constructor(private service: ConstantsService) { }

    getAll = (_: Request, res: Response) => {
        res.json(this.service.getAll());
    };

    getByKey = (req: Request, res: Response) => {
        const { key } = req.params;
        const data = this.service.getByKey(key);
        if (!data) return res.status(404).json({ message: "Not found" });
        res.json(data);
    };
}
