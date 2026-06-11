import { apiClient } from './client';

/** Wire shape of GET /stats/platform (PlatformStatsDto in @chiliztv/shared). */
export interface PlatformStats {
  volumeStakedUsdc: string;
  marketsResolved: number;
  leaderboardPrizePoolUsdc: string;
  liveMatches: number;
  totalMatches: number;
}

export const statsApi = {
  getPlatform: () => apiClient.get<PlatformStats>('/stats/platform'),
};
