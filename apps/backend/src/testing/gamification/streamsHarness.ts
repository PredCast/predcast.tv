import type { StreamViewer } from '@chiliztv/domain/gamification/policies/streamMinutePolicy';
import { Stream, StreamStatus } from '@chiliztv/domain/streams/entities/Stream';

import { SnapshotCycleRanksUseCase } from '../../application/gamification/use-cases/cycles/SnapshotCycleRanksUseCase';
import { CountSessionMinutesUseCase } from '../../application/gamification/use-cases/streams/CountSessionMinutesUseCase';
import { ProcessStreamMinutesUseCase } from '../../application/gamification/use-cases/streams/ProcessStreamMinutesUseCase';
import { ReconcileStreamSessionsUseCase } from '../../application/gamification/use-cases/streams/ReconcileStreamSessionsUseCase';
import type { HarnessOptions } from './gamificationHarness';
import { InMemoryLeaderboardCycles } from './InMemoryStreamAdapters';
import { buildSourcesHarness } from './sourcesHarness';

/** Step 04 harness plus the streamer minutes and the cycle snapshot of step 05. */
export function buildStreamsHarness(options: HarnessOptions = {}) {
    const base = buildSourcesHarness(options);
    const { config, clock, logger, store, accounts, isBanned, creditXp, achievements, sessions, watchMinutes, streamRepo, cursors } = base;
    const cycles = new InMemoryLeaderboardCycles();

    const reconcile = new ReconcileStreamSessionsUseCase(streamRepo, sessions, accounts, logger);
    const countMinutes = new CountSessionMinutesUseCase(config, sessions, watchMinutes, store.profiles, isBanned, creditXp, achievements);
    const streamMinutes = new ProcessStreamMinutesUseCase(config, clock, logger, sessions, reconcile, countMinutes);
    const snapshot = new SnapshotCycleRanksUseCase(
        config, clock, cycles, store.cycleRanks, cursors, accounts, store.profiles, isBanned, achievements,
    );

    return {
        ...base, cycles, streamMinutes, snapshot,
        /** Ends the `live_streams` row as the stream lifecycle does (`ended_at` = now). */
        endStream(id: string): void {
            const stream = base.streams.get(id);
            if (!stream) return;
            const props = stream.toJSON();
            base.streams.set(id, Stream.reconstitute({ ...props, status: StreamStatus.ENDED, endedAt: clock.now() }));
        },
        /** Viewers of a stream at one minute, as `gamification_watch_minutes` holds them. */
        watchAt(streamId: string, minute: Date, viewers: ReadonlyArray<StreamViewer>): void {
            watchMinutes.streamViewers.set(`${streamId}|${minute.toISOString()}`, [...viewers]);
        },
        /** One stream-minutes run per minute, `minutes` times. */
        async runMinutes(minutes: number): Promise<void> {
            for (let i = 0; i < minutes; i++) {
                clock.advanceByMin(1);
                await streamMinutes.execute();
            }
        },
    };
}

export type StreamsHarness = ReturnType<typeof buildStreamsHarness>;
