'use client';

import { useStreamWallet } from '@/hooks/useStreamWallet';

interface UseIsStreamerArgs {
    readonly wallet: `0x${string}` | undefined;
}

export interface IsStreamerResult {
    readonly isStreamer: boolean;
    readonly streamWalletAddress: `0x${string}` | undefined;
}

/** True when the connected wallet has a deployed StreamWallet proxy. */
export function useIsStreamer({ wallet }: UseIsStreamerArgs): IsStreamerResult {
    const { hasWallet, streamWalletAddress } = useStreamWallet({ streamerAddress: wallet });
    return {
        isStreamer: Boolean(hasWallet),
        streamWalletAddress: (streamWalletAddress as `0x${string}` | undefined) ?? undefined,
    };
}
