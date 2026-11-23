import { z } from 'zod';

export const CheckInRefusalReasonSchema = z.enum([
    'disabled',
    'not_launched',
    'rate_limited',
    'already_checked_in',
    'banned',
    'suspended',
]);

/** POST /gamification/check-in. `disabled` / `not_launched`: the front shows nothing. */
export const CheckInResultDtoSchema = z.discriminatedUnion('credited', [
    z.object({
        credited: z.literal(true),
        /** Paris day, YYYY-MM-DD. */
        day: z.string(),
        xp: z.number().int(),
        multiplier: z.number(),
        streak: z.number().int(),
        freezeUsed: z.number().int(),
        freezeEarned: z.boolean(),
        level: z.number().int(),
        leveledUp: z.boolean(),
    }),
    z.object({
        credited: z.literal(false),
        day: z.string(),
        reason: CheckInRefusalReasonSchema,
    }),
]);

export type CheckInRefusalReason = z.infer<typeof CheckInRefusalReasonSchema>;
export type CheckInResultDto = z.infer<typeof CheckInResultDtoSchema>;
