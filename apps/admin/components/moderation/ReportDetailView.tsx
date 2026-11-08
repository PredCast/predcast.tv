'use client';

import { useState } from 'react';
import { toast } from 'sonner';

import { useReportDetail, useReviewReport, useReverseAction } from '@/hooks/api/useReports';
import { Card } from '@/components/common/Card';
import { DetailField } from '@/components/common/DetailField';
import { Eyebrow } from '@/components/common/Eyebrow';
import { Icon } from '@/components/common/Icon';
import { SeverityBadge } from '@/components/common/SeverityBadge';
import { StatusBadge } from './StatusBadge';
import { WalletLabel } from './WalletLabel';

export function ReportDetailView({ id }: Readonly<{ id: string }>) {
  const { data, isLoading } = useReportDetail(id);
  const review = useReviewReport(id);
  const reverse = useReverseAction();
  const [note, setNote] = useState('');

  if (isLoading) {
    return <p className="font-mono mt-6 text-[11px] uppercase tracking-[0.14em] text-fg-meta">Loading…</p>;
  }
  if (!data) {
    return <p className="font-mono mt-6 text-[11px] uppercase tracking-[0.14em] text-accent-text">Report not found.</p>;
  }

  const { report, triggeredAction } = data;
  const reviewable = report.status === 'open';

  const act = (verdict: 'dismiss' | 'close') => {
    review.mutate(
      { verdict, note: note || undefined },
      {
        onSuccess: () => toast.success(verdict === 'dismiss' ? 'Report dismissed' : 'Report closed'),
        onError: () => toast.error('Review failed — the report may already be handled'),
      },
    );
  };

  return (
    <div>
      <div className="mt-3 flex items-end justify-between">
        <div className="flex items-center gap-3">
          <h1 className="font-display text-[32px] font-extrabold uppercase leading-none tracking-[-0.01em] text-white">
            Report <span className="text-fg-meta">#{report.id.slice(0, 8)}</span>
          </h1>
          <SeverityBadge severity={report.severity} />
          <StatusBadge status={report.status} />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-meta">
          Created {new Date(report.createdAt).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
        </span>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-2">
        <Card className="flex flex-col p-5">
          <Eyebrow color="rgba(255,255,255,0.45)">Report</Eyebrow>
          <div className="mt-4 grid gap-4">
            <DetailField label="Reason">{report.reasonCode}</DetailField>
            {report.reasonFreeText && (
              <DetailField label="Free text">
                <div className="rounded-md border border-line-subtle bg-sidebar px-3.5 py-2.5 text-[12px] font-light leading-relaxed text-fg-body">
                  &ldquo;{report.reasonFreeText}&rdquo;
                </div>
              </DetailField>
            )}
            <DetailField label="Target">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-strong">{report.targetType}</span>{' '}
              <span className="font-mono text-[11px] text-fg-meta">{report.targetId}</span>
            </DetailField>
            <div className="grid grid-cols-2 gap-4">
              <DetailField label="Reporter">
                <WalletLabel wallet={report.reporterWallet} />
              </DetailField>
              {report.reviewedAt && (
                <DetailField label="Reviewed">
                  {new Date(report.reviewedAt).toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' })}
                  {report.reviewedByWallet && (
                    <>
                      {' '}by <WalletLabel wallet={report.reviewedByWallet} />
                    </>
                  )}
                  {report.reviewNote && <span className="text-fg-body"> — {report.reviewNote}</span>}
                </DetailField>
              )}
            </div>
          </div>

          {reviewable && (
            <div className="mt-auto border-t border-line-subtle pt-4">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-fg-meta">Verdict</div>
              <input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Review note (optional, audited)"
                className="font-mono mt-2 w-full rounded-md border border-line bg-sidebar px-3 py-2 text-[12px] text-white outline-none focus-visible:ring-2 focus-visible:ring-accent"
              />
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  disabled={review.isPending}
                  onClick={() => act('dismiss')}
                  className="font-mono rounded-md border border-line px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-fg-body transition-colors hover:border-line-hover hover:text-white disabled:opacity-50"
                >
                  Dismiss
                </button>
                <button
                  type="button"
                  disabled={review.isPending}
                  onClick={() => act('close')}
                  className="font-mono rounded-md bg-accent px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
                >
                  Close as handled
                </button>
              </div>
            </div>
          )}
        </Card>

        <Card className="p-5">
          <Eyebrow>Triggered action</Eyebrow>
          {!triggeredAction && (
            <p className="mt-3 text-[12px] font-light text-fg-meta">No automatic action fired for this report.</p>
          )}
          {triggeredAction && (
            <>
              <div className="mt-4 grid gap-4">
                <DetailField label="Kind">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-strong">{triggeredAction.kind}</span>
                </DetailField>
                <DetailField label="Trigger">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-strong">
                    {triggeredAction.quorumSnapshot.trigger}
                  </span>
                </DetailField>
                <DetailField label="Triggered at">
                  {new Date(triggeredAction.triggeredAt).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
                </DetailField>
                {triggeredAction.reversedAt && (
                  <DetailField label="Reversed">
                    {new Date(triggeredAction.reversedAt).toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' })}
                    {triggeredAction.reversedByWallet && (
                      <>
                        {' '}by <WalletLabel wallet={triggeredAction.reversedByWallet} />
                      </>
                    )}
                  </DetailField>
                )}
              </div>
              {!triggeredAction.reversedAt && (
                <div className="mt-5 rounded-lg border border-accent/30 bg-accent/5 p-4">
                  <div className="font-mono flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-text">
                    <Icon n="alertTriangle" s={12} />
                    <span>Reversal</span>
                  </div>
                  <p className="mt-2 text-[12px] font-light leading-relaxed text-fg-body">
                    {triggeredAction.kind === 'soft_delete_message'
                      ? 'Restores the message in chat. The reversal is audited and visible in the activity log.'
                      : 'The reversal is audited and visible in the activity log.'}
                  </p>
                  <button
                    type="button"
                    disabled={reverse.isPending}
                    onClick={() =>
                      reverse.mutate(
                        { actionId: triggeredAction.id },
                        {
                          onSuccess: () => toast.success('Action reversed'),
                          onError: () => toast.error('Reverse failed — already reversed?'),
                        },
                      )
                    }
                    className="font-mono mt-3 inline-flex items-center gap-1.5 rounded-md border border-accent/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-accent-text transition-colors hover:border-accent hover:bg-accent/10 disabled:opacity-50"
                  >
                    <Icon n="rotateCcw" s={12} />
                    <span>Reverse action{triggeredAction.kind === 'soft_delete_message' ? ' — restores message' : ''}</span>
                  </button>
                </div>
              )}
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
