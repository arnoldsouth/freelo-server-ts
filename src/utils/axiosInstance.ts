import axios from 'axios';

const BASE_URL = `https://na1.api.riotgames.com`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'X-Riot-Token': process.env.RIOT_API_KEY },
});

export default axiosInstance;
