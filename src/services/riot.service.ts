import { LeagueItemDto, LeagueListDto } from '../interfaces/league.interface';
import { MatchDto } from '../interfaces/match.interface';
import { SummonerDto } from '../interfaces/summoner.interface';
import {
  axiosInstancePlatformUrl,
  axiosInstanceRegionUrl,
} from '../utils/axiosInstance';

export class RiotService {
  // SUMMONER-V4
  async getSummonerByName(summonerName: string): Promise<SummonerDto> {
    const response = await axiosInstancePlatformUrl.get(
      `/lol/summoner/v4/summoners/by-name/${summonerName}`,
      {
        headers: {
          'X-Riot-Token': process.env.RIOT_API_KEY,
        },
      }
    );
    return response.data;
  }

  // LEAGUE-V4
  async getLeaderboardByQueue(): Promise<LeagueListDto> {
    const response = await axiosInstancePlatformUrl.get(
      `/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5`,
      {
        headers: { 'X-Riot-Token': process.env.RIOT_API_KEY },
      }
    );
    return response.data;
  }

  async getSummonerLeagueDataBySummonerId(
    summonerId: string
  ): Promise<LeagueItemDto> {
    const response = await axiosInstancePlatformUrl.get(
      `/lol/league/v4/entries/by-summoner/${summonerId}`,
      {
        headers: { 'X-Riot-Token': process.env.RIOT_API_KEY },
      }
    );
    return response.data;
  }

  // MATCH-V5
  async getMatchListByPuuid(puuid: string): Promise<string[]> {
    const response = await axiosInstanceRegionUrl.get(
      `/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5`,
      {
        headers: { 'X-Riot-Token': process.env.RIOT_API_KEY },
      }
    );
    return response.data;
  }

  async getMatchDataByMatchId(matchId: string): Promise<MatchDto> {
    const response = await axiosInstanceRegionUrl.get(
      `/lol/match/v5/matches/${matchId}`,
      {
        headers: { 'X-Riot-Token': process.env.RIOT_API_KEY },
      }
    );
    return response.data;
  }

  async getMatchHistoryByPuuid(puuid: string): Promise<MatchDto[]> {
    const matchList = await this.getMatchListByPuuid(puuid);
    const matchHistory = matchList.map((matchId) =>
      this.getMatchDataByMatchId(matchId)
    );

    return await Promise.all(matchHistory);
  }
}
