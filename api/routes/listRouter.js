import express from "express";
import getList from "../controllers/getList.js";
const listRouter = express.Router();

listRouter.get('/list', getList);

export default listRouter;