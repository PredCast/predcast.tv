import { inject, injectable } from 'tsyringe';

import type { DashboardHealthDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IUpstreamUsageReader } from '@chiliztv/domain/shared/ports/IUpstreamUsageReader';
import type { IJobCatalog } from '@chiliztv/domain/jobs/ports/IJobCatalog';
import type { IJobStateRepository } from '@chiliztv/domain/jobs/repositories/IJobStateRepository';
import { cadenceMs, nextRunAt } from '@chiliztv/domain/jobs/policies/JobSchedulePolicy';
import { jobHealth } from '@chiliztv/domain/jobs/policies/JobHealthPolicy';
import { FEED_JOBS, JOB_ALERT_FAILURES, QUOTA_WARN_RATIO } from '@chiliztv/domain/admin/dashboard/DashboardAlertPolicy';

import { cached } from './dashboardScope';

const TTL_SECONDS = 15;

/** Jobs and upstream APIs at a glance (admin and moderator). */
@injectable()
export class GetDashboardHealthUseCase {
    constructor(
        @inject(TOKENS.IJobCatalog) private readonly catalog: IJobCatalog,
        @inject(TOKENS.IJobStateRepository) private readonly states: IJobStateRepository,
        @inject(TOKENS.IUpstreamUsageReader) private readonly usage: IUpstreamUsageReader,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    execute(): Promise<DashboardHealthDto> {
        return cached(this.cache, 'admin:dashboard:health', TTL_SECONDS, () => this.load());
    }

    private async load(): Promise<DashboardHealthDto> {
        const now = this.clock.now();
        const [states, usage] = await Promise.all([this.states.findAll(), this.usage.read(now)]);
        const stateOf = new Map(states.map((s) => [s.jobName, s]));

        const jobs = this.catalog.list().map((job) => {
            const state = stateOf.get(job.name) ?? null;
            const next = nextRunAt(job.schedule, state, now);
            return {
                name: job.name,
                category: job.category,
                cadenceMs: cadenceMs(job.schedule),
                health: jobHealth(job, state, now),
                lastStatus: state?.lastStatus ?? null,
                lastFinishedAt: state?.lastFinishedAt?.toISOString() ?? null,
                lastDurationMs: state?.lastDurationMs ?? null,
                nextRunAt: next?.toISOString() ?? null,
            };
        });

        const feed = [...FEED_JOBS].map((name) => stateOf.get(name)).filter((s) => s !== undefined);
        const lastSuccess = feed.map((s) => s.lastSuccessAt).filter((d): d is Date => d !== null).sort((a, b) => b.getTime() - a.getTime())[0] ?? null;
        const failures = Math.max(0, ...feed.map((s) => s.consecutiveFailures));
        const cg = usage.coingecko;
        const ratio = cg.usedThisMonth === null ? null : cg.usedThisMonth / cg.monthlyBudget;

        return {
            jobs,
            upstreams: {
                apiFootball: {
                    state: failures >= JOB_ALERT_FAILURES ? 'down' : feed.length === 0 ? 'unknown' : 'ok',
                    usedToday: usage.apiFootball.usedToday,
                    dailyLimit: usage.apiFootball.dailyLimit,
                    lastSuccessAt: lastSuccess?.toISOString() ?? null,
                    consecutiveFailures: failures,
                },
                coingecko: {
                    state: ratio === null ? 'unknown' : ratio >= 1 ? 'exhausted' : ratio >= QUOTA_WARN_RATIO ? 'warning' : 'ok',
                    usedThisMonth: cg.usedThisMonth,
                    monthlyBudget: cg.monthlyBudget,
                },
            },
            generatedAt: now.toISOString(),
        };
    }
}
