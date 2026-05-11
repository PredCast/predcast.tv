/**
 * Token prices service — delegates to the backend cache (`/prices`). Eliminates
 * direct CoinGecko calls from the browser and the 429 they triggered.
 *
 * Same exported surface as the previous CoinGecko implementation so call-sites
 * stay untouched. New code should prefer the `usePrices` / `usePrice` hooks
 * from `@/hooks/api` for React Query deduplication.
 */
import { pricesApi } from '@/lib/api/endpoints';

export interface TokenPriceData {
    symbol: string;
    price: number;
    priceChange24h: number;
    priceChangePercent24h: number;
}

export interface CoinGeckoToken {
    id: string;
    symbol: string;
    name: string;
    current_price: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
}

function toData(symbol: string, priceUsd: number, change24hPct: number | null): TokenPriceData {
    const pct = change24hPct ?? 0;
    return {
        symbol: symbol.toUpperCase(),
        price: priceUsd,
        priceChange24h: pct,
        priceChangePercent24h: pct,
    };
}

export async function fetchTokenPrices(
    symbols: string[],
): Promise<{ [symbol: string]: TokenPriceData }> {
    try {
        const { prices } = await pricesApi.getAll();
        const wanted = new Set(symbols.map((s) => s.toUpperCase()));
        const out: { [symbol: string]: TokenPriceData } = {};
        for (const p of prices) {
            if (wanted.has(p.symbol)) {
                out[p.symbol] = toData(p.symbol, p.priceUsd, p.change24hPct);
            }
        }
        return out;
    } catch {
        return {};
    }
}

export async function fetchTokenPrice(symbol: string): Promise<TokenPriceData | null> {
    try {
        const quote = await pricesApi.getBySymbol(symbol);
        return toData(quote.symbol, quote.priceUsd, quote.change24hPct);
    } catch {
        return null;
    }
}

export async function fetchAllTokenPrices(): Promise<{ [symbol: string]: TokenPriceData }> {
    try {
        const { prices } = await pricesApi.getAll();
        const out: { [symbol: string]: TokenPriceData } = {};
        for (const p of prices) {
            out[p.symbol] = toData(p.symbol, p.priceUsd, p.change24hPct);
        }
        return out;
    } catch {
        return {};
    }
}

export async function fetchCHZPrice(): Promise<number> {
    const quote = await fetchTokenPrice('CHZ');
    return quote?.price ?? 0;
}
