import express from "express";
import cors from "cors";
import characterRouter from "./src/routes/characterRoutes.js";
import crewsRouter from "./src/routes/crewsRoutes.js";
import racesRouter from "./src/routes/racesRoutes.js";
import hakisRouter from "./src/routes/hakisRoutes.js";
import devilFruitsRouter from "./src/routes/devilFruitsRoutes.js";
import originsRouter from "./src/routes/originRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/characters', characterRouter);
app.use('/api/crews', crewsRouter);
app.use('/api/races', racesRouter);
app.use('/hakis', hakisRouter);
app.use('/devil-fruits', devilFruitsRouter);
app.use('/locations', originsRouter);
export default app;