import { Request, Response } from 'express';
import { RiotService } from '../services/riot.service';
import { DdragonService } from '../services/ddragon.service';

const riotService = new RiotService();
const ddragonService = new DdragonService();

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

export const getSummonerProfileIcon = async (req: Request, res: Response) => {
  try {
    const summonerName = req.params.name;
    const summoner = await riotService.getSummonerByName(summonerName);
    const profileIconId = summoner.profileIconId;
    const profileIcon = await ddragonService.getProfileIcon(profileIconId);
    res.json({ profileIcon });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};
