import { inject, injectable } from 'tsyringe';

import { SUPPORT_OVERLAP_MINUTES } from '@chiliztv/domain/gamification/catalog/constants';
import { refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';
import { SOURCE_RULES } from '@chiliztv/domain/gamification/catalog/sources';
import { accountOwningWalletAt, type WalletLink } from '@chiliztv/domain/gamification/policies/eligibilityPolicy';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import { parisDayOf } from '@chiliztv/domain/gamification/policies/parisDay';
import { evaluateSupport } from '@chiliztv/domain/gamification/policies/supportPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IGamificationCursorRepository } from '@chiliztv/domain/gamification/repositories/IGamificationCursorRepository';
import type { IGamificationEventSource, SupportEvent } from '@chiliztv/domain/gamification/repositories/IGamificationEventSource';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { CreditXpUseCase } from '../CreditXpUseCase';
import type { ChainStepResult } from './ChainStepResult';

const BATCH_SIZE = 500;
const MAX_BATCHES_PER_RUN = 10;

/**
 * `support` (§3.3): donations and subscriptions of 1 USDC or more to another account's stream
 * wallet, 5 XP once per (account, streamer, Paris day), amount ignored. Cursor on `created_at`,
 * re-read 10 minutes back.
 */
@injectable()
export class ProcessSupportEventsUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IGamificationCursorRepository) private readonly cursors: IGamificationCursorRepository,
        @inject(TOKENS.IGamificationEventSource) private readonly source: IGamificationEventSource,
        @inject(TOKENS.IAccountRepository) private readonly accounts: IAccountRepository,
        private readonly creditXp: CreditXpUseCase,
    ) {}

    async execute(now: Date): Promise<ChainStepResult> {
        const touched = new Set<string>();
        const stored = await this.cursors.get('support');
        const storedAt = stored ? new Date(stored.createdAt) : null;
        let after = storedAt
            ? new Date(storedAt.getTime() - SUPPORT_OVERLAP_MINUTES * 60_000)
            : this.config.launch.launchAt ?? new Date(0);
        let last = storedAt;
        let processed = 0;
        try {
            for (let batch = 0; batch < MAX_BATCHES_PER_RUN; batch++) {
                const events = await this.source.listSupportAfter(after, BATCH_SIZE);
                if (events.length === 0) break;
                const wallets = events.flatMap((e) => [e.supporterWallet, e.streamerWallet]);
                const links = await this.accounts.findLinks([...new Set(wallets)]);
                for (const event of events) {
                    const accountId = await this.process(event, links);
                    if (accountId) touched.add(accountId);
                    after = event.createdAt;
                    if (last === null || event.createdAt > last) last = event.createdAt;
                    processed += 1;
                }
                if (events.length < BATCH_SIZE) break;
            }
        } finally {
            if (last !== null && (storedAt === null || last > storedAt)) {
                await this.cursors.set('support', { createdAt: last.toISOString() }, now);
            }
        }
        return { processed, touched };
    }

    private async process(event: SupportEvent, links: ReadonlyArray<WalletLink>): Promise<string | null> {
        if (!gamificationGate(this.config.launch, event.createdAt).open) return null;
        const evaluation = evaluateSupport({
            amountUsdc: event.amountUsdc,
            supporterWallet: event.supporterWallet,
            streamerWallet: event.streamerWallet,
            supporterAccountId: accountOwningWalletAt(links, event.supporterWallet, event.createdAt),
            streamerAccountId: accountOwningWalletAt(links, event.streamerWallet, event.createdAt),
        });
        if (!evaluation.eligible) return null;

        const outcome = await this.creditXp.execute({
            actor: { kind: 'account', accountId: evaluation.accountId },
            source: 'support',
            refKey: refKeys.support(evaluation.accountId, event.streamerWallet, parisDayOf(event.createdAt)),
            occurredAt: event.createdAt,
            requestedXp: SOURCE_RULES.support.xp ?? 0,
            metadata: { kind: event.kind, eventId: event.id, streamerWallet: event.streamerWallet },
            progress: [{ metric: 'support_actions', delta: 1 }],
        });
        return outcome.status === 'credited' ? evaluation.accountId : null;
    }
}
