import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';
import type { MatchOperationDto } from '@chiliztv/shared';

import { toMatchOperationDto } from '../deployment/toMatchOperationDto';

/** Polled by the admin while an operation runs. */
@injectable()
export class GetMatchOperationUseCase {
    constructor(
        @inject(TOKENS.IMatchOperationRepository) private readonly operations: IMatchOperationRepository,
    ) {}

    async execute(id: string): Promise<MatchOperationDto> {
        const op = await this.operations.findById(id);
        if (!op) throw new NotFoundError('MatchOperation', id);
        return toMatchOperationDto(op);
    }
}
