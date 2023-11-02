import express from "express";
import getList from "../controllers/getList.js";
import patchList from "../controllers/patchList.js";
import postList from "../controllers/postList.js";
import deleteList from "../controllers/deleteList.js";

const listRouter = express.Router();

listRouter.get("/list", getList);
listRouter.post("/list", postList);
listRouter.patch("/list/:id", patchList);
listRouter.delete("/list/:id", deleteList);


export default listRouter;
