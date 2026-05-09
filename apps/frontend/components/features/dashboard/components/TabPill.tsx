'use client';

interface TabPillProps {
    readonly active: boolean;
    readonly onClick: () => void;
    readonly children: React.ReactNode;
    readonly badge?: number;
}

export function TabPill({ active, onClick, children, badge }: TabPillProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="font-mono-ctv inline-flex items-center gap-2 rounded-md border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
            style={{
                borderColor: active ? '#E8001D' : '#2A2A2A',
                background: active ? 'rgba(232,0,29,0.08)' : 'transparent',
                color: active ? '#fff' : 'rgba(255,255,255,0.55)',
            }}
        >
            {children}
            {typeof badge === 'number' && badge > 0 && (
                <span
                    className="ml-1 inline-flex h-[18px] min-w-[20px] items-center justify-center rounded-sm px-1 text-[9px] font-bold"
                    style={{
                        background: active ? 'rgba(232,0,29,0.2)' : '#1A1A1A',
                        color: active ? '#E8001D' : 'rgba(255,255,255,0.65)',
                    }}
                >
                    {badge}
                </span>
            )}
        </button>
    );
}
