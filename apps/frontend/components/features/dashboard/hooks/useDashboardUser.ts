'use client';

import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useKycVerified } from './useKycVerified';

export interface DashboardUser {
    readonly wallet: `0x${string}` | undefined;
    readonly username: string;
    readonly userId: string;
    /** Always null — Dynamic doesn't surface joinedAt cleanly. */
    readonly joinedAt: number | null;
    readonly kycVerified: boolean;
    /** Avatar URL from Dynamic `metadata.profilePicture`. */
    readonly profilePicture: string | null;
}

interface DynamicMetadata {
    profilePicture?: string | null;
}

interface DynamicUserShape {
    userId?: string;
    username?: string;
    metadata?: DynamicMetadata;
}

/** Single source of truth for the dashboard's user state. */
export function useDashboardUser(): DashboardUser {
    const { primaryWallet, user } = useDynamicContext() as {
        primaryWallet?: { address?: string };
        user?: DynamicUserShape;
    };

    const wallet = primaryWallet?.address as `0x${string}` | undefined;
    const userId = user?.userId ?? '';
    const username = user?.username ?? (wallet ? `${wallet.slice(0, 6)}…${wallet.slice(-4)}` : 'Guest');
    const profilePicture = user?.metadata?.profilePicture ?? null;
    const [kycVerified] = useKycVerified(wallet);

    return {
        wallet,
        username,
        userId,
        joinedAt: null,
        kycVerified,
        profilePicture,
    };
}
