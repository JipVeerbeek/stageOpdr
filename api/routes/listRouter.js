import express from "express";
import getList from "../controllers/getList.js";
import patchList from "../controllers/patchList.js";
const listRouter = express.Router();

listRouter.get("/list", getList);
listRouter.patch("/list/:id", patchList);

export default listRouter;
