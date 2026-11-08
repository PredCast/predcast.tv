import { z } from 'zod';

import { JobCategoryDtoSchema, JobHealthDtoSchema } from './AdminJobsDtos';

/** Raw USDC amounts (6 dp) and wei amounts travel as decimal strings. */
const Amount = z.string();
const Iso = z.string().datetime();

export const KpiTrendDtoSchema = z.object({
    dir: z.enum(['up', 'down', 'flat']),
    absolute: z.number(),
    percent: z.number().nullable(),
});

export const KpiValueDtoSchema = z.object({
    current: z.string(),
    previous: z.string(),
    trend: KpiTrendDtoSchema,
    /** Oldest first; null when the KPI has no history. */
    series: z.array(z.string()).nullable(),
});
export type KpiValueDto = z.infer<typeof KpiValueDtoSchema>;

/** Fields outside the caller's role scope are null (enforced by the backend). */
export const DashboardKpisDtoSchema = z.object({
    liveMatches: z.number().int(),
    liveStreams: z.object({ count: z.number().int(), viewers: z.number().int() }),
    deployments7d: KpiValueDtoSchema.nullable(),
    volume24h: KpiValueDtoSchema.nullable(),
    /** MarketResolved.fee summed: gross (company + 1% leaderboard share), at settlement. */
    feesSettled24h: KpiValueDtoSchema.nullable(),
    bettors24h: KpiValueDtoSchema.nullable(),
    avgPool30d: KpiValueDtoSchema.extend({ events: z.number().int() }).nullable(),
    openReports: KpiValueDtoSchema.extend({ highSeverity: z.number().int() }).nullable(),
    activeBans: KpiValueDtoSchema.extend({ permanent: z.number().int() }).nullable(),
    generatedAt: Iso,
});
export type DashboardKpisDto = z.infer<typeof DashboardKpisDtoSchema>;

const TeamDtoSchema = z.object({ name: z.string(), logo: z.string().nullable() });

export const MarketStateDtoSchema = z.enum(['inactive', 'open', 'suspended', 'closed', 'resolved', 'cancelled']);
export type MarketStateDto = z.infer<typeof MarketStateDtoSchema>;

export const DashboardLiveMatchDtoSchema = z.object({
    apiFootballId: z.number().int(),
    home: TeamDtoSchema,
    away: TeamDtoSchema,
    score: z.object({ home: z.number().int(), away: z.number().int() }).nullable(),
    status: z.string(),
    elapsed: z.number().int().nullable(),
    league: z.string(),
    kickoffAt: Iso,
    contractAddress: z.string().nullable(),
    published: z.boolean(),
    /** Null for moderators (no money in their scope). */
    pool: z.object({ totalStaked: Amount, betCount: z.number().int() }).nullable(),
    streams: z.object({ count: z.number().int(), viewers: z.number().int() }),
    markets: z.array(z.object({ marketId: z.number().int(), type: z.string(), line: z.number().int(), state: MarketStateDtoSchema })),
});
export type DashboardLiveMatchDto = z.infer<typeof DashboardLiveMatchDtoSchema>;

export const DashboardLiveDtoSchema = z.object({
    matches: z.array(DashboardLiveMatchDtoSchema),
    /** Live score feed (SyncLiveMatches): last success and whether it is stale. */
    feed: z.object({ lastSuccessAt: Iso.nullable(), stale: z.boolean() }),
    generatedAt: Iso,
});
export type DashboardLiveDto = z.infer<typeof DashboardLiveDtoSchema>;

export const EventVisibilityDtoSchema = z.enum(['published', 'hidden', 'deploying', 'setup_failed']);
export type EventVisibilityDto = z.infer<typeof EventVisibilityDtoSchema>;

export const DashboardEventDtoSchema = z.object({
    apiFootballId: z.number().int(),
    kickoffAt: Iso,
    home: z.string(),
    away: z.string(),
    league: z.string(),
    contractAddress: z.string().nullable(),
    visibility: EventVisibilityDtoSchema,
    pool: z.object({ totalStaked: Amount, betCount: z.number().int() }).nullable(),
});
export type DashboardEventDto = z.infer<typeof DashboardEventDtoSchema>;

export const DashboardEventsDtoSchema = z.object({
    events: z.array(DashboardEventDtoSchema),
    total: z.number().int(),
    generatedAt: Iso,
});
export type DashboardEventsDto = z.infer<typeof DashboardEventsDtoSchema>;

export const DashboardSuggestionDtoSchema = z.object({
    apiFootballId: z.number().int(),
    kickoffAt: Iso,
    home: z.string(),
    away: z.string(),
    league: z.string(),
    /** Fan-token symbols of the teams that have one. */
    tokens: z.array(z.string()),
});
export type DashboardSuggestionDto = z.infer<typeof DashboardSuggestionDtoSchema>;

export const DashboardSuggestionsDtoSchema = z.object({
    suggestions: z.array(DashboardSuggestionDtoSchema),
    generatedAt: Iso,
});
export type DashboardSuggestionsDto = z.infer<typeof DashboardSuggestionsDtoSchema>;

export const DashboardOperationDtoSchema = z.object({
    id: z.string(),
    kind: z.enum(['deploy', 'retry_setup', 'cancel_markets']),
    status: z.enum(['pending', 'running', 'succeeded', 'failed', 'cancelled']),
    matchId: z.number().int(),
    matchLabel: z.string(),
    league: z.string().nullable(),
    deployTxHash: z.string().nullable(),
    contractAddress: z.string().nullable(),
    marketsOpened: z.number().int().nullable(),
    marketsCancelled: z.number().int().nullable(),
    gasWei: Amount.nullable(),
    error: z.string().nullable(),
    requestedBy: z.string(),
    requestedByLabel: z.string().nullable(),
    createdAt: Iso,
    finishedAt: Iso.nullable(),
});
export type DashboardOperationDto = z.infer<typeof DashboardOperationDtoSchema>;

export const DashboardOperationsDtoSchema = z.object({
    operations: z.array(DashboardOperationDtoSchema),
    /** Deploy and setup gas actually paid over 7 days, and over how many deployments. */
    spent7d: z.object({ gasWei: Amount, deployments: z.number().int() }),
    generatedAt: Iso,
});
export type DashboardOperationsDto = z.infer<typeof DashboardOperationsDtoSchema>;

export const DashboardHealthDtoSchema = z.object({
    jobs: z.array(
        z.object({
            name: z.string(),
            category: JobCategoryDtoSchema,
            cadenceMs: z.number().int(),
            health: JobHealthDtoSchema,
            lastStatus: z.enum(['succeeded', 'failed']).nullable(),
            lastFinishedAt: Iso.nullable(),
            lastDurationMs: z.number().int().nullable(),
            nextRunAt: Iso.nullable(),
        }),
    ),
    upstreams: z.object({
        apiFootball: z.object({
            state: z.enum(['ok', 'down', 'unknown']),
            usedToday: z.number().int().nullable(),
            dailyLimit: z.number().int().nullable(),
            lastSuccessAt: Iso.nullable(),
            consecutiveFailures: z.number().int(),
        }),
        coingecko: z.object({
            state: z.enum(['ok', 'warning', 'exhausted', 'unknown']),
            usedThisMonth: z.number().int().nullable(),
            monthlyBudget: z.number().int(),
        }),
    }),
    generatedAt: Iso,
});
export type DashboardHealthDto = z.infer<typeof DashboardHealthDtoSchema>;

export const DashboardAlertDtoSchema = z.object({
    kind: z.enum(['feed_down', 'operation_failed', 'report_open', 'signer_low', 'job_failing', 'job_late', 'quota_budget']),
    level: z.enum(['critical', 'warning']),
    subject: z.string(),
    at: Iso.nullable(),
    facts: z.record(z.union([z.string(), z.number(), z.null()])),
});
export type DashboardAlertDto = z.infer<typeof DashboardAlertDtoSchema>;

export const DashboardAlertsDtoSchema = z.object({
    alerts: z.array(DashboardAlertDtoSchema),
    generatedAt: Iso,
});
export type DashboardAlertsDto = z.infer<typeof DashboardAlertsDtoSchema>;

export const DashboardModerationDtoSchema = z.object({
    reports: z.array(
        z.object({
            id: z.string(),
            severity: z.number().int(),
            reasonCode: z.string(),
            targetType: z.enum(['stream', 'message', 'account']),
            targetLabel: z.string(),
            matchLabel: z.string().nullable(),
            createdAt: Iso,
        }),
    ),
    openTotal: z.number().int(),
    bans: z.array(
        z.object({
            id: z.string(),
            wallet: z.string(),
            username: z.string().nullable(),
            expiresAt: Iso.nullable(),
            escalationIndex: z.number().int(),
            /** 'quorum' for automatic bans, otherwise the issuing admin. */
            issuedBy: z.union([z.literal('quorum'), z.object({ wallet: z.string(), label: z.string().nullable() })]),
        }),
    ),
    activeTotal: z.number().int(),
    generatedAt: Iso,
});
export type DashboardModerationDto = z.infer<typeof DashboardModerationDtoSchema>;

export const DashboardActivityDtoSchema = z.object({
    entries: z.array(
        z.object({
            id: z.number().int(),
            at: Iso,
            actorWallet: z.string(),
            actorLabel: z.string().nullable(),
            actorRole: z.string(),
            action: z.string(),
            targetType: z.string(),
            targetId: z.string(),
            targetLabel: z.string().nullable(),
        }),
    ),
    scope: z.enum(['all', 'moderation', 'finance']),
    generatedAt: Iso,
});
export type DashboardActivityDto = z.infer<typeof DashboardActivityDtoSchema>;
