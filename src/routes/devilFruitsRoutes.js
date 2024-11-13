import express from "express";
import { getAllDevilFruits, getDevilFruitById } from "../controllers/devilFruitsControllers.js";

const devilFruitsRouter = express.Router();

devilFruitsRouter.get("/", getAllDevilFruits);
devilFruitsRouter.get("/:id", getDevilFruitById);

export default devilFruitsRouter;