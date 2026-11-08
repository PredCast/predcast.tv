const TONES = {
  default: "text-white",
  green: "text-[#2dd4a4]",
  muted: "text-white/45",
} as const;

interface PredictionStatProps {
  readonly label: string;
  readonly value: string;
  readonly hint?: string;
  readonly tone?: keyof typeof TONES;
}

export function PredictionStat({ label, value, hint, tone = "default" }: PredictionStatProps) {
  return (
    <div className="min-w-0">
      <dt className="font-mono-ctv text-[9px] uppercase tracking-[0.16em] text-white/45">{label}</dt>
      <dd className={`font-mono-ctv mt-1 truncate text-[14px] font-bold tabular-nums ${TONES[tone]}`}>{value}</dd>
      {hint && <dd className="mt-0.5 text-[10px] leading-tight text-white/35">{hint}</dd>}
    </div>
  );
}
