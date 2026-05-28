import { LeaderboardScore, LeaderboardScoreWithRank } from '../entities/LeaderboardScore';

/**
 * Cumulative per-user score driving the leaderboard ladder. The on-chain
 * `LeaderboardRewards.WinRecorded(match, user, delta, newScore)` event is the
 * source of truth — repo upserts apply the delta atomically so concurrent
 * indexer ticks remain idempotent.
 */
export interface ILeaderboardScoreRepository {
    /** Apply `+delta` to the user's row (creates one at 0 if absent). */
    upsertScore(userAddress: string, delta: bigint): Promise<void>;

    getScoreForUser(userAddress: string): Promise<LeaderboardScore | null>;

    /** Rank (1-based) of the user in the global ladder, or null if score is 0. */
    getRank(userAddress: string): Promise<number | null>;

    /** Top N rows sorted by `total_score DESC`. */
    getTopN(limit: number): Promise<ReadonlyArray<LeaderboardScoreWithRank>>;

    // ── Per-cycle methods (monthly reset) ───────────────────────────────────
    // `cycle_id` mirrors the on-chain `epochIndex` at the time of the
    // WinRecorded event — see LeaderboardIndexer for the invariant.

    /** Apply `+delta` to the (cycle, user) row. Atomic via PL/pgSQL. */
    upsertCycleScore(cycleId: bigint, userAddress: string, delta: bigint): Promise<void>;

    getCycleScoreForUser(cycleId: bigint, userAddress: string): Promise<LeaderboardScore | null>;

    /** Rank (1-based) within the cycle, or null if user is absent / score is 0. */
    getCycleRank(cycleId: bigint, userAddress: string): Promise<number | null>;

    /** Top N rows of the given cycle, sorted by `score DESC`. */
    getTopNForCycle(cycleId: bigint, limit: number): Promise<ReadonlyArray<LeaderboardScoreWithRank>>;
}
