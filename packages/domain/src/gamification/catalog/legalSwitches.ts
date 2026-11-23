/**
 * Legal switches for the ⚠ sources (spec §13). Each one disables its source or moves it to the
 * safer variant; the defaults are the spec values. Policies take the switches as a parameter
 * defaulting to `LEGAL_SWITCHES`, so flipping a constant here needs no refactor.
 */

/** `volume`: 1 XP per counted USDC. `per_market`: fixed XP per market played, amount ignored (§13.1). */
export type BetVolumeMode = 'volume' | 'per_market' | 'disabled';

/** `cosmetic_only`: no XP for winning bets nor their achievements, cosmetics kept (§13.4). */
export type BetWonMode = 'xp' | 'cosmetic_only' | 'disabled';

export type SupportMode = 'xp' | 'disabled';

/** `weekly`: consecutive Paris weeks with a check-in, no freezes (§13.2). */
export type StreakMode = 'daily' | 'weekly' | 'disabled';

export type DoubleXpMode = 'enabled' | 'disabled';

export interface LegalSwitches {
    readonly betVolume: BetVolumeMode;
    readonly betWon: BetWonMode;
    readonly support: SupportMode;
    readonly streak: StreakMode;
    readonly doubleXp: DoubleXpMode;
}

export const LEGAL_SWITCHES: LegalSwitches = {
    betVolume: 'volume',
    betWon: 'xp',
    support: 'xp',
    streak: 'daily',
    doubleXp: 'enabled',
};
