import type { Publication } from '@/lib/markets/labels';

const STYLES: Record<Publication, { label: string; tone: string }> = {
  published: { label: 'Published', tone: 'border-positive/40 text-positive' },
  hidden: { label: 'Hidden', tone: 'border-warning/40 text-warning' },
  not_deployed: { label: 'Not deployed', tone: 'border-line text-fg-meta' },
};

export function PublicationBadge({ publication }: Readonly<{ publication: Publication }>) {
  const { label, tone } = STYLES[publication];
  return (
    <span className={`font-mono inline-flex w-fit rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] ${tone}`}>
      {label}
    </span>
  );
}
