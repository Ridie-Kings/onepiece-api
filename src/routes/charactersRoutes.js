import express from "express";
import { getAllCharacters, getCharacterById, getAllCrews, getCrewById, getAllRaces, getRaceById } from '../controllers/charactersControllers.js';

const router = express.Router();

router.get("/characters", getAllCharacters);
router.get("/characters/:id", getCharacterById);
router.get("/crews", getAllCrews);
router.get("/crews/:id", getCrewById);
router.get("/races", getAllRaces);
router.get("/races/:id", getRaceById);

export default router;