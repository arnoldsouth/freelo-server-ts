import { Request, Response } from 'express';
import { RiotService } from '../../services/lol/riot.service';

const riotService = new RiotService();

export const getLeagueApi = async (_req: Request, res: Response) => {
  const data = {
    '/league': 'good',
  };
  res.send(data).status(200);
};

// Get League Data by division, tier, queue (INCLUDES ALL LEAGUE QUEUES) (returns entries of of all players in a selected league by queue, tier, and division. Return each player's entry with their id, name, tier, rank, leaguePoints, wins, losses, veteran, inactive, freshBlood, hotStreak)
export const getLeagueExp = async (req: Request, res: Response) => {
  try {
    const queue = req.params.queue;
    const tier = req.params.tier;
    const division = req.params.division;
    const league = await riotService.getLeagueExpByQueueTierDivision(
      queue,
      tier,
      division
    );
    res.json(league);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

// Get League Data by division, tier, queue (DIAMOND AND BELOW ONLY) (returns entries of of all players in a selected league by queue, tier, and division. Return each player's entry with their id, name, tier, rank, leaguePoints, wins, losses, veteran, inactive, freshBlood, hotStreak)
export const getLeague = async (req: Request, res: Response) => {
  try {
    const queue = req.params.queue;
    const tier = req.params.tier;
    const division = req.params.division;
    const league = await riotService.getLeagueByQueueTierDivision(
      queue,
      tier,
      division
    );
    res.json(league);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

// Get Solo Queue Challenger Leaderboard
export const getLeaderboardChallenger = async (
  _req: Request,
  res: Response
) => {
  try {
    const leaderboard = await riotService.getLeaderboardChallengerByQueue();
    res.json(leaderboard);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

// Get Solo Queue Grandmaster Leaderboard
export const getLeaderboardGrandmaster = async (
  _req: Request,
  res: Response
) => {
  try {
    const leaderboard = await riotService.getLeaderboardGrandmasterByQueue();
    res.json(leaderboard);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

// Get Solo Queue Grandmaster Leaderboard
export const getLeaderboardMaster = async (_req: Request, res: Response) => {
  try {
    const leaderboard = await riotService.getLeaderboardMasterByQueue();
    res.json(leaderboard);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

// export const getSummonerLeagueData = async (req: Request, res: Response) => {
//   try {
//     const summonerId = req.params.id;
//     const summonerLeagueData =
//       await riotService.getSummonerLeagueDataBySummonerId(summonerId);
//     res.json(summonerLeagueData);
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json(error.message);
//       return;
//     }
//   }
// };
