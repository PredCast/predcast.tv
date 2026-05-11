import { injectable } from 'tsyringe';
import { listScenarios, getScenario } from '../../../testing/scenarios/registry';
import { parseDurationMs, runScenario } from '../../../testing/scenarios/_runner';
import { logger } from '../../../infrastructure/logging/logger';

@injectable()
export class ScenarioCommand {
    async execute(argv: ReadonlyArray<string>): Promise<number> {
        const args = argv.slice(2);
        const sub = args[0] ?? 'help';

        if (sub === 'list' || sub === 'help') return this.printList();

        if (sub === 'run') {
            const name = args[1];
            if (!name) {
                logger.error('Missing scenario name. Usage: match:scenario run <name> [--no-deploy] [--advance-clock 120s]');
                return 1;
            }
            const scenario = getScenario(name);
            if (!scenario) {
                logger.error(`Unknown scenario "${name}". Run "match:scenario list" to see available ones.`);
                return 1;
            }
            const deployContracts = !args.includes('--no-deploy');
            const advanceClockIdx = args.indexOf('--advance-clock');
            const advanceClockMs = advanceClockIdx >= 0
                ? parseDurationMs(args[advanceClockIdx + 1])
                : null;
            const outcome = await runScenario(scenario, {
                deployContracts,
                advanceClockMs: advanceClockMs ?? undefined,
            });
            logger.info('Scenario outcome', outcome);
            return outcome.warnings.length === 0 ? 0 : 0; // warnings are non-fatal
        }

        logger.error(`Unknown sub-command "${sub}". Use "list" or "run <name>".`);
        return 1;
    }

    private printList(): number {
        logger.info('Available scenarios:');
        for (const s of listScenarios()) {
            logger.info(`  - ${s.name.padEnd(28)} ${s.description}`);
        }
        logger.info('');
        logger.info('Usage:');
        logger.info('  pnpm match:scenario run <name> [--no-deploy] [--advance-clock 120s]');
        return 0;
    }
}
