'use client';

import { useState } from 'react';
import { Flag } from 'lucide-react';

import type { ReportTargetType } from '@chiliztv/shared';

import { ReportDialog } from './ReportDialog';

interface ReportButtonProps {
  targetType: ReportTargetType;
  targetId: string;
  liveContextMatchId?: number;
  liveContextStreamId?: string;
  /** Compact icon-only rendering (chat rows). Default is icon + label. */
  iconOnly?: boolean;
  className?: string;
}

export function ReportButton({
  targetType,
  targetId,
  liveContextMatchId,
  liveContextStreamId,
  iconOnly = false,
  className = '',
}: ReportButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Report this ${targetType}`}
        className={`font-mono-ctv inline-flex items-center gap-1.5 rounded-md text-[10px] uppercase tracking-[0.14em] text-white/35 transition-colors hover:text-[#FF1737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] ${
          iconOnly ? 'p-1' : 'border border-[#2A2A2A] px-2.5 py-1.5 hover:border-[#E8001D]/50'
        } ${className}`}
      >
        <Flag size={iconOnly ? 11 : 12} />
        {!iconOnly && <span>Report</span>}
      </button>
      {open && (
        <ReportDialog
          open={open}
          onClose={() => setOpen(false)}
          targetType={targetType}
          targetId={targetId}
          liveContextMatchId={liveContextMatchId}
          liveContextStreamId={liveContextStreamId}
        />
      )}
    </>
  );
}
