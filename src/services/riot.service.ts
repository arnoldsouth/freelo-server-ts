import axios from 'axios';
import { SummonerDto } from '../interfaces/summoner.interface';
import { MatchDto, MatchListDto } from '../interfaces/match.interface';
// import axiosInstance from '../utils/axiosInstance';

const PLATFORM_BASE_URL = `https://na1.api.riotgames.com`;
const REGION_BASE_URL = `https://americas.api.riotgames.com`;

export class RiotService {
  async getSummonerByName(summonerName: string): Promise<SummonerDto> {
    const response = await axios.get(
      `/lol/summoner/v4/summoners/by-name/${summonerName}`,
      {
        baseURL: PLATFORM_BASE_URL,
        headers: { 'X-Riot-Token': process.env.RIOT_API_KEY },
      }
    );
    return response.data;
  }

  async getMatchListByPuuid(puuid: string): Promise<MatchListDto[]> {
    const response = await axios.get(
      `/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5`,
      {
        baseURL: REGION_BASE_URL,
        headers: { 'X-Riot-Token': process.env.RIOT_API_KEY },
      }
    );
    return response.data;
  }

  async getMatchDataByMatchId(matchId: string): Promise<MatchDto> {
    const response = await axios.get(`/lol/match/v5/matches/${matchId}`, {
      baseURL: REGION_BASE_URL,
      headers: { 'X-Riot-Token': process.env.RIOT_API_KEY },
    });
    return response.data;
  }

  async getMatchListDataByPuuid(puuid: string): Promise<MatchListDto[]> {
    const matchList = await this.getMatchListByPuuid(puuid);
    const matchListData = matchList.map((matchId: any) =>
      this.getMatchDataByMatchId(matchId)
    );

    // Need to convert MatchDto[] array to a MatchListDto[] array. Create a new instance of MatchListDto and assign the `matches` property with the MatchDto[] array
    const matches: MatchDto[] = await Promise.all(matchListData);
    const matchListDto: MatchListDto = { matches };

    console.log(matchListDto);
    // Return new array
    return [matchListDto];
  }
}
