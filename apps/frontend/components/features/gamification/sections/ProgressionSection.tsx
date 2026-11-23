'use client';

import { useState } from 'react';

import type { MyGamificationDto } from '@chiliztv/shared';

import { AchievementsGrid } from '../components/AchievementsGrid';
import { CosmeticsPanel } from '../components/CosmeticsPanel';
import { DoubleXpBannerSlot } from '../components/DoubleXpBannerSlot';
import { HowXpWorksButton } from '../components/HowXpWorksButton';
import { NextTiersList } from '../components/NextTiersList';
import { ProgressionOverview } from '../components/ProgressionOverview';
import { ProgressionStrip } from '../components/ProgressionStrip';
import { ProgressionToggle } from '../components/ProgressionToggle';
import { TodayXpList } from '../components/TodayXpList';
import { useProgressionView } from '../hooks/useProgressionView';

interface ProgressionSectionProps {
    /** Owner view; the section is not rendered without it (flag off, no account). */
    readonly me: MyGamificationDto;
}

const DETAILS_ID = 'progression-details';
const TOGGLE_ID = 'progression-toggle';

/** Dashboard Progression (G15): a one-row summary, expanding to level, streak, today's XP, cosmetics and achievements. */
export function ProgressionSection({ me }: ProgressionSectionProps) {
    const view = useProgressionView(me);
    const [expanded, setExpanded] = useState(false);
    // The toggle moves between the strip and the header: focus follows it after the re-render.
    const onToggle = () => {
        setExpanded((open) => !open);
        requestAnimationFrame(() => document.getElementById(TOGGLE_ID)?.focus());
    };
    const toggle = <ProgressionToggle id={TOGGLE_ID} expanded={expanded} controls={DETAILS_ID} onToggle={onToggle} />;

    if (!expanded) {
        return (
            <section id="progression" aria-label="Progression" className="relative z-[4] mx-auto max-w-[1400px] px-8 pb-10 pt-6 sm:px-14">
                <ProgressionStrip me={me} action={toggle} />
            </section>
        );
    }

    return (
        <section id="progression" aria-labelledby="progression-title" className="relative z-[4] mx-auto max-w-[1400px] px-8 pb-10 pt-6 sm:px-14">
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
                <div className="flex flex-wrap gap-2">
                    <HowXpWorksButton />
                    {toggle}
                </div>
            </div>
            <div id={DETAILS_ID}>
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
            </div>
        </section>
    );
}
