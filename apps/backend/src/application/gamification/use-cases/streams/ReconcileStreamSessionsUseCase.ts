import { inject, injectable } from 'tsyringe';

import type { StreamSession } from '@chiliztv/domain/gamification/entities/StreamSession';
import { accountOwningWalletAt } from '@chiliztv/domain/gamification/policies/eligibilityPolicy';
import { sessionClosing, streamsToOpen, type LiveStreamState } from '@chiliztv/domain/gamification/policies/streamSessionPolicy';
import type { IStreamSessionRepository } from '@chiliztv/domain/gamification/repositories/IStreamSessionRepository';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import type { ILogger } from '@chiliztv/domain/shared/ports/ILogger';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { Stream } from '@chiliztv/domain/streams/entities/Stream';
import type { IStreamRepository } from '@chiliztv/domain/streams/repositories/IStreamRepository';

export interface ReconcileReport {
    readonly opened: number;
    readonly closed: number;
}

const stateOf = (stream: Stream): LiveStreamState => {
    const props = stream.toJSON();
    return { streamId: props.id, live: props.isLive, endedAt: props.endedAt ?? null };
};

/**
 * Mirrors `live_streams` into the durable `gamification_stream_sessions` (D4): a session opens for
 * every live stream without one and closes when its stream ends or disappears. None of the five
 * stream-ending paths is hooked. Runs whatever the gamification flag.
 */
@injectable()
export class ReconcileStreamSessionsUseCase {
    constructor(
        @inject(TOKENS.IStreamRepository) private readonly streams: IStreamRepository,
        @inject(TOKENS.IStreamSessionRepository) private readonly sessions: IStreamSessionRepository,
        @inject(TOKENS.IAccountRepository) private readonly accounts: IAccountRepository,
        @inject(TOKENS.ILogger) private readonly logger: ILogger,
    ) {}

    async execute(now: Date, tracked: ReadonlyArray<StreamSession>): Promise<ReconcileReport> {
        const live = await this.streams.findActiveStreams();
        const liveById = new Map(live.map((s) => [s.getId(), s]));
        let opened = 0;
        for (const streamId of streamsToOpen([...liveById.keys()].map((id) => ({ streamId: id })), new Set(tracked.map((s) => s.streamId)))) {
            const stream = liveById.get(streamId);
            if (stream && (await this.open(stream, now))) opened += 1;
        }

        let closed = 0;
        for (const session of tracked) {
            if (session.endedAt !== null) continue;
            const live = liveById.get(session.streamId);
            const current = live ?? (await this.streams.findById(session.streamId));
            const closing = sessionClosing(session, current ? stateOf(current) : null, now);
            if (closing === null) continue;
            await this.sessions.close(closing.streamId, closing.endedAt);
            closed += 1;
        }
        return { opened, closed };
    }

    /** `went_live_at` = now (±60 s); the account is the owner of the streamer wallet at that time. */
    private async open(stream: Stream, now: Date): Promise<boolean> {
        const props = stream.toJSON();
        const wallet = props.streamerWalletAddress?.toLowerCase() ?? null;
        if (wallet === null) {
            this.logger.debug('Live stream without streamer wallet: no gamification session', { streamId: props.id });
            return false;
        }
        const accountId = accountOwningWalletAt(await this.accounts.findLinks([wallet]), wallet, now);
        return this.sessions.open({ streamId: props.id, accountId, streamerWallet: wallet, matchId: props.matchId, wentLiveAt: now });
    }
}
