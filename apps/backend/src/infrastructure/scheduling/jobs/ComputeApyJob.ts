import { injectable, inject } from 'tsyringe';
import { ComputeApyUseCase } from '../../../application/pool/use-cases/ComputeApyUseCase';
import { logger } from '../../logging/logger';

/**
 * Compute APY Job
 * Runs every 15 minutes and persists a fresh `pool_apy_snapshots` row per
 * window (7d, 30d). Cheap on RPC (constant number of `eth_getBlockByNumber`
 * calls thanks to the binary search), so the cadence is OK even on the
 * public Spicy RPC.
 */
@injectable()
export class ComputeApyJob {
    private readonly intervalMs = 15 * 60 * 1000;

    constructor(
        @inject(ComputeApyUseCase)
        private readonly computeApy: ComputeApyUseCase,
    ) {}

    getIntervalMs(): number {
        return this.intervalMs;
    }

    async execute(): Promise<void> {
        try {
            logger.info('Starting APY compute job');
            const result = await this.computeApy.execute();
            logger.info('APY compute completed', {
                snapshots: result.snapshots.length,
                warnings: result.warnings,
                values: result.snapshots.map((s) => `${s.windowLabel}=${(s.apyBps / 100).toFixed(2)}%${s.noisy ? ' (noisy)' : ''}`).join(', '),
            });
        } catch (error) {
            logger.error('APY compute job failed', {
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        }
    }
}
