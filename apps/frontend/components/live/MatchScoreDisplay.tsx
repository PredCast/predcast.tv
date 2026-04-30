"use client";

import Image from "next/image";
import { useState, useMemo } from "react";

interface MatchScoreDisplayProps {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  homeLogo?: string;
  awayLogo?: string;
  /** Raw status from the API (e.g. "1H", "2H", "NS", "FT"). */
  status?: string;
  /** ISO kickoff time — used to render countdown for upcoming matches. */
  kickoffAt?: string;
  /** League label rendered above the score (optional). */
  leagueName?: string;
}

const LIVE_STATUSES = new Set(["1H", "2H", "ET", "BT", "P", "HT", "LIVE"]);
const ENDED_STATUSES = new Set(["FT", "AET", "PEN", "Match Finished"]);

function formatKickoff(iso?: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function TeamCrest({ name, logo }: { name: string; logo?: string }) {
  const [err, setErr] = useState(false);
  return (
    <div
      className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
      style={{ background: "#1E1E1E", border: "1px solid #2A2A2A" }}
    >
      {logo && !err ? (
        <Image
          src={logo}
          alt={name}
          width={44}
          height={44}
          className="object-contain"
          onError={() => setErr(true)}
        />
      ) : (
        <span
          className="text-[14px] font-bold uppercase"
          style={{ color: "#888", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {name.slice(0, 3)}
        </span>
      )}
    </div>
  );
}

export function MatchScoreDisplay({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  homeLogo,
  awayLogo,
  status,
  kickoffAt,
  leagueName,
}: MatchScoreDisplayProps) {
  const isLive = !!status && LIVE_STATUSES.has(status);
  const isEnded = !!status && ENDED_STATUSES.has(status);
  const isUpcoming = !isLive && !isEnded;

  const statusBadge = useMemo(() => {
    if (isLive) {
      return (
        <div className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#00C853", animation: "pulse 1.4s infinite" }}
          />
          <span
            className="text-[11px] font-bold tracking-[0.1em] uppercase"
            style={{ color: "#00C853", fontFamily: "'Barlow', sans-serif" }}
          >
            Live
          </span>
        </div>
      );
    }
    if (isEnded) {
      return (
        <span
          className="text-[11px] font-bold tracking-[0.1em] uppercase"
          style={{ color: "#888", fontFamily: "'Barlow', sans-serif" }}
        >
          Final
        </span>
      );
    }
    return (
      <span
        className="text-[11px] font-bold tracking-[0.1em] uppercase"
        style={{ color: "#F5C518", fontFamily: "'Barlow', sans-serif" }}
      >
        Upcoming
      </span>
    );
  }, [isLive, isEnded]);

  return (
    <div className="w-full flex items-center justify-between gap-4">
      {/* Home */}
      <div className="flex items-center gap-3 flex-1 min-w-0 justify-end">
        <span
          className="text-[16px] sm:text-[18px] font-bold uppercase truncate text-right"
          style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {homeTeam}
        </span>
        <TeamCrest name={homeTeam} logo={homeLogo} />
      </div>

      {/* Score / status */}
      <div className="flex flex-col items-center gap-1 flex-shrink-0 px-2 sm:px-4">
        {leagueName && (
          <span
            className="text-[10px] font-semibold tracking-[0.1em] uppercase"
            style={{ color: "#555", fontFamily: "'Barlow', sans-serif" }}
          >
            {leagueName}
          </span>
        )}
        {isUpcoming ? (
          <>
            <span
              className="text-[15px] font-semibold"
              style={{ color: "#555", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              vs
            </span>
            <span
              className="text-[11px]"
              style={{ color: "#888", fontFamily: "'JetBrains Mono', monospace" }}
            >
              {formatKickoff(kickoffAt)}
            </span>
          </>
        ) : (
          <>
            <span
              className="font-bold leading-none tabular-nums"
              style={{
                fontSize: "32px",
                color: "#fff",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {homeScore} <span style={{ color: "#444" }}>—</span> {awayScore}
            </span>
            <div className="mt-1">{statusBadge}</div>
          </>
        )}
        {isUpcoming && <div className="mt-1">{statusBadge}</div>}
      </div>

      {/* Away */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <TeamCrest name={awayTeam} logo={awayLogo} />
        <span
          className="text-[16px] sm:text-[18px] font-bold uppercase truncate"
          style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {awayTeam}
        </span>
      </div>
    </div>
  );
}
