import { injectable } from 'tsyringe';

import { container } from '../../config/di-container';
import { ProcessMatchOperationsUseCase } from '../../../application/admin/use-cases/ProcessMatchOperationsUseCase';
import { logger } from '../../logging/logger';

const DEFAULT_INTERVAL_MS = 5_000;
/** Bounds one tick when the queue is long; the next tick picks up the rest. */
const MAX_OPERATIONS_PER_TICK = 5;

/** Worker side of the admin deploy queue: runs queued deploy / retry-setup / cancel operations. */
@injectable()
export class ProcessMatchOperationsJob {
    getIntervalMs(): number {
        const n = Number(process.env.MATCH_OPERATIONS_JOB_INTERVAL_MS);
        return Number.isFinite(n) && n >= 1_000 ? n : DEFAULT_INTERVAL_MS;
    }

    async execute(): Promise<void> {
        try {
            const useCase = container.resolve(ProcessMatchOperationsUseCase);
            for (let i = 0; i < MAX_OPERATIONS_PER_TICK; i++) {
                const result = await useCase.execute();
                if (!result.processed) return;
            }
        } catch (error) {
            logger.error('ProcessMatchOperationsJob failed', {
                error: error instanceof Error ? error.message : String(error),
            });
            throw error;
        }
    }
}
