import { Request, Response } from 'express';

export const getBaseApi = async (_req: Request, res: Response) => {
  const data = {
    '/': 'good',
  };
  res.send(data).status(200);
};
