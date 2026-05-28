"use client";

import { getCountdown, type FlatMatch } from "../domain";
import { TeamFormBadge } from "@/components/shared/TeamFormBadge";
import { TeamLogo } from "./TeamLogo";

const SEED_GREEN = "#2dd4a4";

/**
 * Dashed empty-pool card used by {@link BeFirstStrip}. Surfaces upcoming
 * matches whose WINNER pool is still at zero — the user's stake will set
 * the first implied probability. Shows each team's recent form (W/D/L)
 * as the only neutral pre-bet signal.
 */
export function BeFirstCard({
    match,
    now,
    onPredict,
}: {
    match: FlatMatch;
    now: Date | null;
    onPredict?: (match: FlatMatch) => void;
}) {
    return (
        <button
            type="button"
            onClick={() => onPredict?.(match)}
            className="group relative flex flex-col gap-4 rounded-xl border border-dashed border-[#2A2A2A] bg-[#0e0e0e] p-5 text-left transition-all hover:-translate-y-px hover:border-[#2dd4a4]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4a4]"
        >
            <div className="flex items-center justify-between gap-2">
                <span className="font-mono-ctv truncate text-[9px] uppercase tracking-[0.18em] text-white/45">
                    {match.leagueName}
                </span>
                <span className="font-mono-ctv text-[10px] uppercase tracking-[0.18em] text-white/45">
                    {getCountdown(match.kickoffAt, now)}
                </span>
            </div>

            <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col items-start gap-1">
                    <TeamLogo name={match.homeTeam.name} logo={match.homeTeam.logoUrl} size={32} />
                    <span className="font-display max-w-[120px] truncate text-[14px] font-bold uppercase tracking-[-0.005em] text-white">
                        {match.homeTeam.name}
                    </span>
                    <TeamFormBadge form={match.homeForm} size="sm" />
                </div>
                <span className="font-mono-ctv text-[10px] uppercase tracking-[0.18em] text-white/35">
                    vs
                </span>
                <div className="flex flex-col items-end gap-1">
                    <TeamLogo name={match.awayTeam.name} logo={match.awayTeam.logoUrl} size={32} />
                    <span className="font-display max-w-[120px] truncate text-right text-[14px] font-bold uppercase tracking-[-0.005em] text-white">
                        {match.awayTeam.name}
                    </span>
                    <TeamFormBadge form={match.awayForm} size="sm" />
                </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-[#1A1A1A] pt-3">
                <span className="font-mono-ctv text-[10px] uppercase tracking-[0.14em] text-white/45">
                    Empty pool — your stake sets the first price.
                </span>
            </div>

            <div className="font-mono-ctv mt-1 flex items-center justify-between text-[10px] uppercase tracking-[0.14em]">
                <span style={{ color: SEED_GREEN }}>Seed the pool</span>
                <span className="text-white/85 transition-colors group-hover:text-white">Stake →</span>
            </div>
        </button>
    );
}
