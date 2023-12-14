import express from 'express';
import { getApiBase } from '../controllers/apibase.controller';

const router = express.Router();

router.get('/', getApiBase);

export { router as apiBaseRoute };
