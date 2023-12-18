import { axiosInstancePlatformUrl } from '../../utils/val/axiosInstance';

import {
  // ContentDto,
  LocalizedNamesDto,
} from '../../interfaces/val/content.interface';

export class RiotService {
  // VAL-CONTENT-V1

  // Get Valorant Content filtered by Locale
  async getContent(locale: string): Promise<LocalizedNamesDto> {
    const response = await axiosInstancePlatformUrl.get(
      `/val/content/v1/contents?locale=${locale}`,
      {
        headers: {
          'X-Riot-Token': process.env.RIOT_API_KEY,
        },
      }
    );
    return response.data;
  }
}
