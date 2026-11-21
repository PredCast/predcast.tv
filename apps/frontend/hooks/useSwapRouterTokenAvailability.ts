'use client';

import { useMemo } from 'react';
import type { Address, ContractFunctionParameters } from 'viem';
import { useReadContracts } from 'wagmi';

import { chilizConfig } from '@/config/chiliz.config';

// Minimal slices — the full generated ABI trips wagmi's TS depth limits in
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

const DECIMALS_ABI = [
    {
        type: 'function',
        stateMutability: 'view',
        name: 'decimals',
        inputs: [],
        outputs: [{ name: '', type: 'uint8' }],
    },
] as const;

export type TokenRouteStatus = 'checking' | 'available' | 'unavailable';

export interface SwapRouterTokenAvailability {
    /** Route status for an ERC20 stake candidate; pass WCHZ for the native CHZ option. */
    statusOf: (tokenAddress: string) => TokenRouteStatus;
}

/**
 * A swappable stake currency is usable only when `NetworkRouter.quoteTokenToUSDC`
 * prices one whole token above 0 — the route the swap will execute, fan-token wrap
 * included. The router quotes 0 for an unpriced route, and a 1-raw-unit probe of an
 * 18-dp token rounds to 0, hence the decimals read first.
 */
export function useSwapRouterTokenAvailability(): SwapRouterTokenAvailability {
    const candidates = useMemo<Address[]>(
        () => [
            chilizConfig.wrappedNativeToken,
            ...chilizConfig.tokens.filter((t) => !!t.tokenAddress).map((t) => t.tokenAddress as Address),
        ],
        [],
    );

    const decimalsCalls = useMemo<ContractFunctionParameters[]>(
        () =>
            candidates.map((token) => ({
                address: token,
                abi: DECIMALS_ABI,
                functionName: 'decimals',
                chainId: chilizConfig.chainId,
            })),
        [candidates],
    );
    const { data: decimalsReads } = useReadContracts({ contracts: decimalsCalls, query: { staleTime: Infinity } });

    const quoteCalls = useMemo<ContractFunctionParameters[]>(
        () =>
            candidates.map((token, i) => {
                const read = decimalsReads?.[i];
                const decimals = read?.status === 'success' ? Number(read.result) : 0;
                return {
                    address: chilizConfig.networkRouter,
                    abi: QUOTE_ABI,
                    functionName: 'quoteTokenToUSDC',
                    args: [token, BigInt(10) ** BigInt(decimals)],
                    chainId: chilizConfig.chainId,
                };
            }),
        [candidates, decimalsReads],
    );
    const { data: reads } = useReadContracts({
        contracts: quoteCalls,
        query: { enabled: !!decimalsReads, staleTime: 300_000 },
    });

    return useMemo<SwapRouterTokenAvailability>(() => {
        const byAddress = new Map<string, TokenRouteStatus>();
        candidates.forEach((candidate, i) => {
            const read = reads?.[i];
            const priced = read?.status === 'success' && typeof read.result === 'bigint' && read.result > BigInt(0);
            const status: TokenRouteStatus = !read ? 'checking' : priced ? 'available' : 'unavailable';
            byAddress.set(candidate.toLowerCase(), status);
        });
        return { statusOf: (addr) => byAddress.get(addr.toLowerCase()) ?? 'unavailable' };
    }, [candidates, reads]);
}
