import type { CycleScore } from '../policies/cycleSnapshotPolicy';

/** A leaderboard epoch closed on-chain (`leaderboard_epochs` confirmed or rolled over). */
export interface ClosedCycle {
    readonly cycleId: number;
    readonly closedAt: Date;
}

/** Read-only view of the leaderboard tables written by `LeaderboardIndexer`. */
export interface ILeaderboardCycleSource {
    /** Closed cycles with `epoch_id > afterCycleId` (all when null) and `closed_at ≥ closedFrom`, ascending. */
    listClosedCyclesAfter(afterCycleId: number | null, closedFrom: Date, limit: number): Promise<ReadonlyArray<ClosedCycle>>;
    /** `score > 0` rows of the cycle, `score DESC, user_address ASC`. */
    listTopScores(cycleId: number, limit: number): Promise<ReadonlyArray<CycleScore>>;
}
