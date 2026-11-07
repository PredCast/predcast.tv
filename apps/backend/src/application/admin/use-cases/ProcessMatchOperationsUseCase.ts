import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';

import { logger } from '../../../infrastructure/logging/logger';
import { invalidateMatchReadCaches } from '../deployment/invalidateMatchReadCaches';
import { MatchOperationRunner } from '../deployment/MatchOperationRunner';

/** A running operation whose heartbeat is older than this is reclaimed (its worker died). */
export const OPERATION_STALE_AFTER_MS = 10 * 60_000;
const MAX_ERROR_LENGTH = 500;

export type ProcessResult =
    | { readonly processed: false }
    | { readonly processed: true; readonly operationId: string; readonly ok: boolean };

/** Viem errors carry a readable `shortMessage` (revert reason, RPC error) next to a long `message`. */
function readableError(err: unknown): string {
    const short = typeof err === 'object' && err !== null && 'shortMessage' in err ? String(err.shortMessage) : null;
    const message = short ?? (err instanceof Error ? err.message : String(err));
    return message.slice(0, MAX_ERROR_LENGTH);
}

/** Claims and runs the next queued admin operation (one per call). */
@injectable()
export class ProcessMatchOperationsUseCase {
    constructor(
        @inject(TOKENS.IMatchOperationRepository) private readonly operations: IMatchOperationRepository,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        private readonly runner: MatchOperationRunner,
    ) {}

    async execute(): Promise<ProcessResult> {
        const now = this.clock.now();
        const op = await this.operations.claimNext(now, new Date(now.getTime() - OPERATION_STALE_AFTER_MS));
        if (!op) return { processed: false };

        logger.info('Match operation started', { operationId: op.id, kind: op.kind, matchId: op.matchId, attempt: op.attempts });
        try {
            const match = await this.runner.run(op);
            await this.operations.complete(op.id, this.clock.now());
            await invalidateMatchReadCaches(this.cache, { apiFootballId: op.matchId, leagueId: match.getLeagueId() });
            logger.info('Match operation succeeded', { operationId: op.id, kind: op.kind, matchId: op.matchId });
            return { processed: true, operationId: op.id, ok: true };
        } catch (err) {
            const error = readableError(err);
            await this.operations.fail(op.id, error, this.clock.now());
            logger.error('Match operation failed', { operationId: op.id, kind: op.kind, matchId: op.matchId, error });
            return { processed: true, operationId: op.id, ok: false };
        }
    }
}
