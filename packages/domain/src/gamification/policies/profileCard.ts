import { ACHIEVEMENTS, achievementById, type AchievementId } from '../catalog/achievements';
import { LEGAL_SWITCHES, type LegalSwitches } from '../catalog/legalSwitches';
import { rankOf, type RankTier } from '../catalog/ranks';
import type { GamificationProfile } from '../entities/GamificationProfile';
import type { UnlockedAchievement } from '../entities/Progress';
import type { CardSource } from '../repositories/IGamificationReadRepository';
import { isAchievementEnabled, type UnlockedTier } from './achievementEvaluator';
import { displayedFrame, displayedShowcase, ownedTitles, showcaseSlots, type CosmeticsContext } from './cosmetics';
import { levelProgress } from './levelCurve';
import { parisDayOf } from './parisDay';
import { EMPTY_STREAK, effectiveStreak } from './streakPolicy';

/** The `New` tag lasts this long after the account is created (mockup 04). */
export const NEW_PLAYER_TAG_DAYS = 14;
const MS_PER_DAY = 86_400_000;

export type ProfileTag = 'new' | 'streamer' | 'crown' | 'founder';

export interface ReadModelContext {
    readonly now: Date;
    /** Rank-1 account of the last snapshotted cycle. */
    readonly crownAccountId: string | null;
    readonly switches?: LegalSwitches;
}

export interface ProfileBadgeView {
    readonly wallet: string;
    readonly level: number;
    readonly rankTier: RankTier;
    readonly frameId: string;
    readonly titleId: string | null;
    readonly titleCycleId: number | null;
    readonly tags: ReadonlyArray<ProfileTag>;
}

export interface ShowcaseItemView {
    readonly achievementId: string;
    readonly tier: number;
    readonly context: Readonly<Record<string, string | number>> | null;
}

/** Hover card: never an amount, a private achievement nor another wallet of the account. */
export interface ProfileCardView extends ProfileBadgeView {
    readonly displayName: string | null;
    readonly avatarUrl: string | null;
    readonly xp: { readonly total: number; readonly levelStart: number; readonly nextLevelAt: number | null };
    readonly streak: { readonly current: number; readonly best: number; readonly alive: boolean };
    readonly showcase: ReadonlyArray<ShowcaseItemView>;
    readonly showcaseSlots: number;
    readonly streamedHours: number | null;
    readonly memberSince: string;
}

export interface PublicAchievementView extends ShowcaseItemView {
    readonly unlockedAt: string;
}

/** Profile of an account that was never credited: level 1, no streak, nothing selected. */
export function emptyProfile(accountId: string, at: Date): GamificationProfile {
    return {
        accountId, xpTotal: 0, level: 1, levelPeak: 1, streak: EMPTY_STREAK, selectedTitleId: null,
        selectedFrameId: null, showcase: [], suspendedAt: null, suspendedReason: null, createdAt: at, updatedAt: at,
    };
}

/** Unlocked tiers a legal switch has not removed (a removed family is never shown). */
export function visibleUnlocks(
    unlocked: ReadonlyArray<UnlockedAchievement>,
    switches: LegalSwitches = LEGAL_SWITCHES,
): ReadonlyArray<UnlockedAchievement> {
    return unlocked.filter((u) => isAchievementEnabled(u.achievementId, switches));
}

export function cosmeticsContextOf(
    profile: GamificationProfile,
    source: Pick<CardSource, 'unlocked' | 'bestCycleRank'>,
    ctx: ReadModelContext,
): CosmeticsContext {
    return {
        level: profile.level,
        peakLevel: profile.levelPeak,
        unlocked: visibleUnlocks(source.unlocked, ctx.switches),
        bestCycleRank: source.bestCycleRank,
        isCrownHolder: ctx.crownAccountId !== null && ctx.crownAccountId === profile.accountId,
    };
}

/** Stored title while still owned, else none (the card then shows the rank). */
export function displayedTitle(selectedTitleId: string | null, ctx: CosmeticsContext): string | null {
    if (selectedTitleId === null) return null;
    const owned: ReadonlyArray<string> = ownedTitles(ctx);
    return owned.includes(selectedTitleId) ? selectedTitleId : null;
}

function hasUnlocked(unlocked: ReadonlyArray<UnlockedTier>, id: AchievementId): boolean {
    return unlocked.some((u) => u.achievementId === id);
}

export function profileTags(source: CardSource, cosmetics: CosmeticsContext, now: Date): ReadonlyArray<ProfileTag> {
    const tags: ProfileTag[] = [];
    if (now.getTime() - source.accountCreatedAt.getTime() < NEW_PLAYER_TAG_DAYS * MS_PER_DAY) tags.push('new');
    if (source.streamMinutes > 0) tags.push('streamer');
    if (cosmetics.isCrownHolder) tags.push('crown');
    if (hasUnlocked(cosmetics.unlocked, 'founder')) tags.push('founder');
    return tags;
}

export function buildProfileBadge(source: CardSource, profile: GamificationProfile, ctx: ReadModelContext): ProfileBadgeView {
    const cosmetics = cosmeticsContextOf(profile, source, ctx);
    const titleId = displayedTitle(profile.selectedTitleId, cosmetics);
    return {
        wallet: source.wallet,
        level: profile.level,
        rankTier: rankOf(profile.level).tier,
        frameId: displayedFrame(profile.selectedFrameId, cosmetics),
        titleId,
        titleCycleId: titleId === 'cycle_champion' ? source.lastWonCycleId : null,
        tags: profileTags(source, cosmetics, ctx.now),
    };
}

function contextOf(unlock: UnlockedAchievement | undefined): ShowcaseItemView['context'] {
    if (!unlock || Object.keys(unlock.context).length === 0) return null;
    return { ...unlock.context };
}

/** `"{achievementId}:{tier}"` → item, with the stored unlock context (cycle of a leaderboard tier). */
function showcaseItemOf(key: string, unlocked: ReadonlyArray<UnlockedAchievement>): ShowcaseItemView {
    const [achievementId, tierText] = key.split(':');
    const tier = Number(tierText);
    const unlock = unlocked.find((u) => u.achievementId === achievementId && u.tier === tier);
    return { achievementId, tier, context: contextOf(unlock) };
}

export function buildProfileCard(source: CardSource, profile: GamificationProfile, ctx: ReadModelContext): ProfileCardView {
    const badge = buildProfileBadge(source, profile, ctx);
    const cosmetics = cosmeticsContextOf(profile, source, ctx);
    const progress = levelProgress(profile.xpTotal);
    const streak = effectiveStreak(profile.streak, parisDayOf(ctx.now), ctx.switches);
    const isStreamer = badge.tags.includes('streamer');
    return {
        ...badge,
        displayName: source.displayName,
        avatarUrl: source.avatarUrl,
        xp: { total: progress.xpTotal, levelStart: progress.levelStart, nextLevelAt: progress.nextLevelAt },
        streak: { current: streak.value, best: streak.best, alive: streak.alive },
        showcase: displayedShowcase(profile.showcase, cosmetics).map((key) => showcaseItemOf(key, source.unlocked)),
        showcaseSlots: showcaseSlots(profile.levelPeak),
        streamedHours: isStreamer ? Math.floor(source.streamMinutes / 60) : null,
        memberSince: source.accountCreatedAt.toISOString(),
    };
}

/** Highest public tier of each family, catalog order (public profile). */
export function publicAchievements(
    unlocked: ReadonlyArray<UnlockedAchievement>,
    switches: LegalSwitches = LEGAL_SWITCHES,
): ReadonlyArray<PublicAchievementView> {
    const best = new Map<string, UnlockedAchievement>();
    for (const u of visibleUnlocks(unlocked, switches)) {
        if (achievementById(u.achievementId)?.visibility !== 'public') continue;
        const current = best.get(u.achievementId);
        if (!current || u.tier > current.tier) best.set(u.achievementId, u);
    }
    const order = (id: string) => ACHIEVEMENTS.findIndex((a) => a.id === id);
    return [...best.values()].sort((a, b) => order(a.achievementId) - order(b.achievementId)).map((u) => ({
        achievementId: u.achievementId,
        tier: u.tier,
        context: contextOf(u),
        unlockedAt: u.unlockedAt.toISOString(),
    }));
}
