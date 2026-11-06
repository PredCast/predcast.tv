import type { ReactNode } from "react";

interface TabButtonProps {
  readonly active: boolean;
  readonly onClick: () => void;
  readonly children: ReactNode;
  readonly badge?: number;
}

export function TabButton({ active, onClick, children, badge }: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="font-mono-ctv inline-flex items-center gap-2 rounded-md border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
      style={{
        borderColor: active ? "#E8001D" : "#1E1E1E",
        background: active ? "rgba(232,0,29,0.08)" : "transparent",
        color: active ? "#fff" : "rgba(255,255,255,0.55)",
      }}
    >
      {children}
      {badge != null && badge > 0 && (
        <span className="ml-0.5 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#E8001D] px-1 text-[9px] font-bold tabular-nums text-white">
          {badge}
        </span>
      )}
    </button>
  );
}
