import { inject, injectable } from 'tsyringe';

import type { AdminIndexersDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IChainHeadReader } from '@chiliztv/domain/blockchain-indexing/ports/IChainHeadReader';
import type { IIndexerCheckpointRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IIndexerCheckpointRepository';

import { logger } from '../../../infrastructure/logging/logger';

const CACHE_TTL_SECONDS = 15;

/** Read-only view of the indexer cursors and their lag behind the chain head. */
@injectable()
export class ListIndexersUseCase {
    constructor(
        @inject(TOKENS.IIndexerCheckpointRepository) private readonly checkpoints: IIndexerCheckpointRepository,
        @inject(TOKENS.IChainHeadReader) private readonly head: IChainHeadReader,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async execute(): Promise<AdminIndexersDto> {
        const cached = await this.cache.getOrLoad<AdminIndexersDto>({
            key: 'admin:jobs:indexers',
            ttlSeconds: CACHE_TTL_SECONDS,
            loader: () => this.load(),
        });
        return cached ?? this.load();
    }

    private async load(): Promise<AdminIndexersDto> {
        const [checkpoints, head] = await Promise.all([
            this.checkpoints.listAll(),
            // The listing stays useful without the head: lag shows as unknown.
            this.head.latestBlock().catch((error: unknown) => {
                logger.warn('Chain head unavailable for the indexer listing', {
                    error: error instanceof Error ? error.message : String(error),
                });
                return null;
            }),
        ]);
        return {
            headBlock: head?.toString() ?? null,
            indexers: checkpoints.map((c) => ({
                name: c.indexerName,
                contractAddress: c.contractAddress,
                lastBlock: c.lastBlock.toString(),
                updatedAt: c.updatedAt.toISOString(),
                lagBlocks: head === null ? null : (head > c.lastBlock ? head - c.lastBlock : BigInt(0)).toString(),
            })),
            generatedAt: this.clock.now().toISOString(),
        };
    }
}
