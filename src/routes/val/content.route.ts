import { Router } from 'express';

import * as ContentController from '../../controllers/val/content.controller';

const router = Router();

router.get('/', ContentController.getContentApi);
router.get('/:locale', ContentController.getContent);

export { router as contentRoute };
