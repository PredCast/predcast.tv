import { DOUBLE_XP_MAX_PER_MONTH } from '../catalog/constants';
import type { DoubleXpDraft, DoubleXpWindow } from './doubleXpPolicy';
import { parisMonthOf } from './parisDay';

const MS_PER_DAY = 86_400_000;
/** Longer than any Paris month, DST included. */
const MONTH_REACH_MS = 32 * MS_PER_DAY;

export type DoubleXpStatus = 'upcoming' | 'running' | 'ended' | 'cancelled';

export function doubleXpStatusAt(event: DoubleXpWindow, now: Date): DoubleXpStatus {
    if (event.cancelledAt !== null) return 'cancelled';
    const t = now.getTime();
    if (t < event.startsAt.getTime()) return 'upcoming';
    return t < event.endsAt.getTime() ? 'running' : 'ended';
}

/**
 * Range whose intersecting events are enough for `validateDoubleXpEvent`: every event starting in
 * the draft's Paris month, and every event overlapping the draft.
 */
export function doubleXpLookupRange(draft: DoubleXpDraft): { readonly from: Date; readonly to: Date } {
    const start = draft.startsAt.getTime();
    return {
        from: new Date(start - MONTH_REACH_MS),
        to: new Date(Math.max(draft.endsAt.getTime(), start + MONTH_REACH_MS)),
    };
}

export type DoubleXpCancellation = { readonly ok: true } | { readonly ok: false; readonly error: 'already_cancelled' | 'ended' };

/** An ended event cannot be cancelled: it would free a monthly slot after the fact. */
export function canCancelDoubleXp(event: DoubleXpWindow, now: Date): DoubleXpCancellation {
    const status = doubleXpStatusAt(event, now);
    if (status === 'cancelled') return { ok: false, error: 'already_cancelled' };
    if (status === 'ended') return { ok: false, error: 'ended' };
    return { ok: true };
}

export interface DoubleXpMonthUsage {
    /** Paris `YYYY-MM`. */
    readonly month: string;
    readonly used: number;
    readonly limit: number;
}

/** Monthly quota used by non-cancelled events, from the Paris month of `now` onwards. */
export function doubleXpMonthlyUsage(events: ReadonlyArray<DoubleXpWindow>, now: Date): ReadonlyArray<DoubleXpMonthUsage> {
    const current = parisMonthOf(now);
    const counts = new Map<string, number>([[current, 0]]);
    for (const event of events) {
        if (event.cancelledAt !== null) continue;
        const month = parisMonthOf(event.startsAt);
        if (month < current) continue;
        counts.set(month, (counts.get(month) ?? 0) + 1);
    }
    return [...counts.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([month, used]) => ({ month, used, limit: DOUBLE_XP_MAX_PER_MONTH }));
}
