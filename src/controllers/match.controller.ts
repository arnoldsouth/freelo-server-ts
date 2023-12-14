// import axios from 'axios';
import { Request, Response } from 'express';
import { RiotService } from '../services/riot.service';

const riotService = new RiotService();

export const getMatchApi = async (_req: Request, res: Response) => {
  const data = {
    '/api/v1/match': 'good',
  };
  res.send(data).status(200);
};

export const getMatchList = async (req: Request, res: Response) => {
  try {
    const puuid = req.params.puuid;
    const matchList = await riotService.getMatchListByPuuid(puuid);

    res.json(matchList);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

export const getMatchData = async (req: Request, res: Response) => {
  try {
    const matchId = req.params.id;
    const matchData = await riotService.getMatchDataByMatchId(matchId);

    res.json(matchData);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

export const getMatchHistory = async (req: Request, res: Response) => {
  try {
    const puuid = req.params.puuid;
    const matchHistory = await riotService.getMatchHistoryByPuuid(puuid);

    res.json(matchHistory);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};
