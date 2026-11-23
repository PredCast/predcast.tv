'use client';

import { useContext } from 'react';
import type { ProfileBadgeDto } from '@chiliztv/shared';

import { ProfileBadgesContext } from './profileBadgesContext';

/** Badge of one row from the enclosing `ProfileBadgesProvider`; null = render today's UI. */
export function useProfileBadge(wallet: string | null | undefined): ProfileBadgeDto | null {
    const badges = useContext(ProfileBadgesContext);
    return wallet ? badges.get(wallet.toLowerCase()) ?? null : null;
}
