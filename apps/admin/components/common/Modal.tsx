'use client';

import { useEffect, useId, useRef } from 'react';

import { Icon } from './Icon';

interface ModalProps {
  readonly open: boolean;
  readonly title: string;
  readonly eyebrow?: string;
  /** Hidden while an on-chain request is in flight so the dialog cannot be dismissed mid-way. */
  readonly dismissible?: boolean;
  readonly onClose: () => void;
  readonly children: React.ReactNode;
}

const FOCUSABLE = 'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), a[href]';

/** Accessible dialog: Escape and backdrop click close it, focus moves inside on open. */
export function Modal({ open, title, eyebrow, dismissible = true, onClose, children }: Readonly<ModalProps>) {
  const titleId = useId();
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && dismissible) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, dismissible, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && dismissible) onClose();
      }}
    >
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-[560px] rounded-xl border border-[#2A2A2A] bg-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#1E1E1E] px-5 py-4">
          <div>
            {eyebrow && (
              <div className="font-mono-ctv text-[9px] font-bold uppercase tracking-[0.16em] text-[#E8001D]">{eyebrow}</div>
            )}
            <h2 id={titleId} className="font-display mt-1 text-[22px] font-extrabold uppercase leading-none text-white">
              {title}
            </h2>
          </div>
          {dismissible && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-md p-1 text-white/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
            >
              <Icon n="x" s={14} />
            </button>
          )}
        </div>
        <div className="px-5 py-4">{children}</div>
      </div>
    </div>
  );
}
