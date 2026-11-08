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
  const content = useRef<HTMLDivElement>(null);
  // Parents pass a new `onClose` on every render (e.g. each keystroke in a field): read it through a
  // ref so re-renders never re-run the effects below.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // Initial focus only when the dialog opens, on the first control of the body (not the close button).
  useEffect(() => {
    if (!open) return;
    const target = content.current?.querySelector<HTMLElement>(FOCUSABLE) ?? panel.current?.querySelector<HTMLElement>(FOCUSABLE);
    target?.focus();
  }, [open]);

  useEffect(() => {
    if (!open || !dismissible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, dismissible]);

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
        className="w-full max-w-[560px] rounded-xl border border-line bg-card shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line-subtle px-5 py-4">
          <div>
            {eyebrow && (
              <div className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-accent-text">{eyebrow}</div>
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
              className="rounded-md p-1 textfg-meta hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Icon n="x" s={14} />
            </button>
          )}
        </div>
        <div ref={content} className="px-5 py-4">
          {children}
        </div>
      </div>
    </div>
  );
}
