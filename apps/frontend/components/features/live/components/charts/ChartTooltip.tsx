export interface ChartTooltipState {
  readonly x: number;
  readonly y: number;
  readonly timeLabel: string;
  readonly priceLabel: string;
  /** Extra line, e.g. the candle's open / high / low. */
  readonly detail?: string;
}

interface ChartTooltipProps {
  readonly state: ChartTooltipState | null;
  /** Quote unit shown after the price ("≈ USD", or the cross-pair quote symbol). */
  readonly unit: string;
}

/** Crosshair readout; kept inside the chart box and away from the cursor. */
export function ChartTooltip({ state, unit }: ChartTooltipProps) {
  if (!state) return null;
  return (
    <div
      role="status"
      aria-live="off"
      className="pointer-events-none absolute z-10 rounded-md border border-[#2A2A2A] bg-[#0A0A0A]/95 px-2.5 py-1.5"
      style={{ left: state.x, top: state.y }}
    >
      <div className="font-mono-ctv text-[12px] font-bold tabular-nums text-white">
        {state.priceLabel} <span className="text-[10px] text-white/45">{unit}</span>
      </div>
      {state.detail && (
        <div className="font-mono-ctv text-[9px] tabular-nums tracking-[0.06em] text-white/55">{state.detail}</div>
      )}
      <div className="font-mono-ctv text-[9px] uppercase tracking-[0.12em] text-white/45">{state.timeLabel}</div>
    </div>
  );
}
