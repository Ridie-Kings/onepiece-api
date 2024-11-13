import express from "express";
import { getAllRaces, getRaceById } from "../controllers/racesControllers.js";


const racesRouter = express.Router();

racesRouter.get("/", getAllRaces);
racesRouter.get("/:id", getRaceById);

export default racesRouter;