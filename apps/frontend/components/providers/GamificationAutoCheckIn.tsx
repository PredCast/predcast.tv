'use client';

import { useAutoCheckIn } from '@/components/features/gamification/hooks/useAutoCheckIn';

/** Side-effect-only: the daily check-in of the signed-in account. Renders nothing. */
export function GamificationAutoCheckIn(): null {
    useAutoCheckIn();
    return null;
}
