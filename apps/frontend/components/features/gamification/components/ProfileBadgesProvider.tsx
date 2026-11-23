'use client';

import type { ReactNode } from 'react';

import { ProfileBadgesContext } from '../hooks/profileBadgesContext';
import { useListBadges } from '../hooks/useListBadges';

interface ProfileBadgesProviderProps {
    /** Wallets of the visible rows, duplicates and casing allowed. */
    readonly wallets: ReadonlyArray<string | null | undefined>;
    readonly children: ReactNode;
}

/** Loads the badges of a list in one batched request and shares them with its rows. */
export function ProfileBadgesProvider({ wallets, children }: ProfileBadgesProviderProps) {
    const badges = useListBadges(wallets);
    return <ProfileBadgesContext.Provider value={badges}>{children}</ProfileBadgesContext.Provider>;
}
