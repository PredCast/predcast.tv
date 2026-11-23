'use client';

import { useDoubleXpBanner } from '../hooks/useDoubleXpBanner';
import { DoubleXpBanner } from './DoubleXpBanner';

interface DoubleXpBannerSlotProps {
    /** Layout wrapper, rendered only with a banner so pages stay unchanged without an event. */
    readonly containerClassName?: string;
    readonly className?: string;
}

/** Banner of the running or announced double XP event; nothing otherwise (flag off included). */
export function DoubleXpBannerSlot({ containerClassName, className }: DoubleXpBannerSlotProps) {
    const view = useDoubleXpBanner();
    if (!view) return null;
    const banner = <DoubleXpBanner view={view} className={className} />;
    return containerClassName ? <div className={containerClassName}>{banner}</div> : banner;
}
