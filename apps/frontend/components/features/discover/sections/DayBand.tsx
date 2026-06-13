import type { DayGroup, FlatMatch } from "../domain";
import { MatchCardDonut } from "../components";

interface DayBandProps {
  group: DayGroup;
  now: Date | null;
  onPredict: (m: FlatMatch) => void;
}

/** One kickoff-day band inside the Upcoming section: a labelled rule + grid. */
export function DayBand({ group, now, onPredict }: DayBandProps) {
  const count = group.matches.length;
  return (
    <div className="mb-8 last:mb-0">
      <div className="mb-4 flex items-center gap-3.5 border-b border-[#1E1E1E] pb-3">
        <span
          className={`font-display text-[19px] font-extrabold uppercase tracking-[0.01em] ${
            group.isToday ? "text-[#E8001D]" : "text-white"
          }`}
        >
          {group.label}
        </span>
        <span className="font-mono-ctv text-[10px] uppercase tracking-[0.16em] text-white/45">
          {group.date}
        </span>
        <span className="h-px flex-1 bg-[#1E1E1E]" />
        <span className="font-mono-ctv text-[9.5px] uppercase tracking-[0.14em] text-white/35">
          {count} {count === 1 ? "match" : "matches"}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {group.matches.map((m) => (
          <MatchCardDonut key={m.id} match={m} now={now} onPredict={onPredict} />
        ))}
      </div>
    </div>
  );
}
