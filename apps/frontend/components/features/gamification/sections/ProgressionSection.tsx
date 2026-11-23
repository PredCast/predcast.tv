'use client';

import type { MyGamificationDto } from '@chiliztv/shared';

import { AchievementsGrid } from '../components/AchievementsGrid';
import { CosmeticsPanel } from '../components/CosmeticsPanel';
import { DoubleXpBannerSlot } from '../components/DoubleXpBannerSlot';
import { HowXpWorksButton } from '../components/HowXpWorksButton';
import { NextTiersList } from '../components/NextTiersList';
import { ProgressionOverview } from '../components/ProgressionOverview';
import { TodayXpList } from '../components/TodayXpList';
import { useProgressionView } from '../hooks/useProgressionView';

interface ProgressionSectionProps {
    /** Owner view; the section is not rendered without it (flag off, no account). */
    readonly me: MyGamificationDto;
}

/** Dashboard Progression (G15): level, streak, today's XP, card cosmetics and every achievement. */
export function ProgressionSection({ me }: ProgressionSectionProps) {
    const view = useProgressionView(me);
    return (
        <section id="progression" aria-labelledby="progression-title" className="relative z-[4] mx-auto max-w-[1400px] px-8 pt-6 sm:px-14">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <div className="font-mono-ctv inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8001D]">
                        <span aria-hidden className="block h-0.5 w-4 bg-[#E8001D]" />
                        Progression
                    </div>
                    <h2
                        id="progression-title"
                        className="font-display m-0 mt-3 uppercase leading-[0.92] tracking-[-0.01em] text-white"
                        style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800 }}
                    >
                        Level, streak <span className="text-[#E8001D]">and card.</span>
                    </h2>
                </div>
                <HowXpWorksButton />
            </div>
            <DoubleXpBannerSlot className="mb-4" />
            <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
                <ProgressionOverview me={me} />
                <div className="grid gap-4">
                    <TodayXpList rows={view.today} checkedInToday={me.checkedInToday} />
                    <NextTiersList items={view.next} />
                </div>
            </div>
            <div className="mt-4">
                <CosmeticsPanel me={me} />
            </div>
            <div className="mt-8">
                <AchievementsGrid items={view.achievements} unlockedCount={view.unlockedCount} />
            </div>
        </section>
    );
}
