import { describe, it } from 'vitest';
import { runHealthCheck } from './_health-check';

const skipSuite = !runHealthCheck().ok;

describe.skipIf(skipSuite)('integration · cancel-flow', () => {
    it.todo('CANC match cancels every Open market via cancelOpenMarketsForMatch');
    it.todo('claimRefund returns the pre-match bet stake after cancel');
    it.todo('does not cancel markets already Resolved or Cancelled');
});
