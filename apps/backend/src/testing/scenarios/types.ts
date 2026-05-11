import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { IBlockchainService } from '@chiliztv/domain/shared/ports/IBlockchainService';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { Match, type MatchOdds } from '@chiliztv/domain/matches/entities/Match';
import type { ExtendedOdds } from '@chiliztv/domain/shared/ports/IFootballApiService';

export interface ScenarioContext {
    readonly matchRepo: IMatchRepository;
    readonly blockchain: IBlockchainService;
    readonly clock: IClock;
    /** When false the scenario must not deploy on-chain (DB-only fast path). */
    readonly deployContracts: boolean;
}

export interface MatchScenarioOutcome {
    matchesCreated: number;
    contractsDeployed: number;
    /** Match IDs touched — used by the runner for opt-in cleanup-on-error. */
    matchIds: ReadonlyArray<number>;
    warnings: ReadonlyArray<string>;
}

export interface MatchScenario {
    readonly name: string;
    readonly description: string;
    apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome>;
}

/**
 * Persists the match, then (when `deployContracts` is true) mirrors the prod
 * `SyncMatchesUseCase.createNewMatch` flow:
 *   1. deploy a FootballMatch proxy via the factory
 *   2. setup the 3 default markets (WINNER + GOALS_TOTAL + BOTH_SCORE) and
 *      open them — `setupMarkets` adds + opens in one helper
 *   3. update the persisted match with the `bettingContractAddress`
 *
 * Returns the count of contracts deployed (0 or 1).
 */
export async function persistAndMaybeDeploy(
    match: Match,
    ctx: ScenarioContext,
    warnings: string[],
): Promise<number> {
    const saved = await ctx.matchRepo.save(match);
    if (!ctx.deployContracts) return 0;
    const json = saved.toJSON();
    try {
        const matchName = `${json.homeTeam.name} vs ${json.awayTeam.name}`;
        const adminAddress = ctx.blockchain.getAdminAddress();
        const { contractAddress } = await ctx.blockchain.deployBettingContract(matchName, adminAddress);

        const extendedOdds = matchOddsToExtended(json.odds);
        await ctx.blockchain.setupMarkets(contractAddress, extendedOdds);

        const withContract = Match.reconstitute({
            id: json.id,
            apiFootballId: json.apiFootballId,
            homeTeamId: json.homeTeam.id,
            homeTeamName: json.homeTeam.name,
            homeTeamLogo: json.homeTeam.logo,
            awayTeamId: json.awayTeam.id,
            awayTeamName: json.awayTeam.name,
            awayTeamLogo: json.awayTeam.logo,
            leagueId: json.league.id,
            leagueName: json.league.name,
            leagueLogo: json.league.logo,
            leagueCountry: json.league.country,
            season: json.season,
            status: json.status,
            matchDate: new Date(json.matchDate),
            venue: json.venue,
            homeScore: json.score?.home,
            awayScore: json.score?.away,
            odds: json.odds,
            bettingContractAddress: contractAddress,
            createdAt: new Date(json.createdAt),
            updatedAt: ctx.clock.now(),
        });
        await ctx.matchRepo.update(withContract);
        return 1;
    } catch (err) {
        warnings.push(`deploy/setup failed for match ${json.id}: ${err instanceof Error ? err.message : String(err)}`);
        return 0;
    }
}

/**
 * Maps the entity-side `MatchOdds` shape onto the flat `ExtendedOdds` shape
 * that `setupMarkets` expects. Falls back to sharp-book-ish defaults when a
 * fixture omits a market — `setupMarkets` would otherwise use the contract's
 * own implicit defaults.
 */
function matchOddsToExtended(odds: MatchOdds | undefined): ExtendedOdds {
    const winner = odds?.winner ?? { homeWin: 1.85, draw: 3.5, awayWin: 4.2 };
    return {
        homeWin: winner.homeWin,
        draw: winner.draw,
        awayWin: winner.awayWin,
        over25: odds?.goalsTotal?.over ?? 1.85,
        under25: odds?.goalsTotal?.under ?? 1.95,
        bttsYes: odds?.bothScore?.yes ?? 1.70,
        bttsNo: odds?.bothScore?.no ?? 2.10,
    };
}
