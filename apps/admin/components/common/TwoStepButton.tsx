'use client';

import { useEffect, useState } from 'react';

import type { ButtonSize } from '@/lib/ui/buttonClass';
import { useNow } from '@/hooks/useNow';

import { Button } from './Button';
import type { IconName } from './Icon';

const ARM_MS = 5_000;

interface TwoStepButtonProps {
  readonly label: string;
  /** Text of the armed button, e.g. "Run". */
  readonly confirmLabel: string;
  readonly onConfirm: () => void;
  readonly icon?: IconName;
  readonly size?: ButtonSize;
  readonly busy?: boolean;
  readonly disabled?: boolean;
}

/**
 * Irreversible / on-chain actions: first click arms a solid CONFIRM with a 5 s countdown and a
 * CANCEL; it reverts on its own, and Esc cancels (Components board, §05).
 */
export function TwoStepButton({ label, confirmLabel, onConfirm, icon, size = 'sm', busy = false, disabled = false }: Readonly<TwoStepButtonProps>) {
  const [armedUntil, setArmedUntil] = useState<number | null>(null);
  const now = useNow();
  const secondsLeft = armedUntil !== null && now ? Math.ceil((armedUntil - now.getTime()) / 1000) : null;
  const armed = secondsLeft !== null && secondsLeft > 0;

  useEffect(() => {
    if (!armed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setArmedUntil(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [armed]);

  if (!armed) {
    return (
      <Button variant="danger" size={size} icon={icon} busy={busy} disabled={disabled} onClick={() => setArmedUntil(Date.now() + ARM_MS)}>
        {label}
      </Button>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5">
      <Button
        variant="primary"
        size={size}
        autoFocus
        onClick={() => {
          setArmedUntil(null);
          onConfirm();
        }}
      >
        Confirm · {confirmLabel} <span className="tabular-nums opacity-80">{secondsLeft}s</span>
      </Button>
      <Button size={size} onClick={() => setArmedUntil(null)}>
        Cancel
      </Button>
    </span>
  );
}
