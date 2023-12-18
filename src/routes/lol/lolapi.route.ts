import { Router } from 'express';
import * as LolController from '../../controllers/lol/lolapi.controller';

const router = Router();

router.get('/', LolController.getLolApi);

export { router as lolApiRoute };
