export type DeploymentTier = 'production' | 'staging' | 'local';
export type ChainNetwork = 'mainnet' | 'testnet';

export interface RuntimeEnvironment {
    readonly tier: DeploymentTier;
    readonly network: ChainNetwork;
}

/** Where this backend runs, as shown to operators (env badge of the admin). */
export interface IRuntimeEnvironment {
    current(): RuntimeEnvironment;
}

/** Fly sets NODE_ENV=production on staging and prod alike; only prod points at mainnet. */
export function deploymentTierOf(nodeEnv: string, network: ChainNetwork): DeploymentTier {
    if (nodeEnv !== 'production') return 'local';
    return network === 'mainnet' ? 'production' : 'staging';
}
