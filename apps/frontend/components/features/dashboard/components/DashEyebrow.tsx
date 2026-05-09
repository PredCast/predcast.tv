'use client';

interface DashEyebrowProps {
    readonly children: React.ReactNode;
    readonly dim?: boolean;
    readonly accent?: string;
}

/** Section label with red accent bar — used at every section head. */
export function DashEyebrow({ children, dim = false, accent = '#E8001D' }: DashEyebrowProps) {
    return (
        <div
            className={`font-mono-ctv inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] ${dim ? 'text-white/45' : 'text-white/65'}`}
        >
            <span aria-hidden className="block h-[2px] w-7" style={{ background: accent }} />
            <span>{children}</span>
        </div>
    );
}
