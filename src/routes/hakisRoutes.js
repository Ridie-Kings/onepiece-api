import express from "express";
import { getAllHakis, getHakisById } from "../controllers/hakisControllers.js";

const hakisRouter = express.Router();

hakisRouter.get("/", getAllHakis);
hakisRouter.get("/:id", getHakisById);

export default hakisRouter;