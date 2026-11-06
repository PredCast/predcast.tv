interface PredictionsSummaryProps {
  readonly count: number;
  readonly stakedLabel: string;
  readonly claimableCount: number;
  readonly claimableLabel: string;
}

/** Totals for the viewer on this match, with a highlighted "wins ready" line when something is claimable. */
export function PredictionsSummary({ count, stakedLabel, claimableCount, claimableLabel }: PredictionsSummaryProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="font-mono-ctv text-[10px] uppercase tracking-[0.16em] text-white/45">
          {count} {count === 1 ? "prediction" : "predictions"}
        </span>
        <span className="font-mono-ctv text-[11px] tabular-nums text-white/65">{stakedLabel} staked</span>
      </div>
      {claimableCount > 0 && (
        <div className="flex items-center justify-between rounded-md border border-[#2dd4a4]/40 bg-[rgba(45,212,164,0.08)] px-3 py-2">
          <span className="font-mono-ctv text-[10px] font-bold uppercase tracking-[0.16em] text-[#2dd4a4]">
            {claimableCount === 1 ? "1 win ready" : `${claimableCount} wins ready`}
          </span>
          <span className="font-display text-[16px] font-extrabold tabular-nums text-white">{claimableLabel}</span>
        </div>
      )}
    </div>
  );
}
