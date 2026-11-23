import type { ProgressMetric } from '../catalog/sources';
import type { LedgerEntry } from '../entities/LedgerEntry';

/** One delta a reversal subtracts (`metadata.progressUndo`, read by `gamification_reverse`). */
export interface ProgressUndo {
    readonly metric: ProgressMetric;
    readonly delta: number;
}

/** `metadata.progressUndo` of a reversible credit; empty when nothing moved. */
export function progressUndo(metric: ProgressMetric, delta: number): ReadonlyArray<ProgressUndo> {
    return delta > 0 ? [{ metric, delta }] : [];
}

function hasProgressUndo(metadata: Readonly<Record<string, unknown>>): boolean {
    const undo = metadata.progressUndo;
    if (!Array.isArray(undo)) return false;
    return undo.some((u: unknown) => {
        if (typeof u !== 'object' || u === null || !('delta' in u)) return false;
        const { delta } = u;
        return typeof delta === 'number' && delta > 0;
    });
}

/**
 * Whether a cancellation or a moderation removal must reverse this row: an original row that moved
 * XP or progress. Rows zeroed by a ban or a suspension moved nothing (§3.1 rule 7).
 */
export function isReversibleCredit(entry: Pick<LedgerEntry, 'xp' | 'reason' | 'reversesId' | 'metadata'>): boolean {
    if (entry.reversesId !== null) return false;
    if (entry.reason === 'banned' || entry.reason === 'suspended') return false;
    return entry.xp > 0 || hasProgressUndo(entry.metadata);
}
