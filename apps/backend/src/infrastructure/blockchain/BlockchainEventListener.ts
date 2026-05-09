import { injectable } from 'tsyringe';
import { BettingMatchFactoryIndexer } from './indexers/BettingMatchFactoryIndexer';
import { BettingMatchEventIndexer } from './indexers/BettingMatchEventIndexer';
import { LiquidityPoolIndexer } from './indexers/LiquidityPoolIndexer';
import { ChilizSwapRouterIndexer } from './indexers/ChilizSwapRouterIndexer';
import { StreamWalletIndexer } from './indexers/StreamWalletIndexer';
import { logger } from '../logging/logger';

/**
 * Lifecycle orchestrator for the five blockchain event indexers.
 *
 *  - BettingMatchFactory : MatchCreated discovery + post-deploy wiring validation
 *  - BettingMatchEvent   : per-match BetPlaced / Payout / Refund / market state
 *  - LiquidityPool       : Deposit / Withdraw / BetRecorded / MarketSettled / fees
 *  - ChilizSwapRouter    : multi-asset entrypoints (audit only)
 *  - StreamWallet        : factory discovery + per-wallet donations / subs
 *
 * Each indexer manages its own checkpoint and idempotent writes; they can be
 * restarted independently without producing duplicates.
 */
@injectable()
export class BlockchainEventListener {
    constructor(
        private readonly bettingFactoryIndexer: BettingMatchFactoryIndexer,
        private readonly bettingMatchEventIndexer: BettingMatchEventIndexer,
        private readonly liquidityPoolIndexer: LiquidityPoolIndexer,
        private readonly chilizSwapRouterIndexer: ChilizSwapRouterIndexer,
        private readonly streamWalletIndexer: StreamWalletIndexer,
    ) {}

    async start(): Promise<void> {
        logger.info('Starting blockchain event listeners (5 indexers)');
        try {
            await Promise.all([
                this.bettingFactoryIndexer.start(),
                this.bettingMatchEventIndexer.start(),
                this.liquidityPoolIndexer.start(),
                this.chilizSwapRouterIndexer.start(),
                this.streamWalletIndexer.start(),
            ]);
            logger.info('All blockchain event listeners started');
        } catch (error) {
            logger.error('Failed to start blockchain event listeners', {
                error: error instanceof Error ? error.message : 'Unknown error',
            });
            throw error;
        }
    }

    stop(): void {
        logger.info('Stopping blockchain event listeners');
        this.bettingFactoryIndexer.stop();
        this.bettingMatchEventIndexer.stop();
        this.liquidityPoolIndexer.stop();
        this.chilizSwapRouterIndexer.stop();
        this.streamWalletIndexer.stop();
        logger.info('All blockchain event listeners stopped');
    }
}
