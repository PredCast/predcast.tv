import { z } from 'zod';

import { ProfileBadgeDtoSchema } from './ProfileBadgeDto';

export const ShowcaseItemSchema = z.object({
    achievementId: z.string(),
    tier: z.number().int().min(1).max(8),
    /** e.g. {"cycleId": 7} for leaderboard tiers. */
    context: z.record(z.string(), z.union([z.string(), z.number()])).nullable(),
});

/** Hover card; never carries an amount, a private achievement nor another wallet of the account. */
export const ProfileCardDtoSchema = ProfileBadgeDtoSchema.extend({
    displayName: z.string().nullable(),
    avatarUrl: z.string().nullable(),
    xp: z.object({
        total: z.number().int().nonnegative(),
        levelStart: z.number().int().nonnegative(),
        /** Null at level 60. */
        nextLevelAt: z.number().int().positive().nullable(),
    }),
    streak: z.object({ current: z.number().int(), best: z.number().int(), alive: z.boolean() }),
    showcase: z.array(ShowcaseItemSchema).max(3),
    showcaseSlots: z.number().int().min(1).max(3),
    /** Streamers only (null otherwise). Whole hours. */
    streamedHours: z.number().int().nullable(),
    /** ISO date of `accounts.created_at`. */
    memberSince: z.string(),
});

export type ShowcaseItemDto = z.infer<typeof ShowcaseItemSchema>;
export type ProfileCardDto = z.infer<typeof ProfileCardDtoSchema>;
