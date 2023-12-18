import { axiosInstanceDDragonUrl } from '../../utils/lol/axiosInstance';

export class DdragonService {
  async getLatestVersion() {
    const response = await axiosInstanceDDragonUrl.get(`/api/versions.json`);

    return response.data[0];
  }

  async getProfileIcon(profileIconId: number) {
    const version = await this.getLatestVersion();
    const response = `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${profileIconId}.png`;

    return response;
  }
}
