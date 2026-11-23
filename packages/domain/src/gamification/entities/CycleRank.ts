/** Frozen top-100 rank of a wallet in a closed leaderboard cycle (`gamification_cycle_ranks`). */
export interface CycleRank {
    readonly cycleId: number;
    readonly wallet: string;
    readonly accountId: string | null;
    readonly rank: number;
    readonly score: bigint;
    readonly frozenAt: Date;
}
