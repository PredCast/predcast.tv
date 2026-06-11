/**
 * GET /stats/platform — public aggregate counters for marketing surfaces.
 * USDC amounts are raw 6-decimals strings; callers format for display.
 */
export interface PlatformStatsDto {
    /** All-time SUM(stake_amount) across every indexed bet. */
    volumeStakedUsdc: string;
    /** COUNT of MarketResolved events indexed on-chain. */
    marketsResolved: number;
    /** Current LeaderboardRewards.openPrizePool() reading. */
    leaderboardPrizePoolUsdc: string;
    liveMatches: number;
    totalMatches: number;
}
