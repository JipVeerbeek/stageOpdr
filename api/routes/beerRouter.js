import express from "express";
import getBeers from "../controllers/getBeers.js";
const beerRouter = express.Router();

beerRouter.get('/beers', getBeers);

export default beerRouter;