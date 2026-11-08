import { inject, injectable } from 'tsyringe';

import type { JobRunDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { NotFoundError } from '@chiliztv/domain/shared/errors';
import type { IAdminWalletRepository } from '@chiliztv/domain/admin/repositories/IAdminWalletRepository';
import type { IJobRunRepository } from '@chiliztv/domain/jobs/repositories/IJobRunRepository';

import { requesters, toJobRunDto } from '../jobRunDto';

@injectable()
export class GetJobRunUseCase {
    constructor(
        @inject(TOKENS.IJobRunRepository) private readonly runs: IJobRunRepository,
        @inject(TOKENS.IAdminWalletRepository) private readonly wallets: IAdminWalletRepository,
    ) {}

    async execute(runId: string): Promise<JobRunDto> {
        const run = await this.runs.findById(runId);
        if (!run) throw new NotFoundError('Job run', runId);
        return toJobRunDto(run, await this.wallets.findLabels(requesters([run])));
    }
}
