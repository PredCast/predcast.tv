import { achievementById } from '@chiliztv/domain/gamification/catalog/achievements';
import { FRAMES } from '@chiliztv/domain/gamification/catalog/frames';
import { TITLE_IDS } from '@chiliztv/domain/gamification/catalog/titles';
import type { MyGamificationDto, UpdateCosmeticsBody } from '@chiliztv/shared';

import { frameLabel, titleLabel } from './labels';
import { showcaseTileOf, type ShowcaseTileView } from './showcaseDisplay';

export interface CosmeticsDraft {
    readonly titleId: string | null;
    readonly frameId: string;
    /** `"{achievementId}:{tier}"`, in display order. */
    readonly showcase: ReadonlyArray<string>;
}

export interface PickerOption<V> {
    readonly value: V;
    readonly label: string;
}

/** What the owner currently shows (displayed title, frame and showcase). */
export function draftOf(me: MyGamificationDto): CosmeticsDraft {
    return {
        titleId: me.titleId,
        frameId: me.frameId,
        showcase: me.showcase.map((s) => `${s.achievementId}:${s.tier}`),
    };
}

export function isSameDraft(a: CosmeticsDraft, b: CosmeticsDraft): boolean {
    return a.titleId === b.titleId && a.frameId === b.frameId && a.showcase.join('|') === b.showcase.join('|');
}

export function toCosmeticsBody(draft: CosmeticsDraft): UpdateCosmeticsBody {
    return { titleId: draft.titleId, frameId: draft.frameId, showcase: [...draft.showcase] };
}

/** "No title" first (the card shows the rank), then owned titles in catalog order. */
export function titleOptions(owned: ReadonlyArray<string>, cycleId: number | null): ReadonlyArray<PickerOption<string | null>> {
    const titles = TITLE_IDS.filter((id) => owned.includes(id)).map((id) => ({ value: id, label: titleLabel(id, cycleId) }));
    return [{ value: null, label: 'No title · show my rank' }, ...titles];
}

export function frameOptions(owned: ReadonlyArray<string>): ReadonlyArray<PickerOption<string>> {
    return FRAMES.filter((f) => owned.includes(f.id)).map((f) => ({ value: f.id, label: frameLabel(f.id) }));
}

export interface ShowcaseOption {
    readonly key: string;
    readonly tile: ShowcaseTileView;
}

/** Highest unlocked tier of each public family; private families (Bet Volume) are never offered. */
export function showcaseOptions(achievements: MyGamificationDto['achievements']): ReadonlyArray<ShowcaseOption> {
    return achievements
        .filter((a) => a.unlockedTier > 0 && a.visibility === 'public' && achievementById(a.achievementId)?.visibility === 'public')
        .map((a) => {
            const tile = showcaseTileOf({ achievementId: a.achievementId, tier: a.unlockedTier, context: null });
            return { key: tile.key, tile };
        });
}

/** Toggles a tile: removes it, or appends it while a slot is free. */
export function toggleShowcase(showcase: ReadonlyArray<string>, key: string, slots: number): ReadonlyArray<string> {
    if (showcase.includes(key)) return showcase.filter((k) => k !== key);
    return showcase.length < slots ? [...showcase, key] : showcase;
}
