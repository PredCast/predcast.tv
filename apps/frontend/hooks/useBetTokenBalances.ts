'use client';

import { useMemo } from 'react';
import { erc20Abi, formatUnits, type Address, type ContractFunctionParameters } from 'viem';
import { useBalance, useReadContracts } from 'wagmi';

import { chilizConfig } from '@/config/chiliz.config';

export interface TokenHolding {
    /** Human-readable balance (already divided by on-chain decimals). */
    balance: number;
    /** Decimals as reported by the token contract — authoritative for parseUnits. */
    decimals: number;
}

/**
 * Wallet balances + on-chain decimals for every stake currency offered in
 * the bet dialog (USDC, native CHZ, fan tokens), in one batched multicall.
 * Decimals are read on-chain because they differ per network (mainnet fan
 * tokens are 0-dp, Spicy mocks are 18-dp) — hardcoding either breaks the
 * other.
 */
export function useBetTokenBalances(walletAddress: Address | undefined, enabled: boolean) {
    const erc20s = useMemo<{ symbol: string; address: Address }[]>(
        () => [
            { symbol: 'USDC', address: chilizConfig.usdc },
            ...chilizConfig.tokens
                .filter((t) => !!t.tokenAddress)
                .map((t) => ({ symbol: t.symbol, address: t.tokenAddress as Address })),
        ],
        [],
    );

    const { data: native } = useBalance({
        address: walletAddress,
        chainId: chilizConfig.chainId,
        query: { enabled: enabled && !!walletAddress, staleTime: 8_000 },
    });

    const contracts = useMemo<ContractFunctionParameters[]>(
        () =>
            walletAddress
                ? erc20s.flatMap<ContractFunctionParameters>((t) => [
                      {
                          abi: erc20Abi,
                          address: t.address,
                          functionName: 'balanceOf',
                          args: [walletAddress],
                          chainId: chilizConfig.chainId,
                      },
                      {
                          abi: erc20Abi,
                          address: t.address,
                          functionName: 'decimals',
                          chainId: chilizConfig.chainId,
                      },
                  ])
                : [],
        [erc20s, walletAddress],
    );

    const { data: reads } = useReadContracts({
        contracts,
        query: { enabled: enabled && !!walletAddress, staleTime: 8_000 },
    });

    /** Lowercased token address → holding. Empty until the multicall lands. */
    const byAddress = useMemo(() => {
        const map = new Map<string, TokenHolding>();
        if (!reads) return map;
        erc20s.forEach((t, i) => {
            const bal = reads[i * 2]?.result as bigint | undefined;
            const dec = reads[i * 2 + 1]?.result as number | undefined;
            if (bal === undefined || dec === undefined) return;
            map.set(t.address.toLowerCase(), {
                balance: Number(formatUnits(bal, dec)),
                decimals: dec,
            });
        });
        return map;
    }, [reads, erc20s]);

    const chzBalance = native ? Number(native.formatted) : 0;

    return { byAddress, chzBalance };
}
