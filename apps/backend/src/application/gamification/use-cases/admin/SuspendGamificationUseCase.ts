import { inject, injectable } from 'tsyringe';

import type { IAuditTrail } from '@chiliztv/domain/admin/ports/IAuditTrail';
import { GAMIFICATION_AUDIT_ACTIONS } from '@chiliztv/domain/gamification/catalog/auditActions';
import type { IGamificationProfileRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import { ConflictError } from '@chiliztv/domain/shared/errors/ConflictError';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { AdminSuspensionDto } from '@chiliztv/shared';

import type { AuditContext } from '../../../admin/AuditContext';
import { AdminAccountLookup } from '../../services/AdminAccountLookup';

/** Human, audited and reversible (§10.2): a suspended account earns nothing until unsuspended. */
@injectable()
export class SuspendGamificationUseCase {
    constructor(
        @inject(TOKENS.IGamificationProfileRepository) private readonly profiles: IGamificationProfileRepository,
        @inject(TOKENS.IAuditTrail) private readonly audit: IAuditTrail,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        private readonly lookup: AdminAccountLookup,
    ) {}

    async suspend(wallet: string, reason: string, ctx: AuditContext): Promise<AdminSuspensionDto> {
        const accountId = await this.lookup.requireAccountId(wallet);
        const now = this.clock.now();
        if (!(await this.profiles.suspend(accountId, reason.trim(), now))) {
            throw new ConflictError('The account is already suspended', { code: 'GAMIFICATION_ALREADY_SUSPENDED' });
        }
        await this.audit.record({
            ...ctx,
            action: GAMIFICATION_AUDIT_ACTIONS.accountSuspend,
            targetType: 'account',
            targetId: accountId,
            newValue: { wallet: wallet.toLowerCase(), suspendedAt: now.toISOString(), reason: reason.trim() },
        });
        return { suspendedAt: now.toISOString() };
    }

    async unsuspend(wallet: string, reason: string, ctx: AuditContext): Promise<AdminSuspensionDto> {
        const accountId = await this.lookup.requireAccountId(wallet);
        const before = await this.profiles.findByAccountId(accountId);
        if (!(await this.profiles.unsuspend(accountId, this.clock.now()))) {
            throw new ConflictError('The account is not suspended', { code: 'GAMIFICATION_NOT_SUSPENDED' });
        }
        await this.audit.record({
            ...ctx,
            action: GAMIFICATION_AUDIT_ACTIONS.accountUnsuspend,
            targetType: 'account',
            targetId: accountId,
            oldValue: { suspendedAt: before?.suspendedAt?.toISOString() ?? null, reason: before?.suspendedReason ?? null },
            newValue: { wallet: wallet.toLowerCase(), reason: reason.trim() },
        });
        return { suspendedAt: null };
    }
}
