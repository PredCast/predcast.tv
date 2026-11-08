import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { BusinessRuleError } from '@chiliztv/domain/shared/errors/BusinessRuleError';
import { ConflictError } from '@chiliztv/domain/shared/errors/ConflictError';
import { ValidationError } from '@chiliztv/domain/shared/errors/ValidationError';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';
import type { MatchOperation } from '@chiliztv/domain/matches/operations/MatchOperation';
import { canDeployMatch } from '@chiliztv/domain/matches/policies/MatchDeploymentPolicy';
import type { IBettingChainRegistry } from '@chiliztv/domain/shared/ports/IBettingChainRegistry';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { IAuditTrail } from '@chiliztv/domain/admin/ports/IAuditTrail';

import { logger } from '../../../infrastructure/logging/logger';
import type { AuditContext } from '../AuditContext';
import { loadMatchForAdmin } from '../deployment/loadMatchForAdmin';

/**
 * Queues the deployment of a match's betting contract. The worker job runs it (deploy, seed and
 * open the markets, publish); the admin polls the returned operation.
 */
@injectable()
export class DeployMatchContractUseCase {
    constructor(
        @inject(TOKENS.IMatchRepository) private readonly matches: IMatchRepository,
        @inject(TOKENS.IMatchOperationRepository) private readonly operations: IMatchOperationRepository,
        @inject(TOKENS.IBettingChainRegistry) private readonly chains: IBettingChainRegistry,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IAuditTrail) private readonly audit: IAuditTrail,
    ) {}

    async execute(apiFootballId: number, chainId: number, ctx: AuditContext): Promise<MatchOperation> {
        if (!this.chains.get(chainId)) throw new ValidationError(`Unsupported chain ${chainId}`);

        const { match, hasActiveOperation } = await loadMatchForAdmin(this.matches, this.operations, apiFootballId);
        const now = this.clock.now();
        const decision = canDeployMatch(
            {
                status: match.getStatus(),
                kickoffAt: match.getMatchDate(),
                contractAddress: match.getBettingContractAddress(),
                hasActiveOperation,
            },
            now,
        );
        if (!decision.ok) throw new BusinessRuleError(`Match cannot be deployed (${decision.reason})`, { reason: decision.reason });

        const queued = await this.operations.enqueue({
            matchId: apiFootballId,
            kind: 'deploy',
            chainId,
            params: {},
            requestedBy: ctx.actorWallet,
            createdAt: now,
        });
        if (!queued.ok) throw new ConflictError('An operation is already in progress for this match');

        logger.info('Admin deploy queued', { apiFootballId, chainId, operationId: queued.operation.id, actor: ctx.actorWallet });
        await this.audit.record({
            ...ctx,
            action: 'markets.contract.deploy',
            targetType: 'match',
            targetId: String(apiFootballId),
            newValue: { operationId: queued.operation.id, chainId },
        });
        return queued.operation;
    }
}
