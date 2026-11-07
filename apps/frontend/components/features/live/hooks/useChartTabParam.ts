"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PARAM = "chart";

/** Active chart tab persisted in `?chart=` so the choice survives reloads and can be shared. */
export function useChartTabParam(): readonly [string | null, (tabId: string) => void] {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const value = params.get(PARAM);

  const setValue = useCallback(
    (tabId: string) => {
      const next = new URLSearchParams(params.toString());
      next.set(PARAM, tabId);
      router.replace(`${pathname}?${next.toString()}`, { scroll: false });
    },
    [params, pathname, router],
  );

  return [value, setValue] as const;
}
