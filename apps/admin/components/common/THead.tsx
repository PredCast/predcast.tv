/** Grid table header — same `cols` template as its rows. */
export function THead({
  cols,
  children,
}: Readonly<{ cols: string; children: React.ReactNode }>) {
  return (
    <div
      className="grid h-8 items-center gap-3 border-b border-line-subtle px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-meta"
      style={{ gridTemplateColumns: cols }}
    >
      {children}
    </div>
  );
}
