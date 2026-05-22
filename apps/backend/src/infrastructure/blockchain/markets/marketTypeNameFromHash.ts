import { keccak256, toBytes } from 'viem';

const MARKET_TYPE_NAMES = [
    'WINNER',
    'GOALS_TOTAL',
    'BOTH_SCORE',
    'HALFTIME',
    'FIRST_SCORER',
    'CORRECT_SCORE',
    'GOALS_EXACT',
    'TOTAL_POINTS',
    'SPREAD',
    'QUARTER_WINNER',
    'FIRST_TO_SCORE',
    'HIGHEST_QUARTER',
    'POINTS_EXACT',
] as const;

const HASH_TO_NAME: ReadonlyMap<string, string> = new Map(
    MARKET_TYPE_NAMES.map((name) => [keccak256(toBytes(name)).toLowerCase(), name]),
);

// PariMatchBase emits `MarketCreated(bytes32 indexed marketType, ...)` — viem
// decodes that as a `0x…` hex string. Persisted as-is the dashboard can't map
// it back to a label; this reverse-lookup gives the friendly name expected by
// MARKET_TYPE_HASHES on the front + selectionToBetLabel on the back.
export function marketTypeNameFromHash(hashHex: string): string | null {
    return HASH_TO_NAME.get(hashHex.toLowerCase()) ?? null;
}

/** True when the value is a 32-byte hex hash (and therefore needs reverse-lookup). */
export function looksLikeMarketTypeHash(value: string): boolean {
    return /^0x[0-9a-fA-F]{64}$/.test(value);
}
