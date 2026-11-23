'use client';

import type { PublicProfileDto } from '@chiliztv/shared';

import { displayName } from '@/lib/display/userDisplay';

import { rankLabel, titleLabel } from '../domain/labels';
import { memberSinceLabel, xpBarOf } from '../domain/levelDisplay';
import { rankStyleOf, STREAMER_CARD_TOKENS } from '../domain/rankStyle';
import { showcaseHeading, showcaseTileOf } from '../domain/showcaseDisplay';
import { streakStatsOf } from '../domain/streakDisplay';
import { FramedAvatar } from '../components/FramedAvatar';
import { ProfileTag } from '../components/ProfileTag';
import { ShowcaseTile } from '../components/ShowcaseTile';
import { StreakStat } from '../components/StreakStat';
import { XpBar } from '../components/XpBar';

interface PublicProfileHeroProps {
    readonly profile: PublicProfileDto;
}

/** Big card of the public profile: framed avatar, name, title, rank, tags, XP, streak, showcase. */
export function PublicProfileHero({ profile }: PublicProfileHeroProps) {
    const rank = rankStyleOf(profile.rankTier);
    const isStreamer = profile.tags.includes('streamer');
    const tokens = isStreamer ? STREAMER_CARD_TOKENS : rank;
    const [first, second] = streakStatsOf(profile);
    const name = displayName({ username: profile.displayName }, profile.wallet);

    return (
        <section aria-label={`Profile of ${name}`} className="overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#111]">
            <div
                className="flex flex-col gap-6 border-b border-[#1E1E1E] p-6 sm:flex-row sm:items-center sm:p-8"
                style={{ background: `radial-gradient(130% 150% at 100% 0%, ${tokens.tint} 0%, transparent 60%), #111` }}
            >
                <FramedAvatar
                    walletAddress={profile.wallet}
                    profile={{ username: profile.displayName, avatarUrl: profile.avatarUrl }}
                    frameId={profile.frameId}
                    level={profile.level}
                    size={120}
                />
                <div className="min-w-0 flex-1">
                    <div className="font-mono-ctv inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8001D]">
                        <span aria-hidden className="block h-0.5 w-4 bg-[#E8001D]" />
                        Player profile
                    </div>
                    <h1
                        className="font-display m-0 mt-3 truncate uppercase leading-[0.9] tracking-[-0.01em] text-white"
                        style={{ fontSize: 'clamp(38px, 5vw, 60px)', fontWeight: 800 }}
                    >
                        {name}
                    </h1>
                    {profile.titleId && (
                        <div className="font-mono-ctv mt-2 text-[12px] font-bold uppercase tracking-[0.16em]" style={{ color: tokens.accent }}>
                            {titleLabel(profile.titleId, profile.titleCycleId)}
                        </div>
                    )}
                    <div className="font-mono-ctv mt-2.5 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-white/45">
                        <span>Level {profile.level} · {rankLabel(profile.rankTier)} rank</span>
                        {profile.tags.map((tag) => (
                            <ProfileTag key={tag} tag={tag} />
                        ))}
                        <span>· Member since {memberSinceLabel(profile.memberSince)}</span>
                    </div>
                </div>
            </div>
            <div className="grid gap-0 sm:grid-cols-[1.4fr_1fr]">
                <div className="border-b border-[#1E1E1E] px-6 py-5 sm:border-b-0 sm:border-r sm:px-8">
                    <XpBar view={xpBarOf(profile)} fill={isStreamer ? tokens.accent : rank.bar} />
                </div>
                <div className="grid grid-cols-2">
                    <StreakStat stat={first} className="pl-6" />
                    <StreakStat stat={second} className="border-l border-[#1E1E1E] pl-4" />
                </div>
            </div>
            {profile.showcase.length > 0 && (
                <div className="border-t border-[#1E1E1E] px-6 py-5 sm:px-8">
                    <div className="font-mono-ctv text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">
                        {showcaseHeading(profile.showcaseSlots)}
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                        {profile.showcase.map((item) => {
                            const tile = showcaseTileOf(item);
                            return <ShowcaseTile key={tile.key} tile={tile} wide />;
                        })}
                    </div>
                </div>
            )}
        </section>
    );
}
