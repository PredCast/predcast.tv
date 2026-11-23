import { z } from 'zod';

/** PUT /gamification/me/cosmetics — checked by the domain `validateCosmetics` (422 otherwise). */
export const UpdateCosmeticsBodySchema = z.object({
    titleId: z.string().nullable(),
    frameId: z.string().nullable(),
    showcase: z.array(z.string().regex(/^[a-z_]+:[1-8]$/)).max(3),
});

export const MAX_ACK_NOTIFICATIONS = 50;

/** POST /gamification/me/notifications/ack. */
export const AckNotificationsBodySchema = z.object({
    ids: z.array(z.number().int().positive()).min(1).max(MAX_ACK_NOTIFICATIONS),
});

export const AckNotificationsResponseSchema = z.object({ acked: z.number().int().nonnegative() });

export type UpdateCosmeticsBody = z.infer<typeof UpdateCosmeticsBodySchema>;
export type AckNotificationsBody = z.infer<typeof AckNotificationsBodySchema>;
export type AckNotificationsResponse = z.infer<typeof AckNotificationsResponseSchema>;
