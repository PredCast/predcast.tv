import { inject, injectable } from 'tsyringe';

import { STREAM_MAX_MINUTES_PER_RUN } from '@chiliztv/domain/gamification/catalog/constants';
import { refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';
import { SOURCE_RULES } from '@chiliztv/domain/gamification/catalog/sources';
import type { StreamSession } from '@chiliztv/domain/gamification/entities/StreamSession';
import { accountEligibility, type AccountEligibility } from '@chiliztv/domain/gamification/policies/eligibilityPolicy';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import { parisDayOf } from '@chiliztv/domain/gamification/policies/parisDay';
import {
    evaluateStreamMinute,
    streamProgressReachesHour,
    streamXpForSessionCount,
} from '@chiliztv/domain/gamification/policies/streamMinutePolicy';
import { isSessionOpenAt, isSessionSettled, streamMinutesToProcess } from '@chiliztv/domain/gamification/policies/streamSessionPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IGamificationProfileRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import type { IStreamSessionRepository } from '@chiliztv/domain/gamification/repositories/IStreamSessionRepository';
import type { IWatchMinuteRepository } from '@chiliztv/domain/gamification/repositories/IWatchMinuteRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { IsAccountBannedUseCase } from '../../../identity/use-cases/IsAccountBannedUseCase';
import { AchievementRefresh } from '../../services/AchievementRefresh';
import { CreditXpUseCase } from '../CreditXpUseCase';

export interface SessionCountReport {
    readonly processed: number;
    readonly counted: number;
}

/**
 * Counts the pending minutes of one session (§3.3 `stream_time`): a minute counts with a viewer of
 * another account older than 24 h and not banned, or within the streamer's first 60 lifetime
 * minutes. Every 6th counted minute credits 1 XP (40 per Paris day). With `count = false` (flag off,
 * before launch) the minutes are only marked processed: nothing is counted later for them.
 */
@injectable()
export class CountSessionMinutesUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IStreamSessionRepository) private readonly sessions: IStreamSessionRepository,
        @inject(TOKENS.IWatchMinuteRepository) private readonly watchMinutes: IWatchMinuteRepository,
        @inject(TOKENS.IGamificationProfileRepository) private readonly profiles: IGamificationProfileRepository,
        private readonly isAccountBanned: IsAccountBannedUseCase,
        private readonly creditXp: CreditXpUseCase,
        private readonly achievements: AchievementRefresh,
    ) {}

    async execute(session: StreamSession, now: Date, count: boolean): Promise<SessionCountReport> {
        const minutes = streamMinutesToProcess(session, now, STREAM_MAX_MINUTES_PER_RUN);
        const accountId = count && session.moderatedAt === null ? session.accountId : null;
        let lifetime: number | null = null;
        let counted = 0;
        let evaluate = false;
        let last: Date | null = null;

        for (const minute of minutes) {
            last = minute;
            if (accountId === null || !gamificationGate(this.config.launch, minute).open) continue;
            lifetime ??= await this.sessions.lifetimeCountedMinutes(accountId);
            const evaluation = evaluateStreamMinute({
                minute,
                sessionOpen: isSessionOpenAt(session, minute),
                streamerAccountId: accountId,
                streamerEligibility: await this.eligibilityAt(accountId, minute),
                lifetimeCountedMinutes: lifetime,
                viewers: await this.watchMinutes.listViewersAt(session.streamId, minute),
            });
            if (!evaluation.counted) continue;

            const result = await this.sessions.recordMinute({
                streamId: session.streamId,
                minute,
                day: parisDayOf(minute),
                viewerAccounts: evaluation.viewerAccounts,
                exempt: evaluation.exempt,
            });
            if (result.inserted) {
                counted += 1;
                lifetime += 1;
                if (streamProgressReachesHour(result.totalStreamMinutes, result.progressMoved)) evaluate = true;
            }
            if (await this.creditTranche(session, accountId, minute, result.countedMinutes)) evaluate = true;
        }

        const settledAt = isSessionSettled(session, last ?? session.lastProcessedMinute) ? now : null;
        if (last !== null || settledAt !== null) await this.sessions.markProcessed(session.streamId, last, settledAt);
        if (evaluate && accountId !== null) await this.achievements.run(accountId, now, 'stream');
        return { processed: minutes.length, counted };
    }

    /** A replayed minute retries the same tranche: the `ref_key` keeps it single. */
    private async creditTranche(session: StreamSession, accountId: string, minute: Date, countedMinutes: number): Promise<boolean> {
        const tranche = streamXpForSessionCount(countedMinutes);
        if (!tranche.credit) return false;
        const credit = await this.creditXp.execute({
            actor: { kind: 'account', accountId },
            source: 'stream_time',
            refKey: refKeys.streamTime(session.streamId, tranche.tranche),
            occurredAt: minute,
            requestedXp: SOURCE_RULES.stream_time.xp ?? 0,
            metadata: { streamId: session.streamId, matchId: session.matchId },
        });
        return credit.status === 'credited';
    }

    private async eligibilityAt(accountId: string, at: Date): Promise<AccountEligibility> {
        const [banned, profile] = await Promise.all([
            this.isAccountBanned.execute(accountId, at),
            this.profiles.findByAccountId(accountId),
        ]);
        return accountEligibility({ anyLinkedWalletBanned: banned, suspendedAt: profile?.suspendedAt ?? null });
    }
}
