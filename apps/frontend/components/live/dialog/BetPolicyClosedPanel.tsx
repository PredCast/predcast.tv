interface BetPolicyClosedPanelProps {
  readonly message: string;
}

export function BetPolicyClosedPanel({ message }: BetPolicyClosedPanelProps) {
  const label = message || "Predictions closed";
  return (
    <div className="flex flex-col items-center gap-4 py-10 text-center">
      <div
        className="font-mono-ctv inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]"
        style={{ background: "rgba(232,0,29,0.08)", border: "1px solid rgba(232,0,29,0.3)", color: "#E8001D" }}
        role="status"
      >
        {label}
      </div>
      <div className="font-display text-[22px] font-extrabold uppercase leading-tight tracking-tight text-white">{label}</div>
      <div className="max-w-[360px] text-[13px] leading-[1.55] text-white/55">
        This market is closed for new predictions while the match is in play. Existing positions stay live and can
        still be claimed once the match resolves.
      </div>
    </div>
  );
}
