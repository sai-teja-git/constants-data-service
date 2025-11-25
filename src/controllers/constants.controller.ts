import { Request, Response } from "express";
import { ConstantsService } from "../services/constants.service.js";
import { HttpCodes } from "../constants/http-codes.js";
import { NotFoundError } from "../errors/http-errors.js";

export class ConstantsController {
    constructor(private service: ConstantsService) { }

    getAll = (_: Request, res: Response) => {
        try {
            const data = this.service.getAll()
            res.send({
                status: HttpCodes.OK,
                data,
                message: "Fetched all constants successfully"
            })
        } catch (e: any) {
            res.status(e.status ?? HttpCodes.INTERNAL_SERVER_ERROR).json({
                message: e.message ?? 'Failed to fetch constants',
                status: e.status ?? HttpCodes.INTERNAL_SERVER_ERROR
            });
        }
    };

    getByKey = (req: Request, res: Response) => {
        try {
            const { key } = req.params;
            const data = this.service.getByKey(key);
            if (!data) throw new NotFoundError(`Constant with key '${key}' not found`);
            res.send({
                status: HttpCodes.OK,
                data,
                message: `Fetched constant with key '${key}' successfully`
            })
        } catch (e: any) {
            res.status(e.status ?? HttpCodes.INTERNAL_SERVER_ERROR).json({
                message: e.message ?? 'Failed to fetch constants by key',
                status: e.status ?? HttpCodes.INTERNAL_SERVER_ERROR
            });
        };
    };
}
