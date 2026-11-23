import { inject, injectable } from 'tsyringe';

import { refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';
import { SOURCE_RULES } from '@chiliztv/domain/gamification/catalog/sources';
import { accountEligibility, accountOwningWalletAt } from '@chiliztv/domain/gamification/policies/eligibilityPolicy';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import { parisDayOf } from '@chiliztv/domain/gamification/policies/parisDay';
import {
    evaluateWatchHeartbeat,
    reachesOnboardingWatch,
    watchMinuteOf,
    watchProgressReachesHour,
    watchXpForCounter,
    type WatchedStream,
} from '@chiliztv/domain/gamification/policies/watchPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IGamificationProfileRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import type { IWatchMinuteRepository } from '@chiliztv/domain/gamification/repositories/IWatchMinuteRepository';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { IRateLimitService } from '@chiliztv/domain/shared/ports/IRateLimitService';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IStreamRepository } from '@chiliztv/domain/streams/repositories/IStreamRepository';
import type { WatchHeartbeatResultDto } from '@chiliztv/shared';

import { IsAccountBannedUseCase } from '../../identity/use-cases/IsAccountBannedUseCase';
import { GetMatchByIdUseCase } from '../../matches/use-cases/GetMatchByIdUseCase';
import { requireVisibleMatch } from '../../matches/visibility/requireVisibleMatch';
import { AchievementRefresh } from '../services/AchievementRefresh';
import { CreditXpUseCase } from './CreditXpUseCase';
import { RecordProfileStepUseCase } from './RecordProfileStepUseCase';

/** The front beats every 60 s; a few extra calls (two tabs) are fine, a loop is not. */
export const WATCH_HEARTBEAT_RATE_LIMIT = { bucket: 'gamification-watch', limit: 4, windowSeconds: 60 } as const;

export interface WatchHeartbeatCommand {
    readonly accountId: string;
    readonly matchId: number;
    readonly streamId: string | null;
}

/**
 * Authenticated watch minute (§3.3 `watch`): one minute per account and minute whatever the tabs,
 * only on a visible match in play or a live stream of it, never one's own stream. 1 XP per 10
 * counted minutes (10 per day), progress, leagues and the `watch` first step. Viewer counters and
 * `viewer_sessions` are never read (D5).
 */
@injectable()
export class RecordWatchHeartbeatUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IRateLimitService) private readonly rateLimit: IRateLimitService,
        @inject(TOKENS.IStreamRepository) private readonly streams: IStreamRepository,
        @inject(TOKENS.IAccountRepository) private readonly accounts: IAccountRepository,
        @inject(TOKENS.IGamificationProfileRepository) private readonly profiles: IGamificationProfileRepository,
        @inject(TOKENS.IWatchMinuteRepository) private readonly watchMinutes: IWatchMinuteRepository,
        private readonly getMatch: GetMatchByIdUseCase,
        private readonly isAccountBanned: IsAccountBannedUseCase,
        private readonly creditXp: CreditXpUseCase,
        private readonly profileSteps: RecordProfileStepUseCase,
        private readonly achievements: AchievementRefresh,
    ) {}

    async execute(cmd: WatchHeartbeatCommand): Promise<WatchHeartbeatResultDto> {
        const now = this.clock.now();
        const gate = gamificationGate(this.config.launch, now);
        if (!gate.open) return { counted: false, reason: gate.reason };

        const decision = await this.rateLimit.check({ ...WATCH_HEARTBEAT_RATE_LIMIT, identifier: cmd.accountId });
        if (!decision.allowed) return { counted: false, reason: 'rate_limited' };

        const match = await requireVisibleMatch(this.getMatch, cmd.matchId);
        const [stream, banned, profile] = await Promise.all([
            this.watchedStream(cmd, now),
            this.isAccountBanned.execute(cmd.accountId, now),
            this.profiles.findByAccountId(cmd.accountId),
        ]);
        const evaluation = evaluateWatchHeartbeat({
            accountId: cmd.accountId,
            eligibility: accountEligibility({ anyLinkedWalletBanned: banned, suspendedAt: profile?.suspendedAt ?? null }),
            matchId: cmd.matchId,
            matchStatus: match.getStatus(),
            stream,
        });
        if (!evaluation.counted) return { counted: false, reason: evaluation.reason };

        const day = parisDayOf(now);
        const result = await this.watchMinutes.record({
            accountId: cmd.accountId,
            minute: watchMinuteOf(now),
            day,
            matchId: cmd.matchId,
            streamId: stream !== null && stream.matchId === cmd.matchId ? cmd.streamId : null,
            leagueId: match.getLeagueId() ?? null,
        });
        if (!result.inserted) return { counted: false, reason: 'already_counted' };

        let xp = 0;
        const tranche = watchXpForCounter(result.minutesToday);
        if (tranche.credit) {
            const credit = await this.creditXp.execute({
                actor: { kind: 'account', accountId: cmd.accountId },
                source: 'watch',
                refKey: refKeys.watch(cmd.accountId, day, tranche.tranche),
                occurredAt: now,
                requestedXp: SOURCE_RULES.watch.xp ?? 0,
                metadata: { matchId: cmd.matchId, streamId: cmd.streamId },
            });
            if (credit.status === 'credited') xp = credit.xp;
        }
        if (reachesOnboardingWatch(result.totalWatchMinutes)) {
            await this.profileSteps.execute(cmd.accountId, 'watch', now);
        }
        if (tranche.credit || result.leagueAdded || watchProgressReachesHour(result.totalWatchMinutes, result.progressMoved)) {
            await this.achievements.run(cmd.accountId, now, 'watch');
        }
        return { counted: true, minutesToday: result.minutesToday, xp };
    }

    /** The designated `live_streams` row, with the streamer's account; null when none was sent or found. */
    private async watchedStream(cmd: WatchHeartbeatCommand, now: Date): Promise<WatchedStream | null> {
        if (cmd.streamId === null) return null;
        const stream = await this.streams.findById(cmd.streamId);
        if (!stream) return null;
        const props = stream.toJSON();
        const account = await this.accounts.findById(cmd.accountId);
        if (account && props.streamerId === account.dynamicUserId) {
            return { status: props.status, matchId: props.matchId, streamerAccountId: cmd.accountId };
        }
        const wallet = props.streamerWalletAddress?.toLowerCase() ?? null;
        const streamerAccountId = wallet ? accountOwningWalletAt(await this.accounts.findLinks([wallet]), wallet, now) : null;
        return { status: props.status, matchId: props.matchId, streamerAccountId };
    }
}
