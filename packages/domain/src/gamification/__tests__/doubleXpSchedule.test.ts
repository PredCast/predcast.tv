import { describe, expect, it } from 'vitest';

import { validateDoubleXpEvent, type DoubleXpDraft, type DoubleXpWindow } from '../policies/doubleXpPolicy';
import {
    canCancelDoubleXp,
    doubleXpLookupRange,
    doubleXpMonthlyUsage,
    doubleXpStatusAt,
} from '../policies/doubleXpSchedule';

const H = 3_600_000;
const NOW = new Date('2027-04-10T10:00:00Z');
const at = (iso: string) => new Date(iso);
const SOURCES = ['check_in', 'watch', 'chat_message', 'stream_time'];

const window = (id: string, startIso: string, hours = 24, cancelledAt: Date | null = null): DoubleXpWindow => ({
    id,
    multiplier: 2,
    sources: SOURCES,
    startsAt: at(startIso),
    endsAt: new Date(at(startIso).getTime() + hours * H),
    cancelledAt,
});

describe('doubleXpStatusAt', () => {
    it('is upcoming before start, running on [start, end), ended after, cancelled first', () => {
        const e = window('a', '2027-04-10T10:00:00Z');
        expect(doubleXpStatusAt(e, at('2027-04-10T09:59:59Z'))).toBe('upcoming');
        expect(doubleXpStatusAt(e, at('2027-04-10T10:00:00Z'))).toBe('running');
        expect(doubleXpStatusAt(e, at('2027-04-11T10:00:00Z'))).toBe('ended');
        expect(doubleXpStatusAt({ ...e, cancelledAt: NOW }, at('2027-04-10T12:00:00Z'))).toBe('cancelled');
    });
});

describe('canCancelDoubleXp', () => {
    it('allows upcoming and running events only', () => {
        expect(canCancelDoubleXp(window('a', '2027-04-12T00:00:00Z'), NOW)).toEqual({ ok: true });
        expect(canCancelDoubleXp(window('b', '2027-04-10T00:00:00Z'), NOW)).toEqual({ ok: true });
        expect(canCancelDoubleXp(window('c', '2027-04-01T00:00:00Z'), NOW)).toEqual({ ok: false, error: 'ended' });
        expect(canCancelDoubleXp(window('d', '2027-04-12T00:00:00Z', 24, NOW), NOW)).toEqual({
            ok: false,
            error: 'already_cancelled',
        });
    });
});

describe('doubleXpLookupRange', () => {
    it('reaches every event of the Paris month and every overlap, so validation sees the same set', () => {
        // Draft on the last Paris evening of April; four events earlier in April (UTC+2).
        const draft: DoubleXpDraft = {
            multiplier: 2,
            sources: SOURCES,
            startsAt: at('2027-04-30T20:00:00Z'),
            endsAt: at('2027-05-01T20:00:00Z'),
        };
        const april = ['2027-03-31T22:00:00Z', '2027-04-08T08:00:00Z', '2027-04-15T08:00:00Z', '2027-04-22T08:00:00Z'].map(
            (iso, i) => window(`e${i}`, iso),
        );
        const { from, to } = doubleXpLookupRange(draft);
        const seen = april.filter((e) => e.startsAt < to && e.endsAt > from);
        expect(seen).toHaveLength(4);
        expect(validateDoubleXpEvent(draft, seen, at('2027-04-20T00:00:00Z'))).toEqual({ ok: false, error: 'monthly_limit' });
        expect(to.getTime()).toBeGreaterThanOrEqual(draft.endsAt.getTime());
    });
});

describe('doubleXpMonthlyUsage', () => {
    it('counts non-cancelled events per Paris month from the current month', () => {
        const usage = doubleXpMonthlyUsage(
            [
                window('past', '2027-03-10T10:00:00Z'),
                window('a', '2027-04-12T10:00:00Z'),
                window('b', '2027-04-20T10:00:00Z', 24, NOW),
                // 22:30 UTC on 30 April is already May in Paris.
                window('c', '2027-04-30T22:30:00Z'),
            ],
            NOW,
        );
        expect(usage).toEqual([
            { month: '2027-04', used: 1, limit: 4 },
            { month: '2027-05', used: 1, limit: 4 },
        ]);
    });

    it('always lists the current month', () => {
        expect(doubleXpMonthlyUsage([], NOW)).toEqual([{ month: '2027-04', used: 0, limit: 4 }]);
    });
});
