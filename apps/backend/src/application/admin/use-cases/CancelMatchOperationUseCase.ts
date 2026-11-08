import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { ConflictError, NotFoundError } from '@chiliztv/domain/shared/errors';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IAuditTrail } from '@chiliztv/domain/admin/ports/IAuditTrail';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';

import type { AuditContext } from '../AuditContext';

/** Cancels a queued deploy / setup / cancel operation before any transaction is sent. */
@injectable()
export class CancelMatchOperationUseCase {
    constructor(
        @inject(TOKENS.IMatchOperationRepository) private readonly operations: IMatchOperationRepository,
        @inject(TOKENS.IAuditTrail) private readonly audit: IAuditTrail,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async execute(operationId: string, ctx: AuditContext): Promise<void> {
        const op = await this.operations.findById(operationId);
        if (!op) throw new NotFoundError('Match operation', operationId);
        // Only a pending operation is safe: once claimed, a worker may already have sent a tx.
        const cancelled = op.status === 'pending' && (await this.operations.cancelPending(op.id, ctx.actorWallet, this.clock.now()));
        if (!cancelled) throw new ConflictError('Only an operation no worker has started can be cancelled');

        await this.audit.record({
            ...ctx,
            action: 'markets.operation.cancel',
            targetType: 'match',
            targetId: String(op.matchId),
            oldValue: { operationId: op.id, kind: op.kind, status: op.status },
            newValue: { status: 'cancelled' },
        });
        await this.cache.delete('admin:dashboard:operations');
    }
}
