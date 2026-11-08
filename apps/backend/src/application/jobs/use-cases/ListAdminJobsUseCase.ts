import { inject, injectable } from 'tsyringe';

import type { AdminJobDto, AdminJobsDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { AdminRole } from '@chiliztv/domain/admin/types';
import type { IAdminWalletRepository } from '@chiliztv/domain/admin/repositories/IAdminWalletRepository';
import type { IJobCatalog } from '@chiliztv/domain/jobs/ports/IJobCatalog';
import type { IJobRunRepository } from '@chiliztv/domain/jobs/repositories/IJobRunRepository';
import type { IJobStateRepository } from '@chiliztv/domain/jobs/repositories/IJobStateRepository';
import type { JobDescriptor, JobRun, JobState } from '@chiliztv/domain/jobs/types';
import { cadenceMs, nextRunAt } from '@chiliztv/domain/jobs/policies/JobSchedulePolicy';
import { jobHealth } from '@chiliztv/domain/jobs/policies/JobHealthPolicy';
import {
    MANUAL_RUN_COOLDOWN_MS,
    canRunManually,
    cooldownRemainingMs,
    requiresConfirmation,
} from '@chiliztv/domain/jobs/policies/ManualRunPolicy';

import { requesters, toJobRunDto } from '../jobRunDto';

/** Shared between admins of the same role (permissions depend on it); the page refetches every 10 s. */
const CACHE_TTL_SECONDS = 5;

@injectable()
export class ListAdminJobsUseCase {
    constructor(
        @inject(TOKENS.IJobCatalog) private readonly catalog: IJobCatalog,
        @inject(TOKENS.IJobStateRepository) private readonly states: IJobStateRepository,
        @inject(TOKENS.IJobRunRepository) private readonly runs: IJobRunRepository,
        @inject(TOKENS.IAdminWalletRepository) private readonly wallets: IAdminWalletRepository,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async execute(role: AdminRole): Promise<AdminJobsDto> {
        const cached = await this.cache.getOrLoad<AdminJobsDto>({
            key: `admin:jobs:list:${role}`,
            ttlSeconds: CACHE_TTL_SECONDS,
            loader: () => this.load(role),
        });
        return cached ?? this.load(role);
    }

    private async load(role: AdminRole): Promise<AdminJobsDto> {
        const now = this.clock.now();
        const [states, manualRuns] = await Promise.all([
            this.states.findAll(),
            this.runs.findManualActiveOrSince(new Date(now.getTime() - MANUAL_RUN_COOLDOWN_MS)),
        ]);
        const labels = await this.wallets.findLabels(requesters(manualRuns));
        const stateByJob = new Map(states.map((s) => [s.jobName, s]));
        const jobs = this.catalog.list().map((job) =>
            this.toDto(job, stateByJob.get(job.name) ?? null, manualRuns.filter((r) => r.jobName === job.name), labels, role, now),
        );
        return { jobs, generatedAt: now.toISOString() };
    }

    private toDto(
        job: JobDescriptor,
        state: JobState | null,
        manualRuns: ReadonlyArray<JobRun>,
        labels: ReadonlyMap<string, string>,
        role: AdminRole,
        now: Date,
    ): AdminJobDto {
        const active = manualRuns.find((r) => r.status === 'pending' || r.status === 'running') ?? null;
        const next = nextRunAt(job.schedule, state, now);
        return {
            name: job.name,
            description: job.description,
            category: job.category,
            schedule: job.schedule,
            cadenceMs: cadenceMs(job.schedule),
            lockTtlSeconds: job.lockTtlSeconds,
            health: jobHealth(job, state, now),
            nextRunAt: next ? next.toISOString() : null,
            last: state
                ? {
                      status: state.lastStatus,
                      startedAt: state.lastStartedAt?.toISOString() ?? null,
                      finishedAt: state.lastFinishedAt?.toISOString() ?? null,
                      durationMs: state.lastDurationMs,
                      error: state.lastError,
                      successAt: state.lastSuccessAt?.toISOString() ?? null,
                  }
                : null,
            counters: {
                runs: state?.runsTotal ?? 0,
                failures: state?.failuresTotal ?? 0,
                consecutiveFailures: state?.consecutiveFailures ?? 0,
                skippedLock: state?.skippedLockTotal ?? 0,
            },
            activeRun: active ? toJobRunDto(active, labels) : null,
            canRun: canRunManually(role, job.category),
            requiresConfirmation: requiresConfirmation(job.category),
            cooldownMs: cooldownRemainingMs(manualRuns[0]?.requestedAt ?? null, now),
        };
    }
}
