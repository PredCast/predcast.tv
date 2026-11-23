import { describe, expect, it } from 'vitest';

import { checkInXp } from '../policies/checkInXp';
import { levelOf, levelProgress, xpForLevel } from '../policies/levelCurve';

describe('levelCurve', () => {
    it('round-trips levelOf(xpForLevel(L)) for L = 2..60', () => {
        for (let level = 2; level <= 60; level++) {
            expect(levelOf(xpForLevel(level))).toBe(level);
            expect(levelOf(xpForLevel(level) - 1)).toBe(level - 1);
        }
    });

    it('matches the §4.1 table', () => {
        const table: ReadonlyArray<readonly [number, number]> = [
            [1, 0], [2, 100], [3, 300], [5, 1000], [10, 4500], [15, 10500], [20, 19000],
            [25, 30000], [30, 43500], [40, 78000], [45, 99000], [50, 122500], [55, 148500], [60, 177000],
        ];
        for (const [level, xp] of table) expect(xpForLevel(level)).toBe(xp);
    });

    it('caps at level 60 and floors negative XP to level 1', () => {
        expect(levelOf(177_000)).toBe(60);
        expect(levelOf(10_000_000)).toBe(60);
        expect(levelOf(0)).toBe(1);
        expect(levelOf(-50)).toBe(1);
        expect(levelOf(99.9)).toBe(1);
    });

    it('rejects levels outside 1..60', () => {
        expect(() => xpForLevel(0)).toThrow(RangeError);
        expect(() => xpForLevel(61)).toThrow(RangeError);
        expect(() => xpForLevel(2.5)).toThrow(RangeError);
    });

    it('describes the gauge, with no next level at 60', () => {
        expect(levelProgress(450)).toEqual({ level: 3, xpTotal: 450, levelStart: 300, nextLevelAt: 600, isMaxLevel: false });
        expect(levelProgress(200_000)).toEqual({
            level: 60, xpTotal: 200_000, levelStart: 177_000, nextLevelAt: null, isMaxLevel: true,
        });
    });
});

describe('checkInXp', () => {
    it('gives 50 + 5 × (s − 1), capped at 100 from day 11', () => {
        const expected = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 100, 100, 100, 100];
        expect(expected.map((_, i) => checkInXp(i + 1))).toEqual(expected);
        expect(checkInXp(0)).toBe(50);
    });
});
