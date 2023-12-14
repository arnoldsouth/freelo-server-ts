import { Request, Response } from 'express';

export const getApiBase = async (_req: Request, res: Response) => {
  const data = {
    '/api/v1': 'good',
  };
  res.send(data).status(200);
};
