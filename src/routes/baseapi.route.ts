import { Router } from 'express';

import * as BaseApiController from '../controllers/baseapi.controller';

const router = Router();

router.get('/', BaseApiController.getBaseApi);

export { router as baseApiRoute };
