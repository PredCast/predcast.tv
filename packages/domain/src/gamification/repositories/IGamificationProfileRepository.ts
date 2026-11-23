import type { GamificationProfile } from '../entities/GamificationProfile';

export interface CosmeticsUpdate {
    readonly titleId: string | null;
    readonly frameId: string | null;
    readonly showcase: ReadonlyArray<string>;
}

/** A profile whose stored total or level differs from its ledger. */
export interface ProfileDrift {
    readonly accountId: string;
    readonly storedTotal: number;
    readonly ledgerTotal: number;
    readonly storedLevel: number;
    readonly ledgerLevel: number;
}

/** `gamification_profiles`; XP, level and streak move only through the ledger repository. */
export interface IGamificationProfileRepository {
    findByAccountId(accountId: string): Promise<GamificationProfile | null>;
    findByAccountIds(accountIds: ReadonlyArray<string>): Promise<ReadonlyArray<GamificationProfile>>;
    /** Stores a selection already checked by `validateCosmetics`. */
    updateCosmetics(accountId: string, cosmetics: CosmeticsUpdate, at: Date): Promise<void>;
    /** False when the profile was already suspended. */
    suspend(accountId: string, reason: string, at: Date): Promise<boolean>;
    /** False when the profile was not suspended. */
    unsuspend(accountId: string, at: Date): Promise<boolean>;
    /** Recomputes xp_total and level from the ledger; with `apply` false only reports the drift. */
    rebuildFromLedger(apply: boolean): Promise<ReadonlyArray<ProfileDrift>>;
}
