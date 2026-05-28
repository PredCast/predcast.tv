import { z } from 'zod';

/** One row in the top-N ladder. */
export const LeaderboardEntrySchema = z.object({
    rank: z.number().int().min(1),
    userAddress: z.string(),
    /** bigint decimal string — score units are USDC payouts won (6 dp). */
    totalScore: z.string(),
    /** Display name resolved from the profiles table; null when only the address is known. */
    username: z.string().nullable(),
    /** Avatar URL when the user has set one; null falls back to initials. */
    avatarUrl: z.string().nullable(),
});
export type LeaderboardEntry = z.infer<typeof LeaderboardEntrySchema>;

export const LeaderboardTopDtoSchema = z.object({
    entries: z.array(LeaderboardEntrySchema),
    /** Snapshot of the current accumulating prize pool on the contract. */
    currentPrizePool: z.string(),
    /** Live epoch index (none yet → null before the first `closeEpoch`). */
    currentEpochId: z.number().int().nullable(),
    /**
     * Total USDC staked across every market since the previous epoch closed
     * (or all-time if no epoch has closed yet). Raw 6-decimal bigint string.
     */
    currentEpochVolume: z.string(),
    /** Number of top-N winners the CLI distributes to — mirror of `LEADERBOARD_TOP_N`. */
    topN: z.number().int().positive(),
    /** Claim window length applied at the next `closeEpoch` — mirror of `LEADERBOARD_CLAIM_DURATION_DAYS`. */
    claimDurationDays: z.number().int().positive(),
    /** ISO 8601 UTC timestamp of the next scheduled cycle close. Drives the countdown UI. */
    cycleEndsAt: z.string(),
});
export type LeaderboardTopDto = z.infer<typeof LeaderboardTopDtoSchema>;
