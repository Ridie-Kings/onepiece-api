import express from "express";
import { getAllCharacters, getCharacterById } from "../controllers/charactersControllers.js";

const characterRouter = express.Router();

characterRouter.get("/", getAllCharacters);
characterRouter.get("/:id", getCharacterById);

export default characterRouter;