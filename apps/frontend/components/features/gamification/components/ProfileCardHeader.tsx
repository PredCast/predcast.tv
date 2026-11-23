import type { ProfileCardDto } from '@chiliztv/shared';

import { displayName } from '@/lib/display/userDisplay';

import { rankLabel, titleLabel } from '../domain/labels';
import { newPlayerDay } from '../domain/levelDisplay';
import { FramedAvatar } from './FramedAvatar';
import { ProfileTag } from './ProfileTag';

interface ProfileCardHeaderProps {
    readonly card: ProfileCardDto;
    readonly accent: string;
    readonly tint: string;
    readonly now: Date;
}

/** Framed avatar, name, title in the rank colour, rank and tags (mockup 04 `.hc__top`). */
export function ProfileCardHeader({ card, accent, tint, now }: ProfileCardHeaderProps) {
    const name = displayName({ username: card.displayName }, card.wallet);
    return (
        <div
            className="flex items-center gap-4 border-b border-[#1E1E1E] py-[18px] pl-[18px] pr-4"
            style={{ background: `radial-gradient(130% 150% at 100% 0%, ${tint} 0%, transparent 60%), #111` }}
        >
            <FramedAvatar
                walletAddress={card.wallet}
                profile={{ username: card.displayName, avatarUrl: card.avatarUrl }}
                frameId={card.frameId}
                level={card.level}
                size={60}
            />
            <div className="min-w-0 flex-1">
                <div className="font-display truncate text-[23px] font-extrabold uppercase leading-none tracking-[-0.005em] text-white">
                    {name}
                </div>
                {card.titleId && (
                    <div
                        className="font-mono-ctv mt-1.5 text-[10px] font-bold uppercase tracking-[0.16em]"
                        style={{ color: accent }}
                    >
                        {titleLabel(card.titleId, card.titleCycleId)}
                    </div>
                )}
                <div className="font-mono-ctv mt-[5px] flex flex-wrap items-center gap-1.5 text-[9px] uppercase tracking-[0.14em] text-white/45">
                    <span>{rankLabel(card.rankTier)} rank</span>
                    {card.tags.map((tag) => (
                        <ProfileTag
                            key={tag}
                            tag={tag}
                            label={tag === 'new' ? `New · day ${newPlayerDay(card.memberSince, now)}` : undefined}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
