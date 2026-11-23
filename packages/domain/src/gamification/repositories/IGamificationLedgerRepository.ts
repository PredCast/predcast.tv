import type { GamificationSource, LedgerReason, ProgressMetric } from '../catalog/sources';
import type { LedgerEntry } from '../entities/LedgerEntry';
import type { ParisDay } from '../policies/parisDay';
import type { StreakState } from '../policies/streakPolicy';

/** Progress moved together with the idempotent ledger insert. */
export type ProgressDelta =
    | { readonly metric: ProgressMetric; readonly delta: number; readonly dailyCap?: number }
    | { readonly metric: ProgressMetric; readonly item: string };

export interface CreditRequest {
    readonly accountId: string;
    readonly source: GamificationSource;
    readonly refKey: string;
    readonly day: ParisDay;
    readonly occurredAt: Date;
    readonly requestedXp: number;
    /** Base-XP cap of the day; null = uncapped. */
    readonly dailyCap: number | null;
    readonly multiplier: number;
    readonly doubleXpEventId: string | null;
    /** Non-null forces 0 XP (banned, suspended, hedge…). */
    readonly reason: LedgerReason | null;
    /** `progressUndo` lists the deltas a reversal subtracts (bet volume, chat, stream minutes). */
    readonly metadata: Readonly<Record<string, unknown>>;
    readonly progress: ReadonlyArray<ProgressDelta>;
}

export type CreditResult =
    | { readonly inserted: false; readonly newTotal: number; readonly level: number }
    | {
          readonly inserted: true;
          readonly ledgerId: number;
          readonly creditedXp: number;
          readonly newTotal: number;
          readonly oldLevel: number;
          readonly newLevel: number;
          /** `level_peak` before the credit: a level-up notifies only above it. */
          readonly previousPeak: number;
      };

export type ReverseResult =
    | { readonly reversed: false }
    | { readonly reversed: true; readonly reversedXp: number; readonly newTotal: number };

/** Streak computed by `applyCheckIn`, persisted with compare-and-set on `expectedLastDay`. */
export interface CheckInWrite {
    readonly accountId: string;
    readonly day: ParisDay;
    readonly now: Date;
    readonly expectedLastDay: ParisDay | null;
    readonly streak: StreakState;
    readonly xp: number;
    readonly multiplier: number;
    readonly doubleXpEventId: string | null;
}

export type CheckInWriteResult =
    | { readonly applied: false }
    | {
          readonly applied: true;
          readonly creditedXp: number;
          readonly newTotal: number;
          readonly oldLevel: number;
          readonly newLevel: number;
          readonly previousPeak: number;
      };

/** Append-only XP ledger (`gamification_credit`, `_reverse`, `_check_in`). No update, no delete. */
export interface IGamificationLedgerRepository {
    credit(request: CreditRequest): Promise<CreditResult>;
    /** Writes `rev:{refKey}` with the opposite XP; a second call is a no-op. */
    reverse(refKey: string, reason: LedgerReason, occurredAt: Date): Promise<ReverseResult>;
    checkIn(write: CheckInWrite): Promise<CheckInWriteResult>;
    findByRefKey(refKey: string): Promise<LedgerEntry | null>;
    /**
     * Latest non-reversed row of the source that counted, daily-capped rows included (chat
     * duplicate and interval checks); rows zeroed by a ban or a suspension are ignored.
     */
    findLastCredited(accountId: string, source: GamificationSource): Promise<LedgerEntry | null>;
    /** `bet_volume` rows of a market not reversed yet; `isReversibleCredit` picks the ones to cancel. */
    listVolumeRowsByMarket(marketKey: string): Promise<ReadonlyArray<LedgerEntry>>;
    /** `stream_time` rows of a session not reversed yet (`stop_stream`). */
    listReversibleByStream(streamId: string): Promise<ReadonlyArray<string>>;
    /** Net XP per source on a Paris day (owner dashboard). */
    sumXpBySourceOnDay(accountId: string, day: ParisDay): Promise<Readonly<Partial<Record<GamificationSource, number>>>>;
    /** Keyset on id DESC. */
    listForAccount(accountId: string, beforeId: number | null, limit: number): Promise<ReadonlyArray<LedgerEntry>>;
}
