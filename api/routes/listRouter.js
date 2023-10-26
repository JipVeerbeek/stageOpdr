import express from "express";
import getList from "../controllers/getList.js";
const beerRouter = express.Router();

beerRouter.get('/list', getList);

export default beerRouter;