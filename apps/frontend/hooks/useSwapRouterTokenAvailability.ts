'use client';

import { useMemo } from 'react';
import type { Address, ContractFunctionParameters } from 'viem';
import { useReadContracts } from 'wagmi';

import { chilizConfig } from '@/config/chiliz.config';

// Minimal slice — the full generated ABI trips wagmi's TS depth limits in
// useReadContracts (CLAUDE.md §7.3).
const QUOTE_ABI = [
    {
        type: 'function',
        stateMutability: 'view',
        name: 'quoteTokenToUSDC',
        inputs: [
            { name: 'token', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        outputs: [{ name: 'usdcOut', type: 'uint256' }],
    },
] as const;

export type TokenRouteStatus = 'checking' | 'available' | 'unavailable';

export interface SwapRouterTokenAvailability {
    /** Route status for an ERC20 stake candidate; pass WCHZ for the native CHZ option. */
    statusOf: (tokenAddress: string) => TokenRouteStatus;
}

/**
 * A swappable stake currency is usable only when `ChilizSwapRouter.quoteTokenToUSDC`
 * succeeds on a 1-unit probe — the route the swap will execute, fan-token wrap included.
 * A failing probe (no liquidity, or a router without the quote function) marks the token
 * unavailable on every network: picking it would revert at swap time.
 */
export function useSwapRouterTokenAvailability(): SwapRouterTokenAvailability {
    const candidates = useMemo<Address[]>(
        () => [
            chilizConfig.wchz,
            ...chilizConfig.tokens.filter((t) => !!t.tokenAddress).map((t) => t.tokenAddress as Address),
        ],
        [],
    );

    const contracts = useMemo<ContractFunctionParameters[]>(
        () =>
            candidates.map((token) => ({
                address: chilizConfig.chilizSwapRouter,
                abi: QUOTE_ABI,
                functionName: 'quoteTokenToUSDC',
                args: [token, BigInt(1)],
                chainId: chilizConfig.chainId,
            })),
        [candidates],
    );

    const { data: reads } = useReadContracts({ contracts, query: { staleTime: 300_000 } });

    return useMemo<SwapRouterTokenAvailability>(() => {
        const byAddress = new Map<string, TokenRouteStatus>();
        candidates.forEach((candidate, i) => {
            const read = reads?.[i];
            const status: TokenRouteStatus = !read ? 'checking' : read.status === 'success' ? 'available' : 'unavailable';
            byAddress.set(candidate.toLowerCase(), status);
        });
        return { statusOf: (addr) => byAddress.get(addr.toLowerCase()) ?? 'unavailable' };
    }, [candidates, reads]);
}
