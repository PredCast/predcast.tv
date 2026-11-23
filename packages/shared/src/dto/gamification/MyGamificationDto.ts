import { z } from 'zod';

import { DoubleXpPublicDtoSchema } from './DoubleXpPublicDto';
import { ProfileCardDtoSchema } from './ProfileCardDto';

export const AchievementProgressSchema = z.object({
    achievementId: z.string(),
    unlockedTier: z.number().int().min(0).max(8),
    /** Counter in threshold units (hours for spectator / streamer_hours); null for leaderboard without a rank and founder. */
    current: z.number().nullable(),
    nextThreshold: z.number().nullable(),
    visibility: z.enum(['public', 'private']),
});

export const GamificationNotificationSchema = z.object({
    id: z.number().int(),
    kind: z.enum(['level_up', 'achievement', 'streak_freeze_used', 'streak_freeze_earned']),
    payload: z.record(z.string(), z.unknown()),
    createdAt: z.string(),
});

/** GET /gamification/me — owner view, adds private data to the card. */
export const MyGamificationDtoSchema = ProfileCardDtoSchema.extend({
    streakFreezes: z.number().int().min(0).max(2),
    checkedInToday: z.boolean(),
    ownedTitleIds: z.array(z.string()),
    ownedFrameIds: z.array(z.string()),
    achievements: z.array(AchievementProgressSchema),
    todayXpBySource: z.record(z.string(), z.number().int()),
    activeDoubleXp: DoubleXpPublicDtoSchema.nullable(),
    unseenNotifications: z.array(GamificationNotificationSchema).max(10),
});

export type AchievementProgressDto = z.infer<typeof AchievementProgressSchema>;
export type GamificationNotificationDto = z.infer<typeof GamificationNotificationSchema>;
export type MyGamificationDto = z.infer<typeof MyGamificationDtoSchema>;
