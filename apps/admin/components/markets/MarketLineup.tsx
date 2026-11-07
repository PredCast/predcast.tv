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
      <div className="font-mono-ctv text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">
        {markets.length} markets opened{isKnockout ? ' · knockout' : ''}
      </div>
      <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
        {markets.map((m) => (
          <li key={m.marketId} className="flex items-center gap-2 text-[12px] text-white/75">
            <span className="font-mono-ctv w-4 text-[9px] tabular-nums text-white/30">{m.marketId}</span>
            {m.label}
            {m.knockoutOnly && <span className="font-mono-ctv text-[8px] uppercase tracking-[0.1em] text-[#F5C518]">KO</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
