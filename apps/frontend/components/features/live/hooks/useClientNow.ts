"use client";

import { useEffect, useState } from "react";

/** Wall clock that is `null` on the server render (hydration-safe), then ticks every `intervalMs`. */
export function useClientNow(intervalMs = 15_000): Date | null {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}
