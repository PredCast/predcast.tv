import { inject, injectable } from 'tsyringe';

import type { IAuditTrail } from '@chiliztv/domain/admin/ports/IAuditTrail';
import { GAMIFICATION_AUDIT_ACTIONS } from '@chiliztv/domain/gamification/catalog/auditActions';
import { isDoubleXpEligible } from '@chiliztv/domain/gamification/catalog/sources';
import { validateDoubleXpEvent, type DoubleXpDraft } from '@chiliztv/domain/gamification/policies/doubleXpPolicy';
import { doubleXpLookupRange } from '@chiliztv/domain/gamification/policies/doubleXpSchedule';
import type { IDoubleXpEventRepository } from '@chiliztv/domain/gamification/repositories/IDoubleXpEventRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { AdminDoubleXpEventDto } from '@chiliztv/shared';

import type { AuditContext } from '../../../admin/AuditContext';
import { toAdminDoubleXpDto } from '../../mappers/adminDtos';
import { DoubleXpCacheInvalidator } from '../../services/DoubleXpCacheInvalidator';
import { doubleXpValidationError } from './doubleXpErrors';

export interface CreateDoubleXpCommand extends DoubleXpDraft {
    readonly name: string;
}

/** POST /admin/gamification/double-xp — §3.6 guards re-checked here, the exclusion constraint backs the overlap. */
@injectable()
export class CreateDoubleXpEventUseCase {
    constructor(
        @inject(TOKENS.IDoubleXpEventRepository) private readonly events: IDoubleXpEventRepository,
        @inject(TOKENS.IAuditTrail) private readonly audit: IAuditTrail,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        private readonly invalidator: DoubleXpCacheInvalidator,
    ) {}

    async execute(cmd: CreateDoubleXpCommand, ctx: AuditContext): Promise<AdminDoubleXpEventDto> {
        const now = this.clock.now();
        const { from, to } = doubleXpLookupRange(cmd);
        const verdict = validateDoubleXpEvent(cmd, await this.events.listIntersecting(from, to), now);
        if (!verdict.ok) throw doubleXpValidationError(verdict.error);

        const created = await this.events.create({
            name: cmd.name.trim(),
            multiplier: cmd.multiplier,
            sources: cmd.sources.filter(isDoubleXpEligible),
            startsAt: cmd.startsAt,
            endsAt: cmd.endsAt,
            createdByWallet: ctx.actorWallet,
            createdAt: now,
        });
        await this.audit.record({
            ...ctx,
            action: GAMIFICATION_AUDIT_ACTIONS.doubleXpCreate,
            targetType: 'double_xp_event',
            targetId: created.id,
            newValue: {
                name: created.name,
                multiplier: created.multiplier,
                sources: created.sources,
                startsAt: created.startsAt.toISOString(),
                endsAt: created.endsAt.toISOString(),
            },
        });
        await this.invalidator.invalidate();
        return toAdminDoubleXpDto(created, now);
    }
}
