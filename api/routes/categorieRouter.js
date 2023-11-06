import express from "express";
import getCatagorie from "../controllers/getCategorie.js";

const categorieRouter = express.Router();

categorieRouter.get("/categorie", getCatagorie);


export default categorieRouter;
