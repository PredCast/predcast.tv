import Link from 'next/link';

/** Header action link ("ALL MARKETS →"). */
export function CardLink({ href, children }: Readonly<{ href: string; children: React.ReactNode }>) {
  return (
    <Link
      href={href}
      className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-body transition-colors hover:text-white"
    >
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}
