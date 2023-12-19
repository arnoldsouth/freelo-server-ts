export interface LeaderboardDto {
  shardId: string;
  actId: string;
  totalPlayers: number;
  players: PlayerDto[];
}

export interface PlayerDto {
  puuid: string;
  gameName: string;
  tagLine: string;
  leaderboardRank: number;
  rankedRating: number;
  numberOfWins: number;
}
