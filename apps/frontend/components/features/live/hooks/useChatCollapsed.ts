"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "predcast.live.chatCollapsed";

/** Per-viewer convenience; storage may be unavailable (private mode), so every access is guarded. */
export function useChatCollapsed(): readonly [boolean, (collapsed: boolean) => void] {
  // Starts expanded on the server and first paint; the stored preference is applied after mount.
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      setCollapsed(window.localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      // Storage blocked: keep the default.
    }
  }, []);

  const update = (next: boolean) => {
    setCollapsed(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch {
      // Storage blocked: the preference only lasts for this page view.
    }
  };

  return [collapsed, update] as const;
}
