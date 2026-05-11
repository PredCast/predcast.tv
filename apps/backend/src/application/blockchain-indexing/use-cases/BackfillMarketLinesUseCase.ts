import { inject, injectable } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IMarketEventRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IMarketEventRepository';
import type { IBlockchainService } from '@chiliztv/domain/shared/ports/IBlockchainService';
import { logger } from '../../../infrastructure/logging/logger';

export interface BackfillMarketLinesResult {
    scanned: number;
    patched: number;
    skipped: number;
}

/**
 * Re-reads `getFootballMarket(marketId)` on-chain for every `MarketCreated`
 * row whose `payload.line` is missing, then patches the payload. Idempotent:
 * patched rows fall out of the working set on the next tick.
 *
 * Why this exists: the `MarketCreated` event does not include `line`. The
 * indexer enriches the payload at indexing time, but a single RPC blip would
 * otherwise leave the row line-less forever. This job rattrape — at most
 * the configured interval after the missed read.
 */
@injectable()
export class BackfillMarketLinesUseCase {
    constructor(
        @inject(TOKENS.IMarketEventRepository)
        private readonly marketEvents: IMarketEventRepository,
        @inject(TOKENS.IBlockchainService)
        private readonly blockchain: IBlockchainService,
    ) {}

    async execute(): Promise<BackfillMarketLinesResult> {
        const rows = await this.marketEvents.findCreatedMissingLine();
        let patched = 0;
        let skipped = 0;
        for (const row of rows) {
            try {
                const fm = await this.blockchain.readFootballMarket(row.contractAddress, row.marketId);
                await this.marketEvents.patchLine(row.contractAddress, row.marketId, fm.line, fm.maxSelections);
                patched++;
            } catch (err) {
                // Basketball matches and dead contracts throw — leave the row
                // for next tick; eventually the indexer or a manual cleanup
                // will handle them.
                skipped++;
                logger.debug('BackfillMarketLines: skip row', {
                    contractAddress: row.contractAddress,
                    marketId: row.marketId.toString(),
                    error: err instanceof Error ? err.message : String(err),
                });
            }
        }
        return { scanned: rows.length, patched, skipped };
    }
}
