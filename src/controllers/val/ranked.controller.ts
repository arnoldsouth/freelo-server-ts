import { Request, Response } from 'express';
import { RiotService } from '../../services/val/riot.service';

const riotService = new RiotService();

export const getRankedApi = (_req: Request, res: Response) => {
  const data = {
    '/ranked': 'good',
  };

  res.send(data).status(200);
};

export const getLeaderboard = async (req: Request, res: Response) => {
  try {
    const actId = req.params.actId;
    const leaderboard = await riotService.getLeaderboardByActId(actId);

    res.json(leaderboard);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};

export const getActiveLeaderboard = async (req: Request, res: Response) => {
  try {
    const locale = req.params.locale;
    const activeLeaderboard = await riotService.getLeaderboardByActiveActId(
      locale
    );
    // console.log(activeLeaderboard);

    res.json(activeLeaderboard);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
      return;
    }
  }
};
