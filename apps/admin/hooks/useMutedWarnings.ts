'use client';

import { useState } from 'react';

const KEY = 'pc-admin:warnings-muted-until';
const MUTE_MS = 60 * 60 * 1000;

function readUntil(): number {
  try {
    return Number(window.localStorage.getItem(KEY) ?? 0) || 0;
  } catch {
    return 0;
  }
}

/** Per-viewer "mute warnings 1h" (critical alerts always show). Browser storage: a convenience only. */
export function useMutedWarnings(now: Date | null) {
  const [until, setUntil] = useState<number>(() => (typeof window === 'undefined' ? 0 : readUntil()));
  const muted = now !== null && until > now.getTime();
  const toggle = () => {
    const next = muted ? 0 : Date.now() + MUTE_MS;
    setUntil(next);
    try {
      window.localStorage.setItem(KEY, String(next));
    } catch {
      // Storage blocked: the mute only lasts for this page view.
    }
  };
  return { muted, until, toggle };
}
