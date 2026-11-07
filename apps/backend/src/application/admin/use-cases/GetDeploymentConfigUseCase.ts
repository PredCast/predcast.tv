import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { DEFAULT_KICKOFF_BUFFER_SEC } from '@chiliztv/domain/matches/policies/BettablePolicy';
import { DEFAULT_FOOTBALL_MARKETS, getDefaultFootballMarkets } from '@chiliztv/domain/markets/DefaultMarkets';
import type { IBettingChainRegistry } from '@chiliztv/domain/shared/ports/IBettingChainRegistry';
import type { IBettingDeploymentService } from '@chiliztv/domain/shared/ports/IBettingDeploymentService';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { DeploymentConfigDto } from '@chiliztv/shared';

/** Below this many deployments' worth of gas, the admin shows a low-balance alert. */
export const LOW_BALANCE_DEPLOYMENTS = 10n;
const CACHE_KEY = 'admin:deployment-config:v2';
const REGULAR_MARKET_IDS = new Set(getDefaultFootballMarkets({ isKnockout: false }).map((spec) => spec.marketId));
// Short: the balance drops with every deploy and the admin wants to see it.
const CACHE_TTL_SECONDS = 15;

/** Chains, signer balance and the low-balance threshold for the Markets page and the deploy dialog. */
@injectable()
export class GetDeploymentConfigUseCase {
    constructor(
        @inject(TOKENS.IBettingChainRegistry) private readonly chains: IBettingChainRegistry,
        @inject(TOKENS.IBettingDeploymentService) private readonly deployer: IBettingDeploymentService,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
    ) {}

    async execute(): Promise<DeploymentConfigDto> {
        const config = await this.cache.getOrLoad<DeploymentConfigDto>({
            key: CACHE_KEY,
            ttlSeconds: CACHE_TTL_SECONDS,
            loader: () => this.load(),
        });
        return config ?? this.load();
    }

    private async load(): Promise<DeploymentConfigDto> {
        const [balance, deployCost] = await Promise.all([
            this.deployer.signerBalanceWei(),
            this.deployer.estimateDeploymentCostWei(),
        ]);
        const threshold = deployCost * LOW_BALANCE_DEPLOYMENTS;
        return {
            chains: [...this.chains.list()],
            signer: {
                address: this.deployer.signerAddress(),
                balanceWei: balance.toString(),
                estimatedDeployCostWei: deployCost.toString(),
                lowBalanceThresholdWei: threshold.toString(),
                lowBalance: balance < threshold,
            },
            kickoffBufferSec: DEFAULT_KICKOFF_BUFFER_SEC,
            marketLineup: DEFAULT_FOOTBALL_MARKETS.map((spec) => ({
                marketId: spec.marketId,
                label: spec.displayLabel,
                knockoutOnly: !REGULAR_MARKET_IDS.has(spec.marketId),
            })),
        };
    }
}
