import { Request, Response } from 'express';

export const getApiBase = async (_req: Request, res: Response) => {
  res.status(200).json({ '/api/v1': 'ok' });
};
