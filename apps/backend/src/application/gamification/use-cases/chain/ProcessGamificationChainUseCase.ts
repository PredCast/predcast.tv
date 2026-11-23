import { inject, injectable } from 'tsyringe';

import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IGamificationEventSource } from '@chiliztv/domain/gamification/repositories/IGamificationEventSource';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import type { IBettingChainRegistry } from '@chiliztv/domain/shared/ports/IBettingChainRegistry';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ILogger } from '@chiliztv/domain/shared/ports/ILogger';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { AchievementRefresh } from '../../services/AchievementRefresh';
import { ChainMarketReader } from '../../services/ChainMarketReader';
import type { ChainStepResult } from './ChainStepResult';
import { ProcessBetVolumeUseCase } from './ProcessBetVolumeUseCase';
import { ProcessMarketSettlementsUseCase } from './ProcessMarketSettlementsUseCase';
import { ProcessModerationReversalsUseCase } from './ProcessModerationReversalsUseCase';
import { ProcessSupportEventsUseCase } from './ProcessSupportEventsUseCase';

export type ChainProcessorReport =
    | { readonly status: 'skipped'; readonly reason: 'disabled' | 'not_launched' }
    | {
          readonly status: 'done';
          readonly bets: number;
          readonly settlements: number;
          readonly support: number;
          readonly moderation: number;
          readonly accountsEvaluated: number;
      };

/**
 * One run of the chain processor (§8.3): bet volume → settlements → support → moderation
 * reversals → achievements of the touched accounts. A failing step does not block the next ones;
 * the first error is re-thrown once every step ran.
 */
@injectable()
export class ProcessGamificationChainUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.ILogger) private readonly logger: ILogger,
        @inject(TOKENS.IGamificationEventSource) private readonly source: IGamificationEventSource,
        @inject(TOKENS.IAccountRepository) private readonly accounts: IAccountRepository,
        @inject(TOKENS.IBettingChainRegistry) private readonly chains: IBettingChainRegistry,
        private readonly betVolume: ProcessBetVolumeUseCase,
        private readonly settlements: ProcessMarketSettlementsUseCase,
        private readonly support: ProcessSupportEventsUseCase,
        private readonly moderation: ProcessModerationReversalsUseCase,
        private readonly achievements: AchievementRefresh,
    ) {}

    async execute(): Promise<ChainProcessorReport> {
        const now = this.clock.now();
        const gate = gamificationGate(this.config.launch, now);
        if (!gate.open) return { status: 'skipped', reason: gate.reason };

        const reader = new ChainMarketReader(this.source, this.accounts, this.chains.defaultChain().chainId);
        const errors: unknown[] = [];
        const run = async (step: string, fn: () => Promise<ChainStepResult>): Promise<ChainStepResult> => {
            try {
                return await fn();
            } catch (error) {
                this.logger.error('Gamification chain step failed', {
                    step,
                    error: error instanceof Error ? error.message : String(error),
                });
                errors.push(error);
                return { processed: 0, touched: new Set() };
            }
        };

        const bets = await run('bet_volume', () => this.betVolume.execute(now, reader));
        const settlements = await run('settlements', () => this.settlements.execute(now, reader));
        const support = await run('support', () => this.support.execute(now));
        const moderation = await run('moderation', () => this.moderation.execute(now));

        const touched = new Set([...bets.touched, ...settlements.touched, ...support.touched]);
        for (const accountId of touched) await this.achievements.run(accountId, now, 'chain');

        if (errors.length > 0) throw errors[0];
        return {
            status: 'done',
            bets: bets.processed,
            settlements: settlements.processed,
            support: support.processed,
            moderation: moderation.processed,
            accountsEvaluated: touched.size,
        };
    }
}
