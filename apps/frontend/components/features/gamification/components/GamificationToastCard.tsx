import { X } from 'lucide-react';

import type { ToastView } from '../domain/toastView';
import { ToastIcon } from './ToastIcon';

interface GamificationToastCardProps {
    readonly view: ToastView;
    readonly onDismiss: () => void;
}

/** In-app notification card (mockup 04 `.toast`), rendered through `toast.custom`. */
export function GamificationToastCard({ view, onDismiss }: GamificationToastCardProps) {
    return (
        <div
            role="status"
            className="flex w-[356px] max-w-[calc(100vw-32px)] items-start gap-3 rounded-[10px] border border-[#2A2A2A] bg-[#141414] py-3.5 pl-4 pr-3 text-white"
            style={{ boxShadow: '0 12px 32px rgba(0,0,0,0.5)' }}
        >
            <span
                className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-lg border border-[#1E1E1E] bg-[#1A1A1A]"
                style={{ color: view.color }}
            >
                <ToastIcon icon={view.icon} className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
                <div className="font-mono-ctv text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">{view.kicker}</div>
                <div className="font-display mt-0.5 text-[20px] font-extrabold uppercase leading-[1.05]">{view.title}</div>
                {view.description && (
                    <div className="mt-[3px] text-[12px] font-light leading-snug text-white/65">{view.description}</div>
                )}
            </div>
            <button
                type="button"
                onClick={onDismiss}
                aria-label="Dismiss notification"
                className="shrink-0 rounded p-1 text-white/45 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
            >
                <X aria-hidden className="h-3.5 w-3.5" />
            </button>
        </div>
    );
}
