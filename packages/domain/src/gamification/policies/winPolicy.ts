import { QUALIFYING_STAKE_USDC } from '../catalog/constants';
import { LEGAL_SWITCHES, type LegalSwitches } from '../catalog/legalSwitches';
import { SOURCE_RULES } from '../catalog/sources';
import { isQualifyingStake } from './volumeCredit';

/** One `bets` row of the account on the market, any wallet linked at bet time. */
export interface WalletStake {
    readonly wallet: string;
    readonly outcome: number;
    readonly stakeRaw: bigint;
}

/** From the `MarketResolved` payload plus the market pool, in the pool token's raw units. */
export interface MarketResolution {
    readonly result: number;
    /** Σ stakes of every player on `result`. */
    readonly winningPoolRaw: bigint;
    readonly resolvedNetPoolRaw: bigint;
    readonly decimals: number;
}

export type MarketWinOutcome =
    | { readonly won: true }
    | { readonly won: false; readonly reason: 'no_qualifying_stake_on_winner' | 'not_profitable' };

/**
 * Market won by the account (§3.3 `bet_won`): ≥ 5 USDC of qualifying stakes on the result AND
 * Σ wallet payouts > Σ all stakes, sub-5 USDC rows included so a small hedge cannot turn a loss
 * into a win. Mirrors the contract's `payout > totalStake` profit rule, applied per account.
 */
export function isMarketWon(accountBets: ReadonlyArray<WalletStake>, resolution: MarketResolution): MarketWinOutcome {
    const { result, winningPoolRaw, resolvedNetPoolRaw, decimals } = resolution;
    const zero = BigInt(0);

    const qualifyingOnWinner = accountBets
        .filter((b) => b.outcome === result && isQualifyingStake(b.stakeRaw, decimals))
        .reduce((sum, b) => sum + b.stakeRaw, zero);
    if (qualifyingOnWinner < BigInt(QUALIFYING_STAKE_USDC) * BigInt(10) ** BigInt(decimals)) {
        return { won: false, reason: 'no_qualifying_stake_on_winner' };
    }

    const winningStakeByWallet = new Map<string, bigint>();
    for (const bet of accountBets) {
        if (bet.outcome !== result) continue;
        const wallet = bet.wallet.toLowerCase();
        winningStakeByWallet.set(wallet, (winningStakeByWallet.get(wallet) ?? zero) + bet.stakeRaw);
    }
    let payout = zero;
    if (winningPoolRaw > zero) {
        for (const stake of winningStakeByWallet.values()) payout += (stake * resolvedNetPoolRaw) / winningPoolRaw;
    }
    const totalStake = accountBets.reduce((sum, b) => sum + b.stakeRaw, zero);

    return payout > totalStake ? { won: true } : { won: false, reason: 'not_profitable' };
}

/** XP of a won market after the legal switch: cosmetic-only and disabled modes credit nothing. */
export function betWonXp(switches: LegalSwitches = LEGAL_SWITCHES): number {
    return switches.betWon === 'xp' ? (SOURCE_RULES.bet_won.xp ?? 0) : 0;
}
