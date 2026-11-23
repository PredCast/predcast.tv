import type { GamificationProfile } from '../entities/GamificationProfile';

export interface CosmeticsUpdate {
    readonly titleId: string | null;
    readonly frameId: string | null;
    readonly showcase: ReadonlyArray<string>;
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
}
