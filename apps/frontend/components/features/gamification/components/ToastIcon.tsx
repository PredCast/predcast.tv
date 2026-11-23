import { Flame, Snowflake, TrendingUp, Zap } from 'lucide-react';

import type { ToastIconKey } from '../domain/toastView';
import { AchievementIcon } from './AchievementIcon';

const EXTRA = { up: TrendingUp, snow: Snowflake, flame: Flame, zap: Zap } as const;

interface ToastIconProps {
    readonly icon: ToastIconKey;
    readonly className?: string;
}

/** Toast glyph: an achievement family icon, or level-up / freeze / check-in / XP. */
export function ToastIcon({ icon, className = '' }: ToastIconProps) {
    if (icon in EXTRA) {
        const Icon = EXTRA[icon as keyof typeof EXTRA];
        return <Icon aria-hidden className={className} strokeWidth={2} />;
    }
    return <AchievementIcon icon={icon as Exclude<ToastIconKey, keyof typeof EXTRA>} className={className} />;
}
