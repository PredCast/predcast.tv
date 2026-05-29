import { config } from 'dotenv';
import { resolve } from 'path';
// .env.local first so it overrides .env when present (local dev stack).
// dotenv defaults to "first wins"; missing files are ignored silently.
config({ path: resolve(__dirname, '../../../.env.local') });
config({ path: resolve(__dirname, '../../../.env') });
import 'reflect-metadata';

import { setupDependencyInjection, container } from '../../di/container';
setupDependencyInjection();

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import { Match } from '@chiliztv/domain/matches/entities/Match';
import { ResolveHalftimeMarketUseCase } from '../../application/matches/use-cases/ResolveHalftimeMarketUseCase';
import { logger } from '../../infrastructure/logging/logger';

/**
 * QA helper — forces the HALFTIME market (marketId=1) of a single match to
 * resolve early, without waiting for the upstream API-Football halftime
 * indexing or the `ResolveHalftimeMarketsJob` cron tick.
 *
 *   pnpm match:halftime <matchId> <htHomeGoals> <htAwayGoals>
 *
 * Steps:
 *   1. Flip the matches row to `status=HT`, persist the HT score, set
 *      `elapsed_minutes=45`. Also mirrors the HT score into the live
 *      score columns since at HT, live score IS the HT score.
 *   2. Invoke ResolveHalftimeMarketUseCase.execute(matchId) — closes
 *      marketId=1 on the contract, calls resolveByScore with HT data.
 *      Only marketId=1 transitions to Resolved; the 7 other markets
 *      stay Open for live betting after the break.
 *
 * Mirrors match:resolve in spirit but scoped to a single market.
 */
async function main(): Promise<void> {
    const args = process.argv.slice(2);
    if (args.length < 3) {
        console.error('Usage: pnpm match:halftime <matchId> <htHomeGoals> <htAwayGoals>');
        process.exit(1);
    }
    const matchId = Number(args[0]);
    const htHomeGoals = Number(args[1]);
    const htAwayGoals = Number(args[2]);

    if (!Number.isFinite(matchId) || !Number.isFinite(htHomeGoals) || !Number.isFinite(htAwayGoals)) {
        console.error('Invalid numeric arg — matchId / HT goals must be finite numbers');
        process.exit(1);
    }
    if (htHomeGoals < 0 || htAwayGoals < 0 || htHomeGoals > 50 || htAwayGoals > 50) {
        console.error('HT goals out of plausible range [0..50]');
        process.exit(1);
    }

    const matches = container.resolve<IMatchRepository>(TOKENS.IMatchRepository);
    const useCase = container.resolve(ResolveHalftimeMarketUseCase);

    const match = await matches.findByApiFootballId(matchId);
    if (!match) {
        console.error(`Match ${matchId} not found in DB`);
        process.exit(1);
    }
    const contract = match.getBettingContractAddress();
    if (!contract) {
        console.error(`Match ${matchId} has no betting contract — cannot resolve on-chain`);
        process.exit(1);
    }

    // Step 1 — flip the match row to a HT-state snapshot. setHalftimeScore is
    // monotone (silently no-ops on null/undefined) but accepts plain numbers
    // here. updateStatus + updateScore + setElapsed are unconditional.
    const json = match.toJSON();
    logger.info('match:halftime — setting match state to HT', {
        matchId,
        contract,
        previousStatus: json.status,
        htHomeGoals,
        htAwayGoals,
    });

    const updated = Match.reconstitute({
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
        status: 'HT',
        matchDate: new Date(json.matchDate),
        venue: json.venue,
        // At HT the live score IS the HT score. Persisting both lines lets
        // downstream consumers (frontend, indexer) see a coherent snapshot
        // without waiting for SyncLiveMatchesJob to backfill.
        homeScore: htHomeGoals,
        awayScore: htAwayGoals,
        homeForm: json.homeForm,
        awayForm: json.awayForm,
        elapsed: 45,
        htHomeScore: htHomeGoals,
        htAwayScore: htAwayGoals,
        bettingContractAddress: contract,
        createdAt: new Date(json.createdAt),
        updatedAt: new Date(),
    });
    await matches.update(updated);

    // Step 2 — trigger the early resolution. The use case has its own
    // pre-flight state check (skips if marketId=1 is already non-Open) so
    // calling this twice is a no-op.
    logger.info('match:halftime — resolving HALFTIME market on-chain', { matchId, contract });
    const result = await useCase.execute(matchId);
    logger.info(`match:halftime — done`, {
        resolved: result.resolved,
        voided: result.voided,
        scanned: result.scanned,
    });
    process.exit(0);
}

main().catch((err) => {
    logger.error('match:halftime failed', {
        error: err instanceof Error ? err.message : String(err),
    });
    process.exit(1);
});
