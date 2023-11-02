import express from "express";
import getList from "../controllers/getList.js";
import patchList from "../controllers/patchList.js";
import postList from "../controllers/postList.js";
const listRouter = express.Router();

listRouter.get("/list", getList);
listRouter.post("/list", postList);
listRouter.patch("/list/:id", patchList);

export default listRouter;
