import type { DashboardAlertDto } from '@chiliztv/shared';

import { weiToChz } from '@/lib/markets/chain';
import { fmtAgo, fmtHourMinute } from '@/lib/ui/time';

export interface AlertDisplay {
  readonly title: string;
  readonly detail: string;
  readonly meta: string;
  readonly action: { readonly label: string; readonly href: string } | null;
}

const str = (v: string | number | null | undefined) => (v === null || v === undefined ? '' : String(v));
const num = (v: string | number | null | undefined) => Number(v ?? 0);

const OPERATION_TITLES: Record<string, string> = {
  deploy: 'Match deploy failed',
  retry_setup: 'Markets setup failed',
  cancel_markets: 'Market cancellation failed',
};

/** Words an alert from its kind and facts; `canSeeJobs` hides links to the admin-only Jobs page. */
export function alertDisplay(alert: DashboardAlertDto, now: Date, canSeeJobs: boolean): AlertDisplay {
  const f = alert.facts;
  const at = alert.at ? new Date(alert.at) : null;
  const jobsLink = (label: string) => (canSeeJobs ? { label, href: '/jobs' } : null);
  switch (alert.kind) {
    case 'feed_down': {
      const since = f.lastSuccessAt ? `last success ${fmtHourMinute(new Date(str(f.lastSuccessAt)))}` : 'no success recorded';
      return {
        title: 'Live score feed down',
        detail: `${str(f.job)} failing — ${since}${f.error ? ` · ${str(f.error)}` : ''}`,
        meta: `${num(f.failures)} failed runs`,
        action: jobsLink('View jobs'),
      };
    }
    case 'operation_failed':
      return {
        title: OPERATION_TITLES[str(f.operation)] ?? 'Operation failed',
        detail: `${str(f.match)}${f.error ? ` — ${str(f.error)}` : ''}`,
        meta: `#${str(f.matchId)}${at ? ` · ${fmtHourMinute(at)}` : ''}`,
        action: { label: 'Open markets', href: '/markets' },
      };
    case 'report_open':
      return {
        title: `S${num(f.severity)} report open`,
        detail: `${str(f.reason).replace(/_/g, ' ')} — ${str(f.target)}`,
        meta: at ? fmtAgo(at, now) : '',
        action: { label: 'Review', href: `/moderation/reports/${alert.subject}` },
      };
    case 'signer_low':
      return {
        title: 'Deploy wallet low',
        detail: `${weiToChz(str(f.balanceWei))} CHZ left — about ${num(f.deploysLeft)} deployments`,
        meta: `Alert < ${weiToChz(str(f.thresholdWei))}`,
        action: { label: 'Open markets', href: '/markets' },
      };
    case 'job_failing':
      return {
        title: 'Job failing',
        detail: `${str(f.job)} failed ${num(f.failures)}× in a row${f.error ? ` — ${str(f.error)}` : ''}`,
        meta: at ? `Last ${fmtHourMinute(at)}` : '',
        action: jobsLink('View logs'),
      };
    case 'job_late':
      return { title: 'Job late', detail: `${str(f.job)} has not reported a run on schedule`, meta: '', action: jobsLink('View jobs') };
    case 'quota_budget': {
      const pct = Math.round((num(f.used) / Math.max(1, num(f.budget))) * 100);
      const reset = new Date(now.getFullYear(), now.getMonth() + 1, 1).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
      return {
        title: `${str(f.provider)} budget at ${pct}%`,
        detail: `${num(f.used).toLocaleString('en-US')} / ${num(f.budget).toLocaleString('en-US')} calls this month — resets ${reset}`,
        meta: '',
        action: null,
      };
    }
  }
}
