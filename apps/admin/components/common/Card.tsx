export type CardTone = 'default' | 'warning' | 'danger';

const BORDERS: Record<CardTone, string> = {
  default: 'border-line-subtle',
  warning: 'border-warning/35',
  danger: 'border-accent/40',
};

export function Card({
  tone = 'default',
  className = '',
  as: Tag = 'div',
  label,
  children,
}: Readonly<{
  tone?: CardTone;
  className?: string;
  as?: 'div' | 'section';
  /** Accessible name when rendered as a section. */
  label?: string;
  children: React.ReactNode;
}>) {
  return (
    <Tag aria-label={label} className={`overflow-hidden rounded-card border bg-card ${BORDERS[tone]} ${className}`}>
      {children}
    </Tag>
  );
}
