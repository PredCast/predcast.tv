'use client';

import { useGamificationToasts } from '@/components/features/gamification/hooks/useGamificationToasts';

/** Side-effect-only: in-app gamification notifications of the signed-in account. Renders nothing. */
export function GamificationToasts(): null {
    useGamificationToasts();
    return null;
}
