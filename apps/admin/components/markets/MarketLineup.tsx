import type { DeploymentConfigDto } from '@chiliztv/shared';

interface MarketLineupProps {
  readonly lineup: DeploymentConfigDto['marketLineup'];
  readonly isKnockout: boolean;
}

/** Markets the deployment opens: the canonical lineup, plus FULL_TIME_WINNER on knockout fixtures. */
export function MarketLineup({ lineup, isKnockout }: Readonly<MarketLineupProps>) {
  const markets = lineup.filter((m) => isKnockout || !m.knockoutOnly);
  return (
    <div>
      <div className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-fg-meta">
        {markets.length} markets opened{isKnockout ? ' · knockout' : ''}
      </div>
      <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
        {markets.map((m) => (
          <li key={m.marketId} className="flex items-center gap-2 text-[12px] text-fg-body">
            <span className="font-mono w-4 text-[9px] tabular-nums text-fg-meta">{m.marketId}</span>
            {m.label}
            {m.knockoutOnly && <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-warning">KO</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
