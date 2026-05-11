import { inject, injectable } from 'tsyringe';
import { supabaseClient as supabase } from '../../database/supabase/client';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { TokenPrice, type PriceSource } from '@chiliztv/domain/prices/entities/TokenPrice';
import { ITokenPriceRepository } from '@chiliztv/domain/prices/repositories/ITokenPriceRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { logger } from '../../logging/logger';

interface TokenPriceRow {
    symbol: string;
    price_usd: string;          // pg numeric arrives as string
    change_24h_pct: string | null;
    source: string;
    fetched_at: string;
    updated_at: string;
}

function toDomain(row: TokenPriceRow): TokenPrice {
    return TokenPrice.reconstitute({
        symbol: row.symbol,
        priceUsd: Number(row.price_usd),
        change24hPct: row.change_24h_pct === null ? null : Number(row.change_24h_pct),
        source: row.source as PriceSource,
        fetchedAt: new Date(row.fetched_at),
    });
}

@injectable()
export class SupabaseTokenPriceRepository implements ITokenPriceRepository {
    constructor(
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async findBySymbol(symbol: string): Promise<TokenPrice | null> {
        const sym = symbol.toUpperCase();
        const { data, error } = await supabase
            .from('token_prices')
            .select('symbol, price_usd, change_24h_pct, source, fetched_at, updated_at')
            .eq('symbol', sym)
            .maybeSingle();
        if (error) {
            logger.error('Failed to load token price', { symbol: sym, error: error.message });
            throw new Error('Failed to load token price');
        }
        return data ? toDomain(data as TokenPriceRow) : null;
    }

    async findAll(): Promise<TokenPrice[]> {
        const { data, error } = await supabase
            .from('token_prices')
            .select('symbol, price_usd, change_24h_pct, source, fetched_at, updated_at')
            .order('symbol', { ascending: true });
        if (error) {
            logger.error('Failed to load all token prices', { error: error.message });
            throw new Error('Failed to load token prices');
        }
        return ((data ?? []) as TokenPriceRow[]).map(toDomain);
    }

    async findManyBySymbols(
        symbols: ReadonlyArray<string>,
    ): Promise<ReadonlyMap<string, TokenPrice>> {
        const result = new Map<string, TokenPrice>();
        if (symbols.length === 0) return result;
        const upper = Array.from(new Set(symbols.map((s) => s.toUpperCase())));
        const { data, error } = await supabase
            .from('token_prices')
            .select('symbol, price_usd, change_24h_pct, source, fetched_at, updated_at')
            .in('symbol', upper);
        if (error) {
            logger.error('Failed to batch-load token prices', { count: upper.length, error: error.message });
            throw new Error('Failed to batch-load token prices');
        }
        for (const row of (data ?? []) as TokenPriceRow[]) {
            const price = toDomain(row);
            result.set(price.symbol, price);
        }
        return result;
    }

    async upsertMany(prices: ReadonlyArray<TokenPrice>): Promise<void> {
        if (prices.length === 0) return;
        const now = this.clock.now().toISOString();
        const rows = prices.map((p) => ({
            symbol: p.symbol,
            price_usd: p.priceUsd,
            change_24h_pct: p.change24hPct,
            source: p.source,
            fetched_at: p.fetchedAt.toISOString(),
            updated_at: now,
        }));
        const { error } = await supabase
            .from('token_prices')
            .upsert(rows, { onConflict: 'symbol' });
        if (error) {
            logger.error('Failed to upsert token prices', {
                count: rows.length,
                error: error.message,
            });
            throw new Error('Failed to upsert token prices');
        }
    }
}
