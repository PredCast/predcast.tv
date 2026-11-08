import { inject, injectable } from 'tsyringe';

import type { DashboardKpisDto, KpiValueDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { AdminRole } from '@chiliztv/domain/admin/types';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IDashboardStatsRepository, KpiAggregate } from '@chiliztv/domain/admin/dashboard/IDashboardStatsRepository';
import type { IMatchDeploymentRepository } from '@chiliztv/domain/matches/repositories/IMatchDeploymentRepository';
import type { IStreamRepository } from '@chiliztv/domain/streams/repositories/IStreamRepository';
import { trendOf } from '@chiliztv/domain/admin/dashboard/KpiTrendPolicy';

import { cached, canSeeModeration, canSeeMoney } from './dashboardScope';

const TTL_SECONDS = 20;

function kpi(a: KpiAggregate): KpiValueDto {
    return { current: a.current, previous: a.previous, trend: trendOf(Number(a.current), Number(a.previous)), series: a.series ? [...a.series] : null };
}

/** KPI row. Loaded once for everyone, then stripped to the caller's scope. */
@injectable()
export class GetDashboardKpisUseCase {
    constructor(
        @inject(TOKENS.IDashboardStatsRepository) private readonly stats: IDashboardStatsRepository,
        @inject(TOKENS.IMatchDeploymentRepository) private readonly deployments: IMatchDeploymentRepository,
        @inject(TOKENS.IStreamRepository) private readonly streams: IStreamRepository,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async execute(role: AdminRole): Promise<DashboardKpisDto> {
        const full = await cached(this.cache, 'admin:dashboard:kpis', TTL_SECONDS, () => this.load());
        const money = canSeeMoney(role);
        const moderation = canSeeModeration(role);
        return {
            ...full,
            deployments7d: money ? full.deployments7d : null,
            volume24h: money ? full.volume24h : null,
            feesSettled24h: money ? full.feesSettled24h : null,
            bettors24h: money ? full.bettors24h : null,
            avgPool30d: money ? full.avgPool30d : null,
            openReports: moderation ? full.openReports : null,
            activeBans: moderation ? full.activeBans : null,
        };
    }

    private async load(): Promise<DashboardKpisDto> {
        const now = this.clock.now();
        const [agg, live, streams] = await Promise.all([
            this.stats.kpiAggregates(now),
            this.deployments.searchForAdmin({ statusKind: 'live', deployed: true, sort: 'kickoff_asc', limit: 1, offset: 0 }),
            this.streams.findActiveStreams(),
        ]);
        return {
            liveMatches: live.total,
            liveStreams: { count: streams.length, viewers: streams.reduce((sum, s) => sum + (s.toJSON().viewerCount ?? 0), 0) },
            deployments7d: kpi(agg.deployments7d),
            volume24h: kpi(agg.volume24h),
            feesSettled24h: kpi(agg.feesSettled24h),
            bettors24h: kpi(agg.bettors24h),
            avgPool30d: { ...kpi(agg.avgPool30d), events: agg.avgPool30d.events },
            openReports: { ...kpi(agg.openReports), highSeverity: agg.openReports.highSeverity },
            activeBans: { ...kpi(agg.activeBans), permanent: agg.activeBans.permanent },
            generatedAt: now.toISOString(),
        };
    }
}
