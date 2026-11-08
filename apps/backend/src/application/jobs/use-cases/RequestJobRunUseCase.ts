import { inject, injectable } from 'tsyringe';

import type { RunJobAcceptedDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { IRateLimitService } from '@chiliztv/domain/shared/ports/IRateLimitService';
import {
    ConflictError,
    ForbiddenError,
    NotFoundError,
    TooManyRequestsError,
    ValidationError,
} from '@chiliztv/domain/shared/errors';
import type { AdminRole } from '@chiliztv/domain/admin/types';
import type { IAuditTrail } from '@chiliztv/domain/admin/ports/IAuditTrail';
import type { IJobCatalog } from '@chiliztv/domain/jobs/ports/IJobCatalog';
import type { IJobRunSignal } from '@chiliztv/domain/jobs/ports/IJobRunSignal';
import type { IJobRunRepository } from '@chiliztv/domain/jobs/repositories/IJobRunRepository';
import { canRunManually, cooldownRemainingMs, requiresConfirmation } from '@chiliztv/domain/jobs/policies/ManualRunPolicy';

import type { AuditContext } from '../../admin/AuditContext';
import { logger } from '../../../infrastructure/logging/logger';

/** Per admin, across jobs: a burst guard on top of the per-job cooldown. */
const RATE_LIMIT = { bucket: 'admin-job-runs', limit: 10, windowSeconds: 600 } as const;

export interface RunJobCommand {
    readonly jobName: string;
    readonly confirm: boolean;
}

/** Queues a Run now: the API only records the request; a worker runs it through the scheduler path. */
@injectable()
export class RequestJobRunUseCase {
    constructor(
        @inject(TOKENS.IJobCatalog) private readonly catalog: IJobCatalog,
        @inject(TOKENS.IJobRunRepository) private readonly runs: IJobRunRepository,
        @inject(TOKENS.IJobRunSignal) private readonly signal: IJobRunSignal,
        @inject(TOKENS.IRateLimitService) private readonly rateLimit: IRateLimitService,
        @inject(TOKENS.IAuditTrail) private readonly audit: IAuditTrail,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async execute(command: RunJobCommand, ctx: AuditContext): Promise<RunJobAcceptedDto> {
        const job = this.catalog.get(command.jobName);
        if (!job) throw new NotFoundError('Job', command.jobName);
        if (!canRunManually(ctx.actorRole as AdminRole, job.category)) {
            throw new ForbiddenError(`Your role cannot run ${job.category.replace('_', '-')} jobs`);
        }
        if (requiresConfirmation(job.category) && !command.confirm) {
            throw new ValidationError(`${job.name} sends transactions or spends a quota: confirm: true is required`);
        }

        const now = this.clock.now();
        const cooldownMs = cooldownRemainingMs(await this.runs.lastManualRequestAt(job.name), now);
        if (cooldownMs > 0) {
            throw new TooManyRequestsError(`${job.name} was run less than a minute ago`, { retryAfterMs: cooldownMs });
        }
        const limited = await this.rateLimit.check({ ...RATE_LIMIT, identifier: ctx.actorWallet.toLowerCase() });
        if (!limited.allowed) {
            throw new TooManyRequestsError('Too many manual runs, try again later', {
                retryAfterMs: limited.retryAfterSeconds * 1_000,
            });
        }

        const result = await this.runs.requestManual({ jobName: job.name, requestedBy: ctx.actorWallet, requestedAt: now });
        if (!result.ok) throw new ConflictError(`${job.name} already has a manual run in progress`);

        await this.audit.record({
            ...ctx,
            action: 'jobs.run',
            targetType: 'job',
            targetId: job.name,
            newValue: { runId: result.run.id, category: job.category, confirmed: command.confirm },
        });
        // The worker also polls: a lost signal only delays the run by a few seconds.
        await this.signal.notify(result.run.id).catch((error: unknown) => {
            logger.warn('Job run signal not sent, workers will poll', {
                runId: result.run.id,
                error: error instanceof Error ? error.message : String(error),
            });
        });
        return { runId: result.run.id, status: 'pending' };
    }
}
