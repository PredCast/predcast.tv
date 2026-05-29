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
import type { IBlockchainService, FootballScoreInput } from '@chiliztv/domain/shared/ports/IBlockchainService';
import { Match } from '@chiliztv/domain/matches/entities/Match';
import { logger } from '../../infrastructure/logging/logger';

/**
 * QA helper — forces resolution of a single match without waiting for the
 * `ResolveMarketsJob` cron tick.
 *
 *   pnpm match:resolve <matchId> <homeGoals> <awayGoals>
 *
 * Two-step pipeline:
 *   1. Flip the matches row to `status=FT` with the final score and
 *      `elapsed_minutes=90` so the frontend reflects the end-of-match
 *      state immediately (without waiting for SyncMatchesJob).
 *   2. Pull the betting contract address from the row, close any still-Open
 *      market, and call `resolveMarketsByScore` on-chain.
 *
 * Mirrors `match:halftime` in spirit — both writers persist the match state
 * THEN resolve the relevant markets.
 */
async function main(): Promise<void> {
    const args = process.argv.slice(2);
    if (args.length < 3) {
        console.error('Usage: pnpm match:resolve <matchId> <homeGoals> <awayGoals>');
        process.exit(1);
    }
    const matchId = Number(args[0]);
    const homeGoals = Number(args[1]);
    const awayGoals = Number(args[2]);

    if (!Number.isFinite(matchId) || !Number.isFinite(homeGoals) || !Number.isFinite(awayGoals)) {
        console.error('Invalid numeric arg — matchId / goals must be finite numbers');
        process.exit(1);
    }

    const matches = container.resolve<IMatchRepository>(TOKENS.IMatchRepository);
    const blockchain = container.resolve<IBlockchainService>(TOKENS.IBlockchainService);

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

    // Step 1 — flip the match row to FT with the final score. Keeps HT score
    // intact (monotone) so the frontend's HALFTIME row display remains
    // consistent post-resolve. The previous CLI skipped this; the DB row
    // stayed at whatever status `match:halftime` had left, which made the
    // frontend display "still HT" after FT resolution.
    const json = match.toJSON();
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
        status: 'FT',
        matchDate: new Date(json.matchDate),
        venue: json.venue,
        homeScore: homeGoals,
        awayScore: awayGoals,
        homeForm: json.homeForm,
        awayForm: json.awayForm,
        elapsed: 90,
        htHomeScore: json.htHomeScore,
        htAwayScore: json.htAwayScore,
        bettingContractAddress: contract,
        createdAt: new Date(json.createdAt),
        updatedAt: new Date(),
    });
    await matches.update(updated);
    logger.info('match:resolve — match row flipped to FT', {
        matchId,
        contract,
        previousStatus: json.status,
        finalScore: { home: homeGoals, away: awayGoals },
    });

    const score: FootballScoreInput = {
        homeGoals,
        awayGoals,
        // Forward the persisted HT score so the HALFTIME branch in the
        // Solidity resolver gets the right input (if HALFTIME wasn't
        // already resolved early via `match:halftime`).
        htHomeGoals: json.htHomeScore ?? undefined,
        htAwayGoals: json.htAwayScore ?? undefined,
    };

    logger.info('match:resolve — closing open markets first', {
        matchId,
        contract,
    });
    try {
        await blockchain.closeOpenMarketsForMatch(contract);
    } catch (err) {
        logger.warn('closeOpenMarketsForMatch failed (continuing anyway)', {
            error: err instanceof Error ? err.message : String(err),
        });
    }

    logger.info('match:resolve — resolving by score', {
        matchId,
        contract,
        score,
    });
    const resolvedCount = await blockchain.resolveMarketsByScore(
        contract,
        score,
    );
    logger.info(`match:resolve — done. ${resolvedCount} markets transitioned to Resolved`);
    process.exit(0);
}

main().catch((err) => {
    logger.error('match:resolve failed', {
        error: err instanceof Error ? err.message : String(err),
    });
    process.exit(1);
});
