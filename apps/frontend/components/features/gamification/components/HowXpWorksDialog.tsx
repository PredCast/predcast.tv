'use client';

import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@chiliztv/ui';

import { HOW_XP_WORKS_TEXT, NO_MONETARY_VALUE_TEXT, xpSourceRows } from '../domain/xpSources';

interface HowXpWorksDialogProps {
    readonly open: boolean;
    readonly onClose: () => void;
}

const ROWS = xpSourceRows();

/** Sources, daily caps and the no-monetary-value statement (§9.3). */
export function HowXpWorksDialog({ open, onClose }: HowXpWorksDialogProps) {
    return (
        <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
            <DialogContent
                showCloseButton={false}
                className="max-h-[90dvh] w-[calc(100vw-32px)] max-w-[560px] gap-0 overflow-y-auto rounded-2xl border-[#1E1E1E] bg-[#0A0A0A] p-0 text-white"
            >
                <header className="flex items-start justify-between gap-4 border-b border-[#1E1E1E] bg-[#111] px-6 py-5">
                    <div>
                        <div className="font-mono-ctv inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8001D]">
                            <span aria-hidden className="block h-0.5 w-4 bg-[#E8001D]" />
                            Progression
                        </div>
                        <DialogTitle className="font-display mt-2 text-[30px] font-extrabold uppercase leading-none">How XP works</DialogTitle>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="rounded p-1 text-white/45 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
                    >
                        <X aria-hidden className="h-4 w-4" />
                    </button>
                </header>
                <div className="px-6 py-5">
                    <p className="rounded-lg border border-[rgba(245,197,24,0.4)] bg-[rgba(245,197,24,0.06)] px-4 py-3 text-[13px] font-semibold text-white">
                        {NO_MONETARY_VALUE_TEXT}
                    </p>
                    <DialogDescription className="mt-4 text-[13.5px] font-light leading-[1.6] text-white/65">
                        {HOW_XP_WORKS_TEXT}
                    </DialogDescription>
                    <table className="mt-5 w-full border-collapse text-left text-[12.5px]">
                        <caption className="sr-only">XP sources and daily caps</caption>
                        <thead>
                            <tr className="font-mono-ctv text-[9px] uppercase tracking-[0.14em] text-white/45">
                                <th scope="col" className="pb-2 font-bold">Source</th>
                                <th scope="col" className="pb-2 font-bold">Earns</th>
                                <th scope="col" className="whitespace-nowrap pb-2 text-right font-bold">Cap / day</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ROWS.map((row) => (
                                <tr key={row.source} className="border-t border-[#1E1E1E] align-top">
                                    <th scope="row" className="py-2 pr-3 font-semibold text-white">
                                        {row.label}
                                        {row.boosted && (
                                            <span className="font-mono-ctv ml-1.5 inline-block whitespace-nowrap rounded-[3px] border border-[#F5C518] px-1 text-[9px] font-bold text-[#F5C518]">×2</span>
                                        )}
                                    </th>
                                    <td className="py-2 pr-3 font-light text-white/65">{row.earn}</td>
                                    <td className="font-mono-ctv whitespace-nowrap py-2 text-right text-[11px] tabular-nums text-white/65">{row.cap ?? '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="mt-4 text-[12px] font-light leading-[1.55] text-white/45">
                        <span className="font-bold text-[#F5C518]">×2</span>: boosted during double XP events. Caps reset at midnight, Paris time. Levels, ranks, titles and frames are cosmetic.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
}
