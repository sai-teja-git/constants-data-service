import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface ConstantsMap {
    [key: string]: any;
}

export const loadConstants = (): ConstantsMap => {
    const dataDir = path.join(__dirname, "..", "data");

    const files = fs.readdirSync(dataDir);
    const constants: ConstantsMap = {};

    for (const file of files) {
        if (file.endsWith(".json")) {
            const key = path.basename(file, ".json");
            const fullPath = path.join(dataDir, file);
            const jsonData = JSON.parse(fs.readFileSync(fullPath, "utf-8"));
            constants[key] = jsonData;
        }
    }

    console.log("Loaded constants:", Object.keys(constants));
    return constants;
};
