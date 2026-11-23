import { inject, injectable } from 'tsyringe';

import {
    SEEN_NOTIFICATIONS_RETENTION_DAYS,
    WATCH_MINUTES_RETENTION_DAYS,
} from '@chiliztv/domain/gamification/catalog/constants';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import { parisDayOf } from '@chiliztv/domain/gamification/policies/parisDay';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IGamificationNotificationRepository } from '@chiliztv/domain/gamification/repositories/IGamificationNotificationRepository';
import type { IGamificationProgressRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProgressRepository';
import type { IWatchMinuteRepository } from '@chiliztv/domain/gamification/repositories/IWatchMinuteRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

const DAY_MS = 86_400_000;

export type PurgeReport =
    | { readonly status: 'skipped'; readonly reason: 'disabled' | 'not_launched' }
    | { readonly status: 'done'; readonly watchMinutes: number; readonly dailyCounters: number; readonly notifications: number };

/** Retention of §7.3: watch minutes and daily counters after 35 days, seen notifications after 30. The ledger is never purged. */
@injectable()
export class PurgeGamificationDataUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IWatchMinuteRepository) private readonly watchMinutes: IWatchMinuteRepository,
        @inject(TOKENS.IGamificationProgressRepository) private readonly progress: IGamificationProgressRepository,
        @inject(TOKENS.IGamificationNotificationRepository)
        private readonly notifications: IGamificationNotificationRepository,
    ) {}

    async execute(): Promise<PurgeReport> {
        const now = this.clock.now();
        const gate = gamificationGate(this.config.launch, now);
        if (!gate.open) return { status: 'skipped', reason: gate.reason };

        const cutoff = new Date(now.getTime() - WATCH_MINUTES_RETENTION_DAYS * DAY_MS);
        const watchMinutes = await this.watchMinutes.purgeBefore(cutoff);
        const dailyCounters = await this.progress.purgeDailyCountersBefore(parisDayOf(cutoff));
        const notifications = await this.notifications.purgeSeenBefore(
            new Date(now.getTime() - SEEN_NOTIFICATIONS_RETENTION_DAYS * DAY_MS),
        );
        return { status: 'done', watchMinutes, dailyCounters, notifications };
    }
}
