import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { BusinessRuleError } from '@chiliztv/domain/shared/errors/BusinessRuleError';
import { ConflictError } from '@chiliztv/domain/shared/errors/ConflictError';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { IMatchDeploymentRepository } from '@chiliztv/domain/matches/repositories/IMatchDeploymentRepository';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';
import type { MatchOperation } from '@chiliztv/domain/matches/operations/MatchOperation';
import { canUnpublish } from '@chiliztv/domain/matches/policies/MatchVisibilityPolicy';
import type { IBettingChainRegistry } from '@chiliztv/domain/shared/ports/IBettingChainRegistry';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { IAuditTrail } from '@chiliztv/domain/admin/ports/IAuditTrail';

import type { AuditContext } from '../AuditContext';
import { invalidateMatchReadCaches } from '../deployment/invalidateMatchReadCaches';
import { loadMatchForAdmin } from '../deployment/loadMatchForAdmin';

export type UnpublishMode =
    | { readonly cancelMarkets: false }
    /** Also cancels every open market on-chain so stakers can claim a refund. */
    | { readonly cancelMarkets: true; readonly reason: string };

/**
 * Hides a match from the app. Bets stay visible and claimable from the dashboard; with
 * `cancelMarkets`, a queued operation cancels the open markets so stakers get refunds.
 */
@injectable()
export class UnpublishMatchUseCase {
    constructor(
        @inject(TOKENS.IMatchRepository) private readonly matches: IMatchRepository,
        @inject(TOKENS.IMatchOperationRepository) private readonly operations: IMatchOperationRepository,
        @inject(TOKENS.IMatchDeploymentRepository) private readonly deployments: IMatchDeploymentRepository,
        @inject(TOKENS.IBettingChainRegistry) private readonly chains: IBettingChainRegistry,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IAuditTrail) private readonly audit: IAuditTrail,
    ) {}

    async execute(apiFootballId: number, mode: UnpublishMode, ctx: AuditContext): Promise<{ cancelOperation: MatchOperation | null }> {
        const { match, hasActiveOperation } = await loadMatchForAdmin(this.matches, this.operations, apiFootballId);
        const decision = canUnpublish({
            contractAddress: match.getBettingContractAddress(),
            publishedAt: match.getPublishedAt(),
        });
        if (!decision.ok) throw new BusinessRuleError(`Match cannot be unpublished (${decision.reason})`, { reason: decision.reason });
        // Checked before hiding anything, so a refused cancellation leaves the match untouched.
        if (mode.cancelMarkets && hasActiveOperation) {
            throw new ConflictError('An operation is already in progress for this match');
        }

        const publishedAt = match.getPublishedAt();
        await this.deployments.setPublishedAt(apiFootballId, null);
        await invalidateMatchReadCaches(this.cache, { apiFootballId, leagueId: match.getLeagueId() });
        await this.audit.record({
            ...ctx,
            action: 'matches.unpublish',
            targetType: 'match',
            targetId: String(apiFootballId),
            oldValue: { publishedAt: publishedAt?.toISOString() ?? null },
            newValue: { publishedAt: null, cancelMarkets: mode.cancelMarkets },
        });

        if (!mode.cancelMarkets) return { cancelOperation: null };

        const queued = await this.operations.enqueue({
            matchId: apiFootballId,
            kind: 'cancel_markets',
            chainId: match.getBettingChainId() ?? this.chains.defaultChain().chainId,
            params: { reason: mode.reason },
            requestedBy: ctx.actorWallet,
            createdAt: this.clock.now(),
        });
        if (!queued.ok) throw new ConflictError('An operation is already in progress for this match');

        await this.audit.record({
            ...ctx,
            action: 'markets.markets.cancel',
            targetType: 'match',
            targetId: String(apiFootballId),
            newValue: { operationId: queued.operation.id, reason: mode.reason },
        });
        return { cancelOperation: queued.operation };
    }
}
