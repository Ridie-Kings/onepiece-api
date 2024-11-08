import express from "express";
import { getAllCharacters, getCharacterById } from '../controllers/charactersControllers.js';

const router = express.Router();

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);

export default router;