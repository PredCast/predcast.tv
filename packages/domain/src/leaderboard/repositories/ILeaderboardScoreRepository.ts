import { LeaderboardScore, LeaderboardScoreWithRank } from '../entities/LeaderboardScore';

/** One `WinRecorded` event: `newEpochScore` is the on-chain epoch score after it. */
export interface LeaderboardWinEvent {
    readonly cycleId: bigint;
    readonly userAddress: string;
    readonly newEpochScore: bigint;
    readonly blockNumber: bigint;
    readonly logIndex: number;
}

/**
 * Per-user scores driving the leaderboard ladder, from `LeaderboardRewards.WinRecorded`.
 * Writes are replay-safe: re-indexing a range never counts an event twice (D6).
 */
export interface ILeaderboardScoreRepository {
    /**
     * Sets the (cycle, user) score from the latest event by chain position and recomputes the
     * lifetime score as the sum of the cycle scores. False when the event was already applied.
     */
    recordWin(event: LeaderboardWinEvent): Promise<boolean>;

    getScoreForUser(userAddress: string): Promise<LeaderboardScore | null>;

    /** Rank (1-based) of the user in the global ladder, or null if score is 0. */
    getRank(userAddress: string): Promise<number | null>;

    /** Top N rows sorted by `total_score DESC`. */
    getTopN(limit: number): Promise<ReadonlyArray<LeaderboardScoreWithRank>>;

    // ── Per-cycle methods (monthly reset) ───────────────────────────────────
    // `cycle_id` is the event's own `epochId` (the epoch of the market resolution).

    getCycleScoreForUser(cycleId: bigint, userAddress: string): Promise<LeaderboardScore | null>;

    /** Rank (1-based) within the cycle, or null if user is absent / score is 0. */
    getCycleRank(cycleId: bigint, userAddress: string): Promise<number | null>;

    /** Top N rows of the given cycle, sorted by `score DESC`. */
    getTopNForCycle(cycleId: bigint, limit: number): Promise<ReadonlyArray<LeaderboardScoreWithRank>>;
}
