import { z } from 'zod';

import { DoubleXpSourceSchema } from './GamificationEnums';

/** GET /gamification/double-xp/current — running, or starting within 7 days. */
export const DoubleXpPublicDtoSchema = z.object({
    name: z.string(),
    multiplier: z.number(),
    sources: z.array(DoubleXpSourceSchema),
    startsAt: z.string(),
    endsAt: z.string(),
    isActive: z.boolean(),
});

export const CurrentDoubleXpResponseSchema = DoubleXpPublicDtoSchema.nullable();

export type DoubleXpPublicDto = z.infer<typeof DoubleXpPublicDtoSchema>;
export type CurrentDoubleXpResponse = z.infer<typeof CurrentDoubleXpResponseSchema>;
