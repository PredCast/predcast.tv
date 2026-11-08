import { Icon, type IconName } from './Icon';

/** Card header: icon + title (h2) + count + meta on the left, action on the right (h 44). */
export function CardHead({
  title,
  icon,
  count,
  meta,
  right,
}: Readonly<{
  title: string;
  icon?: IconName;
  count?: number | string;
  meta?: React.ReactNode;
  right?: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-11 flex-wrap items-center gap-2.5 border-b border-line-subtle px-4 py-2">
      {icon && <Icon n={icon} s={14} className="text-fg-body" />}
      <h2 className="font-mono text-[11px] font-semibold uppercase leading-4 tracking-[0.18em] text-white">{title}</h2>
      {count != null && (
        <span className="rounded-badge border border-line px-1.5 font-mono text-[10px] font-semibold leading-4 text-fg-body">
          {count}
        </span>
      )}
      {meta && <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-meta">{meta}</span>}
      {right && <div className="ml-auto flex items-center gap-2">{right}</div>}
    </div>
  );
}
