import type { BadgeTone } from '@/lib/ui/badgeTone';

const TONES: Record<BadgeTone, string> = {
  positive: 'border-positive/35 text-positive',
  warning: 'border-warning/45 text-warning',
  danger: 'border-accent text-accent-text',
  critical: 'border-accent bg-accent text-white',
  neutral: 'border-line bg-card-2 text-fg-body',
  muted: 'border-line text-fg-meta',
  strong: 'border-line-hover text-white',
  token: 'h-4 border-transparent bg-accent/12 px-[5px] text-accent-text',
};

/** Status, role, env and market badges — glyph + word, never colour alone (Components board, §04). */
export function Badge({
  tone = 'muted',
  glyph,
  className = '',
  children,
}: Readonly<{ tone?: BadgeTone; glyph?: string; className?: string; children: React.ReactNode }>) {
  return (
    <span
      className={`inline-flex h-5 shrink-0 items-center gap-[5px] whitespace-nowrap rounded-badge border px-1.5 font-mono text-[9px] font-bold uppercase leading-none tracking-[0.12em] ${TONES[tone]} ${className}`}
    >
      {glyph && <span aria-hidden="true">{glyph}</span>}
      {children}
    </span>
  );
}
