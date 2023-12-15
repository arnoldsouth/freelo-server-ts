import { Router } from 'express';
import * as LeagueController from '../controllers/league.controller';

const router = Router();

router.get('/', LeagueController.getLeagueApi);
router.get('/leaderboard', LeagueController.getLeaderboard);
router.get('/:id', LeagueController.getSummonerLeagueData);

export { router as leagueRoute };
