'use client';

import { useState } from 'react';
import type { ProfileCardDto } from '@chiliztv/shared';

import { displayName } from '@/lib/display/userDisplay';

import { xpBarOf } from '../domain/levelDisplay';
import { rankStyleOf, STREAMER_CARD_TOKENS } from '../domain/rankStyle';
import { streakStatsOf } from '../domain/streakDisplay';
import { ProfileCardFooter } from './ProfileCardFooter';
import { ProfileCardHeader } from './ProfileCardHeader';
import { ProfileCardShowcase } from './ProfileCardShowcase';
import { StreakStat } from './StreakStat';
import { XpBar } from './XpBar';

interface ProfileHoverCardProps {
    readonly card: ProfileCardDto;
    readonly reportable: boolean;
}

/** Hover card of mockup 04: never an amount, a private achievement nor another wallet. */
export function ProfileHoverCard({ card, reportable }: ProfileHoverCardProps) {
    // Rendered only after a user interaction, never on the server.
    const [now] = useState(() => new Date());
    const rank = rankStyleOf(card.rankTier);
    const isStreamer = card.tags.includes('streamer');
    const tokens = isStreamer ? STREAMER_CARD_TOKENS : rank;
    const [first, second] = streakStatsOf(card);

    return (
        <article
            aria-label={`Profile card of ${displayName({ username: card.displayName }, card.wallet)}`}
            className="w-[320px] max-w-[calc(100vw-32px)] overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#111] text-left text-[13px] text-white"
            style={{ boxShadow: '0 18px 48px rgba(0,0,0,0.65)' }}
        >
            <ProfileCardHeader card={card} accent={tokens.accent} tint={tokens.tint} now={now} />
            <div className="border-b border-[#1E1E1E] py-3 pl-[18px] pr-4">
                <XpBar view={xpBarOf(card)} fill={isStreamer ? tokens.accent : rank.bar} />
            </div>
            <div className="grid grid-cols-2 border-b border-[#1E1E1E]">
                <StreakStat stat={first} className="pl-[18px]" />
                <StreakStat stat={second} className="border-l border-[#1E1E1E] pl-3.5" />
            </div>
            <ProfileCardShowcase items={card.showcase} slots={card.showcaseSlots} />
            <ProfileCardFooter wallet={card.wallet} memberSince={card.memberSince} reportable={reportable} />
        </article>
    );
}
