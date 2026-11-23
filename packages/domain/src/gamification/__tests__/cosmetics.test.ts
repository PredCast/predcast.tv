import { describe, expect, it } from 'vitest';

import { ACHIEVEMENT_IDS, type AchievementId } from '../catalog/achievements';
import type { UnlockedTier } from '../policies/achievementEvaluator';
import {
    defaultShowcase,
    displayedFrame,
    displayedShowcase,
    ownedFrames,
    ownedTitles,
    showcaseSlots,
    validateCosmetics,
    type CosmeticsContext,
} from '../policies/cosmetics';

/** Unlocks tiers 1..n of each family, in catalog order. */
const tiers = (spec: Partial<Record<AchievementId, number>>): ReadonlyArray<UnlockedTier> =>
    ACHIEVEMENT_IDS.flatMap((achievementId) =>
        Array.from({ length: spec[achievementId] ?? 0 }, (_, i) => ({ achievementId, tier: i + 1 })),
    );

const ctx = (overrides: Partial<CosmeticsContext> = {}): CosmeticsContext => ({
    level: overrides.level ?? 12,
    peakLevel: overrides.peakLevel ?? overrides.level ?? 12,
    unlocked: tiers({ chatter: 3, daily_streak: 2, bet_volume: 4, spectator: 1 }),
    bestCycleRank: null,
    isCrownHolder: false,
    ...overrides,
});

describe('unlocks follow the peak level', () => {
    it('keeps level titles, rank frames and slots after a reversal lowers the level', () => {
        const lowered = ctx({ level: 29, peakLevel: 31, unlocked: [] });
        expect(ownedTitles(lowered)).toContain('club_stalwart');
        expect(ownedFrames(lowered)).toContain('frame.rank.captain');
        expect(showcaseSlots(lowered.peakLevel)).toBe(3);
        expect(displayedFrame(null, lowered)).toBe('frame.rank.captain');
    });
});

describe('showcaseSlots', () => {
    it('gives 1 slot, 2 from level 10, 3 from level 20', () => {
        expect([1, 9, 10, 19, 20, 60].map(showcaseSlots)).toEqual([1, 1, 2, 2, 3, 3]);
    });
});

describe('ownedTitles / ownedFrames', () => {
    it('lists the titles of unlocked tiers and of reached levels', () => {
        expect(ownedTitles(ctx())).toEqual(['regular', 'spectator', 'cheerleader']);
        expect(ownedTitles(ctx({ level: 50, unlocked: [] }))).toEqual(['club_stalwart', 'dressing_room_legend']);
    });

    it('owns every reached rank frame', () => {
        expect(ownedFrames(ctx({ level: 15 }))).toEqual(['frame.rank.rookie', 'frame.rank.starter', 'frame.rank.seasoned']);
    });

    it('owns the podium colour of the best placement, the highest antenna and Founder', () => {
        const unlocked = [...tiers({ leaderboard: 4, streamer_hours: 4 }), { achievementId: 'founder' as const, tier: 1 }];
        expect(ownedFrames(ctx({ level: 1, unlocked, bestCycleRank: 2 }))).toEqual([
            'frame.rank.rookie', 'frame.podium.silver', 'frame.antenna.red', 'frame.founder',
        ]);
    });

    it('owns the Crown only while holding the last closed cycle', () => {
        const unlocked = tiers({ leaderboard: 5 });
        expect(ownedFrames(ctx({ level: 1, unlocked, bestCycleRank: 1, isCrownHolder: true })))
            .toEqual(['frame.rank.rookie', 'frame.podium.gold', 'frame.crown']);
        expect(ownedFrames(ctx({ level: 1, unlocked, bestCycleRank: 1 }))).not.toContain('frame.crown');
    });
});

describe('defaultShowcase', () => {
    it('shows the highest public tier per family, best first, within the slots', () => {
        expect(defaultShowcase(ctx().unlocked, 12)).toEqual(['chatter:3', 'daily_streak:2']);
        expect(defaultShowcase(ctx().unlocked, 25)).toEqual(['chatter:3', 'daily_streak:2', 'spectator:1']);
        expect(defaultShowcase(tiers({ bet_volume: 6 }), 60)).toEqual([]);
    });
});

describe('validateCosmetics (CA16)', () => {
    const valid = { titleId: 'cheerleader', frameId: 'frame.rank.starter', showcase: ['chatter:3', 'spectator:1'] };

    it('accepts owned cosmetics', () => {
        expect(validateCosmetics(valid, ctx())).toEqual({ ok: true, ...valid });
        expect(validateCosmetics({ titleId: null, frameId: null, showcase: [] }, ctx()))
            .toEqual({ ok: true, titleId: null, frameId: null, showcase: [] });
    });

    it('refuses a title not owned', () => {
        expect(validateCosmetics({ ...valid, titleId: 'goleador' }, ctx()))
            .toEqual({ ok: false, error: { code: 'TITLE_NOT_OWNED', titleId: 'goleador' } });
    });

    it('refuses 3 showcase tiles at level 9', () => {
        const showcase = ['chatter:3', 'spectator:1', 'daily_streak:2'];
        expect(validateCosmetics({ ...valid, showcase }, ctx({ level: 9 })))
            .toEqual({ ok: false, error: { code: 'SHOWCASE_TOO_LONG', max: 1, got: 3 } });
    });

    it('refuses a Bet Volume tile even when owned', () => {
        expect(validateCosmetics({ ...valid, showcase: ['bet_volume:4'] }, ctx()))
            .toEqual({ ok: false, error: { code: 'SHOWCASE_PRIVATE', item: 'bet_volume:4' } });
    });

    it('refuses an expired Crown, a tile not owned and a duplicate tile', () => {
        expect(validateCosmetics({ ...valid, frameId: 'frame.crown' }, ctx()))
            .toEqual({ ok: false, error: { code: 'FRAME_NOT_OWNED', frameId: 'frame.crown' } });
        expect(validateCosmetics({ ...valid, showcase: ['chatter:4'] }, ctx()))
            .toEqual({ ok: false, error: { code: 'SHOWCASE_NOT_OWNED', item: 'chatter:4' } });
        expect(validateCosmetics({ ...valid, showcase: ['chatter:3', 'chatter:3'] }, ctx()))
            .toEqual({ ok: false, error: { code: 'SHOWCASE_DUPLICATE', item: 'chatter:3' } });
    });
});

describe('displayed cosmetics', () => {
    it('falls back to the rank frame once the Crown expired, without touching the stored choice', () => {
        const holder = ctx({ unlocked: tiers({ leaderboard: 5 }), bestCycleRank: 1, isCrownHolder: true });
        expect(displayedFrame('frame.crown', holder)).toBe('frame.crown');
        expect(displayedFrame('frame.crown', { ...holder, isCrownHolder: false })).toBe('frame.rank.starter');
        expect(displayedFrame(null, ctx({ level: 47 }))).toBe('frame.rank.legend');
    });

    it('shows the stored showcase filtered to owned public tiers, else the default', () => {
        expect(displayedShowcase(['spectator:1'], ctx())).toEqual(['spectator:1']);
        expect(displayedShowcase(['bet_volume:1', 'chatter:5'], ctx())).toEqual(['chatter:3', 'daily_streak:2']);
    });
});
