'use client';

import type { BettingChainDto } from '@chiliztv/shared';

interface NetworkSelectorProps {
  readonly chains: ReadonlyArray<BettingChainDto>;
  readonly value: number;
  readonly onChange: (chainId: number) => void;
}

const option = 'flex flex-1 items-center justify-between rounded-md border px-3 py-2.5 text-left';

/** Chains the backend can deploy on, plus Base shown disabled until multichain ships. */
export function NetworkSelector({ chains, value, onChange }: Readonly<NetworkSelectorProps>) {
  return (
    <div role="radiogroup" aria-label="Network" className="flex gap-2">
      {chains.map((chain) => {
        const on = chain.chainId === value;
        return (
          <button
            key={chain.chainId}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onChange(chain.chainId)}
            className={`${option} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              on ? 'border-accent bg-accent/10' : 'border-line hover:border-line-hover'
            }`}
          >
            <span className="text-[13px] font-bold text-white">{chain.name}</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-fg-meta">{chain.chainId}</span>
          </button>
        );
      })}
      <button type="button" role="radio" aria-checked={false} disabled className={`${option} cursor-not-allowed border-line-subtle opacity-50`}>
        <span className="text-[13px] font-bold text-white">Base</span>
        <span className="font-mono rounded border border-line px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.12em] text-fg-body">
          Soon
        </span>
      </button>
    </div>
  );
}
