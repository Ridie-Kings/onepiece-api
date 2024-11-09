import express from "express";
import cors from "cors";
import apiRoutes from './src/routes/apiRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/', apiRoutes);
export default app;