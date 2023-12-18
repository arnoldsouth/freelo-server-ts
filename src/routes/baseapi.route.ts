import { Router } from 'express';

import * as BaseController from '../controllers/baseapi.controller';

const router = Router();

router.get('/', BaseController.getBaseApi);

export { router as baseApiRoute };
