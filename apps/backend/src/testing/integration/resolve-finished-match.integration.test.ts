import { describe, it } from 'vitest';
import { runHealthCheck } from './_health-check';

const skipSuite = !runHealthCheck().ok;

describe.skipIf(skipSuite)('integration · resolve-finished-match', () => {
    it.todo('resolves all markets when match transitions to FT with a score');
    it.todo('claim works for winning bets after resolve');
    it.todo('does not touch markets already in Resolved state');
});
