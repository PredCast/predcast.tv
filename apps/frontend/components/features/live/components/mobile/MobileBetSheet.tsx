"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

interface MobileBetSheetProps {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly children: ReactNode;
}

/** Modal bottom sheet hosting the bet ticket on mobile; children mount only while open. */
export function MobileBetSheet({ open, onClose, children }: MobileBetSheetProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        aria-label="Close predictions"
        onClick={onClose}
        className={`absolute inset-0 bg-black/65 transition-opacity motion-reduce:transition-none ${open ? "opacity-100" : "opacity-0"}`}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Place a prediction"
        tabIndex={-1}
        className={`absolute inset-x-0 bottom-0 flex max-h-[88dvh] flex-col rounded-t-2xl border-t border-[#1E1E1E] bg-[#0A0A0A] shadow-[0_-20px_60px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out focus-visible:outline-none motion-reduce:transition-none ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <span aria-hidden className="absolute left-1/2 top-2 h-1 w-10 -translate-x-1/2 rounded-full bg-[#2A2A2A]" />
        <div className="flex justify-end px-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close predictions"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#1E1E1E] text-white/55 hover:border-[#3A3A3A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
          >
            <X size={14} aria-hidden />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pb-[max(16px,env(safe-area-inset-bottom))]">
          {open && children}
        </div>
      </div>
    </div>
  );
}
