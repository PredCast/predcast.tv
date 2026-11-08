/** Section eyebrow: 18×2 accent bar + mono label (small red text uses accent-text for AA). */
export function Eyebrow({
  children,
  color,
  className = '',
}: Readonly<{ children: React.ReactNode; color?: string; className?: string }>) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] ${color ? '' : 'text-accent-text'} ${className}`}
      style={color ? { color } : undefined}
    >
      <span aria-hidden="true" className="block h-0.5 w-[18px]" style={{ background: color ?? '#E8001D' }} />
      <span>{children}</span>
    </div>
  );
}
