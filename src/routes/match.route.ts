import express from 'express';

import * as MatchController from '../controllers/match.controller';

const router = express.Router();

router.get('/', MatchController.getMatchApi);
router.get('/list/:puuid', MatchController.getMatchList);
router.get('/data/:id', MatchController.getMatchData);
router.get('/listdata/:puuid', MatchController.getMatchListData);

export { router as matchRoute };
