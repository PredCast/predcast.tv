'use client';

import { useMemo } from 'react';
import type { Address, ContractFunctionParameters } from 'viem';
import { useReadContract, useReadContracts } from 'wagmi';

import { useChilizSwapRouterReadTokenRouter } from '@/lib/contracts/generated';
import { chilizConfig, networkType } from '@/config/chiliz.config';

const ROUTER_FACTORY_ABI = [
    {
        type: 'function',
        stateMutability: 'view',
        name: 'factory',
        inputs: [],
        outputs: [{ name: '', type: 'address' }],
    },
] as const;

const FACTORY_GET_PAIR_ABI = [
    {
        type: 'function',
        stateMutability: 'view',
        name: 'getPair',
        inputs: [
            { name: 'tokenA', type: 'address' },
            { name: 'tokenB', type: 'address' },
        ],
        outputs: [{ name: 'pair', type: 'address' }],
    },
] as const;

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export interface KayenPairAvailability {
    /** True once the pair set is known (always true on testnet — no filtering). */
    ready: boolean;
    /** WCHZ/USDC pair exists — gates the native CHZ option. */
    chzAvailable: boolean;
    /** token/USDC pair exists for an ERC20 stake candidate. */
    isAvailable: (tokenAddress: string) => boolean;
}

/**
 * Mainnet-only guard for the stake-currency picker: a token is offered only
 * when its direct Kayen pair against our USDC actually exists — a bet in a
 * pairless token reverts at swap time and burns the user's gas. Discovered
 * via the live factory so a newly listed pair surfaces without a deploy.
 * Testnet is exempt (mock tokens, pairs curated by hand).
 */
export function useKayenPairAvailability(): KayenPairAvailability {
    const filtering = networkType === 'mainnet';

    const { data: kayenRouter } = useChilizSwapRouterReadTokenRouter({
        address: chilizConfig.chilizSwapRouter,
        chainId: chilizConfig.chainId,
        query: { enabled: filtering },
    });

    const { data: factory } = useReadContract({
        address: kayenRouter as Address | undefined,
        abi: ROUTER_FACTORY_ABI,
        functionName: 'factory',
        chainId: chilizConfig.chainId,
        query: { enabled: filtering && !!kayenRouter, staleTime: 3_600_000 },
    });

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
            factory
                ? candidates.map((token) => ({
                      address: factory as Address,
                      abi: FACTORY_GET_PAIR_ABI,
                      functionName: 'getPair',
                      args: [token, chilizConfig.usdc],
                      chainId: chilizConfig.chainId,
                  }))
                : [],
        [factory, candidates],
    );

    const { data: reads } = useReadContracts({
        contracts,
        query: { enabled: filtering && contracts.length > 0, staleTime: 300_000 },
    });

    const available = useMemo(() => {
        const set = new Set<string>();
        reads?.forEach((read, i) => {
            const pair = read.result as Address | undefined;
            const candidate = candidates[i];
            if (pair && pair !== ZERO_ADDRESS && candidate) {
                set.add(candidate.toLowerCase());
            }
        });
        return set;
    }, [reads, candidates]);

    return useMemo<KayenPairAvailability>(() => {
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
