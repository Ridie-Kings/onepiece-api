import express from "express";
import { getAllCrews, getCrewById, getMembersByCrew } from "../controllers/crewsControllers.js";

const crewsRouter = express.Router();

crewsRouter.get("/", getAllCrews);
crewsRouter.get("/:id", getCrewById);
crewsRouter.get("/:id/members", getMembersByCrew);

export default crewsRouter;