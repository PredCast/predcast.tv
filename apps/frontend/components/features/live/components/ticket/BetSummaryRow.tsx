const TONES = {
  default: "text-white",
  gold: "text-[#F5C518]",
  green: "text-[#2dd4a4]",
  red: "text-[#E8001D]",
} as const;

interface BetSummaryRowProps {
  readonly label: string;
  readonly value: string;
  readonly hint?: string;
  readonly tone?: keyof typeof TONES;
}

export function BetSummaryRow({ label, value, hint, tone = "default" }: BetSummaryRowProps) {
  return (
    <div className="flex items-start justify-between gap-3">
      <dt className="min-w-0">
        <span className="font-mono-ctv text-[10px] uppercase tracking-[0.14em] text-white/55">{label}</span>
        {hint && <span className="block text-[10px] leading-snug text-white/35">{hint}</span>}
      </dt>
      <dd className={`font-mono-ctv shrink-0 text-[12px] font-bold tabular-nums ${TONES[tone]}`}>{value}</dd>
    </div>
  );
}
