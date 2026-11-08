import { inject, injectable } from 'tsyringe';

import type { DashboardLiveDto, DashboardLiveMatchDto, MarketStateDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { AdminRole } from '@chiliztv/domain/admin/types';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IDashboardStatsRepository, MarketStateRow } from '@chiliztv/domain/admin/dashboard/IDashboardStatsRepository';
import type { IAdminDirectoryRepository } from '@chiliztv/domain/admin/repositories/IAdminDirectoryRepository';
import type { IMatchDeploymentRepository } from '@chiliztv/domain/matches/repositories/IMatchDeploymentRepository';
import type { IStreamRepository } from '@chiliztv/domain/streams/repositories/IStreamRepository';
import type { IJobStateRepository } from '@chiliztv/domain/jobs/repositories/IJobStateRepository';

import { cached, canSeeMoney } from './dashboardScope';

const TTL_SECONDS = 15;
const MAX_MATCHES = 24;
/** The live feed ticks every 30 s; past this without a success its scores are stale. */
const FEED_STALE_AFTER_MS = 3 * 60_000;
const STATES: ReadonlyArray<MarketStateDto> = ['inactive', 'open', 'suspended', 'closed', 'resolved', 'cancelled'];

@injectable()
export class GetDashboardLiveUseCase {
    constructor(
        @inject(TOKENS.IMatchDeploymentRepository) private readonly deployments: IMatchDeploymentRepository,
        @inject(TOKENS.IAdminDirectoryRepository) private readonly directory: IAdminDirectoryRepository,
        @inject(TOKENS.IStreamRepository) private readonly streams: IStreamRepository,
        @inject(TOKENS.IDashboardStatsRepository) private readonly stats: IDashboardStatsRepository,
        @inject(TOKENS.IJobStateRepository) private readonly jobStates: IJobStateRepository,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async execute(role: AdminRole): Promise<DashboardLiveDto> {
        const full = await cached(this.cache, 'admin:dashboard:live', TTL_SECONDS, () => this.load());
        if (canSeeMoney(role)) return full;
        return { ...full, matches: full.matches.map((m) => ({ ...m, pool: null })) };
    }

    private async load(): Promise<DashboardLiveDto> {
        const now = this.clock.now();
        const page = await this.deployments.searchForAdmin({ statusKind: 'live', deployed: true, sort: 'kickoff_asc', limit: MAX_MATCHES, offset: 0 });
        const raws = page.items.map((m) => m.toRaw());
        const contracts = raws.map((r) => r.bettingContractAddress?.toLowerCase()).filter((c): c is string => !!c);
        const [volumes, streams, markets, states] = await Promise.all([
            contracts.length > 0 ? this.directory.matchVolumes() : Promise.resolve(new Map()),
            raws.length > 0 ? this.streams.findActiveByMatchIds(raws.map((r) => r.apiFootballId)) : Promise.resolve([]),
            this.stats.marketStates(contracts),
            this.jobStates.findAll(),
        ]);

        const streamsByMatch = new Map<number, { count: number; viewers: number }>();
        for (const s of streams) {
            const { matchId, viewerCount } = s.toJSON();
            const agg = streamsByMatch.get(matchId) ?? { count: 0, viewers: 0 };
            streamsByMatch.set(matchId, { count: agg.count + 1, viewers: agg.viewers + (viewerCount ?? 0) });
        }
        const marketsByContract = new Map<string, MarketStateRow[]>();
        for (const m of markets) marketsByContract.set(m.contractAddress, [...(marketsByContract.get(m.contractAddress) ?? []), m]);

        const matches: DashboardLiveMatchDto[] = raws.map((r) => {
            const contract = r.bettingContractAddress?.toLowerCase() ?? null;
            const volume = contract ? volumes.get(contract) : undefined;
            return {
                apiFootballId: r.apiFootballId,
                home: { name: r.homeTeamName, logo: r.homeTeamLogo || null },
                away: { name: r.awayTeamName, logo: r.awayTeamLogo || null },
                score: r.homeScore !== undefined && r.awayScore !== undefined ? { home: r.homeScore, away: r.awayScore } : null,
                status: r.status,
                elapsed: r.elapsed ?? null,
                league: r.leagueName,
                kickoffAt: r.matchDate.toISOString(),
                contractAddress: contract,
                published: r.publishedAt != null,
                pool: { totalStaked: volume?.totalStaked ?? '0', betCount: volume?.betCount ?? 0 },
                streams: streamsByMatch.get(r.apiFootballId) ?? { count: 0, viewers: 0 },
                markets: (contract ? marketsByContract.get(contract) ?? [] : []).map((m) => ({
                    marketId: m.marketId,
                    type: m.marketType,
                    line: m.line,
                    state: STATES[m.state] ?? 'inactive',
                })),
            };
        });

        const feed = states.find((s) => s.jobName === 'SyncLiveMatches');
        const lastSuccessAt = feed?.lastSuccessAt ?? null;
        return {
            matches,
            feed: {
                lastSuccessAt: lastSuccessAt?.toISOString() ?? null,
                stale: !lastSuccessAt || now.getTime() - lastSuccessAt.getTime() > FEED_STALE_AFTER_MS,
            },
            generatedAt: now.toISOString(),
        };
    }
}
