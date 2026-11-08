import { z } from 'zod';

export const JobCategoryDtoSchema = z.enum(['safe', 'on_chain', 'quota']);
export type JobCategoryDto = z.infer<typeof JobCategoryDtoSchema>;

export const JobScheduleDtoSchema = z.discriminatedUnion('kind', [
    z.object({ kind: z.literal('cron'), expression: z.string() }),
    z.object({ kind: z.literal('interval'), everyMs: z.number().int() }),
    z.object({ kind: z.literal('self_rescheduled'), everyMs: z.number().int() }),
]);
export type JobScheduleDto = z.infer<typeof JobScheduleDtoSchema>;

export const JobRunStatusDtoSchema = z.enum(['pending', 'running', 'succeeded', 'failed', 'skipped_lock']);
export type JobRunStatusDto = z.infer<typeof JobRunStatusDtoSchema>;

export const JobRunDtoSchema = z.object({
    id: z.string(),
    jobName: z.string(),
    trigger: z.enum(['schedule', 'manual']),
    status: JobRunStatusDtoSchema,
    requestedBy: z.string().nullable(),
    /** Grant note of the requester, null when it has none or for scheduled runs. */
    requestedByLabel: z.string().nullable(),
    requestedAt: z.string().datetime(),
    startedAt: z.string().datetime().nullable(),
    finishedAt: z.string().datetime().nullable(),
    durationMs: z.number().int().nullable(),
    error: z.string().nullable(),
});
export type JobRunDto = z.infer<typeof JobRunDtoSchema>;

export const JobHealthDtoSchema = z.enum(['ok', 'failing', 'late', 'never_ran']);
export type JobHealthDto = z.infer<typeof JobHealthDtoSchema>;

export const AdminJobDtoSchema = z.object({
    name: z.string(),
    description: z.string(),
    category: JobCategoryDtoSchema,
    schedule: JobScheduleDtoSchema,
    cadenceMs: z.number().int(),
    lockTtlSeconds: z.number().int(),
    health: JobHealthDtoSchema,
    nextRunAt: z.string().datetime().nullable(),
    last: z
        .object({
            status: z.enum(['succeeded', 'failed']).nullable(),
            startedAt: z.string().datetime().nullable(),
            finishedAt: z.string().datetime().nullable(),
            durationMs: z.number().int().nullable(),
            error: z.string().nullable(),
            successAt: z.string().datetime().nullable(),
        })
        .nullable(),
    counters: z.object({
        runs: z.number().int(),
        failures: z.number().int(),
        consecutiveFailures: z.number().int(),
        skippedLock: z.number().int(),
    }),
    /** Pending or running manual run, if any. */
    activeRun: JobRunDtoSchema.nullable(),
    canRun: z.boolean(),
    requiresConfirmation: z.boolean(),
    /** Ms before a new Run now is accepted (cooldown); 0 when allowed. */
    cooldownMs: z.number().int(),
});
export type AdminJobDto = z.infer<typeof AdminJobDtoSchema>;

export const AdminJobsDtoSchema = z.object({
    jobs: z.array(AdminJobDtoSchema),
    generatedAt: z.string().datetime(),
});
export type AdminJobsDto = z.infer<typeof AdminJobsDtoSchema>;

export const RunJobRequestDtoSchema = z.object({
    /** Required for on-chain and quota jobs. */
    confirm: z.boolean().optional(),
});
export type RunJobRequestDto = z.infer<typeof RunJobRequestDtoSchema>;

export const RunJobAcceptedDtoSchema = z.object({
    runId: z.string(),
    status: z.literal('pending'),
});
export type RunJobAcceptedDto = z.infer<typeof RunJobAcceptedDtoSchema>;

export const AdminIndexerDtoSchema = z.object({
    name: z.string(),
    contractAddress: z.string().nullable(),
    lastBlock: z.string(),
    updatedAt: z.string().datetime(),
    /** Blocks behind the chain head; null when the head could not be read. */
    lagBlocks: z.string().nullable(),
});
export type AdminIndexerDto = z.infer<typeof AdminIndexerDtoSchema>;

export const AdminIndexersDtoSchema = z.object({
    headBlock: z.string().nullable(),
    indexers: z.array(AdminIndexerDtoSchema),
    generatedAt: z.string().datetime(),
});
export type AdminIndexersDto = z.infer<typeof AdminIndexersDtoSchema>;
