import { describe, expect, it } from 'vitest';

import { getDefaultFootballMarkets } from '../../markets/DefaultMarkets';
import { ACHIEVEMENTS, achievementById, fullMarketCatalogSize, tileColorOf } from '../catalog/achievements';
import { DOUBLE_XP_MIN_NOTICE_HOURS, FOUNDER_WINDOW_DAYS, QUALIFYING_STAKE_USDC } from '../catalog/constants';
import { FRAMES, isFrameId, podiumFrameFor } from '../catalog/frames';
import { LEGAL_SWITCHES } from '../catalog/legalSwitches';
import { RANKS, rankOf, ranksReachedAt } from '../catalog/ranks';
import { marketKeyOf, marketKindOf, refKeys } from '../catalog/refKeys';
import { DOUBLE_XP_ELIGIBLE, SOURCE_RULES, dailyCapFor, isDoubleXpEligible, isSourceEnabled } from '../catalog/sources';
import { LEVEL_TITLES, TITLE_IDS, isTitleId, titleTranslationKey } from '../catalog/titles';

describe('constants', () => {
    it('match the decisions', () => {
        expect(QUALIFYING_STAKE_USDC).toBe(5);
        expect(FOUNDER_WINDOW_DAYS).toBe(60);
        expect(DOUBLE_XP_MIN_NOTICE_HOURS).toBe(24);
    });
});

describe('sources', () => {
    it('carries the §3.2 values and caps', () => {
        expect(SOURCE_RULES.check_in.dailyCapXp).toBe(100);
        expect(SOURCE_RULES.bet_volume.dailyCapXp).toBe(1000);
        expect(SOURCE_RULES.bet_won).toMatchObject({ xp: 5, dailyCapXp: 25 });
        expect(SOURCE_RULES.watch).toMatchObject({ xp: 1, dailyCapXp: 10 });
        expect(SOURCE_RULES.chat_message).toMatchObject({ xp: 1, dailyCapXp: 5 });
        expect(SOURCE_RULES.follow).toMatchObject({ xp: 5, dailyCapXp: 15 });
        expect(SOURCE_RULES.support).toMatchObject({ xp: 5, dailyCapXp: 10 });
        expect(SOURCE_RULES.stream_time).toMatchObject({ xp: 1, dailyCapXp: 40 });
        expect(SOURCE_RULES.onboarding_step).toMatchObject({ xp: 5, dailyCapXp: null });
    });

    it('limits double XP to the four non-monetary sources', () => {
        expect([...DOUBLE_XP_ELIGIBLE]).toEqual(['check_in', 'watch', 'chat_message', 'stream_time']);
        for (const s of ['bet_volume', 'bet_won', 'support', 'follow', 'onboarding_step', 'achievement']) {
            expect(isDoubleXpEligible(s)).toBe(false);
        }
    });

    it('flags exactly the legal-review sources', () => {
        const flagged = Object.entries(SOURCE_RULES).filter(([, r]) => r.legalReview).map(([s]) => s);
        expect(flagged.sort()).toEqual(['bet_volume', 'bet_won', 'support']);
    });

    it('applies the legal switches to caps and availability', () => {
        expect(dailyCapFor('bet_volume')).toBe(1000);
        expect(dailyCapFor('bet_volume', { ...LEGAL_SWITCHES, betVolume: 'per_market' })).toBe(25);
        expect(isSourceEnabled('bet_volume', { ...LEGAL_SWITCHES, betVolume: 'disabled' })).toBe(false);
        expect(isSourceEnabled('bet_won', { ...LEGAL_SWITCHES, betWon: 'disabled' })).toBe(false);
        expect(isSourceEnabled('bet_won', { ...LEGAL_SWITCHES, betWon: 'cosmetic_only' })).toBe(true);
        expect(isSourceEnabled('support', { ...LEGAL_SWITCHES, support: 'disabled' })).toBe(false);
        expect(isSourceEnabled('watch', { ...LEGAL_SWITCHES, betVolume: 'disabled' })).toBe(true);
    });
});

describe('refKeys', () => {
    it('builds the §3.2 idempotency keys', () => {
        expect(refKeys.checkIn('a1', '2027-01-02')).toBe('check_in:a1:2027-01-02');
        expect(refKeys.betVolume(88888, '0xABC', 3)).toBe('bet_volume:88888:0xabc:3');
        expect(refKeys.betWon(88888, '0xC0', 2, 'a1')).toBe('bet_won:88888:0xc0:2:a1');
        expect(refKeys.watch('a1', '2027-01-02', 4)).toBe('watch:a1:2027-01-02:4');
        expect(refKeys.chat('m1')).toBe('chat:m1');
        expect(refKeys.support('a1', '0xS', '2027-01-02')).toBe('support:a1:0xs:2027-01-02');
        expect(refKeys.streamTime('s1', 2)).toBe('stream_time:s1:2');
        expect(refKeys.onboarding('a1', 'streak3')).toBe('onboarding:a1:streak3');
        expect(refKeys.achievement('a1', 'chatter', 2)).toBe('achievement:a1:chatter:2');
        expect(refKeys.reversal('chat:m1')).toBe('rev:chat:m1');
        expect(marketKeyOf(88888, '0xC0', 1)).toBe('88888:0xc0:1');
        expect(marketKindOf('GOALS_TOTAL', 25)).toBe('GOALS_TOTAL:25');
    });
});

describe('achievements catalog', () => {
    it('has the 13 MVP families', () => {
        expect(ACHIEVEMENTS).toHaveLength(13);
    });

    it('matches the §5 XP totals per family', () => {
        const total = (id: string) => achievementById(id)?.tiers.reduce((s, t) => s + t.xp, 0);
        expect(total('first_steps')).toBe(25);
        expect(total('daily_streak')).toBe(1985);
        expect(total('winning_bets')).toBe(1235);
        expect(total('bet_volume')).toBe(60);
        expect(total('versatility')).toBe(185);
        expect(total('globetrotter')).toBe(185);
        expect(total('leaderboard')).toBe(385);
        expect(total('spectator')).toBe(735);
        expect(total('chatter')).toBe(385);
        expect(total('streamers_followed')).toBe(85);
        expect(total('supporter')).toBe(185);
        expect(total('streamer_hours')).toBe(735);
        expect(total('founder')).toBe(0);
    });

    it('derives the Versatility full-catalog tier from the seeded markets', () => {
        expect(fullMarketCatalogSize()).toBe(getDefaultFootballMarkets({ isKnockout: true }).length);
        expect(achievementById('versatility')?.tiers.map((t) => t.threshold)).toEqual([3, 5, 7, 9]);
        expect(fullMarketCatalogSize(getDefaultFootballMarkets({ isKnockout: false }))).toBe(8);
    });

    it('keeps Bet Volume private and title-less', () => {
        const volume = achievementById('bet_volume');
        expect(volume?.visibility).toBe('private');
        expect(volume?.tiers.every((t) => t.titleId === null && t.frameId === null)).toBe(true);
        expect(ACHIEVEMENTS.filter((a) => a.visibility === 'private').map((a) => a.id)).toEqual(['bet_volume']);
    });

    it('unlocks every title from exactly one place', () => {
        const fromAchievements = ACHIEVEMENTS.flatMap((a) => a.tiers.map((t) => t.titleId)).filter(
            (t): t is NonNullable<typeof t> => t !== null,
        );
        const all = [...fromAchievements, ...LEVEL_TITLES.map((t) => t.titleId)];
        expect(new Set(all).size).toBe(all.length);
        expect([...all].sort()).toEqual([...TITLE_IDS].sort());
        expect(isTitleId('club_icon')).toBe(true);
        expect(isTitleId('volume_king')).toBe(false);
        expect(titleTranslationKey('kop')).toBe('gamification.title.kop');
    });

    it('colours tiles by tier', () => {
        expect([1, 2, 3, 4, 5, 6, 8].map(tileColorOf)).toEqual(['bronze', 'silver', 'gold', 'red', 'legend', 'icon', 'icon']);
    });
});

describe('ranks and frames', () => {
    it('covers levels 1 to 60 without gap', () => {
        for (let level = 1; level <= 60; level++) {
            expect(RANKS.filter((r) => level >= r.minLevel && level <= r.maxLevel)).toHaveLength(1);
        }
        expect(rankOf(4).tier).toBe('rookie');
        expect(rankOf(5).tier).toBe('starter');
        expect(rankOf(45).tier).toBe('legend');
        expect(rankOf(60).tier).toBe('icon');
        expect(ranksReachedAt(15).map((r) => r.tier)).toEqual(['rookie', 'starter', 'seasoned']);
        expect(rankOf(35).translationKey).toBe('gamification.rank.international');
    });

    it('lists unique frames, every achievement frame included', () => {
        const ids = FRAMES.map((f) => f.id);
        expect(new Set(ids).size).toBe(ids.length);
        for (const a of ACHIEVEMENTS) for (const t of a.tiers) if (t.frameId) expect(isFrameId(t.frameId)).toBe(true);
        expect(FRAMES.find((f) => f.id === 'frame.crown')?.duration).toBe('until_next_cycle');
        expect([1, 2, 3, 4].map(podiumFrameFor)).toEqual(['frame.podium.gold', 'frame.podium.silver', 'frame.podium.bronze', null]);
    });
});
