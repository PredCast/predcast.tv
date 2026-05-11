/** On-chain bet shape served by `GET /bets`, with the embedded `match` join. */

import {
    fmtSelectionByMarket,
    MARKET_TYPE_HASHES,
    isHiddenMarket as isHiddenMarketByHash,
} from '@/lib/contracts/markets';

export type BetStatus = 'PENDING' | 'WON' | 'LOST' | 'REFUNDED';

export interface MyBet {
    readonly txHash: `0x${string}`;
    readonly logIndex: number;
    readonly contractAddress: `0x${string}`;
    readonly marketId: string;
    readonly betIndex: string;
    readonly userAddress: string;
    readonly selection: string;
    readonly netStake: string;
    readonly grossStake: string | null;
    readonly oddsX10000: number;
    readonly oddsIndex: number | null;
    readonly status: BetStatus;
    readonly payout: string | null;
    readonly refundAmount: string | null;
    readonly blockNumber: string;
    readonly blockTimestamp: string;
    readonly placedAt: string;
    readonly resolvedAt: string | null;
    readonly claimedAt: string | null;
    readonly refundedAt: string | null;
    /** Lot 5 — short-name string from MarketCreated payload ("WINNER", "GOALS_TOTAL"…). */
    readonly marketType: string | null;
    /** Lot 5 — int16 line from FootballMarket (tenths of goal — 25 = 2.5). */
    readonly line: number | null;
    readonly match: {
        readonly apiFootballId: number;
        readonly homeTeamName: string;
        readonly awayTeamName: string;
        readonly leagueName: string | null;
        readonly matchDate: string;
    } | null;
}

/** Map a short-name market type ("WINNER") to its bytes32 hash for catalog lookup. */
function marketTypeHashFor(marketType: string | null | undefined): string | null {
    if (!marketType) return null;
    const key = marketType as keyof typeof MARKET_TYPE_HASHES;
    return MARKET_TYPE_HASHES[key] ?? null;
}

/** True for bets posted on a market the front silently filters (CORRECT_SCORE today). */
export function isBetOnHiddenMarket(bet: Pick<MyBet, 'marketType'>): boolean {
    const hash = marketTypeHashFor(bet.marketType);
    return isHiddenMarketByHash(hash ?? undefined);
}

/** Filter chips — `claimable` / `refundable` are derived (status + null timestamp). */
export type BetFilter = 'all' | 'pending' | 'won' | 'lost' | 'refunded' | 'claimable' | 'refundable';

export interface BetCounts {
    readonly all: number;
    readonly pending: number;
    readonly won: number;
    readonly lost: number;
    readonly refunded: number;
    readonly claimable: number;
    readonly refundable: number;
}

export interface MyBetsResponse {
    readonly success: boolean;
    readonly bets: ReadonlyArray<MyBet>;
    /** Total rows matching the active filter — independent of limit/offset. */
    readonly total: number;
    /** Counts per `BetFilter` bucket — feeds the tab badges. */
    readonly statusCounts: BetCounts;
    readonly limit: number;
    readonly offset: number;
    readonly timestamp: number;
}

/** WON bet whose payout hasn't been collected (server-only check). */
export function isClaimable(bet: MyBet): boolean {
    return bet.status === 'WON' && bet.claimedAt === null;
}

/** REFUNDED bet whose stake hasn't been pulled back (server-only check). */
export function isRefundable(bet: MyBet): boolean {
    return bet.status === 'REFUNDED' && bet.refundedAt === null;
}

/**
 * Lightweight overlay shape passed to UI helpers — typically the snapshot
 * from the locally-claimed pub/sub store. We keep this domain layer free
 * of React APIs by accepting a plain `Map`-shaped object.
 */
export interface ClaimOverlay {
    has(key: string): boolean;
    get(key: string): { kind: 'claimed' | 'refunded' } | undefined;
}

/** Build the overlay key for a bet — must match the store's `localClaimKey`. */
export function betOverlayKey(bet: Pick<MyBet, 'contractAddress' | 'marketId' | 'betIndex'>): string {
    return `${bet.contractAddress.toLowerCase()}:${String(bet.marketId)}:${String(bet.betIndex)}`;
}

/** True when the user has just claimed/refunded this bet (overlay says so). */
export function isLocallyClaimed(bet: MyBet, overlay: ClaimOverlay | undefined): boolean {
    if (!overlay) return false;
    return overlay.has(betOverlayKey(bet));
}

/** Overlay-aware claimable check — flips to false the instant we stamp it. */
export function isClaimableNow(bet: MyBet, overlay: ClaimOverlay | undefined): boolean {
    return isClaimable(bet) && !isLocallyClaimed(bet, overlay);
}

/** Overlay-aware refundable check — flips to false the instant we stamp it. */
export function isRefundableNow(bet: MyBet, overlay: ClaimOverlay | undefined): boolean {
    return isRefundable(bet) && !isLocallyClaimed(bet, overlay);
}

export function decodeOdds(oddsX10000: number): number {
    return oddsX10000 / 10_000;
}

export function fmtOdds(oddsX10000: number): string {
    return `×${decodeOdds(oddsX10000).toFixed(2)}`;
}

/**
 * Selection label. When `marketType` is known (Lot 5 enrichment), defer to
 * the football catalog for accurate per-market labels (Over 2.5 goals,
 * Both score: Yes, etc.). Falls back to legacy 0/1/2 → Home/Draw/Away when
 * the API didn't populate marketType (predates the indexer enrichment).
 */
export function fmtSelection(
    selection: string,
    homeTeamName?: string | null,
    awayTeamName?: string | null,
    marketType?: string | null,
    line?: number | null,
): string {
    const hash = marketTypeHashFor(marketType);
    if (hash) {
        return fmtSelectionByMarket(
            Number(selection),
            hash,
            line ?? 0,
            homeTeamName ?? undefined,
            awayTeamName ?? undefined,
        );
    }
    switch (selection) {
        case '0':
            return homeTeamName ? `${homeTeamName} (Home)` : 'Home';
        case '1':
            return 'Draw';
        case '2':
            return awayTeamName ? `${awayTeamName} (Away)` : 'Away';
        default:
            return `Selection #${selection}`;
    }
}

/** Format a raw USDC integer using `decimals`. */
export function fmtStake(rawAmount: string, decimals: number | undefined, fractionDigits = 2): string {
    if (decimals === undefined) return '—';
    const value = Number(rawAmount) / 10 ** decimals;
    return value.toLocaleString('en-US', {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
    });
}

/**
 * Client-side bet counts for fully-loaded slices (e.g. `MyBetsOnMatch` —
 * one match's bets fit in a single fetch). For the paginated My Bets feed,
 * use `statusCounts` returned by the `/bets` endpoint instead — the page
 * doesn't have the global view.
 */
export function computeBetCounts(
    bets: ReadonlyArray<MyBet>,
    overlay?: ClaimOverlay,
): BetCounts {
    return {
        all:        bets.length,
        pending:    bets.filter((b) => b.status === 'PENDING').length,
        won:        bets.filter((b) => b.status === 'WON').length,
        lost:       bets.filter((b) => b.status === 'LOST').length,
        refunded:   bets.filter((b) => b.status === 'REFUNDED').length,
        claimable:  bets.filter((b) => isClaimableNow(b, overlay)).length,
        refundable: bets.filter((b) => isRefundableNow(b, overlay)).length,
    };
}

/**
 * Sum of unclaimed payouts (feeds ClaimAllBanner). Excludes bets the user
 * has already locally-claimed so the banner total ticks down immediately.
 * Falls back to `stake × odds` when `payout` is null — the Payout event only
 * fires at claim time, but a WON bet's expected payout is deterministic from
 * `netStake × oddsX10000` (mirror of BetRow's "$0.28 Won" display).
 */
export function sumClaimablePayouts(
    bets: ReadonlyArray<MyBet>,
    decimals: number | undefined,
    overlay?: ClaimOverlay,
): number {
    if (decimals === undefined) return 0;
    return bets
        .filter((b) => isClaimableNow(b, overlay))
        .reduce((acc, b) => {
            if (b.payout) return acc + Number(b.payout) / 10 ** decimals;
            const stake = Number(b.netStake) / 10 ** decimals;
            return acc + stake * (b.oddsX10000 / 10_000);
        }, 0);
}
