const SEGMENT_TINTS = ["#E8001D", "#F5C518", "#2dd4a4"] as const;

interface MarketPoolBarProps {
  readonly outcomePools: ReadonlyArray<string>;
  readonly totalPool: bigint;
}

/** Thin distribution bar of the pool across outcomes; caller renders it only when liquidity exists. */
export function MarketPoolBar({ outcomePools, totalPool }: MarketPoolBarProps) {
  return (
    <div className="mt-3 flex h-1.5 w-full overflow-hidden rounded-full bg-[#141414]">
      {outcomePools.map((raw, idx) => {
        const fraction = totalPool > BigInt(0) ? Number((BigInt(raw) * BigInt(10_000)) / totalPool) / 100 : 0;
        if (fraction <= 0) return null;
        return (
          <span
            key={idx}
            style={{ width: `${fraction}%`, background: SEGMENT_TINTS[Math.min(idx, 2)], opacity: 0.8 }}
            aria-hidden
          />
        );
      })}
    </div>
  );
}
