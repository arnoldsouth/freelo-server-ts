import { Request, Response } from 'express';
import { RiotService } from '../../services/lol/riot.service';
import { DdragonService } from '../../services/lol/ddragon.service';

const riotService = new RiotService();
const ddragonService = new DdragonService();

export const getSummonerApi = (_req: Request, res: Response) => {
  const data = {
    '/summoner': 'good',
  };
  res.send(data).status(200);
};

// Get Summoner Data (id, accountId, puuid, name, profileIconId, revisionDate, summonerLevel)
export const getSummonerData = async (req: Request, res: Response) => {
  try {
    const summonerName = req.params.summonerName;
    const summonerData = await riotService.getSummonerByName(summonerName);

    res.json(summonerData);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

export const getSummonerProfileIcon = async (req: Request, res: Response) => {
  try {
    const summonerName = req.params.summonerName;
    const summonerData = await riotService.getSummonerByName(summonerName);
    const profileIconId = summonerData.profileIconId;
    const profileIcon = await ddragonService.getProfileIcon(profileIconId);
    res.json({ profileIcon });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

// Get Summoner Rank
export const getSummonerLeagueData = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const summonerLeagueData = await riotService.getSummonerLeagueDataById(id);
    res.json(summonerLeagueData);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};
