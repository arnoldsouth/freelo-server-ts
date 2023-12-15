import { Router } from 'express';

import * as SummonerController from '../controllers/summoner.controller';

const router = Router();

router.get('/', SummonerController.getSummonerApi);
router.get('/profile/:name', SummonerController.getSummonerData);
router.get('/profile/:name/icon', SummonerController.getSummonerProfileIcon);

export { router as summonerRoute };
