import { injectable, inject } from 'tsyringe';
import { createPublicClient, http, type PublicClient } from 'viem';
import { chainFor } from '@chiliztv/blockchain';
import { networkType } from '../../../infrastructure/config/chiliz.config';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IBetRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IBetRepository';
import type { IMarketEventRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IMarketEventRepository';
import { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { INetworkConfig } from '@chiliztv/domain/shared/ports/INetworkConfig';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { PlatformStatsDto } from '@chiliztv/shared/dto/stats/PlatformStatsDto';

const LEADERBOARD_ABI = [
    {
        type: 'function',
        name: 'openPrizePool',
        inputs: [],
        outputs: [{ type: 'uint256' }],
        stateMutability: 'view',
    },
] as const;

const CACHE_KEY = 'stats:platform';
const CACHE_TTL_SECONDS = 300;

/** Public aggregate counters consumed by the landing page. */
@injectable()
export class GetPlatformStatsUseCase {
    private readonly client: PublicClient;
    private readonly leaderboardAddress: `0x${string}`;

    constructor(
        @inject(TOKENS.IBetRepository)
        private readonly betRepo: IBetRepository,
        @inject(TOKENS.IMarketEventRepository)
        private readonly marketEvents: IMarketEventRepository,
        @inject(TOKENS.IMatchRepository)
        private readonly matchRepo: IMatchRepository,
        @inject(TOKENS.INetworkConfig)
        network: INetworkConfig,
        @inject(TOKENS.ICacheService)
        private readonly cache: ICacheService,
    ) {
        this.client = createPublicClient({
            chain: chainFor(networkType),
            transport: http(network.rpcUrl),
        });
        this.leaderboardAddress = network.leaderboardRewardsAddress as `0x${string}`;
    }

    async execute(): Promise<PlatformStatsDto> {
        const cached = await this.cache.get<PlatformStatsDto>(CACHE_KEY);
        if (cached.hit) return cached.value;

        const [volume, marketsResolved, matchStats, prizePool] = await Promise.all([
            this.betRepo.sumStakeAmountSince(new Date(0)),
            this.marketEvents.countByEventName('MarketResolved'),
            this.matchRepo.getStats(),
            this.readPrizePool(),
        ]);

        const result: PlatformStatsDto = {
            volumeStakedUsdc: volume.toString(),
            marketsResolved,
            leaderboardPrizePoolUsdc: prizePool.toString(),
            liveMatches: matchStats?.liveMatches ?? 0,
            totalMatches: matchStats?.totalMatches ?? 0,
        };
        await this.cache.set(CACHE_KEY, result, CACHE_TTL_SECONDS);
        return result;
    }

    private async readPrizePool(): Promise<bigint> {
        try {
            return (await this.client.readContract({
                address: this.leaderboardAddress,
                abi: LEADERBOARD_ABI,
                functionName: 'openPrizePool',
            })) as bigint;
        } catch {
            return BigInt(0);
        }
    }
}
