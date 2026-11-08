"use client";

import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function AdminShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-svh flex-wrap bg-page">
      <Sidebar />
      <div className="flex min-w-0 flex-[999_1_560px] flex-col">
        <TopBar />
        <main className="flex min-w-0 flex-1 flex-col px-7 pb-12 pt-6">{children}</main>
      </div>
    </div>
  );
}
