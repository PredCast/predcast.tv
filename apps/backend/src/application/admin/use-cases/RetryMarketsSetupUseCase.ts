import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { BusinessRuleError } from '@chiliztv/domain/shared/errors/BusinessRuleError';
import { ConflictError } from '@chiliztv/domain/shared/errors/ConflictError';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';
import type { MatchOperation } from '@chiliztv/domain/matches/operations/MatchOperation';
import { canRetryMarketsSetup } from '@chiliztv/domain/matches/policies/MatchDeploymentPolicy';
import type { IBettingChainRegistry } from '@chiliztv/domain/shared/ports/IBettingChainRegistry';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { IAuditTrail } from '@chiliztv/domain/admin/ports/IAuditTrail';

import type { AuditContext } from '../AuditContext';
import { loadMatchForAdmin } from '../deployment/loadMatchForAdmin';

/** Queues the repair of a partial setup: seeds the markets if missing, opens those still Inactive. */
@injectable()
export class RetryMarketsSetupUseCase {
    constructor(
        @inject(TOKENS.IMatchRepository) private readonly matches: IMatchRepository,
        @inject(TOKENS.IMatchOperationRepository) private readonly operations: IMatchOperationRepository,
        @inject(TOKENS.IBettingChainRegistry) private readonly chains: IBettingChainRegistry,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IAuditTrail) private readonly audit: IAuditTrail,
    ) {}

    async execute(apiFootballId: number, ctx: AuditContext): Promise<MatchOperation> {
        const { match, hasActiveOperation } = await loadMatchForAdmin(this.matches, this.operations, apiFootballId);
        const decision = canRetryMarketsSetup({
            status: match.getStatus(),
            contractAddress: match.getBettingContractAddress(),
            hasActiveOperation,
        });
        if (!decision.ok) throw new BusinessRuleError(`Markets setup cannot be retried (${decision.reason})`, { reason: decision.reason });

        const queued = await this.operations.enqueue({
            matchId: apiFootballId,
            kind: 'retry_setup',
            // Legacy rows have no chain stored: they live on the chain of the current NETWORK.
            chainId: match.getBettingChainId() ?? this.chains.defaultChain().chainId,
            params: {},
            requestedBy: ctx.actorWallet,
            createdAt: this.clock.now(),
        });
        if (!queued.ok) throw new ConflictError('An operation is already in progress for this match');

        await this.audit.record({
            ...ctx,
            action: 'markets.setup.retry',
            targetType: 'match',
            targetId: String(apiFootballId),
            newValue: { operationId: queued.operation.id, contractAddress: match.getBettingContractAddress() },
        });
        return queued.operation;
    }
}
