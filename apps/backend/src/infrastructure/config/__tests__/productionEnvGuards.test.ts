import { describe, expect, it } from 'vitest';

import { productionEnvProblems } from '../productionEnvGuards';

const HASH = 'ab12:cd34';
const SERVICE_ROLE = 'service-role-key';

describe('productionEnvProblems — admin gate', () => {
  it('ignores every non-production environment', () => {
    expect(productionEnvProblems({ NODE_ENV: 'development', ADMIN_GATE_CODE_HASH: '' })).toEqual({ fatal: [], errors: [] });
    expect(productionEnvProblems({ NODE_ENV: 'test' })).toEqual({ fatal: [], errors: [] });
  });

  it('refuses an empty gate hash in production', () => {
    expect(productionEnvProblems({ NODE_ENV: 'production', ADMIN_GATE_CODE_HASH: '', SUPABASE_SERVICE_ROLE_KEY: SERVICE_ROLE }).fatal).toHaveLength(1);
  });

  it('only reports an unset gate hash in production', () => {
    const report = productionEnvProblems({ NODE_ENV: 'production', SUPABASE_SERVICE_ROLE_KEY: SERVICE_ROLE });
    expect(report.fatal).toHaveLength(0);
    expect(report.errors).toHaveLength(1);
  });

  it('accepts a configured gate in production', () => {
    expect(productionEnvProblems({ NODE_ENV: 'production', ADMIN_GATE_CODE_HASH: HASH, SUPABASE_SERVICE_ROLE_KEY: SERVICE_ROLE })).toEqual({ fatal: [], errors: [] });
  });
});

describe('productionEnvProblems — service role', () => {
  it('refuses to run without the service role key in production', () => {
    const report = productionEnvProblems({ NODE_ENV: 'production', ADMIN_GATE_CODE_HASH: HASH });
    expect(report.fatal).toEqual([expect.stringContaining('SUPABASE_SERVICE_ROLE_KEY')]);
  });

  it('leaves local runs on the anon key alone (the client logs a warning)', () => {
    expect(productionEnvProblems({ NODE_ENV: 'development' }).fatal).toHaveLength(0);
  });
});
