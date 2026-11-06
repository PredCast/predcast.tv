import { outcomeSharesBps } from "@chiliztv/domain/markets/poolShares";

import type { MarketOutcome } from "@/lib/contracts/markets";

const TINTS = ["#E8001D", "#F5C518", "#2dd4a4"] as const;

interface OutcomeDistributionProps {
  readonly outcomes: ReadonlyArray<MarketOutcome>;
  readonly outcomePools: ReadonlyArray<string>;
}

/** Split of one market's pool across outcomes (pump.fun buys/sells bar equivalent). */
export function OutcomeDistribution({ outcomes, outcomePools }: OutcomeDistributionProps) {
  const shares = outcomeSharesBps(outcomePools.map((p) => BigInt(p)));
  const empty = shares.every((s) => s === 0);
  return (
    <div>
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-[#1A1A1A]" aria-hidden>
        {!empty &&
          outcomes.map((o, i) => (
            <span key={o.selection} style={{ width: `${(shares[o.selection] ?? 0) / 100}%`, background: TINTS[i % TINTS.length] }} />
          ))}
      </div>
      <ul className="mt-2 flex flex-col gap-1">
        {outcomes.map((o, i) => (
          <li key={o.selection} className="flex items-center gap-2 text-[11px] text-white/65">
            <span aria-hidden className="block h-2 w-2 rounded-full" style={{ background: TINTS[i % TINTS.length] }} />
            <span className="truncate">{o.label}</span>
            <span className="font-mono-ctv ml-auto tabular-nums text-white">
              {empty ? "—" : `${Math.round((shares[o.selection] ?? 0) / 100)}%`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
