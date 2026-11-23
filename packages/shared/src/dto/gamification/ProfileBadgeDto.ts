import { z } from 'zod';

import { ProfileTagSchema, RankTierSchema, WalletAddressSchema } from './GamificationEnums';

/** Chat pills and leaderboard rows (§9.2). */
export const ProfileBadgeDtoSchema = z.object({
    wallet: z.string(),
    level: z.number().int().min(1).max(60),
    rankTier: RankTierSchema,
    frameId: z.string(),
    titleId: z.string().nullable(),
    /** Cycle number for `cycle_champion`; null otherwise. */
    titleCycleId: z.number().int().nullable(),
    tags: z.array(ProfileTagSchema),
});

export const MAX_BADGE_WALLETS = 100;

/** POST /gamification/cards/badges. */
export const ProfileBadgesBodySchema = z.object({
    wallets: z.array(WalletAddressSchema).min(1).max(MAX_BADGE_WALLETS),
});

/** Wallets without an account (or with gamification off) are absent. Keys are lowercase. */
export const ProfileBadgesResponseSchema = z.object({
    badges: z.record(z.string(), ProfileBadgeDtoSchema),
});

export type ProfileBadgeDto = z.infer<typeof ProfileBadgeDtoSchema>;
export type ProfileBadgesBody = z.infer<typeof ProfileBadgesBodySchema>;
export type ProfileBadgesResponse = z.infer<typeof ProfileBadgesResponseSchema>;
