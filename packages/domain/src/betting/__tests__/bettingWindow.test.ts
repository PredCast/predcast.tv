import { describe, expect, it } from 'vitest';
import { DEFAULT_BETTING_WINDOW_DAYS, bettingWindow, fallbackBettingWindow, progress, remainingMs } from '../bettingWindow';

const at = (iso: string) => new Date(iso);

describe('progress', () => {
    const opens = at('2026-11-01T00:00:00Z');
    const closes = at('2026-11-11T00:00:00Z');

    it('is 0 before the window opens', () => {
        expect(progress(opens, closes, at('2026-10-30T00:00:00Z'))).toBe(0);
    });

    it('is linear inside the window', () => {
        expect(progress(opens, closes, at('2026-11-06T00:00:00Z'))).toBeCloseTo(0.5);
    });

    it('is 1 once the window has closed', () => {
        expect(progress(opens, closes, at('2026-11-12T00:00:00Z'))).toBe(1);
    });

    it('treats a degenerate window as closed', () => {
        expect(progress(closes, opens, at('2026-11-05T00:00:00Z'))).toBe(1);
        expect(progress(opens, opens, opens)).toBe(1);
    });
});

describe('fallbackBettingWindow', () => {
    it('opens N days before kickoff and closes at the kickoff buffer', () => {
        const kickoff = at('2026-11-08T20:00:00Z');
        const window = fallbackBettingWindow(kickoff, 120);
        expect(window.opensAt.toISOString()).toBe('2026-11-01T20:00:00.000Z');
        expect(window.closesAt.toISOString()).toBe('2026-11-08T19:58:00.000Z');
        expect(DEFAULT_BETTING_WINDOW_DAYS).toBe(7);
    });

    it('accepts a custom window length', () => {
        const window = fallbackBettingWindow(at('2026-11-08T20:00:00Z'), 0, 1);
        expect(window.opensAt.toISOString()).toBe('2026-11-07T20:00:00.000Z');
    });
});

describe('remainingMs', () => {
    it('counts down to the close', () => {
        expect(remainingMs(at('2026-11-08T20:00:00Z'), at('2026-11-08T19:00:00Z'))).toBe(3_600_000);
    });

    it('never goes negative', () => {
        expect(remainingMs(at('2026-11-08T20:00:00Z'), at('2026-11-08T21:00:00Z'))).toBe(0);
    });
});

describe('bettingWindow', () => {
    const kickoff = at('2026-11-10T20:00:00Z');

    it('opens when the markets opened and closes at the kickoff buffer', () => {
        const w = bettingWindow(kickoff, at('2026-11-09T12:00:00Z'), 120);
        expect(w.opensAt.toISOString()).toBe('2026-11-09T12:00:00.000Z');
        expect(w.closesAt.toISOString()).toBe('2026-11-10T19:58:00.000Z');
    });

    it('falls back to kickoff minus the default window without an opening time', () => {
        expect(bettingWindow(kickoff, null, 120)).toEqual(fallbackBettingWindow(kickoff, 120));
    });
});
