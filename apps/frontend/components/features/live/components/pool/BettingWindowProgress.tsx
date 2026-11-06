import { fallbackBettingWindow, progress, remainingMs } from "@chiliztv/domain/betting/bettingWindow";
import { DEFAULT_KICKOFF_BUFFER_SEC } from "@chiliztv/domain/matches/policies/BettablePolicy";

import { formatCountdown } from "../../domain/countdown";

interface BettingWindowProgressProps {
  readonly kickoffAt: string;
  /** `null` on the server render: the bar renders empty to stay hydration-safe. */
  readonly now: Date | null;
  /** Market no longer Open on-chain: the window is shut whatever the kickoff time says. */
  readonly marketClosed?: boolean;
}

/** "Betting closes at kickoff" bar — the parimutuel analogue of a bonding-curve progress. */
export function BettingWindowProgress({ kickoffAt, now, marketClosed = false }: BettingWindowProgressProps) {
  const window = fallbackBettingWindow(new Date(kickoffAt), DEFAULT_KICKOFF_BUFFER_SEC);
  const left = marketClosed ? 0 : now ? remainingMs(window.closesAt, now) : null;
  const pct = marketClosed ? 100 : now ? Math.round(progress(window.opensAt, window.closesAt, now) * 100) : 0;
  const closed = left === 0;

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="font-mono-ctv text-[9px] uppercase tracking-[0.16em] text-white/45">Betting closes at kickoff</span>
        <span className={`font-mono-ctv text-[10px] font-bold tabular-nums ${closed ? "text-[#E8001D]" : "text-white"}`}>
          {left === null ? "—" : closed ? "Closed" : formatCountdown(left)}
        </span>
      </div>
      <div
        role="progressbar"
        aria-label="Betting window elapsed"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        className="h-2 w-full overflow-hidden rounded-full bg-[#1A1A1A]"
      >
        <span className="block h-full rounded-full bg-[#E8001D] transition-[width] motion-reduce:transition-none" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
