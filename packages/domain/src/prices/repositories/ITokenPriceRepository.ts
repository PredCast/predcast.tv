import { TokenPrice } from '../entities/TokenPrice';

export interface ITokenPriceRepository {
    findBySymbol(symbol: string): Promise<TokenPrice | null>;
    findAll(): Promise<TokenPrice[]>;
    findManyBySymbols(symbols: ReadonlyArray<string>): Promise<ReadonlyMap<string, TokenPrice>>;
    /** Batch upsert in one round-trip, `ON CONFLICT (symbol) DO UPDATE`. */
    upsertMany(prices: ReadonlyArray<TokenPrice>): Promise<void>;
}
