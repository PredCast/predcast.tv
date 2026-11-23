import { injectable } from 'tsyringe';

import { BusinessRuleError } from '@chiliztv/domain/shared/errors/BusinessRuleError';
import type { AdminAdjustXpBody, AdminAdjustXpResultDto } from '@chiliztv/shared';

import type { AuditContext } from '../../../admin/AuditContext';
import { AdminAccountLookup } from '../../services/AdminAccountLookup';
import { AdjustXpUseCase } from '../AdjustXpUseCase';

/** POST /admin/gamification/accounts/:wallet/adjust — a new `admin_adjustment` ledger row, never an edit. */
@injectable()
export class AdminAdjustXpUseCase {
    constructor(
        private readonly lookup: AdminAccountLookup,
        private readonly adjustXp: AdjustXpUseCase,
    ) {}

    async execute(wallet: string, body: AdminAdjustXpBody, ctx: AuditContext): Promise<AdminAdjustXpResultDto> {
        const accountId = await this.lookup.requireAccountId(wallet);
        const outcome = await this.adjustXp.execute({ ...ctx, accountId, xp: body.xp, note: body.note, adjustmentId: body.adjustmentId });
        if (outcome.status === 'skipped') {
            throw new BusinessRuleError('XP cannot be adjusted while the gamification is not live', {
                code: 'GAMIFICATION_CLOSED',
                reason: outcome.reason,
            });
        }
        if (outcome.status === 'duplicate') return { status: 'duplicate', xp: null, ledgerId: null };
        return { status: 'credited', xp: outcome.xp, ledgerId: outcome.ledgerId };
    }
}
