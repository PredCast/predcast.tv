import { z } from 'zod';

import { ProfileCardDtoSchema, ShowcaseItemSchema } from './ProfileCardDto';

export const PublicAchievementSchema = ShowcaseItemSchema.extend({
    unlockedAt: z.string(),
});

/** GET /gamification/profiles/:wallet — the card plus the highest public tier of each family. Never lists wallets. */
export const PublicProfileDtoSchema = ProfileCardDtoSchema.extend({
    achievements: z.array(PublicAchievementSchema),
});

export type PublicAchievementDto = z.infer<typeof PublicAchievementSchema>;
export type PublicProfileDto = z.infer<typeof PublicProfileDtoSchema>;
