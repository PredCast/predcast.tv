import { inject, injectable } from 'tsyringe';

import { TEAM_FAN_TOKENS, type DashboardSuggestionsDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';

import { SearchAdminMatchesUseCase } from '../use-cases/SearchAdminMatchesUseCase';
import { cached } from './dashboardScope';

const TTL_SECONDS = 60;
const SHOWN = 5;
const SCANNED = 100;
const WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

/** Deployable matches of the next 7 days where at least one team has a fan token (admin only). */
@injectable()
export class GetDashboardSuggestionsUseCase {
    constructor(
        private readonly search: SearchAdminMatchesUseCase,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    execute(): Promise<DashboardSuggestionsDto> {
        return cached(this.cache, 'admin:dashboard:suggestions', TTL_SECONDS, () => this.load());
    }

    private async load(): Promise<DashboardSuggestionsDto> {
        const now = this.clock.now();
        const page = await this.search.execute({
            deployed: false,
            status: 'upcoming',
            from: now.toISOString(),
            to: new Date(now.getTime() + WINDOW_MS).toISOString(),
            sort: 'kickoff_asc',
            limit: SCANNED,
            offset: 0,
        });
        const suggestions = page.items
            .filter((row) => row.deployBlockedReason === null)
            .map((row) => ({
                row,
                tokens: [TEAM_FAN_TOKENS.get(row.homeTeamId), TEAM_FAN_TOKENS.get(row.awayTeamId)].filter((t): t is string => !!t),
            }))
            .filter(({ tokens }) => tokens.length > 0)
            .slice(0, SHOWN)
            .map(({ row, tokens }) => ({
                apiFootballId: row.apiFootballId,
                kickoffAt: row.matchDate,
                home: row.homeTeamName,
                away: row.awayTeamName,
                league: row.leagueName,
                tokens,
                row,
            }));
        return { suggestions, generatedAt: now.toISOString() };
    }
}
