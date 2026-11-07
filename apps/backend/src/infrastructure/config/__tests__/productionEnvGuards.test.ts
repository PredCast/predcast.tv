import { describe, expect, it } from 'vitest';

import { productionEnvProblems } from '../productionEnvGuards';

const HASH = 'ab12:cd34';

describe('productionEnvProblems — admin gate', () => {
  it('ignores every non-production environment', () => {
    expect(productionEnvProblems({ NODE_ENV: 'development', ADMIN_GATE_CODE_HASH: '' })).toEqual({ fatal: [], errors: [] });
    expect(productionEnvProblems({ NODE_ENV: 'test' })).toEqual({ fatal: [], errors: [] });
  });

  it('refuses an empty gate hash in production', () => {
    expect(productionEnvProblems({ NODE_ENV: 'production', ADMIN_GATE_CODE_HASH: '' }).fatal).toHaveLength(1);
  });

  it('only reports an unset gate hash in production', () => {
    const report = productionEnvProblems({ NODE_ENV: 'production' });
    expect(report.fatal).toHaveLength(0);
    expect(report.errors).toHaveLength(1);
  });

  it('accepts a configured gate in production', () => {
    expect(productionEnvProblems({ NODE_ENV: 'production', ADMIN_GATE_CODE_HASH: HASH })).toEqual({ fatal: [], errors: [] });
  });
});
