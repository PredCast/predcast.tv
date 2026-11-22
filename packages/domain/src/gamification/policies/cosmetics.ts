import { ACHIEVEMENTS, achievementById, type AchievementId } from '../catalog/achievements';
import { SHOWCASE_SLOT_LEVELS } from '../catalog/constants';
import { isFrameId, podiumFrameFor, type FrameId } from '../catalog/frames';
import { rankOf, ranksReachedAt } from '../catalog/ranks';
import { LEVEL_TITLES, isTitleId, type TitleId } from '../catalog/titles';
import type { UnlockedTier } from './achievementEvaluator';

export interface CosmeticsContext {
    readonly level: number;
    readonly unlocked: ReadonlyArray<UnlockedTier>;
    /** Best placement over closed cycles; sets the podium colour (§4.3). */
    readonly bestCycleRank: number | null;
    /** 1st of the last closed cycle — Crown expires at the next snapshot. */
    readonly isCrownHolder: boolean;
}

export function ownedTitles(ctx: CosmeticsContext): ReadonlyArray<TitleId> {
    const titles = new Set<TitleId>();
    for (const u of ctx.unlocked) {
        const titleId = achievementById(u.achievementId)?.tiers.find((t) => t.tier === u.tier)?.titleId;
        if (titleId) titles.add(titleId);
    }
    for (const t of LEVEL_TITLES) if (ctx.level >= t.level) titles.add(t.titleId);
    return [...titles];
}

function has(ctx: CosmeticsContext, achievementId: AchievementId, tier: number): boolean {
    return ctx.unlocked.some((u) => u.achievementId === achievementId && u.tier === tier);
}

export function ownedFrames(ctx: CosmeticsContext): ReadonlyArray<FrameId> {
    const frames: FrameId[] = ranksReachedAt(ctx.level).map((r) => r.frameId);
    if (has(ctx, 'leaderboard', 4) && ctx.bestCycleRank !== null) {
        const podium = podiumFrameFor(ctx.bestCycleRank);
        if (podium) frames.push(podium);
    }
    if (ctx.isCrownHolder) frames.push('frame.crown');
    const antennas = achievementById('streamer_hours')?.tiers.filter(
        (t) => t.frameId !== null && has(ctx, 'streamer_hours', t.tier),
    ) ?? [];
    const highestAntenna = antennas[antennas.length - 1]?.frameId;
    if (highestAntenna) frames.push(highestAntenna);
    if (has(ctx, 'founder', 1)) frames.push('frame.founder');
    return frames;
}

/** 1 slot from level 1, 2 from level 10, 3 from level 20. */
export function showcaseSlots(level: number): number {
    return SHOWCASE_SLOT_LEVELS.filter((minLevel) => level >= minLevel).length || 1;
}

export function showcaseItemKey(achievementId: AchievementId, tier: number): string {
    return `${achievementId}:${tier}`;
}

function isPublicTier(u: UnlockedTier): boolean {
    return achievementById(u.achievementId)?.visibility === 'public';
}

/** Highest public tier per family, best tiers first, catalog order on ties, cut to the slots. */
export function defaultShowcase(unlocked: ReadonlyArray<UnlockedTier>, level: number): ReadonlyArray<string> {
    const best = new Map<AchievementId, number>();
    for (const u of unlocked) {
        if (isPublicTier(u) && u.tier > (best.get(u.achievementId) ?? 0)) best.set(u.achievementId, u.tier);
    }
    const order = (id: AchievementId) => ACHIEVEMENTS.findIndex((a) => a.id === id);
    return [...best.entries()]
        .sort(([idA, tierA], [idB, tierB]) => tierB - tierA || order(idA) - order(idB))
        .slice(0, showcaseSlots(level))
        .map(([id, tier]) => showcaseItemKey(id, tier));
}

export interface CosmeticsSelection {
    readonly titleId: string | null;
    readonly frameId: string | null;
    readonly showcase: ReadonlyArray<string>;
}

export type CosmeticsError =
    | { readonly code: 'TITLE_NOT_OWNED'; readonly titleId: string }
    | { readonly code: 'FRAME_NOT_OWNED'; readonly frameId: string }
    | { readonly code: 'SHOWCASE_TOO_LONG'; readonly max: number; readonly got: number }
    | { readonly code: 'SHOWCASE_DUPLICATE'; readonly item: string }
    | { readonly code: 'SHOWCASE_PRIVATE'; readonly item: string }
    | { readonly code: 'SHOWCASE_NOT_OWNED'; readonly item: string };

export type CosmeticsValidation =
    | { readonly ok: true; readonly titleId: TitleId | null; readonly frameId: FrameId | null; readonly showcase: ReadonlyArray<string> }
    | { readonly ok: false; readonly error: CosmeticsError };

/** `PUT /me/cosmetics` rules (§4.5, CA16); the first violation is returned. */
export function validateCosmetics(selection: CosmeticsSelection, ctx: CosmeticsContext): CosmeticsValidation {
    const fail = (error: CosmeticsError): CosmeticsValidation => ({ ok: false, error });
    const titles: ReadonlyArray<string> = ownedTitles(ctx);
    const frames: ReadonlyArray<string> = ownedFrames(ctx);
    if (selection.titleId !== null && !titles.includes(selection.titleId)) {
        return fail({ code: 'TITLE_NOT_OWNED', titleId: selection.titleId });
    }
    if (selection.frameId !== null && !frames.includes(selection.frameId)) {
        return fail({ code: 'FRAME_NOT_OWNED', frameId: selection.frameId });
    }
    const max = showcaseSlots(ctx.level);
    if (selection.showcase.length > max) return fail({ code: 'SHOWCASE_TOO_LONG', max, got: selection.showcase.length });

    const owned = new Map(ctx.unlocked.map((u) => [showcaseItemKey(u.achievementId, u.tier), u]));
    const seen = new Set<string>();
    for (const item of selection.showcase) {
        if (seen.has(item)) return fail({ code: 'SHOWCASE_DUPLICATE', item });
        seen.add(item);
        const [id] = item.split(':');
        if (achievementById(id)?.visibility === 'private') return fail({ code: 'SHOWCASE_PRIVATE', item });
        if (!owned.has(item)) return fail({ code: 'SHOWCASE_NOT_OWNED', item });
    }
    const { titleId, frameId } = selection;
    return {
        ok: true,
        titleId: titleId !== null && isTitleId(titleId) ? titleId : null,
        frameId: frameId !== null && isFrameId(frameId) ? frameId : null,
        showcase: [...selection.showcase],
    };
}

/** Frame shown on the card: the stored choice while owned, else the current rank frame (expired Crown). */
export function displayedFrame(selectedFrameId: string | null, ctx: CosmeticsContext): FrameId {
    const owned = ownedFrames(ctx);
    return owned.find((f) => f === selectedFrameId) ?? rankOf(ctx.level).frameId;
}

/** Showcase shown on the card: the stored one filtered to owned public tiers, else the default. */
export function displayedShowcase(stored: ReadonlyArray<string>, ctx: CosmeticsContext): ReadonlyArray<string> {
    const owned = new Set(ctx.unlocked.filter(isPublicTier).map((u) => showcaseItemKey(u.achievementId, u.tier)));
    const kept = stored.filter((item) => owned.has(item)).slice(0, showcaseSlots(ctx.level));
    return kept.length > 0 ? kept : defaultShowcase(ctx.unlocked, ctx.level);
}
