export interface LeagueListDto {
  leagueId: string;
  entries: LeagueItemDto[];
  tier: string;
  name: string;
  queue: string;
}

export interface LeagueItemDto {
  freshBlood: boolean;
  wins: number;
  summonerName: string;
  miniSeries: {
    losses: number;
    progress: string;
    target: number;
    wins: number;
  };
  inactive: boolean;
  veteran: boolean;
  hotStreak: boolean;
  rank: string;
  leaguePoints: number;
  losses: number;
  summonerId: string;
}

export interface LeagueEntryDto {
  leagueId: string;
  summonerId: string;
  summonerName: string;
  queueType: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  hotStreak: boolean;
  veteran: boolean;
  freshBlood: boolean;
  inactive: boolean;
  miniSeries: {
    losses: number;
    progress: string;
    target: number;
    wins: number;
  };
}
