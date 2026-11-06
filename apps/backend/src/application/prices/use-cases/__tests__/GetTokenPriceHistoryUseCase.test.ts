import 'reflect-metadata';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { IPriceHistoryFeed } from '@chiliztv/domain/prices/ports/IPriceHistoryFeed';
import type { PriceHistoryWindow, PricePoint } from '@chiliztv/domain/prices/priceHistory';
import type { ILogger } from '@chiliztv/domain/shared/ports/ILogger';
import { PriceHistoryUnavailableError } from '@chiliztv/domain/prices/errors/PriceHistoryUnavailableError';
import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';

import { GetTokenPriceHistoryUseCase } from '../GetTokenPriceHistoryUseCase';
import { InMemoryCache } from '../../../../testing/cache/InMemoryCache';
import { MockClock } from '../../../../testing/clock/MockClock';

const NOW = new Date('2026-11-08T20:00:00.000Z');
const MIN = 60_000;
const series1d: PricePoint[] = [90, 45, 30, 5].map((m, i) => ({ t: NOW.getTime() - m * MIN, p: 0.3 + i / 100 }));

class FakeFeed implements IPriceHistoryFeed {
    readonly source = 'fake';
    calls = 0;
    constructor(private readonly impl: (symbol: string, window: PriceHistoryWindow) => Promise<PricePoint[]>) {}
    supports(symbol: string): boolean {
        return symbol !== 'NOPE';
    }
    async fetchHistory(symbol: string, window: PriceHistoryWindow): Promise<PricePoint[]> {
        this.calls++;
        return this.impl(symbol, window);
    }
}

const logger: ILogger = { info: vi.fn(), warn: vi.fn(), error: vi.fn(), debug: vi.fn() };

describe('GetTokenPriceHistoryUseCase', () => {
    let clock: MockClock;
    let cache: InMemoryCache;

    beforeEach(() => {
        clock = new MockClock(NOW);
        cache = new InMemoryCache();
    });

    const build = (feed: FakeFeed) => new GetTokenPriceHistoryUseCase([feed], cache, clock, logger);

    it('cuts 1H out of the cached 1-day series without a second upstream call', async () => {
        const feed = new FakeFeed(async () => series1d);
        const uc = build(feed);
        const day = await uc.execute({ symbol: 'psg', range: '24h' });
        const hour = await uc.execute({ symbol: 'PSG', range: '1h' });
        expect(day.points).toHaveLength(4);
        expect(hour.points.map((p) => p.t)).toEqual(series1d.slice(1).map((p) => p.t));
        expect(hour).toMatchObject({ symbol: 'PSG', source: 'fake', stale: false });
        expect(feed.calls).toBe(1);
    });

    it('collapses 20 concurrent requests into a single upstream call', async () => {
        let release: () => void = () => {};
        const gate = new Promise<void>((r) => { release = r; });
        const feed = new FakeFeed(async () => { await gate; return series1d; });
        const uc = build(feed);
        const pending = Array.from({ length: 20 }, () => uc.execute({ symbol: 'PSG', range: '24h' }));
        release();
        const results = await Promise.all(pending);
        expect(feed.calls).toBe(1);
        expect(results.every((r) => r.points.length === 4)).toBe(true);
    });

    it('serves the last good copy flagged stale when the upstream fails after expiry', async () => {
        let fail = false;
        const feed = new FakeFeed(async (symbol) => {
            if (fail) throw new PriceHistoryUnavailableError(symbol, 'rate_limited');
            return series1d;
        });
        const uc = build(feed);
        await uc.execute({ symbol: 'PSG', range: '24h' });
        fail = true;
        clock.advanceBy(10 * MIN);
        await cache.delete('prices:history:v1:fake:PSG:1d');
        const stale = await uc.execute({ symbol: 'PSG', range: '24h' });
        expect(stale.stale).toBe(true);
        expect(stale.updatedAt.toISOString()).toBe(NOW.toISOString());
    });

    it('throws when the upstream fails and nothing was ever cached', async () => {
        const feed = new FakeFeed(async (symbol) => { throw new PriceHistoryUnavailableError(symbol, 'upstream_error'); });
        await expect(build(feed).execute({ symbol: 'PSG', range: '7d' })).rejects.toBeInstanceOf(PriceHistoryUnavailableError);
    });

    it('rejects a symbol no feed supports', async () => {
        const feed = new FakeFeed(async () => series1d);
        await expect(build(feed).execute({ symbol: 'NOPE', range: '24h' })).rejects.toBeInstanceOf(NotFoundError);
    });

    it('reads the 7-day series for the 7D range', async () => {
        const windows: PriceHistoryWindow[] = [];
        const feed = new FakeFeed(async (_s, w) => { windows.push(w); return series1d; });
        await build(feed).execute({ symbol: 'PSG', range: '7d' });
        expect(windows).toEqual(['7d']);
    });
});
