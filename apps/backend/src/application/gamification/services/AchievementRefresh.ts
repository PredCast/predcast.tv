import { inject, injectable } from 'tsyringe';

import type { ILogger } from '@chiliztv/domain/shared/ports/ILogger';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { EvaluateAchievementsUseCase } from '../use-cases/EvaluateAchievementsUseCase';

/** Achievement evaluation after a committed credit: a failure is logged and retried by the next credit. */
@injectable()
export class AchievementRefresh {
    constructor(
        private readonly evaluate: EvaluateAchievementsUseCase,
        @inject(TOKENS.ILogger) private readonly logger: ILogger,
    ) {}

    async run(accountId: string, at: Date, trigger: string): Promise<void> {
        try {
            await this.evaluate.execute(accountId, at);
        } catch (error) {
            this.logger.warn('Achievement evaluation failed', {
                accountId,
                trigger,
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }
}
