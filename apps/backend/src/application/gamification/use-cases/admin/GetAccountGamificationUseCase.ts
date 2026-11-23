import { inject, injectable } from 'tsyringe';

import { rankOf } from '@chiliztv/domain/gamification/catalog/ranks';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import { levelProgress } from '@chiliztv/domain/gamification/policies/levelCurve';
import { parisDayOf } from '@chiliztv/domain/gamification/policies/parisDay';
import { emptyProfile } from '@chiliztv/domain/gamification/policies/profileCard';
import { effectiveStreak } from '@chiliztv/domain/gamification/policies/streakPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IGamificationLedgerRepository } from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import type { IGamificationProfileRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { AdminAccountGamificationDto, AdminGamificationState } from '@chiliztv/shared';

import { toAdminLedgerDto } from '../../mappers/adminDtos';
import { AdminAccountLookup } from '../../services/AdminAccountLookup';

export const ADMIN_LEDGER_ROWS = 20;

/** Player block of the admin (G18): private figures, XP amounts included — admin only. */
@injectable()
export class GetAccountGamificationUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IAccountRepository) private readonly accounts: IAccountRepository,
        @inject(TOKENS.IGamificationProfileRepository) private readonly profiles: IGamificationProfileRepository,
        @inject(TOKENS.IGamificationLedgerRepository) private readonly ledger: IGamificationLedgerRepository,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        private readonly lookup: AdminAccountLookup,
    ) {}

    async execute(wallet: string): Promise<AdminAccountGamificationDto> {
        const now = this.clock.now();
        const gate = gamificationGate(this.config.launch, now);
        const state: AdminGamificationState = gate.open ? 'live' : gate.reason;
        const address = wallet.toLowerCase();
        const accountId = await this.lookup.findAccountId(address);
        if (accountId === null) return { wallet: address, state, account: null };

        const [account, links, stored, entries] = await Promise.all([
            this.accounts.findById(accountId),
            this.accounts.findActiveLinksOfAccount(accountId),
            this.profiles.findByAccountId(accountId),
            this.ledger.listForAccount(accountId, null, ADMIN_LEDGER_ROWS),
        ]);
        const profile = stored ?? emptyProfile(accountId, now);
        const progress = levelProgress(profile.xpTotal);
        const streak = effectiveStreak(profile.streak, parisDayOf(now));
        return {
            wallet: address,
            state,
            account: {
                accountId,
                createdAt: (account?.createdAt ?? now).toISOString(),
                linkedWallets: links.map((l) => l.walletAddress),
                hasProfile: stored !== null,
                xpTotal: profile.xpTotal,
                level: profile.level,
                levelPeak: profile.levelPeak,
                rankTier: rankOf(profile.level).tier,
                levelStart: progress.levelStart,
                nextLevelAt: progress.nextLevelAt,
                streak: {
                    current: streak.value,
                    best: streak.best,
                    alive: streak.alive,
                    freezes: profile.streak.freezes,
                    lastDay: profile.streak.lastDay,
                },
                suspendedAt: profile.suspendedAt?.toISOString() ?? null,
                suspendedReason: profile.suspendedReason,
                recentLedger: entries.slice(0, ADMIN_LEDGER_ROWS).map(toAdminLedgerDto),
            },
        };
    }
}
