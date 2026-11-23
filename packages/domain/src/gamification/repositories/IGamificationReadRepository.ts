import type { GamificationSource } from '../catalog/sources';
import type { GamificationProfile } from '../entities/GamificationProfile';
import type { UnlockedAchievement } from '../entities/Progress';
import type { ParisDay } from '../policies/parisDay';

/** Everything a public card needs for one wallet, `users` joined by the read side itself (D8). */
export interface CardSource {
    /** Requested wallet, lowercase: the only wallet a public read model ever carries. */
    readonly wallet: string;
    readonly accountId: string;
    readonly accountCreatedAt: Date;
    readonly displayName: string | null;
    readonly avatarUrl: string | null;
    /** Null until the account's first credit. */
    readonly profile: GamificationProfile | null;
    readonly unlocked: ReadonlyArray<UnlockedAchievement>;
    /** Best rank over the snapshotted cycles, among the account's wallets. */
    readonly bestCycleRank: number | null;
    /** Latest cycle won (title `cycle_champion`). */
    readonly lastWonCycleId: number | null;
    readonly streamMinutes: number;
}

/** Batched reads of the gamification read models (cards, badges, profiles, owner view). */
export interface IGamificationReadRepository {
    /** One entry per wallet with an active account link; unknown wallets are absent. */
    findCardSources(wallets: ReadonlyArray<string>): Promise<ReadonlyArray<CardSource>>;
    /** Owner view: `wallet` is the session wallet, shown on the card. */
    findCardSourceOfAccount(accountId: string, wallet: string): Promise<CardSource | null>;
    /** XP credited per source on a Paris day (ledger sum, multipliers and reversals included). */
    sumXpBySourceOnDay(accountId: string, day: ParisDay): Promise<Readonly<Partial<Record<GamificationSource, number>>>>;
}
