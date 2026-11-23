'use client';

import type { MyGamificationDto } from '@chiliztv/shared';

import { useMyGamification } from '@/hooks/api';

import { useGamificationAccount } from './useGamificationAccount';

/** Owner view when signed in with an account and gamification is open; null otherwise (UI unchanged). */
export function useOwnerGamification(): MyGamificationDto | null {
    const hasAccount = useGamificationAccount();
    const { data } = useMyGamification(hasAccount);
    return hasAccount ? data ?? null : null;
}
