"use client";

import { Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface ContractAddressRowProps {
  readonly address: string;
  readonly explorerUrl: string | null;
}

export function ContractAddressRow({ address, explorerUrl }: ContractAddressRowProps) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      toast.success("Contract address copied");
    } catch {
      toast.error("Could not copy the address");
    }
  };
  return (
    <div className="flex items-center gap-2">
      <span className="font-mono-ctv min-w-0 flex-1 truncate text-[11px] text-white" title={address}>
        {address.slice(0, 8)}…{address.slice(-6)}
      </span>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy contract address"
        className="rounded p-1 text-white/55 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
      >
        <Copy size={13} aria-hidden />
      </button>
      {explorerUrl && (
        <a
          href={explorerUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open contract in block explorer"
          className="rounded p-1 text-white/55 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
        >
          <ExternalLink size={13} aria-hidden />
        </a>
      )}
    </div>
  );
}
