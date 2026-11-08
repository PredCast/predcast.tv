'use client';

import { useDeploymentConfig } from '@/hooks/api/useDeploymentConfig';
import { weiToChz } from '@/lib/markets/chain';
import { Icon } from '@/components/common/Icon';

/** Header readout of the deploy signer: balance in CHZ, and an alert below ~10 deployments' worth. */
export function SignerBalance() {
  const { data } = useDeploymentConfig();
  if (!data) return null;
  const { signer } = data;
  const short = `${signer.address.slice(0, 6)}…${signer.address.slice(-4)}`;

  return (
    <div
      className={`flex items-center gap-3 rounded-lg border px-3.5 py-2 ${
        signer.lowBalance ? 'border-[#F5C518]/50 bg-[#F5C518]/10' : 'border-[#1E1E1E] bg-[#111111]'
      }`}
      role={signer.lowBalance ? 'alert' : undefined}
    >
      <div className="text-right">
        <div className="font-mono-ctv text-[9px] uppercase tracking-[0.14em] text-white/40">Deploy signer · {short}</div>
        <div className="font-mono-ctv text-[14px] font-bold tabular-nums text-white">
          {weiToChz(signer.balanceWei)} <span className="text-[10px] text-white/45">CHZ</span>
        </div>
      </div>
      {signer.lowBalance && (
        <div className="font-mono-ctv flex max-w-[180px] items-start gap-1.5 text-[9px] font-bold uppercase leading-snug tracking-[0.1em] text-[#F5C518]">
          <Icon n="alertTriangle" s={12} />
          <span>Low balance: under {weiToChz(signer.lowBalanceThresholdWei)} CHZ (~10 deploys). Top it up.</span>
        </div>
      )}
    </div>
  );
}
