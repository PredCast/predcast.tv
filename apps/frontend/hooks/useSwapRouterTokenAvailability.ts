'use client';

import { useMemo } from 'react';
import type { Address, ContractFunctionParameters } from 'viem';
import { useReadContracts } from 'wagmi';

import { chilizConfig, networkType } from '@/config/chiliz.config';

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

export interface SwapRouterTokenAvailability {
    /** True once the probe set is known (always true on testnet — no filtering). */
    ready: boolean;
    /** Router can quote WCHZ→USDC — gates the native CHZ option. */
    chzAvailable: boolean;
    /** Router can route an ERC20 stake candidate to USDC (wrap included). */
    isAvailable: (tokenAddress: string) => boolean;
}

/**
 * Mainnet-only guard for the stake-currency picker: a token is offered only
 * when `ChilizSwapRouter.quoteTokenToUSDC` succeeds on a 1-unit probe — the
 * same route the swap will execute, fan-token wrapping included. A token the
 * router can't route reverts at swap time and burns the user's gas. Testnet
 * is exempt (mock tokens, pairs curated by hand).
 */
export function useSwapRouterTokenAvailability(): SwapRouterTokenAvailability {
    const filtering = networkType === 'mainnet';

    const candidates = useMemo<Address[]>(
        () => [
            chilizConfig.wchz,
            ...chilizConfig.tokens
                .filter((t) => !!t.tokenAddress)
                .map((t) => t.tokenAddress as Address),
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

    const { data: reads } = useReadContracts({
        contracts,
        query: { enabled: filtering, staleTime: 300_000 },
    });

    const available = useMemo(() => {
        const set = new Set<string>();
        reads?.forEach((read, i) => {
            const candidate = candidates[i];
            if (read.status === 'success' && candidate) {
                set.add(candidate.toLowerCase());
            }
        });
        return set;
    }, [reads, candidates]);

    return useMemo<SwapRouterTokenAvailability>(() => {
        if (!filtering) {
            return { ready: true, chzAvailable: true, isAvailable: () => true };
        }
        const ready = reads !== undefined;
        return {
            ready,
            // While loading, expose nothing swappable — better a short
            // USDC-only list than a pick that reverts on-chain.
            chzAvailable: ready && available.has(chilizConfig.wchz.toLowerCase()),
            isAvailable: (addr: string) => ready && available.has(addr.toLowerCase()),
        };
    }, [filtering, reads, available]);
}
