import Link from 'next/link';

import { Icon } from './Icon';

export function BackLink({ href, children }: Readonly<{ href: string; children: React.ReactNode }>) {
  return (
    <Link
      href={href}
      className="font-mono inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-fg-meta transition-colors hover:text-white"
    >
      <Icon n="arrowLeft" s={11} />
      <span>{children}</span>
    </Link>
  );
}
