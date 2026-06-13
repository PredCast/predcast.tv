import { fmtViewers, type FlatMatch } from "../domain";
import { MatchCardDonut } from "../components";

interface LiveSectionProps {
  matches: FlatMatch[];
  now: Date | null;
  onPredict: (m: FlatMatch) => void;
}

/** "Live now" band — live matches in a 3-col grid, headlined by viewer count. */
export function LiveSection({ matches, now, onPredict }: LiveSectionProps) {
  const watching = matches.reduce(
    (sum, m) => sum + m.streamsPreview.reduce((a, sp) => a + sp.viewers, 0),
    0,
  );

  return (
    <section className="mb-14">
      <div className="mb-6 flex items-end justify-between gap-5">
        <h2 className="font-display flex items-center gap-3.5 text-[clamp(30px,3.6vw,44px)] font-extrabold uppercase leading-[0.92] tracking-[-0.01em] text-white">
          <span
            className="ctv-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[#E8001D]"
            style={{ boxShadow: "0 0 8px #E8001D" }}
          />
          Live now
        </h2>
        <div className="flex items-center gap-2">
          <span className="font-mono-ctv text-[10px] uppercase tracking-[0.16em] text-white/45">
            Watching
          </span>
          <span className="font-display text-[15px] font-bold text-white">
            {fmtViewers(watching)}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {matches.map((m) => (
          <MatchCardDonut key={m.id} match={m} now={now} onPredict={onPredict} />
        ))}
      </div>
    </section>
  );
}
