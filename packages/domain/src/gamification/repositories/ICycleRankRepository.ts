import type { CycleRank } from '../entities/CycleRank';

/** `gamification_cycle_ranks`: top 100 frozen per closed cycle. */
export interface ICycleRankRepository {
    /** Idempotent on `(cycle_id, wallet)`. */
    saveSnapshot(ranks: ReadonlyArray<CycleRank>): Promise<void>;
    findLastSnapshottedCycleId(): Promise<number | null>;
    /** Best rank over every snapshotted cycle, among the account's wallets. */
    findBestRankForAccount(accountId: string): Promise<{ readonly cycleId: number; readonly rank: number } | null>;
    /** Rank-1 account of the last snapshotted cycle: the current Crown holder. */
    findCrownHolder(): Promise<{ readonly cycleId: number; readonly accountId: string | null } | null>;
    /** Cycles the account won, latest first (title `cycle_champion`). */
    listWonCycles(accountId: string): Promise<ReadonlyArray<number>>;
}
