import {
    CalendarDays,
    CircleCheck,
    Crown,
    Eye,
    Flag,
    Footprints,
    Gift,
    Globe,
    Heart,
    LayoutGrid,
    MessageSquare,
    Mic,
    Trophy,
} from 'lucide-react';

import type { AchievementIconKey } from '../domain/showcaseDisplay';

const ICONS: Readonly<Record<AchievementIconKey, typeof Trophy>> = {
    steps: Footprints,
    calendar: CalendarDays,
    check: CircleCheck,
    grid: LayoutGrid,
    globe: Globe,
    trophy: Trophy,
    crown: Crown,
    eye: Eye,
    chat: MessageSquare,
    heart: Heart,
    gift: Gift,
    mic: Mic,
    flag: Flag,
};

interface AchievementIconProps {
    readonly icon: AchievementIconKey;
    readonly className?: string;
}

/** Stroke icon of an achievement family (lucide, same set as mockup 04). */
export function AchievementIcon({ icon, className = '' }: AchievementIconProps) {
    const Icon = ICONS[icon];
    return <Icon aria-hidden className={className} strokeWidth={2} />;
}
