import { Router } from 'express';

import * as MatchController from '../../controllers/lol/match.controller';

const router = Router();

router.get('/', MatchController.getMatchApi);
router.get('/list/:puuid', MatchController.getMatchList);
router.get('/data/:matchId', MatchController.getMatchData);
router.get('/history/:puuid', MatchController.getMatchHistory);

export { router as matchRoute };
