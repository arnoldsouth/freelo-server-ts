import { Request, Response } from 'express';
import { RiotService } from '../../services/val/riot.service';

const riotService = new RiotService();

export const getContentApi = (_req: Request, res: Response) => {
  const data = {
    '/content': 'good',
  };
  res.send(data).status(200);
};

export const getContent = async (req: Request, res: Response) => {
  try {
    const locale = req.params.locale;
    const content = await riotService.getContentByLocale(locale);

    riotService.getLeaderboardByActiveActId(locale);
    res.json(content);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};
