import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import * as Routers from './routes';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/v1', Routers.apiBaseRoute);
app.use('/api/v1/match', Routers.matchRoute);
app.use('/api/v1/summoner', Routers.summonerRoute);

export { app };
