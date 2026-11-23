import { z } from 'zod';

/** POST /gamification/watch-heartbeat body: the match on screen and the selected stream, if any. */
export const WatchHeartbeatRequestSchema = z.object({
    matchId: z.number().int().positive(),
    streamId: z.string().uuid().nullable().optional(),
});

export const WatchHeartbeatRefusalReasonSchema = z.enum([
    'disabled',
    'not_launched',
    'rate_limited',
    'banned',
    'suspended',
    'own_stream',
    'not_live',
    'already_counted',
]);

/** Always 200; a minute not counted carries a reason. `xp` is what this minute credited (0 or more). */
export const WatchHeartbeatResultDtoSchema = z.discriminatedUnion('counted', [
    z.object({
        counted: z.literal(true),
        minutesToday: z.number().int(),
        xp: z.number().int(),
    }),
    z.object({
        counted: z.literal(false),
        reason: WatchHeartbeatRefusalReasonSchema,
    }),
]);

export type WatchHeartbeatRequest = z.infer<typeof WatchHeartbeatRequestSchema>;
export type WatchHeartbeatRefusalReason = z.infer<typeof WatchHeartbeatRefusalReasonSchema>;
export type WatchHeartbeatResultDto = z.infer<typeof WatchHeartbeatResultDtoSchema>;
