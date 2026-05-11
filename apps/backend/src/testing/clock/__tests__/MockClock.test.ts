import { describe, expect, it } from 'vitest';
import { MockClock } from '../MockClock';

const START = new Date('2026-05-11T12:00:00.000Z');

describe('MockClock', () => {
    it('starts at the initial date', () => {
        const clock = new MockClock(START);
        expect(clock.now().toISOString()).toBe(START.toISOString());
    });

    it('returns a fresh Date instance each call (cannot be mutated by caller)', () => {
        const clock = new MockClock(START);
        const a = clock.now();
        a.setFullYear(2030);
        expect(clock.now().toISOString()).toBe(START.toISOString());
    });

    it('advanceBy adds milliseconds', () => {
        const clock = new MockClock(START);
        clock.advanceBy(1_500);
        expect(clock.now().getTime() - START.getTime()).toBe(1_500);
    });

    it('advanceBySec adds seconds', () => {
        const clock = new MockClock(START);
        clock.advanceBySec(120);
        expect(clock.now().getTime() - START.getTime()).toBe(120 * 1_000);
    });

    it('advanceByMin adds minutes', () => {
        const clock = new MockClock(START);
        clock.advanceByMin(30);
        expect(clock.now().getTime() - START.getTime()).toBe(30 * 60_000);
    });

    it('successive advances are cumulative', () => {
        const clock = new MockClock(START);
        clock.advanceBySec(10);
        clock.advanceBySec(20);
        clock.advanceBy(5_000);
        expect(clock.now().getTime() - START.getTime()).toBe((10 + 20) * 1_000 + 5_000);
    });

    it('set overrides current time', () => {
        const clock = new MockClock(START);
        clock.advanceBySec(60);
        const target = new Date('2027-01-01T00:00:00.000Z');
        clock.set(target);
        expect(clock.now().toISOString()).toBe(target.toISOString());
    });

    it('set takes a copy (caller mutation does not leak)', () => {
        const clock = new MockClock(START);
        const target = new Date(START.getTime() + 1_000);
        clock.set(target);
        target.setFullYear(2099);
        expect(clock.now().toISOString()).toBe(new Date(START.getTime() + 1_000).toISOString());
    });
});
