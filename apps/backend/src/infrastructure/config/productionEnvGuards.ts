/** Variables the production guards look at (subset of the validated env). */
export interface GuardedEnv {
  readonly NODE_ENV: 'development' | 'test' | 'production';
  readonly ADMIN_GATE_CODE_HASH?: string;
}

export interface EnvGuardReport {
  /** Misconfigurations that must stop the process. */
  readonly fatal: ReadonlyArray<string>;
  /** Misconfigurations logged as errors at boot without stopping it. */
  readonly errors: ReadonlyArray<string>;
}

/**
 * Production-only checks on top of the schema. An empty ADMIN_GATE_CODE_HASH is the local way to switch
 * the admin gate off, so in production it is refused rather than silently disabling the gate.
 */
export function productionEnvProblems(env: GuardedEnv): EnvGuardReport {
  if (env.NODE_ENV !== 'production') return { fatal: [], errors: [] };
  const fatal: string[] = [];
  const errors: string[] = [];
  if (env.ADMIN_GATE_CODE_HASH === '') {
    fatal.push('ADMIN_GATE_CODE_HASH is empty: the admin access gate would be disabled in production');
  } else if (env.ADMIN_GATE_CODE_HASH === undefined) {
    errors.push('ADMIN_GATE_CODE_HASH is not set: the admin access gate is disabled in production');
  }
  return { fatal, errors };
}
