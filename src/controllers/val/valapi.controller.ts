import { Request, Response } from 'express';

export const getValApi = async (_req: Request, res: Response) => {
  const data = {
    '/': 'good',
  };
  res.send(data).status(200);
};
