import { describe, expect, it } from 'vitest';
import { gasReserveWei, presetAmountRaw, toInputAmount } from '../stakePresets';

const ONE_CHZ = 10n ** 18n;

describe('presetAmountRaw', () => {
    it('takes a percentage of a 6-dp USDC balance', () => {
        expect(presetAmountRaw(12_345_678n, 25)).toBe(3_086_419n);
        expect(presetAmountRaw(12_345_678n, 50)).toBe(6_172_839n);
        expect(presetAmountRaw(12_345_678n, 100)).toBe(12_345_678n);
    });

    it('works on 0-decimal fan tokens (CAP-20)', () => {
        expect(presetAmountRaw(7n, 50)).toBe(3n);
        expect(presetAmountRaw(7n, 100)).toBe(7n);
    });

    it('keeps the reserve aside before applying the percentage', () => {
        expect(presetAmountRaw(10n * ONE_CHZ, 100, ONE_CHZ)).toBe(9n * ONE_CHZ);
        expect(presetAmountRaw(10n * ONE_CHZ, 50, 2n * ONE_CHZ)).toBe(4n * ONE_CHZ);
    });

    it('returns 0 when the reserve eats the whole balance', () => {
        expect(presetAmountRaw(ONE_CHZ / 2n, 100, ONE_CHZ)).toBe(0n);
        expect(presetAmountRaw(0n, 25)).toBe(0n);
    });
});

describe('toInputAmount', () => {
    it('formats with the token decimals and trims trailing zeros', () => {
        expect(toInputAmount(12_500_000n, 6)).toBe('12.5');
        expect(toInputAmount(3n * ONE_CHZ, 18)).toBe('3');
    });

    it('truncates (never rounds up) beyond maxFractionDigits', () => {
        expect(toInputAmount(1_999_999_999_999_999_999n, 18)).toBe('1.999999');
        expect(toInputAmount(1_234_567n, 6, 2)).toBe('1.23');
    });

    it('handles 0-decimal tokens and empty amounts', () => {
        expect(toInputAmount(42n, 0)).toBe('42');
        expect(toInputAmount(0n, 6)).toBe('0');
    });

    it('pads small fractions with leading zeros', () => {
        expect(toInputAmount(10_000n, 6)).toBe('0.01');
    });
});

describe('gasReserveWei', () => {
    const floor = ONE_CHZ;

    it('applies the margin to estimate × gas price', () => {
        // 300k gas × 5_000 gwei × 1.5 = 2.25 CHZ
        expect(gasReserveWei(300_000n, 5_000n * 10n ** 9n, 15_000, floor)).toBe(2_250_000_000_000_000_000n);
    });

    it('never goes below the floor', () => {
        expect(gasReserveWei(21_000n, 10n ** 9n, 15_000, floor)).toBe(floor);
    });

    it('falls back to the floor when the estimate is unavailable', () => {
        expect(gasReserveWei(undefined, 10n ** 9n, 15_000, floor)).toBe(floor);
        expect(gasReserveWei(300_000n, undefined, 15_000, floor)).toBe(floor);
    });
});
