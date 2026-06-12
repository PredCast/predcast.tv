'use client';

import { useEffect, useRef, useState } from 'react';

interface ConfirmActionButtonProps {
  readonly label: string;
  readonly confirmLabel: string;
  readonly pending: boolean;
  readonly danger?: boolean;
  readonly onConfirm: () => void;
}

/** Two-step inline confirm: first click arms, second within 4s fires. */
export function ConfirmActionButton({
  label,
  confirmLabel,
  pending,
  danger = false,
  onConfirm,
}: Readonly<ConfirmActionButtonProps>) {
  const [armed, setArmed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const click = () => {
    if (pending) return;
    if (!armed) {
      setArmed(true);
      timer.current = setTimeout(() => setArmed(false), 4000);
      return;
    }
    if (timer.current) clearTimeout(timer.current);
    setArmed(false);
    onConfirm();
  };

  const tone = armed
    ? 'border-[#E8001D] bg-[#E8001D]/15 text-white'
    : danger
      ? 'border-[#E8001D]/40 text-[#FF1737] hover:border-[#E8001D]'
      : 'border-[#2A2A2A] text-white/65 hover:border-[#3A3A3A] hover:text-white';

  return (
    <button
      type="button"
      onClick={click}
      disabled={pending}
      className={`font-mono-ctv rounded-md border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] transition-colors disabled:opacity-40 ${tone}`}
    >
      {pending ? '…' : armed ? confirmLabel : label}
    </button>
  );
}
