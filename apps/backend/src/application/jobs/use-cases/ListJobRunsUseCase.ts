import { inject, injectable } from 'tsyringe';

import type { JobRunDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { NotFoundError } from '@chiliztv/domain/shared/errors';
import type { IAdminWalletRepository } from '@chiliztv/domain/admin/repositories/IAdminWalletRepository';
import type { IJobCatalog } from '@chiliztv/domain/jobs/ports/IJobCatalog';
import type { IJobRunRepository } from '@chiliztv/domain/jobs/repositories/IJobRunRepository';

import { requesters, toJobRunDto } from '../jobRunDto';

const HISTORY_LIMIT = 20;

/** History of one job (expanded row of the Jobs page), newest first. */
@injectable()
export class ListJobRunsUseCase {
    constructor(
        @inject(TOKENS.IJobCatalog) private readonly catalog: IJobCatalog,
        @inject(TOKENS.IJobRunRepository) private readonly runs: IJobRunRepository,
        @inject(TOKENS.IAdminWalletRepository) private readonly wallets: IAdminWalletRepository,
    ) {}

    async execute(jobName: string): Promise<JobRunDto[]> {
        if (!this.catalog.get(jobName)) throw new NotFoundError('Job', jobName);
        const runs = await this.runs.listRecent({ jobName, limit: HISTORY_LIMIT });
        const labels = await this.wallets.findLabels(requesters(runs));
        return runs.map((run) => toJobRunDto(run, labels));
    }
}
