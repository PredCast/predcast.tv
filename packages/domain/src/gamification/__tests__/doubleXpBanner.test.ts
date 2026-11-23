import { describe, expect, it } from 'vitest';

import { LEGAL_SWITCHES } from '../catalog/legalSwitches';
import {
    boostedSourcesSentence,
    doubleXpBannerOf,
    multiplierLabel,
    parisSlotLabel,
} from '../policies/doubleXpBanner';

const H = 3_600_000;
const NOW = new Date('2027-04-01T10:00:00Z');
const plus = (hours: number) => new Date(NOW.getTime() + hours * H);
const ALL = ['check_in', 'watch', 'chat_message', 'stream_time'];
const event = (startHours: number, durationHours = 33, sources = ALL, multiplier = 2) => ({
    multiplier,
    sources,
    startsAt: plus(startHours),
    endsAt: plus(startHours + durationHours),
});

describe('doubleXpBannerOf (§3.6)', () => {
    it('carries the exact §3.6 sentence, bets never boosted', () => {
        const view = doubleXpBannerOf(event(48), NOW);
        expect(view && `${view.boosted} ${view.notice}`).toBe(
            'Check-in, watching, chat and streaming earn ×2. Bets are not boosted.',
        );
    });

    it('is shown at most 7 days before the start', () => {
        expect(doubleXpBannerOf(event(7 * 24), NOW)).not.toBeNull();
        expect(doubleXpBannerOf(event(7 * 24 + 1), NOW)).toBeNull();
    });

    it('reads upcoming then live, and disappears at the end', () => {
        const upcoming = doubleXpBannerOf(event(2), NOW);
        expect(upcoming?.isActive).toBe(false);
        expect(upcoming?.heading).toBe('Double XP · Thu 14:00 → Fri 23:00 (Paris time)');
        const live = doubleXpBannerOf(event(-1), NOW);
        expect(live?.isActive).toBe(true);
        expect(live?.heading).toBe('Double XP · Live now → Fri 20:00 (Paris time)');
        expect(doubleXpBannerOf(event(-33), NOW)).toBeNull();
    });

    it('is hidden when the legal switch turns double XP off', () => {
        expect(doubleXpBannerOf(event(2), NOW, { ...LEGAL_SWITCHES, doubleXp: 'disabled' })).toBeNull();
    });
});

describe('banner copy helpers', () => {
    it('lists only eligible sources, with the verb agreeing', () => {
        expect(boostedSourcesSentence(['check_in'], 2)).toBe('Check-in earns ×2.');
        expect(boostedSourcesSentence(['stream_time', 'watch'], 1.5)).toBe('Watching and streaming earn ×1.5.');
        expect(boostedSourcesSentence(['bet_volume'], 2)).toBe('');
    });

    it('formats multipliers and Paris slots across DST', () => {
        expect(multiplierLabel(2)).toBe('×2');
        expect(multiplierLabel(1.25)).toBe('×1.25');
        expect(parisSlotLabel(new Date('2027-01-16T13:00:00Z'))).toBe('Sat 14:00');
        expect(parisSlotLabel(new Date('2027-07-17T12:00:00Z'))).toBe('Sat 14:00');
    });
});
