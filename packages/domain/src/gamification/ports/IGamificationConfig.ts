import type { GamificationLaunchConfig } from '../policies/launchPolicy';

/** `GAMIFICATION_ENABLED` + `GAMIFICATION_LAUNCH_AT`, read once at boot. */
export interface IGamificationConfig {
    readonly launch: GamificationLaunchConfig;
}
