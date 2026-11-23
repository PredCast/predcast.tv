import { inject, injectable } from 'tsyringe';

import type { IAuditTrail } from '@chiliztv/domain/admin/ports/IAuditTrail';
import { GAMIFICATION_AUDIT_ACTIONS } from '@chiliztv/domain/gamification/catalog/auditActions';
import { canCancelDoubleXp, doubleXpStatusAt } from '@chiliztv/domain/gamification/policies/doubleXpSchedule';
import type { IDoubleXpEventRepository } from '@chiliztv/domain/gamification/repositories/IDoubleXpEventRepository';
import { ConflictError } from '@chiliztv/domain/shared/errors/ConflictError';
import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { AdminDoubleXpEventDto } from '@chiliztv/shared';

import type { AuditContext } from '../../../admin/AuditContext';
import { toAdminDoubleXpDto } from '../../mappers/adminDtos';
import { DoubleXpCacheInvalidator } from '../../services/DoubleXpCacheInvalidator';

/** POST /admin/gamification/double-xp/:id/cancel — no retroactive effect on XP already credited. */
@injectable()
export class CancelDoubleXpEventUseCase {
    constructor(
        @inject(TOKENS.IDoubleXpEventRepository) private readonly events: IDoubleXpEventRepository,
        @inject(TOKENS.IAuditTrail) private readonly audit: IAuditTrail,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        private readonly invalidator: DoubleXpCacheInvalidator,
    ) {}

    async execute(id: string, note: string, ctx: AuditContext): Promise<AdminDoubleXpEventDto> {
        const now = this.clock.now();
        const event = await this.events.findById(id);
        if (!event) throw new NotFoundError('Double XP event', id);
        const verdict = canCancelDoubleXp(event, now);
        if (!verdict.ok) {
            throw verdict.error === 'ended'
                ? new ConflictError('The event is over and can no longer be cancelled', { code: 'DOUBLE_XP_ENDED' })
                : new ConflictError('The event is already cancelled', { code: 'DOUBLE_XP_ALREADY_CANCELLED' });
        }

        const cancelled = await this.events.cancel(id, ctx.actorWallet, now);
        if (!cancelled) throw new ConflictError('The event is already cancelled', { code: 'DOUBLE_XP_ALREADY_CANCELLED' });
        await this.audit.record({
            ...ctx,
            action: GAMIFICATION_AUDIT_ACTIONS.doubleXpCancel,
            targetType: 'double_xp_event',
            targetId: id,
            oldValue: { status: doubleXpStatusAt(event, now) },
            newValue: { cancelledAt: now.toISOString(), note: note.trim() },
        });
        await this.invalidator.invalidate();
        return toAdminDoubleXpDto(cancelled, now);
    }
}
