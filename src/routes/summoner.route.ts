import { Router } from 'express';

import * as SummonerController from '../controllers/summoner.controller';

const router = Router();

router.get('/', SummonerController.getSummonerApi);
router.get('/:name', SummonerController.getSummonerData);

export { router as summonerRoute };
