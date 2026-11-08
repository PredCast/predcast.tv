"use client";

import Image from "next/image";

import { EnvCard } from "./EnvCard";
import { OperatorCard } from "./OperatorCard";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  return (
    <nav aria-label="Admin" className="flex w-56 shrink-0 grow flex-col gap-1 border-r border-line-subtle bg-sidebar px-3 py-4 md:grow-0">
      <div className="mb-3 flex h-10 items-center gap-2 px-2">
        <Image src="/predcast-logo-on-dark.svg" alt="PredCast" width={98} height={15} priority className="h-[15px] w-auto" />
        <span className="rounded-badge border border-accent/50 px-[5px] py-0.5 font-mono text-[9px] font-semibold leading-3 tracking-[0.16em] text-accent-text">
          ADMIN
        </span>
      </div>
      <SidebarNav />
      <div className="mt-auto flex flex-col gap-2 pt-6">
        <EnvCard />
        <OperatorCard />
      </div>
    </nav>
  );
}
