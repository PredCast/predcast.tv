'use client';

import { Avatar } from './Avatar';
import type { FollowedStreamer } from '../hooks/useDashboardStreamers';

interface FollowedStreamerRowProps {
    readonly streamer: FollowedStreamer;
    readonly onWatch?: (s: FollowedStreamer) => void;
    readonly onUnfollow?: (s: FollowedStreamer) => void;
}

/** Compact row in the Streamers tab — square avatar + name + league + Watch/Unfollow CTAs. */
export function FollowedStreamerRow({ streamer, onWatch, onUnfollow }: FollowedStreamerRowProps) {
    return (
        <div className="group flex items-center gap-4 rounded-xl border border-[#1E1E1E] bg-[#111] p-3.5 transition-all hover:-translate-y-px hover:border-[#2A2A2A]">
            <div className="relative flex-shrink-0">
                <Avatar seed={streamer.id} label={streamer.name} size={52} square />
                {streamer.live && (
                    <span
                        aria-hidden
                        className="ctv-pulse-dot absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#E8001D]"
                        style={{ boxShadow: '0 0 0 2px #111, 0 0 8px #E8001D' }}
                    />
                )}
            </div>
            <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                    <div className="font-display truncate text-[15px] font-bold uppercase leading-none tracking-[-0.005em] text-white">
                        {streamer.name}
                    </div>
                    {streamer.live && (
                        <span
                            className="font-mono-ctv inline-flex flex-shrink-0 items-center rounded-sm px-1.5 py-[2px] text-[8px] font-bold uppercase tracking-[0.14em]"
                            style={{ color: '#E8001D', background: 'rgba(232,0,29,0.10)', border: '1px solid rgba(232,0,29,0.4)' }}
                        >
                            Live
                        </span>
                    )}
                </div>
                <div className="font-mono-ctv mt-1.5 truncate text-[10px] uppercase tracking-[0.14em] text-white/45">
                    {streamer.league ?? '—'}
                </div>
            </div>
            <div className="flex flex-shrink-0 items-center gap-1.5">
                <button
                    type="button"
                    onClick={() => onWatch?.(streamer)}
                    className="font-mono-ctv rounded-md border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-all"
                    style={{
                        borderColor: streamer.live ? '#E8001D' : '#2A2A2A',
                        background: streamer.live ? 'rgba(232,0,29,0.10)' : 'transparent',
                        color: streamer.live ? '#fff' : 'rgba(255,255,255,0.65)',
                        boxShadow: streamer.live ? '0 6px 18px rgba(232,0,29,0.18)' : 'none',
                    }}
                >
                    {streamer.live ? 'Watch' : 'Notify'}
                </button>
                <button
                    type="button"
                    onClick={() => onUnfollow?.(streamer)}
                    aria-label={`Unfollow ${streamer.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2A2A2A] text-white/35 transition-colors hover:border-[#E8001D] hover:text-white"
                >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
