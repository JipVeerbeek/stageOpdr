import express from "express";
import cors from "cors";
import listRouter from "./routes/listRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', listRouter);

export default app;