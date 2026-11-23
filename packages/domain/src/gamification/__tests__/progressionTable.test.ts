import { describe, expect, it } from 'vitest';

import { checkInOnly, daily10, daily50, weekend } from './simulation/profiles';
import { simulate, type SimulatedProfile } from './simulation/progressionSimulator';

/** A §6.3 cell: `13 j` → [13, 'd'], `3,3 mois` → [3.3, 'm'], `4,8 ans` → [4.8, 'y']. */
type Delay = readonly [number, 'd' | 'm' | 'y'];

const DAYS_PER_UNIT = { d: 1, m: 365.25 / 12, y: 365.25 } as const;
/** Half of the display precision (1 day, 0.1 month, 0.1 year) plus the ±1 day of the brief. */
const TOLERANCE = { d: 1, m: 0.05 * DAYS_PER_UNIT.m + 1, y: 0.05 * DAYS_PER_UNIT.y + 1 } as const;

const LEVELS = [5, 10, 15, 20, 30, 45, 60] as const;

interface ProfileTable {
    readonly profile: SimulatedProfile;
    readonly final: ReadonlyArray<Delay>;
    readonly base: ReadonlyArray<Delay>;
}

/** §6.3, verbatim, one entry per level of `LEVELS`. */
const TABLE: ReadonlyArray<ProfileTable> = [
    {
        profile: checkInOnly,
        final: [[13, 'd'], [46, 'd'], [3.3, 'm'], [6.1, 'm'], [13.7, 'm'], [2.7, 'y'], [4.8, 'y']],
        base: [[13, 'd'], [48, 'd'], [3.5, 'm'], [6.3, 'm'], [14.4, 'm'], [2.7, 'y'], [4.9, 'y']],
    },
    {
        profile: daily10,
        final: [[10, 'd'], [37, 'd'], [2.8, 'm'], [5.1, 'm'], [11.7, 'm'], [2.3, 'y'], [4.1, 'y']],
        base: [[12, 'd'], [44, 'd'], [3.2, 'm'], [5.8, 'm'], [13.1, 'm'], [2.5, 'y'], [4.4, 'y']],
    },
    {
        profile: daily50,
        final: [[7, 'd'], [28, 'd'], [2.1, 'm'], [3.7, 'm'], [8.6, 'm'], [19.9, 'm'], [3.0, 'y']],
        base: [[9, 'd'], [32, 'd'], [2.4, 'm'], [4.2, 'm'], [9.6, 'm'], [21.7, 'm'], [3.2, 'y']],
    },
    {
        profile: weekend,
        final: [[27, 'd'], [3.9, 'm'], [9.4, 'm'], [17.2, 'm'], [3.3, 'y'], [7.6, 'y'], [13.8, 'y']],
        base: [[35, 'd'], [5.1, 'm'], [11.9, 'm'], [21.4, 'm'], [4.1, 'y'], [9.3, 'y'], [16.6, 'y']],
    },
];

const MAX_DAYS = 7000;

function divergences(table: ProfileTable, mode: 'base' | 'final'): ReadonlyArray<string> {
    const { levelDay } = simulate(table.profile, mode, LEVELS, MAX_DAYS);
    return LEVELS.flatMap((level, i) => {
        const [value, unit] = table[mode][i];
        const expectedDays = value * DAYS_PER_UNIT[unit];
        const day = levelDay.get(level);
        if (day !== undefined && Math.abs(day - expectedDays) <= TOLERANCE[unit]) return [];
        return [`${table.profile.name} ${mode} L${level}: spec ${value}${unit} (≈${expectedDays.toFixed(1)} d), simulated ${day ?? 'never'} d`];
    });
}

describe('§6.3 progression table', () => {
    for (const table of TABLE) {
        it(`${table.profile.name} — base (check-in + volume)`, () => {
            expect(divergences(table, 'base')).toEqual([]);
        });

        it(`${table.profile.name} — final (all sources + achievements)`, () => {
            expect(divergences(table, 'final')).toEqual([]);
        });
    }
});
