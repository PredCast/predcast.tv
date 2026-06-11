'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@chiliztv/ui';
import { toast } from 'sonner';

import {
  REPORT_REASON_CODES,
  REASON_SEVERITY,
  type ReportReasonCode,
  type ReportTargetType,
} from '@chiliztv/shared';

import { useCreateReport } from '@/hooks/api/useCreateReport';

const REASON_LABELS: Record<ReportReasonCode, string> = {
  spam: 'Spam',
  harassment: 'Harassment',
  hate_speech: 'Hate speech',
  violence: 'Violence',
  sexual_content: 'Sexual content',
  child_safety: 'Child safety',
  illegal_content: 'Illegal content',
  scam: 'Scam / fraud',
  off_topic: 'Off topic',
  other: 'Other',
};

interface ReportDialogProps {
  open: boolean;
  onClose: () => void;
  targetType: ReportTargetType;
  targetId: string;
  liveContextMatchId?: number;
  liveContextStreamId?: string;
}

export function ReportDialog({
  open,
  onClose,
  targetType,
  targetId,
  liveContextMatchId,
  liveContextStreamId,
}: ReportDialogProps) {
  const [reason, setReason] = useState<ReportReasonCode | null>(null);
  const [freeText, setFreeText] = useState('');
  const { mutateAsync: createReport, isPending } = useCreateReport();

  const reset = () => {
    setReason(null);
    setFreeText('');
  };

  const handleSubmit = async () => {
    if (!reason) return;
    try {
      await createReport({
        targetType,
        targetId,
        reasonCode: reason,
        reasonFreeText: freeText.trim() || undefined,
        liveContextMatchId,
        liveContextStreamId,
      });
      toast.success('Report submitted', {
        description: 'Thanks — the community review threshold applies.',
      });
      reset();
      onClose();
    } catch (err: unknown) {
      const apiError = (err as {
        response?: { data?: { error?: { code?: string; details?: { reason?: string } } } };
      })?.response?.data?.error;
      const code = apiError?.code;
      const reason = apiError?.details?.reason;

      if (code === 'CONFLICT') {
        toast.info('You already reported this');
        reset();
        onClose();
        return;
      }
      if (code === 'ACCOUNT_BANNED') {
        toast.error('Your account is restricted');
        return;
      }
      if (code === 'BUSINESS_RULE_VIOLATION') {
        const copy: Record<string, { title: string; description?: string }> = {
          self_report: { title: "You can't report your own content" },
          streamer: { title: "Streamers can't report inside their own live" },
          banned: { title: 'Your account is restricted' },
          not_eligible: {
            title: 'Not eligible to report yet',
            description: 'Stay in the room a little longer, or place a first bet.',
          },
        };
        const c = copy[reason ?? ''] ?? { title: 'This report is not allowed' };
        toast.warning(c.title, c.description ? { description: c.description } : undefined);
        return;
      }
      toast.error('Could not submit the report', { description: 'Please try again.' });
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) { reset(); onClose(); } }}>
      <DialogContent className="max-w-[400px] border-[#1E1E1E] bg-[#0A0A0A] p-0">
        <div className="border-b border-[#1E1E1E] px-5 py-4">
          <DialogTitle asChild>
            <div className="font-mono-ctv inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8001D]">
              <span aria-hidden className="block h-0.5 w-4 bg-[#E8001D]" />
              Report {targetType}
            </div>
          </DialogTitle>
        </div>

        <div className="max-h-[50dvh] overflow-y-auto p-3">
          {REPORT_REASON_CODES.map((code) => {
            const active = reason === code;
            const severe = REASON_SEVERITY[code] >= 4;
            return (
              <button
                key={code}
                type="button"
                onClick={() => setReason(code)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left transition-colors hover:bg-[#111]"
                style={{
                  border: `1px solid ${active ? '#E8001D' : 'transparent'}`,
                  background: active ? 'rgba(232,0,29,0.08)' : undefined,
                }}
              >
                <span className="text-[13px] text-white/85">{REASON_LABELS[code]}</span>
                {severe && (
                  <span className="font-mono-ctv text-[8px] uppercase tracking-[0.16em] text-[#E8001D]/70">
                    Immediate review
                  </span>
                )}
              </button>
            );
          })}

          <textarea
            value={freeText}
            onChange={(e) => setFreeText(e.target.value)}
            maxLength={500}
            rows={2}
            placeholder="Optional details…"
            className="font-mono-ctv mt-3 w-full rounded-md border border-[#2A2A2A] bg-[#0d0d0d] px-3 py-2.5 text-[12px] text-white placeholder-white/35 outline-none transition-colors focus:border-[#E8001D]"
          />
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-[#1E1E1E] px-5 py-3.5">
          <button
            type="button"
            onClick={() => { reset(); onClose(); }}
            className="font-mono-ctv rounded-md border border-[#2A2A2A] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/55 transition-colors hover:border-[#3A3A3A] hover:text-white/80"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!reason || isPending}
            className="font-mono-ctv rounded-md bg-[#E8001D] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#FF1737] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? 'Sending…' : 'Submit report'}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
