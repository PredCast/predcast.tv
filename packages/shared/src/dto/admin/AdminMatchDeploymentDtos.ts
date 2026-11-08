import { z } from 'zod';

const booleanParam = z.enum(['true', 'false']).transform((v) => v === 'true');

/** Query of `GET /admin/matches` (server-side search, filters and pagination). */
export const AdminMatchListQuerySchema = z.object({
    search: z.string().trim().max(80).optional(),
    leagueId: z.coerce.number().int().positive().optional(),
    from: z.string().datetime().optional(),
    to: z.string().datetime().optional(),
    status: z.enum(['upcoming', 'live', 'finished', 'blocked']).optional(),
    deployed: booleanParam.optional(),
    published: booleanParam.optional(),
    sort: z.enum(['kickoff_asc', 'kickoff_desc']).default('kickoff_asc'),
    limit: z.coerce.number().int().min(1).max(100).default(25),
    offset: z.coerce.number().int().min(0).default(0),
});
export type AdminMatchListQuery = z.infer<typeof AdminMatchListQuerySchema>;

export const MatchOperationDtoSchema = z.object({
    id: z.string(),
    matchId: z.number().int(),
    kind: z.enum(['deploy', 'retry_setup', 'cancel_markets']),
    status: z.enum(['pending', 'running', 'succeeded', 'failed']),
    chainId: z.number().int(),
    error: z.string().nullable(),
    contractAddress: z.string().nullable(),
    deployTxHash: z.string().nullable(),
    marketsOpened: z.number().int().nullable(),
    marketsCancelled: z.number().int().nullable(),
    attempts: z.number().int(),
    createdAt: z.string().datetime(),
    finishedAt: z.string().datetime().nullable(),
});
export type MatchOperationDto = z.infer<typeof MatchOperationDtoSchema>;

/** One row of the admin Markets page. Raw USDC amounts are 6dp decimal strings. */
export const AdminMatchRowDtoSchema = z.object({
    /** API-Football id: the key every admin match route takes. */
    apiFootballId: z.number().int(),
    homeTeamName: z.string(),
    homeTeamLogo: z.string().nullable(),
    awayTeamName: z.string(),
    awayTeamLogo: z.string().nullable(),
    leagueId: z.number().int(),
    leagueName: z.string(),
    leagueLogo: z.string().nullable(),
    status: z.string(),
    matchDate: z.string().datetime(),
    elapsed: z.number().int().nullable(),
    score: z.object({ home: z.number(), away: z.number() }).nullable(),
    isKnockout: z.boolean(),
    bettingContractAddress: z.string().nullable(),
    bettingChainId: z.number().int().nullable(),
    bettingOpenedAt: z.string().datetime().nullable(),
    publishedAt: z.string().datetime().nullable(),
    betCount: z.number().int(),
    totalStaked: z.string(),
    latestOperation: MatchOperationDtoSchema.nullable(),
    /** Null when deployable, else the reason code of `canDeployMatch`. */
    deployBlockedReason: z.string().nullable(),
});
export type AdminMatchRowDto = z.infer<typeof AdminMatchRowDtoSchema>;

export const AdminMatchPageDtoSchema = z.object({
    items: z.array(AdminMatchRowDtoSchema),
    total: z.number().int(),
    limit: z.number().int(),
    offset: z.number().int(),
});
export type AdminMatchPageDto = z.infer<typeof AdminMatchPageDtoSchema>;

export const DeployMatchBodySchema = z.object({
    chainId: z.number().int().positive(),
});
export type DeployMatchBody = z.infer<typeof DeployMatchBodySchema>;

export const UnpublishMatchBodySchema = z.discriminatedUnion('cancelMarkets', [
    z.object({ cancelMarkets: z.literal(false) }),
    z.object({ cancelMarkets: z.literal(true), reason: z.string().trim().min(3).max(200) }),
]);
export type UnpublishMatchBody = z.infer<typeof UnpublishMatchBodySchema>;

export const BettingChainDtoSchema = z.object({
    chainId: z.number().int(),
    name: z.string(),
    nativeSymbol: z.string(),
    explorerUrl: z.string(),
});
export type BettingChainDto = z.infer<typeof BettingChainDtoSchema>;

/** Data the deploy dialog and the Markets header need. Wei amounts are decimal strings. */
export const DeploymentConfigDtoSchema = z.object({
    chains: z.array(BettingChainDtoSchema),
    signer: z.object({
        address: z.string(),
        balanceWei: z.string(),
        estimatedDeployCostWei: z.string(),
        lowBalanceThresholdWei: z.string(),
        lowBalance: z.boolean(),
    }),
    kickoffBufferSec: z.number().int(),
    /** Markets a deployment opens, in marketId order; `knockoutOnly` ones only on knockout fixtures. */
    marketLineup: z.array(z.object({
        marketId: z.number().int(),
        label: z.string(),
        knockoutOnly: z.boolean(),
    })),
});
export type DeploymentConfigDto = z.infer<typeof DeploymentConfigDtoSchema>;
