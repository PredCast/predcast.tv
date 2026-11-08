import { z } from 'zod';

export const AdminRoleDtoSchema = z.enum(['super_admin', 'admin', 'moderator', 'finance']);
export type AdminRoleDto = z.infer<typeof AdminRoleDtoSchema>;

/** Session of the signed-in operator, with the environment the backend runs in. */
export const AdminContextDtoSchema = z.object({
    wallet: z.string(),
    role: AdminRoleDtoSchema,
    /** Note given at `admin:grant`; null when the grant has none. */
    label: z.string().nullable(),
    environment: z.object({
        tier: z.enum(['production', 'staging', 'local']),
        network: z.enum(['mainnet', 'testnet']),
        chainId: z.number().int(),
        chainName: z.string(),
        explorerUrl: z.string(),
    }),
});
export type AdminContextDto = z.infer<typeof AdminContextDtoSchema>;
