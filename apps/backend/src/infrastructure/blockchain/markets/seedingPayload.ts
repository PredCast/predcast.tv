import { keccak256, toBytes } from 'viem';
import { DEFAULT_FOOTBALL_MARKETS } from '@chiliztv/domain/markets/DefaultMarkets';

/**
 * Domain-level market type names → 32-byte hashes consumed by the
 * PariMatchBase Solidity constants (e.g. `MARKET_WINNER =
 * keccak256("WINNER")`). The names cross the domain boundary as strings —
 * this helper lives in infrastructure because it depends on viem.
 */
export function hashMarketTypeName(name: string): `0x${string}` {
    return keccak256(toBytes(name));
}

/**
 * Pre-derived seeding payload — computed once at import time so the two
 * adapter call-sites (PariMatchDeploymentAdapter + ViemBlockchainService)
 * consume the exact same arrays.
 *
 *   - `hashes[i]`     → bytes32 market type for marketId i
 *   - `lines[i]`      → encoded line / variant for marketId i
 *   - `marketIds[i]`  → bigint(i), pre-cast for openMarketsBatch
 *
 * Length is invariant on `DEFAULT_FOOTBALL_MARKETS.length` (= 8).
 */
export const FOOTBALL_SEEDING_PAYLOAD = {
    hashes: DEFAULT_FOOTBALL_MARKETS.map(s => hashMarketTypeName(s.marketTypeName)),
    lines: DEFAULT_FOOTBALL_MARKETS.map(s => s.line),
    marketIds: DEFAULT_FOOTBALL_MARKETS.map(s => BigInt(s.marketId)),
} as const;
