import type { AdminContextDto } from '@chiliztv/shared';

type Environment = AdminContextDto['environment'];

export interface EnvironmentDisplay {
  readonly tier: string;
  /** Text colour class of the tier label. */
  readonly tierText: string;
  readonly dot: string;
  /** Solid chip for prod, outline otherwise (header). */
  readonly chip: string;
  readonly network: string;
}

const TIERS: Record<Environment['tier'], Omit<EnvironmentDisplay, 'network'>> = {
  production: { tier: 'Prod', tierText: 'text-accent-text', dot: 'bg-accent', chip: 'border-accent bg-accent text-white' },
  staging: { tier: 'Staging', tierText: 'text-warning', dot: 'bg-warning', chip: 'border-warning/50 text-warning' },
  local: { tier: 'Local', tierText: 'text-fg-body', dot: 'bg-fg-meta', chip: 'border-line text-fg-body' },
};

export function environmentDisplay(env: Environment): EnvironmentDisplay {
  return { ...TIERS[env.tier], network: env.network === 'mainnet' ? 'Chiliz mainnet' : 'Spicy testnet' };
}
