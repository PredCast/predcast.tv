import { Icon, type IconName } from './Icon';

/** Empty card body; `framed` draws the dashed box used when a whole section is empty. */
export function EmptyState({
  icon = 'shieldCheck',
  title,
  hint,
  action,
  py = 'py-12',
  framed = false,
}: Readonly<{ icon?: IconName; title: string; hint?: string; action?: React.ReactNode; py?: string; framed?: boolean }>) {
  return (
    <div
      className={`flex flex-col items-center justify-center px-6 text-center ${py} ${
        framed ? 'rounded-card border border-dashed border-line' : ''
      }`}
    >
      <div className="grid h-11 w-11 place-items-center rounded-panel border border-line bg-card-2 text-fg-body">
        <Icon n={icon} s={18} />
      </div>
      <p className="mt-3.5 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-white">{title}</p>
      {hint && <p className="mt-2 max-w-[380px] text-[13px] leading-5 text-fg-body">{hint}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
