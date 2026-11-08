'use client';

import { useRef, useState } from 'react';

import { Icon } from './Icon';

const SIZES = { sm: { box: 'h-[18px] w-[18px]', icon: 10 }, md: { box: 'h-7 w-7', icon: 13 } } as const;

/** Copies `value` to the clipboard with a brief ✓ feedback. */
export function CopyButton({
  value,
  label,
  size = 'sm',
}: Readonly<{ value: string; label: string; size?: keyof typeof SIZES }>) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = async (e: React.MouseEvent) => {
    // Rows are often wrapped in links — copying must not navigate.
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard denied (http context) — leave the button as-is.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      title={label}
      className={`inline-flex shrink-0 items-center justify-center rounded-control border border-line text-fg-body transition-colors duration-[120ms] hover:border-line-hover hover:bg-elevated hover:text-white ${SIZES[size].box}`}
    >
      <Icon n={copied ? 'check' : 'copy'} s={SIZES[size].icon} className={copied ? 'text-positive' : ''} />
    </button>
  );
}
