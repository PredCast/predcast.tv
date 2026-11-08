import Link from 'next/link';

import type { DashboardAlertDto } from '@chiliztv/shared';

import type { AlertDisplay } from '@/lib/dashboard/alertDisplay';
import { buttonClass } from '@/lib/ui/buttonClass';
import { Icon } from '@/components/common/Icon';

export function AlertRow({ alert, display }: Readonly<{ alert: DashboardAlertDto; display: AlertDisplay }>) {
  const critical = alert.level === 'critical';
  return (
    <div
      role={critical ? 'alert' : 'status'}
      className={`flex min-h-[60px] items-center gap-3 border-b border-line-subtle px-3.5 py-2.5 ${
        critical ? 'bg-accent/6 shadow-[inset_2px_0_0_#E8001D]' : 'shadow-[inset_2px_0_0_#F5C518]'
      }`}
    >
      <Icon n={critical ? 'alertOctagon' : 'alertTriangle'} s={16} className={critical ? 'shrink-0 text-accent-text' : 'shrink-0 text-warning'} />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.16em] ${critical ? 'text-accent-text' : 'text-warning'}`}>
            {critical ? 'Critical' : 'Warning'}
          </span>
          <span className="truncate text-[14px] font-medium text-white">{display.title}</span>
        </div>
        <p className="truncate text-[12px] text-fg-body" title={display.detail}>
          {display.detail}
        </p>
      </div>
      {display.meta && <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-meta">{display.meta}</span>}
      {display.action && (
        <Link href={display.action.href} className={buttonClass(critical ? 'primary' : 'ghost', 'sm')}>
          {display.action.label}
        </Link>
      )}
    </div>
  );
}
