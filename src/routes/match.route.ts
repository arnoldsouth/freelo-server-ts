import { Router } from 'express';

import * as MatchController from '../controllers/match.controller';

const router = Router();

router.get('/', MatchController.getMatchApi);
router.get('/list/:puuid', MatchController.getMatchList);
router.get('/data/:id', MatchController.getMatchData);
router.get('/listdata/:puuid', MatchController.getMatchHistory);

export { router as matchRoute };
