'use client';

import { Icon } from '@/components/common/Icon';

interface SearchFieldProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly placeholder: string;
}

export function SearchField({ value, onChange, placeholder }: Readonly<SearchFieldProps>) {
  return (
    <label className="flex w-full max-w-[340px] items-center gap-2 rounded-md border border-[#2A2A2A] bg-[#0A0A0A] px-3 py-1.5 focus-within:border-[#E8001D]">
      <Icon n="search" s={13} />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full bg-transparent text-[12px] text-white placeholder:text-white/30 focus:outline-none"
      />
      {value && (
        <button type="button" onClick={() => onChange('')} aria-label="Clear search" className="text-white/40 hover:text-white">
          <Icon n="x" s={12} />
        </button>
      )}
    </label>
  );
}
