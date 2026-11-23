import type { CheckInResultDto } from '@chiliztv/shared';

/** Toast text of a check-in ("+65 XP · Day 4 streak"); null when nothing is shown (refusal, flag off). */
export function checkInToastMessage(result: CheckInResultDto): string | null {
    if (!result.credited) return null;
    const label = result.streak > 0 ? `Day ${result.streak} streak` : 'Daily check-in';
    return `+${result.xp} XP · ${label}`;
}
