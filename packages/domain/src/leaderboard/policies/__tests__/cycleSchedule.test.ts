import { describe, expect, it } from 'vitest';
import { FIRST_CYCLE_END_UTC, nextCycleEnd, shouldCloseAt } from '../cycleSchedule';

describe('cycleSchedule', () => {
    describe('FIRST_CYCLE_END_UTC', () => {
        it('lands on 2026-06-30 23:55:00 UTC', () => {
            expect(FIRST_CYCLE_END_UTC.toISOString()).toBe('2026-06-30T23:55:00.000Z');
        });
    });

    describe('nextCycleEnd', () => {
        it('returns FIRST_CYCLE_END_UTC when now is before it', () => {
            expect(nextCycleEnd(new Date('2026-05-28T12:00:00Z')).toISOString())
                .toBe('2026-06-30T23:55:00.000Z');
        });

        it('returns FIRST_CYCLE_END_UTC when now is on June 30 before 23:55', () => {
            expect(nextCycleEnd(new Date('2026-06-30T12:00:00Z')).toISOString())
                .toBe('2026-06-30T23:55:00.000Z');
        });

        it('returns end of July when now is July 1', () => {
            expect(nextCycleEnd(new Date('2026-07-01T00:01:00Z')).toISOString())
                .toBe('2026-07-31T23:55:00.000Z');
        });

        it('returns end of next month after 23:55 on the last day', () => {
            expect(nextCycleEnd(new Date('2026-07-31T23:56:00Z')).toISOString())
                .toBe('2026-08-31T23:55:00.000Z');
        });

        it('handles February (28 days)', () => {
            expect(nextCycleEnd(new Date('2027-02-15T00:00:00Z')).toISOString())
                .toBe('2027-02-28T23:55:00.000Z');
        });
    });

    describe('shouldCloseAt', () => {
        it('returns false before the first cycle end window', () => {
            expect(shouldCloseAt(new Date('2026-05-31T23:55:00Z'))).toBe(false);
            expect(shouldCloseAt(new Date('2026-06-29T23:55:00Z'))).toBe(false);
        });

        it('returns true at 23:55 on June 30, 2026 (first cycle close)', () => {
            expect(shouldCloseAt(new Date('2026-06-30T23:55:00Z'))).toBe(true);
        });

        it('returns true within the 10-min cron-drift window around June 30 23:55', () => {
            // Window only covers the same-day cron tick — a missed tick that fires
            // > 10 min late on the next day should NOT trigger a late close.
            expect(shouldCloseAt(new Date('2026-06-30T23:45:00Z'))).toBe(true);
            expect(shouldCloseAt(new Date('2026-06-30T23:55:00Z'))).toBe(true);
            expect(shouldCloseAt(new Date('2026-07-01T00:04:00Z'))).toBe(false);
        });

        it('returns true at 23:55 on the last day of subsequent months', () => {
            expect(shouldCloseAt(new Date('2026-07-31T23:55:00Z'))).toBe(true);
            expect(shouldCloseAt(new Date('2026-08-31T23:55:00Z'))).toBe(true);
            expect(shouldCloseAt(new Date('2027-02-28T23:55:00Z'))).toBe(true);
        });

        it('returns false at 23:55 on a non-last-day', () => {
            expect(shouldCloseAt(new Date('2026-07-15T23:55:00Z'))).toBe(false);
            expect(shouldCloseAt(new Date('2026-08-30T23:55:00Z'))).toBe(false);
        });

        it('returns false at noon on the last day (outside window)', () => {
            expect(shouldCloseAt(new Date('2026-07-31T12:00:00Z'))).toBe(false);
        });
    });
});
