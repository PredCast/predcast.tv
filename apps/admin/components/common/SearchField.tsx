'use client';

import { useEffect, useRef } from 'react';

import { Icon } from './Icon';

interface SearchFieldProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly placeholder: string;
  /** Focus the field on "/" (one search field per page). */
  readonly shortcut?: boolean;
}

export function SearchField({ value, onChange, placeholder, shortcut = false }: Readonly<SearchFieldProps>) {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!shortcut) return;
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (e.key !== '/' || target?.closest('input, textarea, select, [contenteditable="true"]')) return;
      e.preventDefault();
      input.current?.focus();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [shortcut]);

  return (
    <label className="flex h-9 w-full max-w-[340px] items-center gap-2 rounded-control border border-line bg-card px-3 text-fg-body transition-shadow focus-within:border-accent focus-within:shadow-[0_0_0_3px_rgba(232,0,29,0.25)]">
      <Icon n="search" s={14} />
      <input
        ref={input}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full bg-transparent text-[14px] text-white placeholder:text-fg-meta focus:outline-none"
      />
      {value ? (
        <button type="button" onClick={() => onChange('')} aria-label="Clear search" className="text-fg-meta hover:text-white">
          <Icon n="x" s={12} />
        </button>
      ) : (
        shortcut && (
          <kbd aria-hidden="true" className="rounded-badge border border-line px-1.5 font-mono text-[10px] text-fg-meta">
            /
          </kbd>
        )
      )}
    </label>
  );
}
