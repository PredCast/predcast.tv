"use client";

import type { MatchDay } from "../domain";

interface DayFilterRowProps {
  days: MatchDay[];
  activeDay: string | null;
  onDay: (key: string | null) => void;
}

/**
 * Horizontal strip of calendar-day chips ("All days / Today / Tomorrow /
 * Thu 12 Jun"), same visual grammar as the league chips row in
 * {@link FilterBar}. Hidden when matches span fewer than two days.
 */
export function DayFilterRow({ days, activeDay, onDay }: DayFilterRowProps) {
  if (days.length < 2) return null;

  const chipStyle = (active: boolean) => ({
    borderColor: active ? "#E8001D" : "#2A2A2A",
    background: active ? "rgba(232,0,29,0.08)" : "transparent",
    color: active ? "#fff" : "rgba(255,255,255,0.55)",
  });

  return (
    <div className="-mx-2 flex items-center gap-2 overflow-x-auto border-b border-[#1E1E1E] py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <span className="font-mono-ctv ml-2 flex-shrink-0 text-[10px] uppercase tracking-[0.16em] text-white/45">
        Day
      </span>
      <button
        type="button"
        onClick={() => onDay(null)}
        className="font-mono-ctv flex-shrink-0 rounded-md border px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
        style={chipStyle(activeDay === null)}
      >
        All days
      </button>
      {days.map((d) => {
        const active = activeDay === d.key;
        return (
          <button
            key={d.key}
            type="button"
            onClick={() => onDay(active ? null : d.key)}
            className="font-mono-ctv flex flex-shrink-0 items-center gap-1.5 rounded-md border px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
            style={chipStyle(active)}
          >
            {d.label}
            <span
              className="inline-flex h-[16px] min-w-[18px] items-center justify-center rounded-sm px-1 text-[9px] font-bold"
              style={{
                background: active ? "rgba(232,0,29,0.2)" : "#1A1A1A",
                color: active ? "#E8001D" : "rgba(255,255,255,0.65)",
              }}
            >
              {d.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
