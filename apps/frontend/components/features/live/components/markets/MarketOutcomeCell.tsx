import { formatUnits } from "viem";

interface MarketOutcomeCellProps {
  readonly label: string;
  readonly probBps: number;
  readonly outcomePool: bigint;
  readonly assetDecimals: number;
  readonly hasLiquidity: boolean;
  readonly isLead: boolean;
  readonly canBet: boolean;
  readonly onClick: () => void;
}

export function MarketOutcomeCell({
  label,
  probBps,
  outcomePool,
  assetDecimals,
  hasLiquidity,
  isLead,
  canBet,
  onClick,
}: MarketOutcomeCellProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!canBet}
      className={[
        "group relative flex flex-col items-center gap-1.5 overflow-hidden rounded-[10px] border px-3.5 pb-3 pt-3.5 text-center transition-all duration-150",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]",
        hasLiquidity ? "bg-[#1A1A1A]" : "bg-[#141414]",
        isLead ? "border-[#E8001D]" : hasLiquidity ? "border-[#2A2A2A]" : "border-dashed border-[#3A3A3A]",
        canBet
          ? "cursor-pointer hover:-translate-y-px hover:border-solid hover:border-[#E8001D] hover:bg-[#211012]"
          : "cursor-not-allowed opacity-50",
      ].join(" ")}
    >
      {isLead && (
        <span
          className="font-mono-ctv absolute right-2.5 top-2.5 rounded px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.16em] text-[#E8001D] motion-safe:animate-pulse"
          style={{ border: "1px solid rgba(232,0,29,0.5)", background: "rgba(232,0,29,0.12)" }}
        >
          Top
        </span>
      )}
      <span
        className={`font-display max-w-full truncate text-[13px] font-extrabold uppercase leading-none tracking-tight text-white ${isLead ? "px-7" : ""}`}
      >
        {label}
      </span>
      {hasLiquidity ? (
        <span
          className={`font-display text-[30px] font-extrabold leading-[0.9] tracking-[-0.02em] ${isLead ? "text-[#E8001D]" : "text-white"}`}
        >
          {Math.round(probBps / 100)}%
        </span>
      ) : (
        <span className="font-display text-[30px] font-extrabold leading-[0.9] tracking-[-0.02em] text-white/15 transition-colors group-hover:text-[#E8001D]">
          0%
        </span>
      )}
      <span className="font-mono-ctv text-[11px] font-semibold text-white/45">
        {hasLiquidity ? `$${Number(formatUnits(outcomePool, assetDecimals)).toLocaleString()}` : "Set the opening line"}
      </span>
      {canBet && (
        <span className="font-mono-ctv flex translate-y-[3px] items-center justify-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#E8001D] opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100">
          {hasLiquidity ? "Predict" : "Predict first"} <span aria-hidden>→</span>
        </span>
      )}
    </button>
  );
}
