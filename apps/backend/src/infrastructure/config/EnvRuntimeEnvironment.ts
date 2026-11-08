import { injectable } from 'tsyringe';

import {
    deploymentTierOf,
    type IRuntimeEnvironment,
    type RuntimeEnvironment,
} from '@chiliztv/domain/shared/ports/IRuntimeEnvironment';

import { env } from './environment';

@injectable()
export class EnvRuntimeEnvironment implements IRuntimeEnvironment {
    private readonly value: RuntimeEnvironment = {
        tier: deploymentTierOf(env.NODE_ENV, env.NETWORK),
        network: env.NETWORK,
    };

    current(): RuntimeEnvironment {
        return this.value;
    }
}
