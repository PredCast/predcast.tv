import { z } from 'zod';

export const ClaimableEpochDtoSchema = z.object({
    epochId: z.number().int(),
    /** USDC raw — the user's pro-rata share `(epochScore * prizePool) / totalScore`. */
    amount: z.string(),
    /** ISO timestamp — claim window cutoff (`closedAt + epochDuration`). */
    claimExpiry: z.string(),
    /** True once `PrizeClaimed(epochId, user, …)` has been indexed (or the
     *  contract reports `pendingClaim == 0` while the user has a score). */
    alreadyClaimed: z.boolean(),
});
export type ClaimableEpochDto = z.infer<typeof ClaimableEpochDtoSchema>;

export const MyClaimableEpochsDtoSchema = z.object({
    userAddress: z.string(),
    epochs: z.array(ClaimableEpochDtoSchema),
});
export type MyClaimableEpochsDto = z.infer<typeof MyClaimableEpochsDtoSchema>;
