"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";

// Module-level singleton — survives client-side navigations.
const queryClient = new QueryClient();

/** React Query context for the landing's live data (platform stats). */
export default function QueryProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
