"use client";

import { CalendarClock } from "lucide-react";

export interface ScheduledStream {
  id: string;
  startsAt: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
}

interface StreamerScheduleProps {
  streamerId?: string;
  streamerName: string;
  schedule?: ScheduledStream[];
}

function formatWhen(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffH = Math.floor(diffMs / 3_600_000);

  if (diffH < 0) return "Ended";
  if (diffH < 24) {
    return date.toLocaleString("en-GB", { hour: "2-digit", minute: "2-digit" });
  }
  return date.toLocaleString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function StreamerSchedule({ streamerId, streamerName, schedule = [] }: StreamerScheduleProps) {
  if (!streamerId) {
    return (
      <div
        className="px-4 py-8 text-center text-[12px]"
        style={{ color: "#555", fontFamily: "'Barlow', sans-serif" }}
      >
        Pick a stream to see their upcoming schedule.
      </div>
    );
  }

  if (schedule.length === 0) {
    return (
      <div className="px-4 py-8 flex flex-col items-center gap-3">
        <CalendarClock size={20} style={{ color: "#444" }} />
        <p
          className="text-[12px] text-center"
          style={{ color: "#555", fontFamily: "'Barlow', sans-serif" }}
        >
          @{streamerName} has not scheduled any upcoming streams.
        </p>
      </div>
    );
  }

  return (
    <div>
      {schedule.map((s, i) => (
        <div
          key={s.id}
          className="flex items-center gap-3 px-4 py-3"
          style={{ borderTop: i > 0 ? "1px solid #1E1E1E" : "none" }}
        >
          <div
            className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
            style={{ background: "#1E1E1E" }}
          >
            <CalendarClock size={14} style={{ color: "#888" }} />
          </div>

          <div className="flex-1 min-w-0">
            <div
              className="text-[13px] font-bold uppercase truncate"
              style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {s.homeTeam} vs {s.awayTeam}
            </div>
            <div
              className="text-[11px] truncate mt-0.5"
              style={{ color: "#555", fontFamily: "'Barlow', sans-serif" }}
            >
              {s.league}
            </div>
          </div>

          <span
            className="text-[11px] flex-shrink-0"
            style={{ color: "#888", fontFamily: "'JetBrains Mono', monospace" }}
          >
            {formatWhen(s.startsAt)}
          </span>
        </div>
      ))}
    </div>
  );
}
