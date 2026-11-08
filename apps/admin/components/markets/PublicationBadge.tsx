import type { Publication } from '@/lib/markets/labels';

const STYLES: Record<Publication, { label: string; tone: string }> = {
  published: { label: 'Published', tone: 'border-[#2dd4a4]/40 text-[#2dd4a4]' },
  hidden: { label: 'Hidden', tone: 'border-[#F5C518]/40 text-[#F5C518]' },
  not_deployed: { label: 'Not deployed', tone: 'border-[#2A2A2A] text-white/45' },
};

export function PublicationBadge({ publication }: Readonly<{ publication: Publication }>) {
  const { label, tone } = STYLES[publication];
  return (
    <span className={`font-mono-ctv inline-flex w-fit rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] ${tone}`}>
      {label}
    </span>
  );
}
