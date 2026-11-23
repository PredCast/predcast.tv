import type { GamificationSource, LedgerReason } from '../catalog/sources';
import type { ParisDay } from '../policies/parisDay';

/** One append-only row of `gamification_ledger`; reversals are new rows with a negative `xp`. */
export interface LedgerEntry {
    readonly id: number;
    readonly accountId: string;
    readonly source: GamificationSource;
    readonly refKey: string;
    readonly day: ParisDay;
    readonly occurredAt: Date;
    readonly requestedXp: number;
    readonly baseXp: number;
    readonly multiplier: number;
    readonly xp: number;
    readonly doubleXpEventId: string | null;
    readonly reversesId: number | null;
    readonly reason: LedgerReason | null;
    readonly metadata: Readonly<Record<string, unknown>>;
    readonly createdAt: Date;
}
