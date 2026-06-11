'use client';

import { erc20Abi, type Address } from 'viem';
import { useReadContract } from 'wagmi';

import { chilizConfig } from '@/config/chiliz.config';

/**
 * Contract-reported ERC20 decimals — the only safe scaling source (mainnet
 * fan tokens are 0-dp, Spicy mocks are 18-dp). `undefined` while loading;
 * callers must gate parseUnits on it.
 */
export function useTokenDecimals(address: Address | undefined): number | undefined {
    const { data } = useReadContract({
        abi: erc20Abi,
        address,
        functionName: 'decimals',
        chainId: chilizConfig.chainId,
        query: { enabled: !!address, staleTime: Infinity },
    });
    return data as number | undefined;
}
