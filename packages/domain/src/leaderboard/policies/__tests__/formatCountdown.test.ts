import { describe, expect, it } from 'vitest';
import { formatCountdown } from '../formatCountdown';

const MIN = 60_000;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

describe('formatCountdown', () => {
    const now = 0; // anchor for readability

    it('renders "33d 04h" when ≥ 24h ahead', () => {
        expect(formatCountdown(33 * DAY + 4 * HOUR, now)).toBe('33d 04h');
    });

    it('zero-pads single-digit hours', () => {
        expect(formatCountdown(1 * DAY + 3 * HOUR, now)).toBe('1d 03h');
    });

    it('renders "4h 12m" when < 24h, ≥ 1h', () => {
        expect(formatCountdown(4 * HOUR + 12 * MIN, now)).toBe('4h 12m');
    });

    it('zero-pads single-digit minutes', () => {
        expect(formatCountdown(2 * HOUR + 7 * MIN, now)).toBe('2h 07m');
    });

    it('renders "45m" when < 1h', () => {
        expect(formatCountdown(45 * MIN, now)).toBe('45m');
    });

    it('returns "closed" at exactly the target', () => {
        expect(formatCountdown(0, 0)).toBe('closed');
    });

    it('returns "closed" past the target', () => {
        expect(formatCountdown(-5 * MIN, 0)).toBe('closed');
    });

    it('handles 23h 59m boundary', () => {
        expect(formatCountdown(23 * HOUR + 59 * MIN, now)).toBe('23h 59m');
    });

    it('flips to days at exactly 24h', () => {
        expect(formatCountdown(24 * HOUR, now)).toBe('1d 00h');
    });
});
