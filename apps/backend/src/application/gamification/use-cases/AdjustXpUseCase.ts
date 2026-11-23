import { inject, injectable } from 'tsyringe';

import type { IAuditTrail } from '@chiliztv/domain/admin/ports/IAuditTrail';
import { refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';
import { ValidationError } from '@chiliztv/domain/shared/errors/ValidationError';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { CreditXpUseCase, type CreditXpOutcome } from './CreditXpUseCase';

export const MAX_ADJUSTMENT_XP = 100_000;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export interface AdjustXpCommand {
    readonly actorWallet: string;
    readonly actorRole: string;
    readonly accountId: string;
    /** Signed; a negative adjustment never takes the total below 0. */
    readonly xp: number;
    readonly note: string;
    /** Idempotency key chosen by the caller (`admin:{adjustmentId}`): a retry credits once. */
    readonly adjustmentId: string;
    readonly ip?: string;
    readonly userAgent?: string;
    readonly requestId?: string;
}

/** `admin_adjustment` source (§3.2): a ledger correction, audited. No UI before step 07. */
@injectable()
export class AdjustXpUseCase {
    constructor(
        @inject(TOKENS.IAccountRepository) private readonly accounts: IAccountRepository,
        @inject(TOKENS.IAuditTrail) private readonly audit: IAuditTrail,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        private readonly creditXp: CreditXpUseCase,
    ) {}

    async execute(cmd: AdjustXpCommand): Promise<CreditXpOutcome> {
        if (!Number.isInteger(cmd.xp) || cmd.xp === 0 || Math.abs(cmd.xp) > MAX_ADJUSTMENT_XP) {
            throw new ValidationError(`xp must be a non-zero integer within ±${MAX_ADJUSTMENT_XP}`);
        }
        if (cmd.note.trim().length < 3) throw new ValidationError('A note of at least 3 characters is required');
        if (!UUID.test(cmd.accountId) || !UUID.test(cmd.adjustmentId)) {
            throw new ValidationError('accountId and adjustmentId must be UUIDs');
        }
        if (!(await this.accounts.findById(cmd.accountId))) throw new NotFoundError('Account', cmd.accountId);

        const outcome = await this.creditXp.execute({
            actor: { kind: 'account', accountId: cmd.accountId },
            source: 'admin_adjustment',
            refKey: refKeys.admin(cmd.adjustmentId),
            occurredAt: this.clock.now(),
            requestedXp: cmd.xp,
            metadata: { note: cmd.note.trim(), actorWallet: cmd.actorWallet.toLowerCase() },
        });
        if (outcome.status !== 'credited') return outcome;

        await this.audit.record({
            actorWallet: cmd.actorWallet,
            actorRole: cmd.actorRole,
            action: 'gamification.xp.adjust',
            targetType: 'account',
            targetId: cmd.accountId,
            newValue: {
                adjustmentId: cmd.adjustmentId,
                requestedXp: cmd.xp,
                creditedXp: outcome.xp,
                ledgerId: outcome.ledgerId,
                note: cmd.note.trim(),
            },
            ip: cmd.ip,
            userAgent: cmd.userAgent,
            requestId: cmd.requestId,
        });
        return outcome;
    }
}
