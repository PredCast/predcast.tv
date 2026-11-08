import { STAKE_PRESETS_PCT, type StakePresetPct } from "@chiliztv/domain/betting/stakePresets";

/** Quick USDC amounts, in whole units. */
export const QUICK_USDC_AMOUNTS = [5, 10, 25] as const;

interface StakePresetsProps {
  readonly disabled: boolean;
  readonly showQuickAmounts: boolean;
  readonly onPreset: (pct: StakePresetPct) => void;
  readonly onQuickAmount: (amount: number) => void;
}

const BUTTON =
  "font-mono-ctv rounded border border-[#1E1E1E] px-2 py-1 text-[10px] font-bold tabular-nums text-white/65 transition-colors hover:border-[#E8001D] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] disabled:cursor-not-allowed disabled:opacity-40";

export function StakePresets({ disabled, showQuickAmounts, onPreset, onQuickAmount }: StakePresetsProps) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {showQuickAmounts &&
        QUICK_USDC_AMOUNTS.map((n) => (
          <button key={n} type="button" disabled={disabled} onClick={() => onQuickAmount(n)} className={BUTTON}>
            ${n}
          </button>
        ))}
      <span className="ml-auto" />
      {STAKE_PRESETS_PCT.map((pct) => (
        <button
          key={pct}
          type="button"
          disabled={disabled}
          onClick={() => onPreset(pct)}
          aria-label={pct === 100 ? "Use maximum balance" : `Use ${pct}% of balance`}
          className={BUTTON}
        >
          {pct === 100 ? "Max" : `${pct}%`}
        </button>
      ))}
    </div>
  );
}
