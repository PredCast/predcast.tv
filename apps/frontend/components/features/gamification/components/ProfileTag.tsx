import type { ProfileTagDto } from '@chiliztv/shared';

import { tagLabel } from '../domain/labels';

const TAG_COLORS: Readonly<Record<ProfileTagDto, string>> = {
    new: '#2dd4a4',
    streamer: '#FF1737',
    crown: '#F5C518',
    founder: 'rgba(255,255,255,0.8)',
};

interface ProfileTagProps {
    readonly tag: ProfileTagDto;
    /** Replaces the default label ("New · day 5"). */
    readonly label?: string;
    readonly className?: string;
}

/** Outlined mono tag: New, Streamer, Crown, Founder (mockup 04). */
export function ProfileTag({ tag, label, className = '' }: ProfileTagProps) {
    return (
        <span
            className={`font-mono-ctv inline-block rounded-[3px] border border-current px-[5px] py-0.5 text-[8px] font-bold uppercase leading-[1.2] tracking-[0.16em] ${className}`}
            style={{ color: TAG_COLORS[tag] }}
        >
            {label ?? tagLabel(tag)}
        </span>
    );
}
