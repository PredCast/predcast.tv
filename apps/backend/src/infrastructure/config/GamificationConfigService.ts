import { injectable } from 'tsyringe';

import type { GamificationLaunchConfig } from '@chiliztv/domain/gamification/policies/launchPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';

import { env } from './environment';

@injectable()
export class GamificationConfigService implements IGamificationConfig {
  readonly launch: GamificationLaunchConfig;

  constructor() {
    this.launch = {
      enabled: env.GAMIFICATION_ENABLED,
      launchAt: env.GAMIFICATION_LAUNCH_AT ? new Date(env.GAMIFICATION_LAUNCH_AT) : null,
    };
  }
}
