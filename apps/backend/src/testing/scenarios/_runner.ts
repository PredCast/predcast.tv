import { container } from '../../infrastructure/config/di-container';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { IBlockchainService } from '@chiliztv/domain/shared/ports/IBlockchainService';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { logger } from '../../infrastructure/logging/logger';
import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';

export interface RunScenarioOptions {
    deployContracts: boolean;
    advanceClockMs?: number;
}

export async function runScenario(
    scenario: MatchScenario,
    opts: RunScenarioOptions,
): Promise<MatchScenarioOutcome> {
    const ctx: ScenarioContext = {
        matchRepo: container.resolve<IMatchRepository>(TOKENS.IMatchRepository),
        blockchain: container.resolve<IBlockchainService>(TOKENS.IBlockchainService),
        clock: container.resolve<IClock>(TOKENS.IClock),
        deployContracts: opts.deployContracts,
    };

    logger.info('Running scenario', { name: scenario.name, deployContracts: opts.deployContracts });
    const outcome = await scenario.apply(ctx);
    logger.info('Scenario completed', {
        name: scenario.name,
        matchesCreated: outcome.matchesCreated,
        contractsDeployed: outcome.contractsDeployed,
        warnings: outcome.warnings.length,
    });
    for (const w of outcome.warnings) logger.warn(`scenario warning: ${w}`);
    if (opts.advanceClockMs && opts.advanceClockMs > 0) {
        logger.info('Advance-clock requested but SystemClock is not mockable in CLI context — ignored', {
            advanceClockMs: opts.advanceClockMs,
        });
    }
    return outcome;
}

/** Parses a "120s" / "2m" / "1500" duration into milliseconds. Returns null on failure. */
export function parseDurationMs(raw: string | undefined): number | null {
    if (!raw) return null;
    const m = /^(\d+(?:\.\d+)?)\s*(ms|s|m)?$/.exec(raw.trim());
    if (!m) return null;
    const value = Number(m[1]);
    const unit = m[2] ?? 'ms';
    if (unit === 'm') return Math.round(value * 60_000);
    if (unit === 's') return Math.round(value * 1_000);
    return Math.round(value);
}
