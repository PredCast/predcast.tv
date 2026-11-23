'use client';

import { useMemo } from 'react';

import { doubleXpBannerOf, type DoubleXpBannerView } from '@chiliztv/domain/gamification/policies/doubleXpBanner';

import { useCurrentDoubleXp } from '@/hooks/api';

import { useMinuteNow } from './useMinuteNow';

/** Running or announced double XP event (≤ 7 days ahead); null when none, flag off, or before mount. */
export function useDoubleXpBanner(): DoubleXpBannerView | null {
    const { data } = useCurrentDoubleXp();
    const now = useMinuteNow();
    return useMemo(() => {
        if (!data || !now) return null;
        return doubleXpBannerOf(
            { multiplier: data.multiplier, sources: data.sources, startsAt: new Date(data.startsAt), endsAt: new Date(data.endsAt) },
            now,
        );
    }, [data, now]);
}
