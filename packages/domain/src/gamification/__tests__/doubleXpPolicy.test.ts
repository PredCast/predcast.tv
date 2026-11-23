import { describe, expect, it } from 'vitest';

import { LEGAL_SWITCHES } from '../catalog/legalSwitches';
import { SOURCE_RULES } from '../catalog/sources';
import { checkInXp } from '../policies/checkInXp';
import {
    computeCreditedXp,
    isValidDoubleXpMultiplier,
    multiplierAt,
    validateDoubleXpEvent,
    type DoubleXpDraft,
    type DoubleXpWindow,
} from '../policies/doubleXpPolicy';

const H = 3_600_000;
const NOW = new Date('2027-04-01T10:00:00Z');
const plus = (hours: number, from: Date = NOW) => new Date(from.getTime() + hours * H);
const SOURCES = ['check_in', 'watch', 'chat_message', 'stream_time'];

const draft = (startHours: number, durationHours = 24, overrides: Partial<DoubleXpDraft> = {}): DoubleXpDraft => ({
    multiplier: 2,
    sources: SOURCES,
    startsAt: plus(startHours),
    endsAt: plus(startHours + durationHours),
    ...overrides,
});
const event = (id: string, d: DoubleXpDraft, cancelledAt: Date | null = null): DoubleXpWindow => ({ id, cancelledAt, ...d });

describe('isValidDoubleXpMultiplier', () => {
    it('accepts 1.25 to 2 by steps of 0.25', () => {
        expect([1.25, 1.5, 1.75, 2].every(isValidDoubleXpMultiplier)).toBe(true);
        expect([1, 0.75, 1.1, 2.25, 3].some(isValidDoubleXpMultiplier)).toBe(false);
    });
});

describe('validateDoubleXpEvent (CA14)', () => {
    it('accepts a valid event', () => {
        expect(validateDoubleXpEvent(draft(48), [], NOW)).toEqual({ ok: true });
    });

    it('requires 24 h of notice', () => {
        expect(validateDoubleXpEvent(draft(23.99), [], NOW)).toEqual({ ok: false, error: 'notice_too_short' });
        expect(validateDoubleXpEvent(draft(24), [], NOW)).toEqual({ ok: true });
    });

    it('lasts at most 72 h and ends after it starts', () => {
        expect(validateDoubleXpEvent(draft(48, 72), [], NOW)).toEqual({ ok: true });
        expect(validateDoubleXpEvent(draft(48, 72.001), [], NOW)).toEqual({ ok: false, error: 'too_long' });
        expect(validateDoubleXpEvent(draft(48, 0), [], NOW)).toEqual({ ok: false, error: 'invalid_window' });
    });

    it('refuses bet sources and empty or invalid settings', () => {
        expect(validateDoubleXpEvent(draft(48, 24, { sources: ['check_in', 'bet_volume'] }), [], NOW))
            .toEqual({ ok: false, error: 'ineligible_source' });
        expect(validateDoubleXpEvent(draft(48, 24, { sources: [] }), [], NOW)).toEqual({ ok: false, error: 'empty_sources' });
        expect(validateDoubleXpEvent(draft(48, 24, { multiplier: 3 }), [], NOW)).toEqual({ ok: false, error: 'invalid_multiplier' });
    });

    it('refuses an overlap on [start, end) but allows back-to-back and cancelled events', () => {
        const existing = [event('a', draft(48, 24))];
        expect(validateDoubleXpEvent(draft(60, 24), existing, NOW)).toEqual({ ok: false, error: 'overlap' });
        expect(validateDoubleXpEvent(draft(72, 24), existing, NOW)).toEqual({ ok: true });
        expect(validateDoubleXpEvent(draft(60, 24), [event('a', draft(48, 24), NOW)], NOW)).toEqual({ ok: true });
    });

    it('allows 4 events per Paris calendar month, the 5th is refused', () => {
        const april = (day: number) => new Date(`2027-04-${String(day).padStart(2, '0')}T08:00:00Z`);
        const existing = [3, 8, 13, 18].map((day, i) =>
            event(`e${i}`, { multiplier: 2, sources: SOURCES, startsAt: april(day), endsAt: plus(24, april(day)) }),
        );
        const fifth = { multiplier: 2, sources: SOURCES, startsAt: april(25), endsAt: plus(24, april(25)) };
        expect(validateDoubleXpEvent(fifth, existing, NOW)).toEqual({ ok: false, error: 'monthly_limit' });
        // 2027-04-30 22:30Z is already May in Paris: a new month.
        const mayInParis = { ...fifth, startsAt: new Date('2027-04-30T22:30:00Z'), endsAt: new Date('2027-05-01T22:30:00Z') };
        expect(validateDoubleXpEvent(mayInParis, existing, NOW)).toEqual({ ok: true });
        const withCancelled = [...existing.slice(0, 3), { ...existing[3], cancelledAt: NOW }];
        expect(validateDoubleXpEvent(fifth, withCancelled, NOW)).toEqual({ ok: true });
    });

    it('refuses everything when the legal switch is off', () => {
        expect(validateDoubleXpEvent(draft(48), [], NOW, { ...LEGAL_SWITCHES, doubleXp: 'disabled' }))
            .toEqual({ ok: false, error: 'disabled' });
    });
});

describe('multiplierAt', () => {
    const live = event('live', draft(48, 24, { multiplier: 1.5, sources: ['check_in', 'chat_message'] }));

    it('applies on [startsAt, endsAt)', () => {
        expect(multiplierAt([live], 'check_in', plus(48))).toEqual({ multiplier: 1.5, eventId: 'live' });
        expect(multiplierAt([live], 'check_in', plus(71.99))).toEqual({ multiplier: 1.5, eventId: 'live' });
        expect(multiplierAt([live], 'check_in', plus(72))).toEqual({ multiplier: 1, eventId: null });
        expect(multiplierAt([live], 'check_in', plus(47.99))).toEqual({ multiplier: 1, eventId: null });
    });

    it('only boosts the listed eligible sources', () => {
        expect(multiplierAt([live], 'watch', plus(50)).multiplier).toBe(1);
        const forged = event('forged', draft(48, 24, { sources: ['bet_volume'] }));
        expect(multiplierAt([forged], 'bet_volume', plus(50)).multiplier).toBe(1);
    });

    it('stops at the cancellation without touching earlier credits', () => {
        const cancelled = { ...live, cancelledAt: plus(60) };
        expect(multiplierAt([cancelled], 'check_in', plus(59)).multiplier).toBe(1.5);
        expect(multiplierAt([cancelled], 'check_in', plus(60)).multiplier).toBe(1);
    });

    it('is neutral when the legal switch is off', () => {
        expect(multiplierAt([live], 'check_in', plus(50), { ...LEGAL_SWITCHES, doubleXp: 'disabled' }).multiplier).toBe(1);
    });
});

describe('computeCreditedXp — cap then multiplier (CA14)', () => {
    it('day-11 check-in at ×2 gives 200 XP', () => {
        expect(computeCreditedXp({ requestedXp: checkInXp(11), usedToday: 0, dailyCap: 100, multiplier: 2 }))
            .toEqual({ baseXp: 100, xp: 200, capped: false });
    });

    it('chat at ×2 stops at 10 XP a day', () => {
        let used = 0;
        let total = 0;
        for (let i = 0; i < 8; i++) {
            const credited = computeCreditedXp({ requestedXp: 1, usedToday: used, dailyCap: SOURCE_RULES.chat_message.dailyCapXp, multiplier: 2 });
            used += credited.baseXp;
            total += credited.xp;
        }
        expect(total).toBe(10);
    });

    it('leaves bet_volume untouched during an event', () => {
        const boosted = event('all', draft(48, 24));
        const { multiplier } = multiplierAt([boosted], 'bet_volume', plus(50));
        expect(computeCreditedXp({ requestedXp: 30, usedToday: 0, dailyCap: 1000, multiplier }).xp).toBe(30);
    });

    it('floors quarter multipliers on the capped base', () => {
        expect(computeCreditedXp({ requestedXp: 5, usedToday: 0, dailyCap: null, multiplier: 1.25 }).xp).toBe(6);
        expect(computeCreditedXp({ requestedXp: 30, usedToday: 0, dailyCap: 25, multiplier: 2 }))
            .toEqual({ baseXp: 25, xp: 50, capped: true });
    });
});
