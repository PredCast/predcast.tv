import {
    STREAM_PROGRESS_DAILY_CAP_MINUTES,
    WATCH_LEAGUE_MINUTES,
    WATCH_PROGRESS_DAILY_CAP_MINUTES,
} from '@chiliztv/domain/gamification/catalog/constants';
import type { IStakeTokenDecimals } from '@chiliztv/domain/gamification/ports/IStakeTokenDecimals';
import type { Match } from '@chiliztv/domain/matches/entities/Match';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { IBettingChainRegistry } from '@chiliztv/domain/shared/ports/IBettingChainRegistry';
import { Stream, StreamStatus } from '@chiliztv/domain/streams/entities/Stream';
import type { IStreamRepository } from '@chiliztv/domain/streams/repositories/IStreamRepository';

import { GamificationActivityRecorder } from '../../application/gamification/services/GamificationActivityRecorder';
import { ProcessBetVolumeUseCase } from '../../application/gamification/use-cases/chain/ProcessBetVolumeUseCase';
import { ProcessGamificationChainUseCase } from '../../application/gamification/use-cases/chain/ProcessGamificationChainUseCase';
import { ProcessMarketSettlementsUseCase } from '../../application/gamification/use-cases/chain/ProcessMarketSettlementsUseCase';
import { ProcessModerationReversalsUseCase } from '../../application/gamification/use-cases/chain/ProcessModerationReversalsUseCase';
import { ProcessSupportEventsUseCase } from '../../application/gamification/use-cases/chain/ProcessSupportEventsUseCase';
import { RecordChatXpUseCase } from '../../application/gamification/use-cases/RecordChatXpUseCase';
import { RecordFollowXpUseCase } from '../../application/gamification/use-cases/RecordFollowXpUseCase';
import { RecordWatchHeartbeatUseCase } from '../../application/gamification/use-cases/RecordWatchHeartbeatUseCase';
import { GetMatchByIdUseCase } from '../../application/matches/use-cases/GetMatchByIdUseCase';
import { NodeTextHasher } from '../../infrastructure/crypto/NodeTextHasher';
import { FIXTURE_CHAIN_ID, FIXTURE_USDC_DECIMALS } from '../fixtures/gamification.fixtures';
import { buildGamificationHarness, type HarnessOptions } from './gamificationHarness';
import { InMemoryCursors, InMemoryEventSource, InMemoryWatchMinutes } from './InMemorySourceAdapters';
import { InMemoryStreamSessions } from './InMemoryStreamAdapters';

export interface StreamFixtureInput {
    readonly id: string;
    readonly matchId: number;
    readonly streamerId: string;
    readonly streamerWallet?: string;
    readonly status?: StreamStatus;
}

/** Step 03 harness plus the XP sources of step 04 (watch, chat, follow, chain processor). */
export function buildSourcesHarness(options: HarnessOptions = {}) {
    const base = buildGamificationHarness(options);
    const { config, clock, rateLimit, store, accounts, isBanned, creditXp, afterCredit, achievements, profileSteps, logger } = base;
    const source = new InMemoryEventSource();
    const cursors = new InMemoryCursors();
    const watchMinutes = new InMemoryWatchMinutes(store, WATCH_PROGRESS_DAILY_CAP_MINUTES, WATCH_LEAGUE_MINUTES);
    const sessions = new InMemoryStreamSessions(store, STREAM_PROGRESS_DAILY_CAP_MINUTES);
    store.lastSnapshottedCycle = async () => (await cursors.get('cycles'))?.lastEpochId ?? null;
    const decimals: IStakeTokenDecimals = { usdcDecimals: async () => FIXTURE_USDC_DECIMALS };
    const chains: IBettingChainRegistry = {
        list: () => [],
        get: () => null,
        defaultChain: () => ({ chainId: FIXTURE_CHAIN_ID, name: 'Chiliz Spicy', nativeSymbol: 'CHZ', explorerUrl: '' }),
    };

    const matches = new Map<number, Match>();
    // Only the single-match read is used by the heartbeat.
    const matchRepo = { findByApiFootballId: async (id: number) => matches.get(id) ?? null } as unknown as IMatchRepository;
    const streams = new Map<string, Stream>();
    const streamRepo = {
        findById: async (id: string) => streams.get(id) ?? null,
        findActiveStreams: async () => [...streams.values()].filter((s) => s.isLive()),
    } as unknown as IStreamRepository;

    const getMatch = new GetMatchByIdUseCase(matchRepo, base.cache);
    const watch = new RecordWatchHeartbeatUseCase(
        config, clock, rateLimit, streamRepo, accounts, store.profiles, watchMinutes, getMatch, isBanned, creditXp,
        profileSteps, achievements,
    );
    const chatXp = new RecordChatXpUseCase(config, clock, store.ledger, new NodeTextHasher(), creditXp, profileSteps, achievements);
    const followXp = new RecordFollowXpUseCase(config, clock, store.ledger, creditXp, profileSteps, achievements);
    const activity = new GamificationActivityRecorder(clock, logger, chatXp, followXp, profileSteps);
    const betVolume = new ProcessBetVolumeUseCase(config, cursors, source, decimals, creditXp);
    const settlements = new ProcessMarketSettlementsUseCase(config, cursors, source, store.ledger, decimals, creditXp, afterCredit);
    const support = new ProcessSupportEventsUseCase(config, cursors, source, accounts, creditXp);
    const moderation = new ProcessModerationReversalsUseCase(config, cursors, source, store.ledger, sessions, afterCredit);
    const chain = new ProcessGamificationChainUseCase(
        config, clock, logger, source, accounts, chains, betVolume, settlements, support, moderation, achievements,
    );

    return {
        ...base, source, cursors, watchMinutes, sessions, streams, streamRepo, getMatch, watch, chatXp, followXp, activity, chain,
        addMatch(match: Match): void { matches.set(match.getId(), match); },
        addStream(s: StreamFixtureInput): void {
            streams.set(s.id, Stream.reconstitute({
                id: s.id, matchId: s.matchId, streamerId: s.streamerId, streamerName: 'streamer',
                streamerWalletAddress: s.streamerWallet, streamKey: `key-${s.id}`, status: s.status ?? StreamStatus.LIVE,
                sourceType: 'browser', viewerCount: 0, createdAt: clock.now(),
            }));
        },
        /** Ledger rows of a source, reversals included. */
        rowsOf(source: string) { return store.rows.filter((r) => r.source === source); },
    };
}

export type SourcesHarness = ReturnType<typeof buildSourcesHarness>;
