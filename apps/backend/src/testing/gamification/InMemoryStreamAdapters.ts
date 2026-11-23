import type { ProgressMetric } from '@chiliztv/domain/gamification/catalog/sources';
import type { ProgressValue } from '@chiliztv/domain/gamification/entities/Progress';
import type { StreamSession } from '@chiliztv/domain/gamification/entities/StreamSession';
import type { CycleScore } from '@chiliztv/domain/gamification/policies/cycleSnapshotPolicy';
import type { ClosedCycle, ILeaderboardCycleSource } from '@chiliztv/domain/gamification/repositories/ILeaderboardCycleSource';
import type {
    IStreamSessionRepository,
    StreamMinuteResult,
    StreamMinuteWrite,
    StreamModerationResult,
    StreamSessionOpen,
} from '@chiliztv/domain/gamification/repositories/IStreamSessionRepository';

import type { InMemoryGamificationStore } from './InMemoryGamificationStore';

interface SessionState extends StreamSession {
    readonly progressMinutes: number;
}

/** Same semantics as `gamification_record_stream_minute` / `_moderate_stream_session` (migration 047). */
export class InMemoryStreamSessions implements IStreamSessionRepository {
    readonly sessions = new Map<string, SessionState>();
    readonly minutes = new Map<string, Set<string>>();

    constructor(
        private readonly store: InMemoryGamificationStore,
        private readonly progressCap: number,
    ) {}

    private patch(streamId: string, patch: Partial<SessionState>): void {
        const current = this.sessions.get(streamId);
        if (current) this.sessions.set(streamId, { ...current, ...patch });
    }

    async findById(streamId: string) {
        return this.sessions.get(streamId) ?? null;
    }
    async findToProcess() {
        return [...this.sessions.values()].filter((s) => s.minutesSettledAt === null);
    }
    async open(s: StreamSessionOpen) {
        if (this.sessions.has(s.streamId)) return false;
        this.sessions.set(s.streamId, {
            ...s, streamerWallet: s.streamerWallet.toLowerCase(), endedAt: null, countedMinutes: 0,
            lastProcessedMinute: null, moderatedAt: null, minutesSettledAt: null, progressMinutes: 0,
        });
        return true;
    }
    async close(streamId: string, endedAt: Date) {
        if (this.sessions.get(streamId)?.endedAt === null) this.patch(streamId, { endedAt });
    }
    async recordMinute(w: StreamMinuteWrite): Promise<StreamMinuteResult> {
        const session = this.sessions.get(w.streamId);
        if (!session || session.accountId === null) throw new Error('stream session missing or without account');
        if (session.moderatedAt !== null) return { inserted: false, countedMinutes: 0 };
        const set = this.minutes.get(w.streamId) ?? new Set<string>();
        this.minutes.set(w.streamId, set);
        const iso = w.minute.toISOString();
        const rank = () => [...set].filter((m) => m <= iso).length;
        if (set.has(iso)) return { inserted: false, countedMinutes: rank() };
        set.add(iso);

        const key = `${session.accountId}|${w.day}|progress:stream_minutes`;
        const used = this.store.counters.get(key) ?? 0;
        const progressMoved = used < this.progressCap;
        const metrics = this.store.progressMap.get(session.accountId) ?? new Map<ProgressMetric, ProgressValue>();
        this.store.progressMap.set(session.accountId, metrics);
        const current = metrics.get('stream_minutes') ?? { value: 0, items: [] };
        if (progressMoved) {
            this.store.counters.set(key, used + 1);
            metrics.set('stream_minutes', { value: current.value + 1, items: [] });
        }
        this.patch(w.streamId, {
            countedMinutes: session.countedMinutes + 1,
            progressMinutes: session.progressMinutes + (progressMoved ? 1 : 0),
        });
        return { inserted: true, countedMinutes: rank(), progressMoved, totalStreamMinutes: metrics.get('stream_minutes')?.value ?? 0 };
    }
    async markProcessed(streamId: string, minute: Date | null, settledAt: Date | null) {
        if (minute !== null) this.patch(streamId, { lastProcessedMinute: minute });
        if (settledAt !== null) this.patch(streamId, { minutesSettledAt: settledAt });
    }
    async lifetimeCountedMinutes(accountId: string) {
        return [...this.sessions.values()]
            .filter((s) => s.accountId === accountId)
            .reduce((sum, s) => sum + s.countedMinutes, 0);
    }
    async markModerated(streamId: string, at: Date): Promise<StreamModerationResult> {
        const session = this.sessions.get(streamId);
        if (!session || session.moderatedAt !== null) return { moderated: false };
        this.patch(streamId, { moderatedAt: at });
        const metrics = session.accountId ? this.store.progressMap.get(session.accountId) : undefined;
        const current = metrics?.get('stream_minutes');
        if (metrics && current) {
            metrics.set('stream_minutes', { value: Math.max(current.value - session.progressMinutes, 0), items: [] });
        }
        return { moderated: true, minutesRemoved: session.progressMinutes };
    }
}

/** `leaderboard_epochs` + `leaderboard_cycle_scores` as arrays, same filters as SupabaseLeaderboardCycleSource. */
export class InMemoryLeaderboardCycles implements ILeaderboardCycleSource {
    closed: ClosedCycle[] = [];
    readonly scores = new Map<number, CycleScore[]>();

    async listClosedCyclesAfter(afterCycleId: number | null, closedFrom: Date, limit: number) {
        return this.closed
            .filter((c) => (afterCycleId === null || c.cycleId > afterCycleId) && c.closedAt >= closedFrom)
            .sort((a, b) => a.cycleId - b.cycleId)
            .slice(0, limit);
    }
    async listTopScores(cycleId: number, limit: number) {
        return (this.scores.get(cycleId) ?? [])
            .filter((s) => s.score > BigInt(0))
            .sort((a, b) => (a.score === b.score ? a.wallet.localeCompare(b.wallet) : a.score > b.score ? -1 : 1))
            .slice(0, limit);
    }
}
