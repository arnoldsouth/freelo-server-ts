import { axiosInstancePlatformUrl } from '../../utils/val/axiosInstance';

import { ActDto, ContentDto } from '../../interfaces/val/content.interface';

export class RiotService {
  // VAL-CONTENT-V1

  // Get Valorant Content filtered by Locale
  async getContentByLocale(locale: string): Promise<ContentDto> {
    const response = await axiosInstancePlatformUrl.get(
      `/val/content/v1/contents?locale=${locale}&api_key=${process.env.RIOT_API_KEY}`
    );
    return response.data;
  }

  async getLeaderboardByActId(actId: string): Promise<ContentDto> {
    const response = await axiosInstancePlatformUrl.get(
      `/val/ranked/v1/leaderboards/by-act/${actId}?size=200&startIndex=0&api_key=${process.env.RIOT_API_KEY}`
    );
    return response.data;
  }

  // async getActiveActIdByLocale(locale: string): Promise<ContentDto> {
  async getActiveActIdByLocale(locale: string): Promise<string> {
    const response = await axiosInstancePlatformUrl.get(
      `/val/content/v1/contents?locale=${locale}&api_key=${process.env.RIOT_API_KEY}`
    );
    const activeAct = response.data.acts.find((act: ActDto) => act.isActive);
    const activeActId = activeAct?.id;
    // console.log(activeActId);

    return activeActId;
  }

  async getLeaderboardByActiveActId(locale: string): Promise<ContentDto> {
    const actId = await this.getActiveActIdByLocale(locale);
    const leaderboard = await this.getLeaderboardByActId(actId);
    // console.log(leaderboard);

    return leaderboard;
  }
}
