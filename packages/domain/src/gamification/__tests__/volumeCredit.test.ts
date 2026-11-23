import { describe, expect, it } from 'vitest';

import { LEGAL_SWITCHES } from '../catalog/legalSwitches';
import { computeCreditedXp } from '../policies/doubleXpPolicy';
import { countedVolume, isQualifyingStake, volumeDelta, type ChainBet } from '../policies/volumeCredit';

const HOME = 0;
const DRAW = 1;
const AWAY = 2;

/** USDC amount → raw units, as a decimal string to avoid float error. */
function raw(usdc: string, decimals = 6): bigint {
    const [whole, fraction = ''] = usdc.split('.');
    return BigInt(whole + fraction.padEnd(decimals, '0').slice(0, decimals));
}

let block = 100;
function bet(outcome: number, usdc: string, decimals = 6, at?: { block: number; log?: number }): ChainBet {
    block += 1;
    return { outcome, stakeRaw: raw(usdc, decimals), decimals, blockNumber: at?.block ?? block, logIndex: at?.log ?? 0 };
}

/** Credits each bet in chain order, as the processor does. */
function creditAll(bets: ReadonlyArray<ChainBet>, switches = LEGAL_SWITCHES) {
    return bets.map((b) => volumeDelta(bets, b, switches));
}

describe('qualifying stake (§3.7, CA6)', () => {
    it('4.99 USDC creates nothing, 5.00 USDC earns 5 XP', () => {
        const small = bet(HOME, '4.99');
        expect(volumeDelta([small], small)).toEqual({ qualifying: false });
        const five = bet(HOME, '5');
        expect(volumeDelta([five], five)).toEqual({ qualifying: true, deltaUsdc: 5, requestedXp: 5, reason: null });
    });

    it('compares with the token decimals, 6 and 18', () => {
        expect(isQualifyingStake(raw('5', 6), 6)).toBe(true);
        expect(isQualifyingStake(raw('4.999999', 6), 6)).toBe(false);
        expect(isQualifyingStake(raw('5', 18), 18)).toBe(true);
        expect(isQualifyingStake(raw('4.999999999999999999', 18), 18)).toBe(false);
    });
});

describe('hedging (§3.9, CA7)', () => {
    it('30 Home then 30 Away → 30 XP, second row at 0 with reason hedge', () => {
        const credits = creditAll([bet(HOME, '30'), bet(AWAY, '30')]);
        expect(credits).toEqual([
            { qualifying: true, deltaUsdc: 30, requestedXp: 30, reason: null },
            { qualifying: true, deltaUsdc: 0, requestedXp: 0, reason: 'hedge' },
        ]);
    });

    it('30 Home then 50 Away → 50 XP (30 + 20)', () => {
        const credits = creditAll([bet(HOME, '30'), bet(AWAY, '50')]);
        expect(credits.map((c) => (c.qualifying ? c.requestedXp : null))).toEqual([30, 20]);
    });

    it('1X2 covered 3 × 500 → 500 XP', () => {
        const credits = creditAll([bet(HOME, '500'), bet(DRAW, '500'), bet(AWAY, '500')]);
        expect(credits.map((c) => (c.qualifying ? c.requestedXp : null))).toEqual([500, 0, 0]);
    });

    it('ignores sub-5 rows in the counted volume', () => {
        const bets = [bet(HOME, '30'), bet(AWAY, '4'), bet(AWAY, '4'), bet(AWAY, '27')];
        expect(countedVolume(bets)).toBe(30);
    });

    it('floors whole USDC on the running counted volume', () => {
        const credits = creditAll([bet(HOME, '5.5'), bet(HOME, '5.5'), bet(AWAY, '5.9')]);
        expect(credits.map((c) => (c.qualifying ? c.requestedXp : null))).toEqual([5, 6, 0]);
    });
});

describe('chain order', () => {
    it('credits a late row against the bets that precede it on chain', () => {
        const first = bet(HOME, '30', 6, { block: 10 });
        const late = bet(HOME, '20', 6, { block: 11 });
        const away = bet(AWAY, '50', 6, { block: 12 });
        const all = [first, away, late];
        expect(volumeDelta(all, late)).toMatchObject({ requestedXp: 20 });
        expect(volumeDelta(all, away)).toMatchObject({ requestedXp: 0, reason: 'hedge' });
        // Processed before the late row was indexed, the bounded gap is the late stake alone.
        expect(volumeDelta([first, away], away)).toMatchObject({ requestedXp: 20 });
    });

    it('orders by log index inside a block and accepts bigint blocks', () => {
        const a = { outcome: HOME, stakeRaw: raw('10'), decimals: 6, blockNumber: BigInt(9), logIndex: 4 };
        const b = { outcome: HOME, stakeRaw: raw('10'), decimals: 6, blockNumber: BigInt(9), logIndex: 2 };
        expect(volumeDelta([a, b], b)).toMatchObject({ deltaUsdc: 10 });
        expect(volumeDelta([a, b], a)).toMatchObject({ deltaUsdc: 10 });
        expect(countedVolume([a, b])).toBe(20);
    });

    it('sums 6 and 18 decimal stakes on the same outcome', () => {
        expect(countedVolume([bet(HOME, '7.5', 6), bet(HOME, '7.5', 18)])).toBe(15);
    });
});

describe('daily cap (CA8)', () => {
    it('1 200 USDC in a day → 1 000 XP, the rest at 0, full again the next day', () => {
        let used = 0;
        const day1 = [400, 400, 400].map((requestedXp) => {
            const credited = computeCreditedXp({ requestedXp, usedToday: used, dailyCap: 1000, multiplier: 1 });
            used += credited.baseXp;
            return credited;
        });
        expect(day1.map((c) => c.xp)).toEqual([400, 400, 200]);
        expect(day1[2].capped).toBe(true);
        expect(computeCreditedXp({ requestedXp: 50, usedToday: 1000, dailyCap: 1000, multiplier: 1 }))
            .toEqual({ baseXp: 0, xp: 0, capped: true });
        expect(computeCreditedXp({ requestedXp: 400, usedToday: 0, dailyCap: 1000, multiplier: 1 }).xp).toBe(400);
    });
});

describe('legal switch — bet volume', () => {
    it('per_market: fixed XP on the first qualifying bet of a market, amount ignored', () => {
        const switches = { ...LEGAL_SWITCHES, betVolume: 'per_market' as const };
        const credits = creditAll([bet(HOME, '3'), bet(HOME, '250'), bet(AWAY, '40')], switches);
        expect(credits).toEqual([
            { qualifying: false },
            { qualifying: true, deltaUsdc: 250, requestedXp: 5, reason: null },
            { qualifying: true, deltaUsdc: 0, requestedXp: 0, reason: 'repeat_market' },
        ]);
    });

    it('disabled: rows kept at 0 XP for exploration progress', () => {
        const switches = { ...LEGAL_SWITCHES, betVolume: 'disabled' as const };
        const only = bet(HOME, '30');
        expect(volumeDelta([only], only, switches))
            .toEqual({ qualifying: true, deltaUsdc: 30, requestedXp: 0, reason: 'source_disabled' });
    });
});
