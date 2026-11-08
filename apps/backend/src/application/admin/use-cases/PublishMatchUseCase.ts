import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { BusinessRuleError } from '@chiliztv/domain/shared/errors/BusinessRuleError';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { IMatchDeploymentRepository } from '@chiliztv/domain/matches/repositories/IMatchDeploymentRepository';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';
import { canPublish } from '@chiliztv/domain/matches/policies/MatchVisibilityPolicy';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { IAuditTrail } from '@chiliztv/domain/admin/ports/IAuditTrail';

import type { AuditContext } from '../AuditContext';
import { invalidateMatchReadCaches } from '../deployment/invalidateMatchReadCaches';
import { loadMatchForAdmin } from '../deployment/loadMatchForAdmin';

/** Makes a deployed, hidden match visible in the app again. */
@injectable()
export class PublishMatchUseCase {
    constructor(
        @inject(TOKENS.IMatchRepository) private readonly matches: IMatchRepository,
        @inject(TOKENS.IMatchOperationRepository) private readonly operations: IMatchOperationRepository,
        @inject(TOKENS.IMatchDeploymentRepository) private readonly deployments: IMatchDeploymentRepository,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IAuditTrail) private readonly audit: IAuditTrail,
    ) {}

    async execute(apiFootballId: number, ctx: AuditContext): Promise<{ publishedAt: Date }> {
        const { match } = await loadMatchForAdmin(this.matches, this.operations, apiFootballId);
        const decision = canPublish({
            contractAddress: match.getBettingContractAddress(),
            publishedAt: match.getPublishedAt(),
        });
        if (!decision.ok) throw new BusinessRuleError(`Match cannot be published (${decision.reason})`, { reason: decision.reason });

        const publishedAt = this.clock.now();
        await this.deployments.setPublishedAt(apiFootballId, publishedAt);
        await invalidateMatchReadCaches(this.cache, { apiFootballId, leagueId: match.getLeagueId() });

        await this.audit.record({
            ...ctx,
            action: 'matches.publish',
            targetType: 'match',
            targetId: String(apiFootballId),
            oldValue: { publishedAt: null },
            newValue: { publishedAt: publishedAt.toISOString() },
        });
        return { publishedAt };
    }
}
