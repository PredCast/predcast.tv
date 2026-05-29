import { describe, expect, it } from 'vitest';
import { sortMarketsByManifest } from '../sortMarketsByManifest';

interface FakeMarket {
    marketId: number | bigint | string;
    name: string;
}

describe('sortMarketsByManifest', () => {
    it('orders 8 manifest markets by canonical marketId', () => {
        const shuffled: FakeMarket[] = [
            { marketId: 5, name: 'dc-1x' },
            { marketId: 0, name: 'winner' },
            { marketId: 7, name: 'dc-2x' },
            { marketId: 3, name: 'goals-25' },
            { marketId: 1, name: 'halftime' },
            { marketId: 6, name: 'dc-12' },
            { marketId: 4, name: 'btts' },
            { marketId: 2, name: 'goals-15' },
        ];
        const sorted = sortMarketsByManifest(shuffled);
        expect(sorted.map(m => Number(m.marketId))).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
        expect(sorted.map(m => m.name)).toEqual([
            'winner', 'halftime', 'goals-15', 'goals-25', 'btts', 'dc-1x', 'dc-12', 'dc-2x',
        ]);
    });

    it('does not mutate the input array', () => {
        const input: FakeMarket[] = [
            { marketId: 5, name: 'dc-1x' },
            { marketId: 0, name: 'winner' },
        ];
        const snapshot = [...input];
        sortMarketsByManifest(input);
        expect(input).toEqual(snapshot);
    });

    it('places unknown marketIds (legacy) at the end without throwing', () => {
        const withLegacy: FakeMarket[] = [
            { marketId: 99, name: 'legacy-first-scorer' },
            { marketId: 1, name: 'halftime' },
            { marketId: 100, name: 'legacy-correct-score' },
            { marketId: 0, name: 'winner' },
        ];
        const sorted = sortMarketsByManifest(withLegacy);
        expect(sorted.slice(0, 2).map(m => m.name)).toEqual(['winner', 'halftime']);
        expect(sorted.slice(2).map(m => Number(m.marketId)).sort((a, b) => a - b)).toEqual([99, 100]);
    });

    it('accepts bigint marketIds', () => {
        const input = [
            { marketId: BigInt(7), name: 'dc-2x' },
            { marketId: BigInt(0), name: 'winner' },
        ];
        const sorted = sortMarketsByManifest(input);
        expect(sorted.map(m => m.name)).toEqual(['winner', 'dc-2x']);
    });

    it('accepts string marketIds (JSON wire format)', () => {
        const input = [
            { marketId: '7', name: 'dc-2x' },
            { marketId: '0', name: 'winner' },
        ];
        const sorted = sortMarketsByManifest(input);
        expect(sorted.map(m => m.name)).toEqual(['winner', 'dc-2x']);
    });

    it('returns empty array unchanged', () => {
        expect(sortMarketsByManifest([])).toEqual([]);
    });
});
