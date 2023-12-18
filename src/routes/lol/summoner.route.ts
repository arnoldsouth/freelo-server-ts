import { Router } from 'express';

import * as SummonerController from '../../controllers/lol/summoner.controller';

const router = Router();

router.get('/', SummonerController.getSummonerApi);
router.get('/profile/:summonerName', SummonerController.getSummonerData);
router.get(
  '/profile/icon/:summonerName',
  SummonerController.getSummonerProfileIcon
);
router.get('/league/:id', SummonerController.getSummonerLeagueData);

export { router as summonerRoute };
