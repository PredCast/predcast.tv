'use client';

import { useMemo } from 'react';

import { closestNextTiers } from '@chiliztv/domain/gamification/policies/progressionView';
import type { MyGamificationDto } from '@chiliztv/shared';

import { achievementProgressView, todayXpRows } from '../domain/progressionDisplay';

const NEXT_TIERS = 3;

/** Display models of the Progression section, derived from the owner view. */
export function useProgressionView(me: MyGamificationDto) {
    return useMemo(() => {
        const achievements = me.achievements.map(achievementProgressView);
        const byId = new Map(achievements.map((a) => [a.key, a]));
        const next = closestNextTiers(me.achievements, NEXT_TIERS).flatMap((p) => byId.get(p.achievementId) ?? []);
        return {
            achievements,
            unlockedCount: achievements.filter((a) => a.unlocked).length,
            next,
            today: todayXpRows(me.todayXpBySource),
        };
    }, [me.achievements, me.todayXpBySource]);
}
