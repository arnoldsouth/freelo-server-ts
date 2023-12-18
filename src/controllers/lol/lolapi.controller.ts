import { Request, Response } from 'express';

export const getLolApi = async (_req: Request, res: Response) => {
  const data = {
    '/': 'good',
  };
  res.send(data).status(200);
};
