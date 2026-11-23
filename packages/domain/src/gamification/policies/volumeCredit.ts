import { BET_VOLUME_PER_MARKET_XP, QUALIFYING_STAKE_USDC } from '../catalog/constants';
import { LEGAL_SWITCHES, type LegalSwitches } from '../catalog/legalSwitches';

/** One `bets` row (a `PositionTaken`): raw stake in the token's on-chain decimals. */
export interface StakedBet {
    readonly outcome: number;
    readonly stakeRaw: bigint;
    /** Read on-chain or from cache (`getTokenDecimals`), never hard-coded. */
    readonly decimals: number;
}

export interface ChainBet extends StakedBet {
    readonly blockNumber: bigint | number;
    readonly logIndex: number;
}

/** Common scale for summing stakes of different decimals (6 and 18 in practice). */
const SCALE_DECIMALS = 18;
const SCALE_UNIT = BigInt(10) ** BigInt(SCALE_DECIMALS);

function toScaled(stakeRaw: bigint, decimals: number): bigint {
    if (decimals <= SCALE_DECIMALS) return stakeRaw * BigInt(10) ** BigInt(SCALE_DECIMALS - decimals);
    return stakeRaw / BigInt(10) ** BigInt(decimals - SCALE_DECIMALS);
}

/** Per-row rule (§3.7): stake ≥ 5 USDC. */
export function isQualifyingStake(stakeRaw: bigint, decimals: number): boolean {
    return stakeRaw >= BigInt(QUALIFYING_STAKE_USDC) * BigInt(10) ** BigInt(decimals);
}

/** Orders by (block_number, log_index). */
export function compareChainOrder(a: ChainBet, b: ChainBet): number {
    const blockA = BigInt(a.blockNumber);
    const blockB = BigInt(b.blockNumber);
    if (blockA !== blockB) return blockA < blockB ? -1 : 1;
    return a.logIndex - b.logIndex;
}

/** Largest qualifying sum on a single outcome, scaled to 18 decimals (§3.9). */
function countedScaled(bets: ReadonlyArray<StakedBet>): bigint {
    const byOutcome = new Map<number, bigint>();
    for (const bet of bets) {
        if (!isQualifyingStake(bet.stakeRaw, bet.decimals)) continue;
        byOutcome.set(bet.outcome, (byOutcome.get(bet.outcome) ?? BigInt(0)) + toScaled(bet.stakeRaw, bet.decimals));
    }
    let max = BigInt(0);
    for (const sum of byOutcome.values()) if (sum > max) max = sum;
    return max;
}

/** Counted volume of one account on one market, in whole USDC (floor). */
export function countedVolume(bets: ReadonlyArray<StakedBet>): number {
    return Number(countedScaled(bets) / SCALE_UNIT);
}

export type VolumeCredit =
    | { readonly qualifying: false }
    | {
          readonly qualifying: true;
          /** Progress `bet_volume_usdc` delta, whatever the mode. */
          readonly deltaUsdc: number;
          /** XP requested before the daily cap; the row is written even at 0. */
          readonly requestedXp: number;
          readonly reason: 'hedge' | 'repeat_market' | 'source_disabled' | null;
      };

/**
 * Volume credit of `target`, computed in chain order against the account's earlier bets on the
 * same market — late rows get the same result as in-order processing (§3.3 `bet_volume`).
 */
export function volumeDelta(
    accountMarketBets: ReadonlyArray<ChainBet>,
    target: ChainBet,
    switches: LegalSwitches = LEGAL_SWITCHES,
): VolumeCredit {
    if (!isQualifyingStake(target.stakeRaw, target.decimals)) return { qualifying: false };
    const before = accountMarketBets.filter((b) => compareChainOrder(b, target) < 0);
    const deltaUsdc = countedVolume([...before, target]) - countedVolume(before);

    switch (switches.betVolume) {
        case 'disabled':
            return { qualifying: true, deltaUsdc, requestedXp: 0, reason: 'source_disabled' };
        case 'per_market': {
            const firstOnMarket = !before.some((b) => isQualifyingStake(b.stakeRaw, b.decimals));
            return firstOnMarket
                ? { qualifying: true, deltaUsdc, requestedXp: BET_VOLUME_PER_MARKET_XP, reason: null }
                : { qualifying: true, deltaUsdc, requestedXp: 0, reason: 'repeat_market' };
        }
        case 'volume':
            return { qualifying: true, deltaUsdc, requestedXp: deltaUsdc, reason: deltaUsdc === 0 ? 'hedge' : null };
    }
}
