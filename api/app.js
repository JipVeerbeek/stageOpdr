import express from "express";
import cors from "cors";
import listRouter from "./routes/listRouter.js";
import categorieRouter from "./routes/categorieRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', listRouter);
app.use('/api', categorieRouter)

export default app;