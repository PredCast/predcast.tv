import { inject, injectable } from 'tsyringe';

import type { AdminMatchRowDto, DashboardEventsDto, EventVisibilityDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { AdminRole } from '@chiliztv/domain/admin/types';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import { isAllowed } from '@chiliztv/domain/admin/policies/AdminRolePolicy';

import { SearchAdminMatchesUseCase } from '../use-cases/SearchAdminMatchesUseCase';
import { cached, canSeeMoney } from './dashboardScope';

const TTL_SECONDS = 30;
const SHOWN = 7;
const WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

function visibilityOf(row: AdminMatchRowDto): EventVisibilityDto {
    const op = row.latestOperation;
    if (op && (op.status === 'pending' || op.status === 'running')) return 'deploying';
    if (op?.status === 'failed' && !row.bettingOpenedAt) return 'setup_failed';
    return row.publishedAt ? 'published' : 'hidden';
}

/** Deployed matches kicking off in the next 7 days (deploys still in flight show on Operations). */
@injectable()
export class GetDashboardEventsUseCase {
    constructor(
        private readonly search: SearchAdminMatchesUseCase,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async execute(role: AdminRole): Promise<DashboardEventsDto> {
        const full = await cached(this.cache, 'admin:dashboard:events', TTL_SECONDS, () => this.load());
        const money = canSeeMoney(role);
        const actions = isAllowed(role, ['admin']);
        return {
            ...full,
            events: full.events.map((e) => ({ ...e, pool: money ? e.pool : null, row: actions ? e.row : null })),
        };
    }

    private async load(): Promise<DashboardEventsDto> {
        const now = this.clock.now();
        const page = await this.search.execute({
            deployed: true,
            from: now.toISOString(),
            to: new Date(now.getTime() + WINDOW_MS).toISOString(),
            sort: 'kickoff_asc',
            limit: SHOWN,
            offset: 0,
        });
        return {
            events: page.items.map((row) => ({
                apiFootballId: row.apiFootballId,
                kickoffAt: row.matchDate,
                home: row.homeTeamName,
                away: row.awayTeamName,
                league: row.leagueName,
                contractAddress: row.bettingContractAddress,
                visibility: visibilityOf(row),
                pool: { totalStaked: row.totalStaked, betCount: row.betCount },
                row,
            })),
            total: page.total,
            generatedAt: now.toISOString(),
        };
    }
}
