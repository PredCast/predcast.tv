'use client';

import { useMemo } from 'react';
import type { MyGamificationDto } from '@chiliztv/shared';

import { frameOptions, showcaseOptions, titleOptions } from '../domain/cosmeticsOptions';
import { rankStyleOf } from '../domain/rankStyle';
import { useCosmeticsDraft } from '../hooks/useCosmeticsDraft';
import { FramePicker } from './FramePicker';
import { ShowcasePicker } from './ShowcasePicker';
import { TitlePicker } from './TitlePicker';

interface CosmeticsPanelProps {
    readonly me: MyGamificationDto;
}

/** Title, frame and showcase shown on the public card; saved together. */
export function CosmeticsPanel({ me }: CosmeticsPanelProps) {
    const { draft, dirty, saving, setTitle, setFrame, toggleTile, reset, save } = useCosmeticsDraft(me);
    const titles = useMemo(() => titleOptions(me.ownedTitleIds, me.titleCycleId), [me.ownedTitleIds, me.titleCycleId]);
    const frames = useMemo(() => frameOptions(me.ownedFrameIds), [me.ownedFrameIds]);
    const tiles = useMemo(() => showcaseOptions(me.achievements), [me.achievements]);
    const accent = rankStyleOf(me.rankTier).accent;

    return (
        <div className="rounded-xl border border-[#1E1E1E] bg-[#111]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1E1E1E] px-6 py-4">
                <div>
                    <h3 className="font-display m-0 text-[22px] font-extrabold uppercase leading-none text-white">Your card</h3>
                    <p className="m-0 mt-1 text-[12px] font-light text-white/45">What other players see when they hover your name.</p>
                </div>
                <div className="flex items-center gap-2">
                    {dirty && (
                        <button
                            type="button"
                            onClick={reset}
                            disabled={saving}
                            className="font-mono-ctv rounded-md border border-[#2A2A2A] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/65 transition-colors hover:border-[#3A3A3A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={save}
                        disabled={!dirty || saving}
                        className="font-mono-ctv rounded-md bg-[#E8001D] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#FF1737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] disabled:cursor-not-allowed disabled:bg-[#2A2A2A] disabled:text-white/45"
                    >
                        {saving ? 'Saving…' : 'Save'}
                    </button>
                </div>
            </div>
            <div className="grid gap-7 px-6 py-5">
                <TitlePicker options={titles} value={draft.titleId} accent={accent} onChange={setTitle} />
                <FramePicker options={frames} value={draft.frameId} wallet={me.wallet} profile={{ username: me.displayName, avatarUrl: me.avatarUrl }} level={me.level} onChange={setFrame} />
                <ShowcasePicker options={tiles} selected={draft.showcase} slots={me.showcaseSlots} onToggle={toggleTile} />
            </div>
        </div>
    );
}
