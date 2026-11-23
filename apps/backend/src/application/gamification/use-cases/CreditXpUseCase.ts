import { inject, injectable } from 'tsyringe';

import {
    dailyCapFor,
    isDoubleXpEligible,
    isSourceEnabled,
    type GamificationSource,
    type LedgerReason,
} from '@chiliztv/domain/gamification/catalog/sources';
import { multiplierAt, type AppliedMultiplier } from '@chiliztv/domain/gamification/policies/doubleXpPolicy';
import { accountEligibility, accountOwningWalletAt } from '@chiliztv/domain/gamification/policies/eligibilityPolicy';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import { parisDayOf } from '@chiliztv/domain/gamification/policies/parisDay';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IDoubleXpEventRepository } from '@chiliztv/domain/gamification/repositories/IDoubleXpEventRepository';
import type {
    IGamificationLedgerRepository,
    ProgressDelta,
} from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import type { IGamificationProfileRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { IsAccountBannedUseCase } from '../../identity/use-cases/IsAccountBannedUseCase';
import { GamificationAfterCredit } from '../services/GamificationAfterCredit';

export type CreditActor =
    | { readonly kind: 'account'; readonly accountId: string }
    /** Resolved to the account owning the wallet at `occurredAt` (§3.1 rule 5). */
    | { readonly kind: 'wallet'; readonly wallet: string };

export interface CreditXpCommand {
    readonly actor: CreditActor;
    readonly source: GamificationSource;
    /** A function when the key embeds the resolved account id. */
    readonly refKey: string | ((accountId: string) => string);
    readonly occurredAt: Date;
    readonly requestedXp: number;
    /** Zeroes the credit for a business reason (hedge, repeat market…). */
    readonly reason?: LedgerReason | null;
    readonly metadata?: Readonly<Record<string, unknown>>;
    readonly progress?: ReadonlyArray<ProgressDelta>;
}

export type CreditXpOutcome =
    | { readonly status: 'skipped'; readonly reason: 'disabled' | 'not_launched' | 'source_disabled' | 'no_account' }
    | { readonly status: 'duplicate'; readonly accountId: string }
    | {
          readonly status: 'credited';
          readonly accountId: string;
          readonly ledgerId: number;
          readonly xp: number;
          /** Eligibility or business reason; a `daily_cap` is recorded on the ledger row only. */
          readonly reason: LedgerReason | null;
          readonly newTotal: number;
          readonly newLevel: number;
          readonly leveledUp: boolean;
      };

const NO_MULTIPLIER: AppliedMultiplier = { multiplier: 1, eventId: null };

/**
 * Core of every XP credit (§3.1): launch gate, account at the time of the action, ban or
 * suspension (0 XP with a reason), daily cap then double XP in one atomic SQL call, level-up
 * notification and cache invalidation. Nothing is ever deferred: a refused credit is lost.
 * Achievement evaluation is the caller's job (EvaluateAchievementsUseCase depends on this one).
 */
@injectable()
export class CreditXpUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IAccountRepository) private readonly accounts: IAccountRepository,
        @inject(TOKENS.IGamificationProfileRepository) private readonly profiles: IGamificationProfileRepository,
        @inject(TOKENS.IGamificationLedgerRepository) private readonly ledger: IGamificationLedgerRepository,
        @inject(TOKENS.IDoubleXpEventRepository) private readonly doubleXp: IDoubleXpEventRepository,
        private readonly isAccountBanned: IsAccountBannedUseCase,
        private readonly afterCredit: GamificationAfterCredit,
    ) {}

    async execute(cmd: CreditXpCommand): Promise<CreditXpOutcome> {
        const gate = gamificationGate(this.config.launch, cmd.occurredAt);
        if (!gate.open) return { status: 'skipped', reason: gate.reason };
        if (!isSourceEnabled(cmd.source)) return { status: 'skipped', reason: 'source_disabled' };

        const accountId = await this.resolveAccount(cmd.actor, cmd.occurredAt);
        if (accountId === null) return { status: 'skipped', reason: 'no_account' };

        const eligibility = await this.eligibilityOf(accountId, cmd.source, cmd.occurredAt);
        const reason: LedgerReason | null = eligibility === 'eligible' ? cmd.reason ?? null : eligibility;
        const zeroed = eligibility !== 'eligible';
        const applied = reason === null ? await this.multiplierFor(cmd.source, cmd.occurredAt) : NO_MULTIPLIER;

        const result = await this.ledger.credit({
            accountId,
            source: cmd.source,
            refKey: typeof cmd.refKey === 'string' ? cmd.refKey : cmd.refKey(accountId),
            day: parisDayOf(cmd.occurredAt),
            occurredAt: cmd.occurredAt,
            requestedXp: cmd.requestedXp,
            dailyCap: dailyCapFor(cmd.source),
            multiplier: applied.multiplier,
            doubleXpEventId: applied.eventId,
            reason,
            metadata: cmd.metadata ?? {},
            // A banned or suspended account moves no counter either.
            progress: zeroed ? [] : cmd.progress ?? [],
        });
        if (!result.inserted) return { status: 'duplicate', accountId };

        const leveledUp = await this.afterCredit.run(accountId, result, cmd.occurredAt);
        return {
            status: 'credited',
            accountId,
            ledgerId: result.ledgerId,
            xp: result.creditedXp,
            reason,
            newTotal: result.newTotal,
            newLevel: result.newLevel,
            leveledUp,
        };
    }

    private async resolveAccount(actor: CreditActor, at: Date): Promise<string | null> {
        if (actor.kind === 'account') return actor.accountId;
        const links = await this.accounts.findLinks([actor.wallet]);
        return accountOwningWalletAt(links, actor.wallet, at);
    }

    /** Admin adjustments are human decisions: they ignore bans and suspensions. */
    private async eligibilityOf(accountId: string, source: GamificationSource, at: Date) {
        if (source === 'admin_adjustment') return 'eligible' as const;
        const [banned, profile] = await Promise.all([
            this.isAccountBanned.execute(accountId, at),
            this.profiles.findByAccountId(accountId),
        ]);
        return accountEligibility({ anyLinkedWalletBanned: banned, suspendedAt: profile?.suspendedAt ?? null });
    }

    private async multiplierFor(source: GamificationSource, at: Date): Promise<AppliedMultiplier> {
        if (!isDoubleXpEligible(source)) return NO_MULTIPLIER;
        const events = await this.doubleXp.listIntersecting(at, new Date(at.getTime() + 1));
        return multiplierAt(events, source, at);
    }
}
