import { inject, injectable } from 'tsyringe';

import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IStreamSessionRepository } from '@chiliztv/domain/gamification/repositories/IStreamSessionRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ILogger } from '@chiliztv/domain/shared/ports/ILogger';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { CountSessionMinutesUseCase } from './CountSessionMinutesUseCase';
import { ReconcileStreamSessionsUseCase } from './ReconcileStreamSessionsUseCase';

export interface StreamMinutesReport {
    /** False while the flag is off or before the launch: sessions are still written (D4). */
    readonly counting: boolean;
    readonly opened: number;
    readonly closed: number;
    readonly sessions: number;
    readonly minutesProcessed: number;
    readonly minutesCounted: number;
}

/**
 * One run of the stream minutes job (§8.3): session reconciliation, then the minutes of every
 * unsettled session. Sessions are written whatever the flag (D4: `live_streams` is purged after
 * 7 days); only counting and XP stay behind the flag. A failing session does not block the others;
 * the first error is re-thrown at the end.
 */
@injectable()
export class ProcessStreamMinutesUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.ILogger) private readonly logger: ILogger,
        @inject(TOKENS.IStreamSessionRepository) private readonly sessions: IStreamSessionRepository,
        private readonly reconcile: ReconcileStreamSessionsUseCase,
        private readonly countMinutes: CountSessionMinutesUseCase,
    ) {}

    async execute(): Promise<StreamMinutesReport> {
        const now = this.clock.now();
        const counting = gamificationGate(this.config.launch, now).open;
        const { opened, closed } = await this.reconcile.execute(now, await this.sessions.findToProcess());

        const errors: unknown[] = [];
        let minutesProcessed = 0;
        let minutesCounted = 0;
        const pending = await this.sessions.findToProcess();
        for (const session of pending) {
            try {
                const report = await this.countMinutes.execute(session, now, counting);
                minutesProcessed += report.processed;
                minutesCounted += report.counted;
            } catch (error) {
                this.logger.error('Stream minutes of a session failed', {
                    streamId: session.streamId,
                    error: error instanceof Error ? error.message : String(error),
                });
                errors.push(error);
            }
        }
        if (errors.length > 0) throw errors[0];
        return { counting, opened, closed, sessions: pending.length, minutesProcessed, minutesCounted };
    }
}
