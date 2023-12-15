import { Request, Response } from 'express';
import { RiotService } from '../services/riot.service';

const riotService = new RiotService();

export const getLeagueApi = async (_req: Request, res: Response) => {
  const data = {
    '/api/v1/league': 'good',
  };
  res.send(data).status(200);
};

export const getLeaderboard = async (_req: Request, res: Response) => {
  try {
    const leaderboard = await riotService.getLeaderboardByQueue();
    res.json(leaderboard);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

export const getSummonerLeagueData = async (req: Request, res: Response) => {
  try {
    const summonerId = req.params.id;
    const summonerLeagueData =
      await riotService.getSummonerLeagueDataBySummonerId(summonerId);
    res.json(summonerLeagueData);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};
