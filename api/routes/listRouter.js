import express from "express";
import getList from "../controllers/getList.js";
const listRouter = express.Router();

beerRouter.get('/list', getList);

export default listRouter;