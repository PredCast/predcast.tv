import { describe, expect, it } from 'vitest';

import { LEGAL_SWITCHES } from '../catalog/legalSwitches';
import { refKeys } from '../catalog/refKeys';
import { betWonXp, isMarketWon, type MarketResolution, type WalletStake } from '../policies/winPolicy';

const HOME = 0;
const AWAY = 2;
const usdc = (n: number): bigint => BigInt(Math.round(n * 1_000_000));

function resolution(winningPool: number, netPool: number): MarketResolution {
    return { result: HOME, winningPoolRaw: usdc(winningPool), resolvedNetPoolRaw: usdc(netPool), decimals: 6 };
}

const stake = (wallet: string, outcome: number, amount: number): WalletStake => ({
    wallet,
    outcome,
    stakeRaw: usdc(amount),
});

describe('isMarketWon', () => {
    it('wins with a qualifying winning stake and a positive net profit', () => {
        expect(isMarketWon([stake('0xa', HOME, 10)], resolution(100, 196))).toEqual({ won: true });
    });

    it('CA10 — two winning wallets of one account make one won market', () => {
        const bets = [stake('0xA', HOME, 10), stake('0xb', HOME, 6)];
        expect(isMarketWon(bets, resolution(100, 196))).toEqual({ won: true });
        // The idempotency key carries the account, not the wallet: one credit per market.
        expect(refKeys.betWon(88888, '0xc', 1, 'acc')).toBe('bet_won:88888:0xc:1:acc');
    });

    it('CA10 — a hedge proportional to the pool loses the fee and is not won', () => {
        const bets = [stake('0xa', HOME, 10), stake('0xa', AWAY, 10)];
        // Pools 100 / 100, 2 % fee → net pool 196.
        expect(isMarketWon(bets, resolution(100, 196))).toEqual({ won: false, reason: 'not_profitable' });
    });

    it('CA10 — 4 USDC on the winner plus 5 on a loser is not won', () => {
        const bets = [stake('0xa', HOME, 4), stake('0xa', AWAY, 5)];
        expect(isMarketWon(bets, resolution(10, 30))).toEqual({ won: false, reason: 'no_qualifying_stake_on_winner' });
    });

    it('sub-5 rows on the winner do not qualify even when they add up to 5', () => {
        const bets = [stake('0xa', HOME, 3), stake('0xb', HOME, 3)];
        expect(isMarketWon(bets, resolution(10, 50))).toEqual({ won: false, reason: 'no_qualifying_stake_on_winner' });
    });

    it('keeps sub-5 hedges in the net profit so they cannot turn a loss into a win', () => {
        // 5 on Home pays 9: won alone, lost once 4.5 on Away is added (total stake 9.5).
        expect(isMarketWon([stake('0xa', HOME, 5)], resolution(100, 180))).toEqual({ won: true });
        const hedged = [stake('0xa', HOME, 5), stake('0xa', AWAY, 4.5)];
        expect(isMarketWon(hedged, resolution(100, 180))).toEqual({ won: false, reason: 'not_profitable' });
    });

    it('counts a cross-wallet hedge on the account net', () => {
        const bets = [stake('0xa', HOME, 30), stake('0xb', AWAY, 30)];
        expect(isMarketWon(bets, resolution(1000, 2500))).toEqual({ won: true });
        expect(isMarketWon(bets, resolution(60, 58.8))).toEqual({ won: false, reason: 'not_profitable' });
    });

    it('floors each wallet payout like the contract', () => {
        // Each wallet is owed 5.0000005 → floored to 5.000000: payout 10 = stake 10, not a profit.
        const bets = [stake('0xa', HOME, 5), stake('0xb', HOME, 5)];
        const res: MarketResolution = {
            result: HOME,
            winningPoolRaw: BigInt(10_000_000),
            resolvedNetPoolRaw: BigInt(10_000_001),
            decimals: 6,
        };
        expect(isMarketWon(bets, res)).toEqual({ won: false, reason: 'not_profitable' });
    });
});

describe('betWonXp — legal switch', () => {
    it('credits 5 XP by default, nothing in the cosmetic-only or disabled variants', () => {
        expect(betWonXp()).toBe(5);
        expect(betWonXp({ ...LEGAL_SWITCHES, betWon: 'cosmetic_only' })).toBe(0);
        expect(betWonXp({ ...LEGAL_SWITCHES, betWon: 'disabled' })).toBe(0);
    });
});
