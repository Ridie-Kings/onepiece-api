import express from "express";
import { getAllCharacters, getCharacterById } from "../controllers/charactersControllers.js";
import { getAllCrews, getCrewById, getMembersByCrew } from "../controllers/crewsControllers.js";
import { getAllRaces, getRaceById } from "../controllers/racesControllers.js";
import { getAllDevilFruits, getDevilFruitById } from "../controllers/devilFruitsControllers.js";
import { getAllHakis, getHakisById } from "../controllers/hakisControllers.js";
import { getAllOrigins, getOriginsById } from "../controllers/originsControllers.js";

const router = express.Router();

router.get("/characters", getAllCharacters);
router.get("/characters/:id", getCharacterById);
router.get("/crews", getAllCrews);
router.get("/crews/:id", getCrewById);
router.get("/crews/:id/members", getMembersByCrew);
router.get("/races", getAllRaces);
router.get("/races/:id", getRaceById);
router.get("/hakis", getAllHakis);
router.get("/hakis/:id", getHakisById);
router.get("/devil-fruits", getAllDevilFruits);
router.get("/devil-fruits/:id", getDevilFruitById);
router.get("/locations", getAllOrigins);
router.get("/locations/:id", getOriginsById);

export default router;