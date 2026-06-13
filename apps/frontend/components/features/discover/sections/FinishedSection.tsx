import { fmtUsdcCompact, type FlatMatch } from "../domain";
import { Eyebrow, MatchCardDonut } from "../components";

interface FinishedSectionProps {
  matches: FlatMatch[];
  now: Date | null;
  onPredict: (m: FlatMatch) => void;
  /** Resolves a match to its settled pool (raw USDC) for the section total. */
  poolOf: (m: FlatMatch) => bigint;
}

/** "Finished" — settled matches in their own band, away from the live grid. */
export function FinishedSection({ matches, now, onPredict, poolOf }: FinishedSectionProps) {
  const settledTotal = matches.reduce((sum, m) => sum + poolOf(m), BigInt(0));

  return (
    <section className="mb-14">
      <div className="mb-6 flex items-end justify-between gap-5">
        <div>
          <div className="mb-3.5">
            <Eyebrow dim>Settled · results in</Eyebrow>
          </div>
          <h2 className="font-display text-[clamp(30px,3.6vw,44px)] font-extrabold uppercase leading-[0.92] tracking-[-0.01em] text-white">
            Finished
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono-ctv text-[10px] uppercase tracking-[0.16em] text-white/45">
            Settled pool
          </span>
          <span className="font-display text-[15px] font-bold text-white">
            {fmtUsdcCompact(settledTotal)}
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
