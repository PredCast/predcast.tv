'use client';

import { useState } from 'react';
import { Zap } from 'lucide-react';

import { HowXpWorksDialog } from './HowXpWorksDialog';

/** Ghost button opening the "How XP works" dialog (banner, Progression section). */
export function HowXpWorksButton() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="font-mono-ctv inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#2A2A2A] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#E8001D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
            >
                <Zap aria-hidden className="h-3 w-3" />
                How XP works
            </button>
            <HowXpWorksDialog open={open} onClose={() => setOpen(false)} />
        </>
    );
}
