"use client";

interface SettledFooterProps {
  /** Pre-formatted settled pool, e.g. `$7.4K` or `—`. */
  pool: string;
  onView: () => void;
}

/**
 * Footer for a finished match card — settled pool + a "View result" link.
 * Unlike {@link StakeZone} this is a quiet, non-magnetic row: the match is
 * over, so there is nothing to stake.
 */
export function SettledFooter({ pool, onView }: SettledFooterProps) {
  return (
    <button
      type="button"
      onClick={onView}
      className="group/settled mt-3.5 flex items-center justify-between gap-3 border-t border-[#1E1E1E] pt-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
    >
      <span className="font-mono-ctv text-[10px] uppercase tracking-[0.13em] text-white/65">
        Settled ·{" "}
        <b className="font-display text-[14px] font-bold tracking-[-0.01em] text-white">{pool}</b>
      </span>
      <span className="font-mono-ctv inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.13em] text-white/45 transition-colors group-hover/settled:text-white">
        View result <span aria-hidden>→</span>
      </span>
    </button>
  );
}
