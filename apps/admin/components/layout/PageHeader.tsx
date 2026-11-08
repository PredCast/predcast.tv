import { Eyebrow } from '@/components/common/Eyebrow';

interface PageHeaderProps {
  readonly eyebrow: string;
  readonly title: string;
  /** Mono meta line under the title (date, refresh state). */
  readonly meta?: React.ReactNode;
  readonly right?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, meta, right }: PageHeaderProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="flex flex-col gap-1.5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display text-[44px] font-extrabold uppercase leading-[44px] tracking-[0.01em] text-white">{title}</h1>
        {meta && <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-meta">{meta}</div>}
      </div>
      {right && <div className="flex flex-wrap items-center gap-2">{right}</div>}
    </div>
  );
}
