'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useReportConfig, useUpdateReportConfig } from '@/hooks/api/useReportConfig';
import type { ReportConfigDto } from '@/lib/api/endpoints/moderation';
import { useAdminSession } from '@/providers/AdminSessionProvider';
import { isAllowedForNav } from '@/lib/rbac';

const FIELDS: Array<{ key: keyof ReportConfigDto; label: string; hint: string }> = [
  { key: 'quorumPct', label: 'Quorum %', hint: 'threshold = max(floor, ceil(eligible × pct))' },
  { key: 'floorCount', label: 'Floor count', hint: 'minimum distinct reports' },
  { key: 'minPresenceSec', label: 'Min presence (s)', hint: 'eligibility window in the live' },
  { key: 'banFirstHours', label: 'First ban (h)', hint: 'escalation step 1' },
  { key: 'banSecondHours', label: 'Second ban (h)', hint: 'escalation step 2 — then permanent' },
  { key: 'bypassSeverityThreshold', label: 'Bypass severity', hint: 'severity that skips the quorum' },
];

export function ConfigForm() {
  const { role } = useAdminSession();
  const canEdit = isAllowedForNav(role, ['admin']);
  const { data, isLoading } = useReportConfig();
  const update = useUpdateReportConfig();
  // Server values stay the baseline; only user edits live in state.
  const [edits, setEdits] = useState<Partial<ReportConfigDto>>({});
  const draft: ReportConfigDto | null = data ? { ...data, ...edits } : null;

  if (isLoading || !draft) {
    return <p className="font-mono mt-6 text-[11px] uppercase tracking-[0.14em] text-fg-meta">Loading…</p>;
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    update.mutate(draft, {
      onSuccess: () => {
        setEdits({});
        toast.success('Config updated — hot reload within 30s');
      },
      onError: () => toast.error('Update failed'),
    });
  };

  return (
    <form onSubmit={submit} className="mt-6 max-w-2xl rounded-xl border border-line-subtle bg-card p-5">
      <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
        {FIELDS.map(({ key, label, hint }) => (
          <label key={key} className="block">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-fg-meta">
              {label}
            </span>
            <input
              type="number"
              value={draft[key]}
              disabled={!canEdit}
              onChange={(e) => setEdits({ ...edits, [key]: Number(e.target.value) })}
              className="font-mono mt-1.5 w-full rounded-md border border-line bg-sidebar px-3 py-2 text-[13px] tabular-nums text-white outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50"
            />
            <span className="font-mono mt-1.5 block text-[9px] uppercase tracking-[0.1em] leading-relaxed text-fg-meta">
              {hint}
            </span>
          </label>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-line-subtle pt-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-fg-meta">
          {canEdit ? 'Hot reload within 30s of saving' : 'Read-only — config writes require the admin role'}
        </span>
        {canEdit && (
          <button
            type="submit"
            disabled={update.isPending}
            className="font-mono rounded-md bg-accent px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
          >
            {update.isPending ? 'Saving…' : 'Save config'}
          </button>
        )}
      </div>
    </form>
  );
}
