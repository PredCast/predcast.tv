import { BdEyebrow } from "./BdEyebrow";

interface BetDialogHeaderProps {
  readonly marketLabel: string;
  readonly specLabel: string;
  readonly marketId: number;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly onClose: () => void;
}

export function BetDialogHeader({ marketLabel, specLabel, marketId, homeTeam, awayTeam, onClose }: BetDialogHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 px-7 pb-4 pt-6">
      <div className="min-w-0 flex-1">
        <BdEyebrow>Football · {marketLabel}</BdEyebrow>
        <div
          className="font-display mt-2 text-[26px] uppercase leading-[0.95] tracking-[-0.015em] text-white sm:text-[30px]"
          style={{ fontWeight: 800 }}
        >
          {homeTeam ?? "Home"} <span className="text-white/40">vs</span> {awayTeam ?? "Away"}
        </div>
        <div className="font-mono-ctv mt-2 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
          <span>Market #{marketId}</span>
          <span className="block h-3 w-px bg-[#2A2A2A]" />
          <span className="text-[#E8001D]">{specLabel}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-[#1E1E1E] text-white/55 transition-colors hover:border-[#E8001D] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
      >
        <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden>
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
