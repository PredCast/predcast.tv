import { FOUNDER_WINDOW_DAYS } from '../catalog/constants';

export interface GamificationLaunchConfig {
    readonly enabled: boolean;
    /** Null = no launch date configured: nothing counts. */
    readonly launchAt: Date | null;
}

export type GamificationGate =
    | { readonly open: true }
    | { readonly open: false; readonly reason: 'disabled' | 'not_launched' };

/**
 * Whether an action dated `at` may earn anything (§3.1 rule 6). Jobs check it with the clock time,
 * processors also with the event timestamp (bets, resolutions, minutes, cycles).
 */
export function gamificationGate(config: GamificationLaunchConfig, at: Date): GamificationGate {
    if (!config.enabled) return { open: false, reason: 'disabled' };
    if (config.launchAt === null || at.getTime() < config.launchAt.getTime()) {
        return { open: false, reason: 'not_launched' };
    }
    return { open: true };
}

export function founderWindowEnd(launchAt: Date): Date {
    return new Date(launchAt.getTime() + FOUNDER_WINDOW_DAYS * 86_400_000);
}

/** `[launchAt, launchAt + 60 days)`. */
export function isWithinFounderWindow(launchAt: Date, at: Date): boolean {
    const t = at.getTime();
    return t >= launchAt.getTime() && t < founderWindowEnd(launchAt).getTime();
}
