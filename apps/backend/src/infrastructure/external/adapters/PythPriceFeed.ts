import { injectable } from 'tsyringe';
import axios from 'axios';
import { IPriceFeedService, PriceQuote } from '@chiliztv/domain/shared/ports/IPriceFeedService';
import { logger } from '../../logging/logger';

interface PythHermesFeed {
    id: string;
    price: {
        price: string;
        conf: string;
        expo: number;
        publish_time: number;
    };
    ema_price?: {
        price: string;
        expo: number;
    };
}

@injectable()
export class PythPriceFeed implements IPriceFeedService {
    readonly source = 'pyth' as const;

    private readonly BASE_URL = 'https://hermes.pyth.network/api/latest_price_feeds';
    private readonly TIMEOUT_MS = 5_000;

    /** symbol → Pyth Hermes feed ID (hex with 0x prefix). */
    private readonly feedIdsBySymbol: ReadonlyMap<string, string>;

    constructor() {
        this.feedIdsBySymbol = buildFeedMap();
    }

    supports(symbol: string): boolean {
        return this.feedIdsBySymbol.has(symbol.toUpperCase());
    }

    async fetchPrices(symbols: ReadonlyArray<string>): Promise<ReadonlyArray<PriceQuote>> {
        const targets = symbols
            .map((s) => ({ symbol: s.toUpperCase(), feedId: this.feedIdsBySymbol.get(s.toUpperCase()) }))
            .filter((t): t is { symbol: string; feedId: string } => t.feedId !== undefined);
        if (targets.length === 0) return [];

        try {
            const { data } = await axios.get<PythHermesFeed[]>(this.BASE_URL, {
                params: { 'ids[]': targets.map((t) => t.feedId) },
                timeout: this.TIMEOUT_MS,
            });

            const feedIdToSymbol = new Map(targets.map((t) => [normalizeFeedId(t.feedId), t.symbol]));
            const quotes: PriceQuote[] = [];
            for (const feed of data) {
                const symbol = feedIdToSymbol.get(normalizeFeedId(feed.id));
                if (!symbol) continue;
                const price = Number(feed.price.price) * Math.pow(10, feed.price.expo);
                if (!Number.isFinite(price) || price < 0) continue;
                quotes.push({
                    symbol,
                    priceUsd: price,
                    change24hPct: null,
                    source: this.source,
                });
            }
            return quotes;
        } catch (err) {
            const status = axios.isAxiosError(err) ? err.response?.status : undefined;
            logger.warn('Pyth fetch failed, falling back to other feeds', {
                status,
                error: err instanceof Error ? err.message : String(err),
            });
            return [];
        }
    }
}

function buildFeedMap(): ReadonlyMap<string, string> {
    const map = new Map<string, string>();
    const chzFeed = process.env.PYTH_CHZ_PRICE_FEED_ID;
    if (chzFeed) {
        map.set('CHZ', chzFeed.startsWith('0x') ? chzFeed : `0x${chzFeed}`);
    }
    return map;
}

/** Hermes returns IDs without the `0x` prefix; normalize for lookup. */
function normalizeFeedId(id: string): string {
    return id.startsWith('0x') ? id.toLowerCase() : `0x${id.toLowerCase()}`;
}
