import 'dotenv/config';
import app from "./app.js";
import { config } from "./config/index.js";

app.listen(config.PORT, () => {
    console.log(`⚡ Constants server running on port ${config.PORT}`);
});
