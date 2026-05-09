import type { PublicClient } from 'viem';
import { erc20Abi } from 'viem';

/**
 * Cache `decimals()` reads per chain+token. Decimals are immutable on
 * deployed ERC20s, so a hit is permanently safe to reuse — no TTL needed.
 *
 * Avoids the prior bug of hardcoding `1e18` everywhere: USDC on Spicy is 6 dp,
 * fan tokens are 18 dp, and the future may bring 24 dp on some new token.
 */
const cache = new Map<string, number>();

function key(chainId: number, tokenAddress: string): string {
    return `${chainId}:${tokenAddress.toLowerCase()}`;
}

export async function getTokenDecimals(
    client: PublicClient,
    tokenAddress: `0x${string}`,
): Promise<number> {
    const chainId = client.chain?.id ?? 0;
    const k = key(chainId, tokenAddress);
    const cached = cache.get(k);
    if (cached !== undefined) return cached;

    const decimals = (await client.readContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'decimals',
    })) as number;

    cache.set(k, decimals);
    return decimals;
}

/**
 * Test/debug helper: clear the cache so a unit test can simulate a fresh
 * environment. Not used at runtime.
 */
export function __clearTokenDecimalsCache(): void {
    cache.clear();
}
