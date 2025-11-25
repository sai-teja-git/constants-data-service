import express from "express";
import baseRouter from "./routes/base.route.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/", baseRouter);

// Error Handler
app.use(errorMiddleware);

export default app;
