import { Router } from 'express';

import * as RankedController from '../../controllers/val/ranked.controller';

const router = Router();

router.get('/', RankedController.getRankedApi);
router.get('/leaderboards/:actId', RankedController.getLeaderboard);
router.get(
  '/leaderboards/active/:locale',
  RankedController.getActiveLeaderboard
);

export { router as rankedRoute };
