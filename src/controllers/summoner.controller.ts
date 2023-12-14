import { Request, Response } from 'express';
import { RiotService } from '../services/riot.service';

const riotService = new RiotService();

export const getSummonerApi = (_req: Request, res: Response) => {
  const data = {
    '/api/v1/summoner': 'good',
  };
  res.send(data).status(200);
};

export const getSummonerData = async (req: Request, res: Response) => {
  try {
    const summonerName = req.params.name;
    const summoner = await riotService.getSummonerByName(summonerName);
    res.json(summoner);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};
