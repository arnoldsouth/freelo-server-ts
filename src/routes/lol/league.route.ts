import { Router } from 'express';
import * as LeagueController from '../../controllers/lol/league.controller';

const router = Router();

router.get('/', LeagueController.getLeagueApi);
router.get('/exp/:queue/:tier/:division', LeagueController.getLeagueExp);
router.get('/:queue/:tier/:division', LeagueController.getLeague);
router.get(
  '/leaderboard/challenger',
  LeagueController.getLeaderboardChallenger
);
router.get(
  '/leaderboard/grandmaster',
  LeagueController.getLeaderboardGrandmaster
);
router.get('/leaderboard/master', LeagueController.getLeaderboardMaster);

// router.get('/:id', LeagueController.getSummonerLeagueData);

export { router as leagueRoute };
