/** Label + control + hint; the label wraps the control so a click focuses it. */
export function FormField({
  label,
  hint,
  className = '',
  children,
}: Readonly<{ label: string; hint?: React.ReactNode; className?: string; children: React.ReactNode }>) {
  return (
    <label className={`block ${className}`}>
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-fg-meta">{label}</span>
      <span className="mt-1.5 block">{children}</span>
      {hint && <span className="mt-1.5 block font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-fg-meta">{hint}</span>}
    </label>
  );
}
