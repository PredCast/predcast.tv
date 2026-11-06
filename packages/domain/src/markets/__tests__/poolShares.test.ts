import { describe, expect, it } from 'vitest';
import { leadingOutcome, outcomeSharesBps, totalStaked } from '../poolShares';

describe('outcomeSharesBps', () => {
    it('splits the pool in basis points per outcome', () => {
        expect(outcomeSharesBps([30_000_000n, 10_000_000n, 60_000_000n])).toEqual([3_000, 1_000, 6_000]);
    });

    it('floors uneven shares so they never exceed 10_000 in total', () => {
        const shares = outcomeSharesBps([1n, 1n, 1n]);
        expect(shares).toEqual([3_333, 3_333, 3_333]);
        expect(shares.reduce((a, b) => a + b, 0)).toBeLessThanOrEqual(10_000);
    });

    it('returns zeros for an empty pool', () => {
        expect(outcomeSharesBps([0n, 0n])).toEqual([0, 0]);
    });

    it('handles a single funded outcome', () => {
        expect(outcomeSharesBps([0n, 5_000_000n])).toEqual([0, 10_000]);
    });

    it('keeps precision on large raw amounts (6 dp USDC, millions staked)', () => {
        expect(outcomeSharesBps([2_500_000_000_000n, 7_500_000_000_000n])).toEqual([2_500, 7_500]);
    });
});

describe('leadingOutcome', () => {
    it('returns the index with the largest stake', () => {
        expect(leadingOutcome([10n, 40n, 25n])).toBe(1);
    });

    it('keeps the lowest index on ties', () => {
        expect(leadingOutcome([40n, 40n, 1n])).toBe(0);
    });

    it('returns -1 when nothing is staked', () => {
        expect(leadingOutcome([0n, 0n, 0n])).toBe(-1);
        expect(leadingOutcome([])).toBe(-1);
    });
});

describe('totalStaked', () => {
    it('sums every market pool', () => {
        expect(totalStaked([1_000_000n, 2_500_000n, 0n])).toBe(3_500_000n);
    });

    it('is zero for no markets', () => {
        expect(totalStaked([])).toBe(0n);
    });
});
