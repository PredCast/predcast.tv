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
            className={`${option} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] ${
              on ? 'border-[#E8001D] bg-[#E8001D]/10' : 'border-[#2A2A2A] hover:border-[#3A3A3A]'
            }`}
          >
            <span className="text-[13px] font-bold text-white">{chain.name}</span>
            <span className="font-mono-ctv text-[9px] uppercase tracking-[0.12em] text-white/45">{chain.chainId}</span>
          </button>
        );
      })}
      <button type="button" role="radio" aria-checked={false} disabled className={`${option} cursor-not-allowed border-[#1E1E1E] opacity-50`}>
        <span className="text-[13px] font-bold text-white">Base</span>
        <span className="font-mono-ctv rounded border border-[#2A2A2A] px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.12em] text-white/55">
          Soon
        </span>
      </button>
    </div>
  );
}
