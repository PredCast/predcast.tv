import type { ReactNode } from "react";

interface SidebarCardProps {
  readonly eyebrow: string;
  readonly aside?: ReactNode;
  readonly children: ReactNode;
  /** Scroll / focus anchor (e.g. the "Predict" shortcut). */
  readonly id?: string;
}

export function SidebarCard({ eyebrow, aside, children, id }: SidebarCardProps) {
  return (
    <section
      id={id}
      tabIndex={id ? -1 : undefined}
      aria-label={eyebrow}
      className="scroll-mt-[calc(var(--app-header-h)+16px)] rounded-xl border border-[#1E1E1E] bg-[#111] p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
    >
      <header className="mb-3 flex items-center gap-2">
        <div className="font-mono-ctv inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8001D]">
          <span aria-hidden className="block h-0.5 w-4 bg-[#E8001D]" />
          {eyebrow}
        </div>
        {aside && <div className="ml-auto">{aside}</div>}
      </header>
      {children}
    </section>
  );
}
