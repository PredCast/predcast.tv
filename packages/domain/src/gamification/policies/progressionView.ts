/** Owner progress of one family, as carried by `GET /gamification/me`. */
export interface FamilyProgress {
    readonly achievementId: string;
    readonly unlockedTier: number;
    /** Threshold units; `leaderboard` is a rank (lower is better); null when unknown. */
    readonly current: number | null;
    readonly nextThreshold: number | null;
}

/** 0–1 progress towards the next tier; null when complete or not measurable (no rank, founder). */
export function progressToNextTier(p: FamilyProgress): number | null {
    if (p.nextThreshold === null || p.current === null) return null;
    if (p.achievementId === 'leaderboard') return p.current <= 0 ? null : Math.min(1, p.nextThreshold / p.current);
    if (p.nextThreshold <= 0) return null;
    return Math.min(1, Math.max(0, p.current / p.nextThreshold));
}

/** The `count` families closest to their next tier (§9.3 "3 prochains paliers"), catalog order on ties. */
export function closestNextTiers<T extends FamilyProgress>(progress: ReadonlyArray<T>, count = 3): ReadonlyArray<T> {
    return progress
        .map((p, index) => ({ p, index, ratio: progressToNextTier(p) }))
        .filter((x): x is { p: T; index: number; ratio: number } => x.ratio !== null)
        .sort((a, b) => b.ratio - a.ratio || a.index - b.index)
        .slice(0, count)
        .map((x) => x.p);
}
