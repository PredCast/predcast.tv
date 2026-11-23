'use client';

import { useEffect, useMemo, useState } from 'react';
import type { ProfileBadgeDto } from '@chiliztv/shared';

import { useProfileBadges } from '@/hooks/api';

import { badgeWalletsOf } from '../domain/badgeWallets';

/** A burst of incoming chat messages settles into one request. */
const DEBOUNCE_MS = 300;

/** Badges of a visible list: one debounced, batched `cards/badges` call for all its wallets. */
export function useListBadges(wallets: ReadonlyArray<string | null | undefined>): ReadonlyMap<string, ProfileBadgeDto> {
    const key = badgeWalletsOf(wallets).join(',');
    const [settledKey, setSettledKey] = useState('');

    useEffect(() => {
        const timer = window.setTimeout(() => setSettledKey(key), DEBOUNCE_MS);
        return () => window.clearTimeout(timer);
    }, [key]);

    const settled = useMemo(() => (settledKey ? settledKey.split(',') : []), [settledKey]);
    return useProfileBadges(settled);
}
