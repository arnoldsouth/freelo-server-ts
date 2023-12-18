import axios from 'axios';

const PLATFORM_BASE_URL = `https://na.api.riotgames.com`;

export const axiosInstancePlatformUrl = axios.create({
  baseURL: PLATFORM_BASE_URL,
  headers: {
    'X-Riot-Token': process.env.RIOT_API_KEY,
  },
});
