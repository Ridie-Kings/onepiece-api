import express from "express";
import charactersRoutes from './src/routes/charactersRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/', charactersRoutes);
export default app;