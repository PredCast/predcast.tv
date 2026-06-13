import { groupMatchesByDay, type FlatMatch } from "../domain";
import { Eyebrow } from "../components";
import { DayBand } from "./DayBand";

interface UpcomingSectionProps {
  matches: FlatMatch[];
  now: Date | null;
  onPredict: (m: FlatMatch) => void;
}

/** "Upcoming" — every pre-kickoff match grouped into kickoff-day bands. */
export function UpcomingSection({ matches, now, onPredict }: UpcomingSectionProps) {
  const days = groupMatchesByDay(matches, now);

  return (
    <section className="mb-14">
      <div className="mb-6 flex items-end justify-between gap-5">
        <div>
          <div className="mb-3.5">
            <Eyebrow dim>By kickoff day</Eyebrow>
          </div>
          <h2 className="font-display text-[clamp(30px,3.6vw,44px)] font-extrabold uppercase leading-[0.92] tracking-[-0.01em] text-white">
            Upcoming
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono-ctv text-[10px] uppercase tracking-[0.16em] text-white/45">
            Matches
          </span>
          <span className="font-display text-[15px] font-bold text-white">{matches.length}</span>
        </div>
      </div>
      <div>
        {days.map((d) => (
          <DayBand key={d.key} group={d} now={now} onPredict={onPredict} />
        ))}
      </div>
    </section>
  );
}
