import { Request, Response } from 'express';

export const getBaseApi = async (_req: Request, res: Response) => {
  const data = {
    '/api/v1': 'good',
  };
  res.send(data).status(200);
};
