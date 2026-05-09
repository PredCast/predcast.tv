'use client';

interface ActionPillProps {
    readonly children: React.ReactNode;
    readonly primary?: boolean;
    readonly onClick?: () => void;
    readonly icon?: React.ReactNode;
    readonly type?: 'button' | 'submit';
    readonly disabled?: boolean;
}

/** Outlined or filled CTA pill — used in section heads and quick actions. */
export function ActionPill({ children, primary = false, onClick, icon, type = 'button', disabled = false }: ActionPillProps) {
    const cls = primary
        ? 'font-mono-ctv inline-flex items-center gap-2 rounded-md bg-[#E8001D] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-px hover:bg-[#FF1737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]'
        : 'font-mono-ctv inline-flex items-center gap-2 rounded-md border border-[#2A2A2A] bg-transparent px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white/80 transition-all hover:border-[#E8001D] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]';
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cls}
            style={primary ? { boxShadow: '0 8px 24px rgba(232,0,29,0.25)' } : undefined}
        >
            {icon}
            {children}
        </button>
    );
}
