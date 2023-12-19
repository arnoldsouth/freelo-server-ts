import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import * as Routers from './routes';
import * as LolRouters from './routes/lol';
import * as ValRouters from './routes/val';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Base Route
app.use('/api/v1', Routers.baseApiRoute);

// Lol Routes
app.use('/api/v1/lol', LolRouters.lolApiRoute);
app.use('/api/v1/lol/summoner', LolRouters.summonerRoute);
app.use('/api/v1/lol/match', LolRouters.matchRoute);
app.use('/api/v1/lol/league', LolRouters.leagueRoute);

// Val Routes
app.use('/api/v1/val', ValRouters.valApiRoute);
app.use('/api/v1/val/content', ValRouters.contentRoute);
app.use('/api/v1/val/ranked', ValRouters.rankedRoute);

export { app };
