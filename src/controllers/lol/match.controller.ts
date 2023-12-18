// import axios from 'axios';
import { Request, Response } from 'express';
import { RiotService } from '../../services/lol/riot.service';

const riotService = new RiotService();

export const getMatchApi = async (_req: Request, res: Response) => {
  const data = {
    '/match': 'good',
  };
  res.send(data).status(200);
};

// Get Summoner Recent Matches List (list of matchIds)
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

// Get Match Data (match data of one match by matchId)
export const getMatchData = async (req: Request, res: Response) => {
  try {
    const matchId = req.params.matchId;
    const matchData = await riotService.getMatchDataByMatchId(matchId);

    res.json(matchData);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

// Get Summoner Recent Matches History (match data of recent matches of a summoner using getMatchListByPuuid() and getMatchDataByMatchId() methods)
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
