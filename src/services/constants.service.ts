import { ConstantsMap } from "../loaders/load-constants.js";

export class ConstantsService {
    constructor(private readonly constants: ConstantsMap) { }

    getAll() {
        return this.constants;
    }

    getByKey(key: string) {
        return this.constants[key] ?? null;
    }
}
