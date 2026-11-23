import type { PublicAchievementDto } from '@chiliztv/shared';

import { showcaseTileOf, type ShowcaseTileView } from './showcaseDisplay';

const WALLET = /^0x[0-9a-fA-F]{40}$/;

export function isProfileWallet(value: string): boolean {
    return WALLET.test(value);
}

export interface PublicAchievementView {
    readonly tile: ShowcaseTileView;
    /** "Unlocked Nov 2026". */
    readonly unlocked: string;
}

/** Public tiers of the profile (highest per family, already filtered by the backend), with their date. */
export function publicAchievementViews(achievements: ReadonlyArray<PublicAchievementDto>): ReadonlyArray<PublicAchievementView> {
    return achievements.map((a) => ({
        tile: showcaseTileOf(a),
        unlocked: `Unlocked ${new Date(a.unlockedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })}`,
    }));
}
