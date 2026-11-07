import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { Match } from '@chiliztv/domain/matches/entities/Match';
import type { IMatchDeploymentRepository } from '@chiliztv/domain/matches/repositories/IMatchDeploymentRepository';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';
import { isOperationActive, type MatchOperation } from '@chiliztv/domain/matches/operations/MatchOperation';
import { canDeployMatch } from '@chiliztv/domain/matches/policies/MatchDeploymentPolicy';
import type { IAdminDirectoryRepository, MatchVolume } from '@chiliztv/domain/admin/repositories/IAdminDirectoryRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { AdminMatchListQuery, AdminMatchPageDto, AdminMatchRowDto } from '@chiliztv/shared';

import { toMatchOperationDto } from '../deployment/toMatchOperationDto';

/** Server-side search of the admin Markets page; no global cache (thousands of synced matches). */
@injectable()
export class SearchAdminMatchesUseCase {
    constructor(
        @inject(TOKENS.IMatchDeploymentRepository) private readonly deployments: IMatchDeploymentRepository,
        @inject(TOKENS.IMatchOperationRepository) private readonly operations: IMatchOperationRepository,
        @inject(TOKENS.IAdminDirectoryRepository) private readonly directory: IAdminDirectoryRepository,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async execute(query: AdminMatchListQuery): Promise<AdminMatchPageDto> {
        const page = await this.deployments.searchForAdmin({
            search: query.search || undefined,
            leagueId: query.leagueId,
            from: query.from ? new Date(query.from) : undefined,
            to: query.to ? new Date(query.to) : undefined,
            statusKind: query.status,
            deployed: query.deployed,
            published: query.published,
            sort: query.sort,
            limit: query.limit,
            offset: query.offset,
        });
        const ids = page.items.map((m) => m.toRaw().apiFootballId);
        const [operations, volumes] = await Promise.all([
            this.operations.findLatestByMatchIds(ids),
            page.items.some((m) => m.getBettingContractAddress()) ? this.directory.matchVolumes() : Promise.resolve(new Map<string, MatchVolume>()),
        ]);
        const now = this.clock.now();

        return {
            items: page.items.map((m) => this.toRow(m, operations.get(m.toRaw().apiFootballId) ?? null, volumes, now)),
            total: page.total,
            limit: query.limit,
            offset: query.offset,
        };
    }

    private toRow(
        match: Match,
        latest: MatchOperation | null,
        volumes: ReadonlyMap<string, MatchVolume>,
        now: Date,
    ): AdminMatchRowDto {
        const raw = match.toRaw();
        const contract = raw.bettingContractAddress?.toLowerCase() ?? null;
        const volume = contract ? volumes.get(contract) : undefined;
        const deploy = canDeployMatch(
            { status: raw.status, kickoffAt: raw.matchDate, contractAddress: contract, hasActiveOperation: isOperationActive(latest) },
            now,
        );
        return {
            apiFootballId: raw.apiFootballId,
            homeTeamName: raw.homeTeamName,
            homeTeamLogo: raw.homeTeamLogo || null,
            awayTeamName: raw.awayTeamName,
            awayTeamLogo: raw.awayTeamLogo || null,
            leagueId: raw.leagueId,
            leagueName: raw.leagueName,
            leagueLogo: raw.leagueLogo || null,
            status: raw.status,
            matchDate: raw.matchDate.toISOString(),
            elapsed: raw.elapsed ?? null,
            score: raw.homeScore !== undefined && raw.awayScore !== undefined ? { home: raw.homeScore, away: raw.awayScore } : null,
            isKnockout: raw.isKnockout === true,
            bettingContractAddress: contract,
            bettingChainId: raw.bettingChainId ?? null,
            bettingOpenedAt: raw.bettingOpenedAt?.toISOString() ?? null,
            publishedAt: raw.publishedAt?.toISOString() ?? null,
            betCount: volume?.betCount ?? 0,
            totalStaked: volume?.totalStaked ?? '0',
            latestOperation: latest ? toMatchOperationDto(latest) : null,
            deployBlockedReason: deploy.ok ? null : deploy.reason,
        };
    }
}
