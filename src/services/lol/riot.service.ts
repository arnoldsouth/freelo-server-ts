import {
  axiosInstancePlatformUrl,
  axiosInstanceRegionUrl,
} from '../../utils/lol/axiosInstance';

import {
  LeagueItemDto,
  LeagueListDto,
} from '../../interfaces/lol/league.interface';
import { MatchDto } from '../../interfaces/lol/match.interface';
import { SummonerDto } from '../../interfaces/lol/summoner.interface';

export class RiotService {
  // SUMMONER-V4

  // Get Summoner Data (id, accountId, puuid, name, profileIconId, revisionDate, summonerLevel)
  async getSummonerByName(summonerName: string): Promise<SummonerDto> {
    const response = await axiosInstancePlatformUrl.get(
      `/lol/summoner/v4/summoners/by-name/${summonerName}?&api_key=${process.env.RIOT_API_KEY}`
    );
    return response.data;
  }

  // LEAGUE-V4

  // Get League Data by division, tier, queue (returns entries of of all players in a selected league by queue, tier, and division. Return each player's entry with their id, name, tier, rank, leaguePoints, wins, losses, veteran, inactive, freshBlood, hotStreak)
  async getLeagueExpByQueueTierDivision(
    queue: string,
    tier: string,
    division: string
  ): Promise<LeagueListDto> {
    const response = await axiosInstancePlatformUrl.get(
      // `/lol/league/v4/entries/${queue}/${tier}/${division}`,
      `/lol/league-exp/v4/entries/${queue}/${tier}/${division}?&api_key=${process.env.RIOT_API_KEY}`
    );
    return response.data;
  }

  // Get League Data by division, tier, queue (returns entries of of all players in a selected league by queue, tier, and division. Return each player's entry with their id, name, tier, rank, leaguePoints, wins, losses, veteran, inactive, freshBlood, hotStreak)
  async getLeagueByQueueTierDivision(
    queue: string,
    tier: string,
    division: string
  ): Promise<LeagueListDto> {
    const response = await axiosInstancePlatformUrl.get(
      // `/lol/league/v4/entries/${queue}/${tier}/${division}`,
      `/lol/league/v4/entries/${queue}/${tier}/${division}?&api_key=${process.env.RIOT_API_KEY}`
    );
    return response.data;
  }

  // Get Solo Queue Challenger Leaderboard
  async getLeaderboardChallengerByQueue(): Promise<LeagueListDto> {
    const response = await axiosInstancePlatformUrl.get(
      `/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?&api_key=${process.env.RIOT_API_KEY}`
    );
    return response.data;
  }

  // Get Solo Queue Grandmaster Leaderboard
  async getLeaderboardGrandmasterByQueue(): Promise<LeagueListDto> {
    const response = await axiosInstancePlatformUrl.get(
      `/lol/league/v4/grandmasterleagues/by-queue/RANKED_SOLO_5x5?&api_key=${process.env.RIOT_API_KEY}`
    );
    return response.data;
  }

  // Get Solo Queue Master Leaderboard
  async getLeaderboardMasterByQueue(): Promise<LeagueListDto> {
    const response = await axiosInstancePlatformUrl.get(
      `/lol/league/v4/masterleagues/by-queue/RANKED_SOLO_5x5?&api_key=${process.env.RIOT_API_KEY}`
    );
    return response.data;
  }

  // Get Summoner Rank
  async getSummonerLeagueDataById(summonerId: string): Promise<LeagueItemDto> {
    const response = await axiosInstancePlatformUrl.get(
      `/lol/league/v4/entries/by-summoner/${summonerId}?&api_key=${process.env.RIOT_API_KEY}`
    );
    return response.data;
  }

  // MATCH-V5

  // Get Summoner Recent Matches List (list of matchIds)
  async getMatchListByPuuid(puuid: string): Promise<string[]> {
    const response = await axiosInstanceRegionUrl.get(
      `/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${process.env.RIOT_API_KEY}`
    );
    return response.data;
  }

  // Get Match Data (data of one match by matchId)
  async getMatchDataByMatchId(matchId: string): Promise<MatchDto> {
    const response = await axiosInstanceRegionUrl.get(
      `/lol/match/v5/matches/${matchId}?&api_key=${process.env.RIOT_API_KEY}`
    );
    return response.data;
  }

  // Get Summoner Recent Matches History (match data of recent matches of a summoner using getMatchListByPuuid() and getMatchDataByMatchId() methods)
  async getMatchHistoryByPuuid(puuid: string): Promise<MatchDto[]> {
    const matchList = await this.getMatchListByPuuid(puuid);
    const matchHistory = matchList.map((matchId) =>
      this.getMatchDataByMatchId(matchId)
    );

    return await Promise.all(matchHistory);
  }
}
