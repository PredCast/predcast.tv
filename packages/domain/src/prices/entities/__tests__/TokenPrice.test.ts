import { describe, expect, it } from 'vitest';
import { TokenPrice } from '../TokenPrice';

const NOW = new Date('2026-05-11T12:00:00Z');

describe('TokenPrice', () => {
    it('uppercases the symbol on create', () => {
        const p = TokenPrice.create({ symbol: 'psg', priceUsd: 2.5, change24hPct: 1.2, source: 'coingecko', fetchedAt: NOW });
        expect(p.symbol).toBe('PSG');
    });

    it('rejects empty symbol', () => {
        expect(() => TokenPrice.create({ symbol: '', priceUsd: 1, change24hPct: null, source: 'coingecko', fetchedAt: NOW })).toThrow();
    });

    it('rejects negative price', () => {
        expect(() => TokenPrice.create({ symbol: 'PSG', priceUsd: -1, change24hPct: null, source: 'coingecko', fetchedAt: NOW })).toThrow();
    });

    it('rejects non-finite price', () => {
        expect(() => TokenPrice.create({ symbol: 'PSG', priceUsd: Infinity, change24hPct: null, source: 'coingecko', fetchedAt: NOW })).toThrow();
    });

    it('toJSON round-trip preserves all fields', () => {
        const p = TokenPrice.create({ symbol: 'CHZ', priceUsd: 0.085, change24hPct: -3.4, source: 'pyth', fetchedAt: NOW });
        const json = p.toJSON();
        expect(json).toEqual({ symbol: 'CHZ', priceUsd: 0.085, change24hPct: -3.4, source: 'pyth', fetchedAt: NOW });
    });

    it('reconstitute accepts null change24hPct', () => {
        const p = TokenPrice.reconstitute({ symbol: 'PSG', priceUsd: 2, change24hPct: null, source: 'coingecko', fetchedAt: NOW });
        expect(p.change24hPct).toBeNull();
    });
});
