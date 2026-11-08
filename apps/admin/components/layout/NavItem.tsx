import Link from "next/link";

import type { NavEntry } from "@/config/nav";
import type { NavBadge } from "@/hooks/useNavBadges";
import { Icon } from "@/components/common/Icon";

export function NavItem({
  entry,
  active,
  badge,
}: Readonly<{ entry: NavEntry; active: boolean; badge: NavBadge | null }>) {
  return (
    <Link
      href={entry.href}
      aria-current={active ? "page" : undefined}
      className={`flex h-9 items-center gap-2.5 rounded-nav px-2.5 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-[120ms] ${
        active ? "bg-accent/10 text-white shadow-[inset_2px_0_0_#E8001D]" : "text-fg-body hover:bg-card-2 hover:text-white"
      }`}
    >
      <Icon n={entry.icon} s={16} className={active ? "text-accent-text" : ""} />
      <span>{entry.label}</span>
      {badge && (
        <span
          aria-label={badge.label}
          className={`ml-auto inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-badge px-[5px] text-[10px] font-bold tracking-normal ${
            badge.tone === "danger" ? "bg-accent text-white" : "bg-warning text-page"
          }`}
        >
          {badge.count}
        </span>
      )}
    </Link>
  );
}
