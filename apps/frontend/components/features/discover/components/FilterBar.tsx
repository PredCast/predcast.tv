"use client";

import { SORT_OPTIONS, type LeagueDto, type MatchTab, type SortMode } from "../domain";

export interface TabDescriptor {
  key: MatchTab;
  label: string;
  count?: number;
}

interface FilterBarProps {
  tabs: TabDescriptor[];
  activeTab: MatchTab;
  onTab: (t: MatchTab) => void;
  leagues: LeagueDto[];
  activeLeague: string | null;
  onLeague: (key: string | null) => void;
  sortMode: SortMode;
  onSort: (s: SortMode) => void;
}

/**
 * Stable key for league filtering — pairs id and name to avoid collisions
 * if the API ever returns reused ids across competitions.
 */
export const leagueKey = (l: LeagueDto): string =>
  `${l.league.id}_${l.league.name}`;

/**
 * Sticky discover filter bar: status tabs (All / Live / Upcoming / Finished),
 * a Time/Pool sort, and a horizontally-scrollable league row. Day grouping is
 * handled by the Upcoming section's day bands, so there is no day filter here.
 */
export function FilterBar({
  tabs,
  activeTab,
  onTab,
  leagues,
  activeLeague,
  onLeague,
  sortMode,
  onSort,
}: FilterBarProps) {
  return (
    <div className="sticky top-0 z-[5] border-y border-[#1E1E1E] bg-[#111]/[0.92] backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1400px] flex-col px-8 sm:px-14">
        {/* Row 1: status tabs + sort */}
        <div className="flex flex-col items-start justify-between gap-3 py-3.5 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Match status">
            {tabs.map((t) => {
              const active = activeTab === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onTab(t.key)}
                  className="font-mono-ctv inline-flex items-center gap-2 rounded-md border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
                  style={{
                    borderColor: active ? "#E8001D" : "#2A2A2A",
                    background: active ? "rgba(232,0,29,0.09)" : "transparent",
                    color: active ? "#fff" : "rgba(255,255,255,0.65)",
                  }}
                >
                  {t.key === "live" && (
                    <span
                      className="ctv-pulse-dot inline-block h-[5px] w-[5px] rounded-full bg-[#E8001D]"
                      style={{ boxShadow: "0 0 6px #E8001D" }}
                    />
                  )}
                  {t.label}
                  {typeof t.count === "number" && t.count > 0 && (
                    <span
                      className="ml-1 inline-flex h-[18px] min-w-[20px] items-center justify-center rounded-sm px-1 text-[9px] font-bold tabular-nums"
                      style={{
                        background: active ? "rgba(232,0,29,0.22)" : "#1A1A1A",
                        color: active ? "#E8001D" : "rgba(255,255,255,0.65)",
                      }}
                    >
                      {t.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="font-mono-ctv hidden text-[10px] uppercase tracking-[0.16em] text-white/45 sm:inline">
              Sort
            </span>
            {SORT_OPTIONS.map((s) => {
              const active = sortMode === s.value;
              return (
                <button
                  key={s.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onSort(s.value)}
                  className="font-mono-ctv rounded-md border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
                  style={{
                    borderColor: active ? "#E8001D" : "#2A2A2A",
                    color: active ? "#fff" : "rgba(255,255,255,0.65)",
                    background: active ? "rgba(232,0,29,0.08)" : "transparent",
                  }}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 2: leagues */}
        <div className="-mx-2 flex items-center gap-2 overflow-x-auto pb-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            type="button"
            aria-pressed={activeLeague === null}
            onClick={() => onLeague(null)}
            className="font-mono-ctv ml-2 flex-shrink-0 rounded-md border px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
            style={{
              borderColor: activeLeague === null ? "#E8001D" : "#2A2A2A",
              background: activeLeague === null ? "rgba(232,0,29,0.08)" : "transparent",
              color: activeLeague === null ? "#fff" : "rgba(255,255,255,0.65)",
            }}
          >
            All leagues
          </button>
          {leagues.map((l) => {
            const key = leagueKey(l);
            const active = activeLeague === key;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={active}
                onClick={() => onLeague(key)}
                className="font-mono-ctv flex flex-shrink-0 items-center gap-2 rounded-md border px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
                style={{
                  borderColor: active ? "#E8001D" : "#2A2A2A",
                  background: active ? "rgba(232,0,29,0.08)" : "transparent",
                  color: active ? "#fff" : "rgba(255,255,255,0.65)",
                }}
              >
                {l.league.logoUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={l.league.logoUrl}
                    alt=""
                    className="h-3.5 w-3.5 object-contain"
                    style={{ filter: "grayscale(100%) brightness(1.4)" }}
                  />
                )}
                {l.league.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
