import express from "express";
import cors from "cors";
import beerRouter from "./routes/beerRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', beerRouter);

export default app;