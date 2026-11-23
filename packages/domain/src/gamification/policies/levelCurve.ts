import { MAX_LEVEL, XP_PER_LEVEL_STEP } from '../catalog/constants';

/** Cumulative XP to reach `level`: 50 × L × (L − 1) (§4.1). */
export function xpForLevel(level: number): number {
    if (!Number.isInteger(level) || level < 1 || level > MAX_LEVEL) {
        throw new RangeError(`level must be an integer in [1, ${MAX_LEVEL}], got ${level}`);
    }
    return XP_PER_LEVEL_STEP * level * (level - 1);
}

/** Largest L ≤ 60 with xpForLevel(L) ≤ xp — integer binary search, no floating square root. */
export function levelOf(xp: number): number {
    const total = Math.max(0, Math.floor(xp));
    let low = 1;
    let high = MAX_LEVEL;
    while (low < high) {
        const mid = Math.ceil((low + high) / 2);
        if (xpForLevel(mid) <= total) low = mid;
        else high = mid - 1;
    }
    return low;
}

export interface LevelProgress {
    readonly level: number;
    readonly xpTotal: number;
    readonly levelStart: number;
    /** Null at the max level (XP keeps accumulating for a future prestige). */
    readonly nextLevelAt: number | null;
    readonly isMaxLevel: boolean;
}

export function levelProgress(xp: number): LevelProgress {
    const xpTotal = Math.max(0, Math.floor(xp));
    const level = levelOf(xpTotal);
    const isMaxLevel = level === MAX_LEVEL;
    return {
        level,
        xpTotal,
        levelStart: xpForLevel(level),
        nextLevelAt: isMaxLevel ? null : xpForLevel(level + 1),
        isMaxLevel,
    };
}
