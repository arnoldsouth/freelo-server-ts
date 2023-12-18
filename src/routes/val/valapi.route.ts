import { Router } from 'express';

import * as ValController from '../../controllers/val/valapi.controller';

const router = Router();

router.get('/', ValController.getValApi);

export { router as valApiRoute };
