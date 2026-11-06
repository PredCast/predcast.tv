import { describe, expect, it } from 'vitest';
import { entryShareBps, positionPayoutRaw } from '../positionPayout';

describe('positionPayoutRaw', () => {
    it('returns the whole net pool to a lone winner (2% fee)', () => {
        // 1 USDC alone on the outcome: gets 0.98 USDC back.
        expect(positionPayoutRaw(1_000_000n, 1_000_000n, 1_000_000n, 200)).toBe(980_000n);
    });

    it('splits the net pool pro-rata to the stake on the winning outcome', () => {
        // 10 USDC total, 4 USDC on the outcome, our stake 1 USDC → 1/4 of 9.8 USDC.
        expect(positionPayoutRaw(1_000_000n, 4_000_000n, 10_000_000n, 200)).toBe(2_450_000n);
    });

    it('is zero for an empty outcome pool or no stake', () => {
        expect(positionPayoutRaw(1_000_000n, 0n, 5_000_000n, 200)).toBe(0n);
        expect(positionPayoutRaw(0n, 1_000_000n, 5_000_000n, 200)).toBe(0n);
    });

    it('clamps the fee into [0, 100%]', () => {
        expect(positionPayoutRaw(1_000_000n, 1_000_000n, 1_000_000n, -50)).toBe(1_000_000n);
        expect(positionPayoutRaw(1_000_000n, 1_000_000n, 1_000_000n, 20_000)).toBe(0n);
    });
});

describe('entryShareBps', () => {
    it('gives the outcome share right after the stake', () => {
        expect(entryShareBps(3_000_000n, 12_000_000n)).toBe(2_500);
        expect(entryShareBps(1_000_000n, 1_000_000n)).toBe(10_000);
    });

    it('is null without a pool', () => {
        expect(entryShareBps(0n, 0n)).toBeNull();
    });
});
