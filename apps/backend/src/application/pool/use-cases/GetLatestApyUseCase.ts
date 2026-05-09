import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { IPoolApyRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IPoolApyRepository';
import { ApyWindow, PoolApySnapshot } from '@chiliztv/domain/blockchain-indexing/entities/PoolApySnapshot';

/**
 * Read-side use case: returns the most recent APY snapshot for each
 * supported window. The HTTP route ships these to the front, where they are
 * rendered on the PoolPanel.
 */
@injectable()
export class GetLatestApyUseCase {
    constructor(
        @inject(TOKENS.IPoolApyRepository)
        private readonly apyRepo: IPoolApyRepository,
    ) {}

    async execute(): Promise<{ apy7d: PoolApySnapshot | null; apy30d: PoolApySnapshot | null }> {
        const [apy7d, apy30d] = await Promise.all([
            this.apyRepo.findLatest('7d' as ApyWindow),
            this.apyRepo.findLatest('30d' as ApyWindow),
        ]);
        return { apy7d, apy30d };
    }
}
