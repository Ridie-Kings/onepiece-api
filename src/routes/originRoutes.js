import express from "express";
import { getAllOrigins, getOriginsById } from "../controllers/originsControllers.js";

const originsRouter = express.Router();

originsRouter.get("/", getAllOrigins);
originsRouter.get("/:id", getOriginsById);

export default originsRouter;