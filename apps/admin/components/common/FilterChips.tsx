'use client';

export interface FilterChip<T> {
  readonly label: string;
  readonly value: T;
  readonly count?: number;
}

export function FilterChips<T>({
  items,
  active,
  onSelect,
  label,
}: Readonly<{ items: ReadonlyArray<FilterChip<T>>; active: T; onSelect: (value: T) => void; label?: string }>) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((it) => {
        const on = it.value === active;
        return (
          <button
            key={it.label}
            type="button"
            aria-pressed={on}
            onClick={() => onSelect(it.value)}
            className={`flex h-8 items-center gap-1.5 rounded-control border px-3 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-[120ms] ${
              on ? 'border-accent bg-accent/10 text-white' : 'border-line text-fg-body hover:border-line-hover hover:text-white'
            }`}
          >
            <span>{it.label}</span>
            {it.count != null && <span className={`text-[10px] ${on ? 'text-accent-text' : 'text-fg-meta'}`}>{it.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
