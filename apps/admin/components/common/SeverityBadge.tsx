const STYLES: Record<number, string> = {
  5: 'border-accent bg-accent text-white',
  4: 'border-accent text-accent-text',
  3: 'border-warning/50 text-warning',
};

/** S1–S5 chip: S5 solid red, S4 red outline, S3 yellow, S1–S2 grey. */
export function SeverityBadge({ severity }: Readonly<{ severity: number }>) {
  const style = STYLES[severity] ?? 'border-line text-fg-body';
  return (
    <span
      aria-label={`Severity ${severity}`}
      className={`inline-flex h-[22px] w-[30px] shrink-0 items-center justify-center rounded-badge border font-mono text-[10px] font-bold ${style}`}
    >
      S{severity}
    </span>
  );
}
