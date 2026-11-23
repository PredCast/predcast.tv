import type {
    GamificationCursorName,
    GamificationCursorPositions,
} from '@chiliztv/domain/gamification/entities/CursorPositions';
import type { ProgressMetric } from '@chiliztv/domain/gamification/catalog/sources';
import type { ProgressValue } from '@chiliztv/domain/gamification/entities/Progress';
import type { IGamificationCursorRepository } from '@chiliztv/domain/gamification/repositories/IGamificationCursorRepository';
import type {
    ChainPosition,
    ContractMatch,
    IGamificationEventSource,
    IndexedBet,
    RemovedChatMessage,
    SettlementEvent,
    SupportEvent,
} from '@chiliztv/domain/gamification/repositories/IGamificationEventSource';
import type {
    IWatchMinuteRepository,
    WatchMinuteResult,
    WatchMinuteWrite,
} from '@chiliztv/domain/gamification/repositories/IWatchMinuteRepository';

import type { InMemoryGamificationStore } from './InMemoryGamificationStore';

const isAfter = (a: ChainPosition, b: ChainPosition) => a.block > b.block || (a.block === b.block && a.logIndex > b.logIndex);

/** Indexed rows held in arrays; same ordering and filters as SupabaseGamificationEventSource. */
export class InMemoryEventSource implements IGamificationEventSource {
    bets: IndexedBet[] = [];
    settlements: SettlementEvent[] = [];
    support: SupportEvent[] = [];
    removals: RemovedChatMessage[] = [];
    contractMatches: ContractMatch[] = [];
    readonly marketKinds = new Map<string, { marketType: string; line: number }>();

    async listBetsAfter(afterId: number, limit: number) {
        return this.bets.filter((b) => b.id > afterId).sort((a, b) => a.id - b.id).slice(0, limit);
    }
    async listMarketBets(contract: string, marketId: number) {
        return this.bets.filter((b) => b.contract === contract.toLowerCase() && b.marketId === marketId);
    }
    async findContractMatches(contracts: ReadonlyArray<string>) {
        return this.contractMatches.filter((m) => contracts.includes(m.contract));
    }
    async findMarketKind(contract: string, marketId: number) {
        return this.marketKinds.get(`${contract.toLowerCase()}:${marketId}`) ?? null;
    }
    async isMarketCancelled(contract: string, marketId: number) {
        return this.settlements.some((s) => s.kind === 'cancelled' && s.contract === contract.toLowerCase() && s.marketId === marketId);
    }
    async listSettlementsAfter(after: ChainPosition, limit: number) {
        return this.settlements
            .filter((s) => isAfter(s, after))
            .sort((a, b) => (isAfter(a, b) ? 1 : -1))
            .slice(0, limit);
    }
    async listSupportAfter(after: Date, limit: number) {
        return this.support
            .filter((s) => s.createdAt > after)
            .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
            .slice(0, limit);
    }
    async listChatRemovalsAfter(after: Date, limit: number) {
        return this.removals.filter((r) => r.removedAt > after).slice(0, limit);
    }
}

export class InMemoryCursors implements IGamificationCursorRepository {
    readonly positions = new Map<GamificationCursorName, unknown>();

    async get<K extends GamificationCursorName>(name: K): Promise<GamificationCursorPositions[K] | null> {
        // Written only by `set` under the same name.
        return (this.positions.get(name) as GamificationCursorPositions[K] | undefined) ?? null;
    }
    async set<K extends GamificationCursorName>(name: K, position: GamificationCursorPositions[K]): Promise<void> {
        this.positions.set(name, position);
    }
}

/** Same semantics as `gamification_record_watch_minute` (migration 045), on the store's counters. */
export class InMemoryWatchMinutes implements IWatchMinuteRepository {
    readonly minutes = new Set<string>();

    constructor(
        private readonly store: InMemoryGamificationStore,
        private readonly progressCap: number,
        private readonly leagueMinutes: number,
    ) {}

    async record(w: WatchMinuteWrite): Promise<WatchMinuteResult> {
        const counter = (bucket: string) => `${w.accountId}|${w.day}|${bucket}`;
        const bump = (bucket: string) => {
            const value = (this.store.counters.get(counter(bucket)) ?? 0) + 1;
            this.store.counters.set(counter(bucket), value);
            return value;
        };
        const key = `${w.accountId}|${w.minute.toISOString()}`;
        if (this.minutes.has(key)) return { inserted: false, minutesToday: this.store.counters.get(counter('minutes:watch')) ?? 0 };
        this.minutes.add(key);

        const minutesToday = bump('minutes:watch');
        const metrics = this.store.progressMap.get(w.accountId) ?? new Map<ProgressMetric, ProgressValue>();
        this.store.progressMap.set(w.accountId, metrics);
        let leagueMinutesToday: number | null = null;
        let leagueAdded = false;
        if (w.leagueId !== null) {
            leagueMinutesToday = bump(`minutes:league:${w.leagueId}`);
            const leagues = metrics.get('leagues') ?? { value: 0, items: [] };
            if (leagueMinutesToday === this.leagueMinutes && !leagues.items.includes(String(w.leagueId))) {
                metrics.set('leagues', { value: leagues.value + 1, items: [...leagues.items, String(w.leagueId)] });
                leagueAdded = true;
            }
        }
        const used = this.store.counters.get(counter('progress:watch_minutes')) ?? 0;
        const progressMoved = used < this.progressCap;
        const watch = metrics.get('watch_minutes') ?? { value: 0, items: [] };
        if (progressMoved) {
            this.store.counters.set(counter('progress:watch_minutes'), used + 1);
            metrics.set('watch_minutes', { value: watch.value + 1, items: [] });
        }
        const totalWatchMinutes = metrics.get('watch_minutes')?.value ?? 0;
        return { inserted: true, minutesToday, leagueMinutesToday, totalWatchMinutes, progressMoved, leagueAdded };
    }

    async listViewersAt() {
        return [];
    }

    async purgeBefore(cutoff: Date) {
        const old = [...this.minutes].filter((k) => new Date(k.split('|')[1]) < cutoff);
        for (const k of old) this.minutes.delete(k);
        return old.length;
    }
}
