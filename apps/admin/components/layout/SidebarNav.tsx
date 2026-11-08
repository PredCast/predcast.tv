"use client";

import { usePathname } from "next/navigation";

import { NAV_ENTRIES, NAV_SOON } from "@/config/nav";
import { useAdminSession } from "@/providers/AdminSessionProvider";
import { isAllowedForNav } from "@/lib/rbac";
import { useNavBadges } from "@/hooks/useNavBadges";

import { NavItem } from "./NavItem";
import { NavSectionLabel } from "./NavSectionLabel";
import { SoonNavItem } from "./SoonNavItem";

export function SidebarNav() {
  const { role } = useAdminSession();
  const pathname = usePathname();
  const badges = useNavBadges();

  return (
    <>
      <NavSectionLabel>Operations</NavSectionLabel>
      {NAV_ENTRIES.filter((e) => isAllowedForNav(role, e.roles)).map((entry) => (
        <NavItem
          key={entry.href}
          entry={entry}
          active={entry.href === "/" ? pathname === "/" : pathname.startsWith(entry.href)}
          badge={entry.badge ? badges[entry.badge] : null}
        />
      ))}
      <NavSectionLabel className="pt-5">Coming soon</NavSectionLabel>
      {NAV_SOON.filter((e) => isAllowedForNav(role, e.roles)).map((it) => (
        <SoonNavItem key={it.label} label={it.label} icon={it.icon} />
      ))}
    </>
  );
}
