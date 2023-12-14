import axios from 'axios';

const PLATFORM_BASE_URL = `https://na1.api.riotgames.com`;
const REGION_BASE_URL = `https://americas.api.riotgames.com`;

export const axiosInstancePlatformUrl = axios.create({
  baseURL: PLATFORM_BASE_URL,
  headers: {
    'X-Riot-Token': process.env.RIOT_API_KEY,
  },
});

export const axiosInstanceRegionUrl = axios.create({
  baseURL: REGION_BASE_URL,
  headers: { 'X-Riot-Token': process.env.RIOT_API_KEY },
});
