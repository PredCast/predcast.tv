'use client';

import { useSyncExternalStore } from 'react';

/** One shared 1 s clock for every relative time on screen. */
let snapshot: Date | null = null;
let timer: ReturnType<typeof setInterval> | undefined;
const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  if (!timer) {
    snapshot = new Date();
    timer = setInterval(() => {
      snapshot = new Date();
      listeners.forEach((l) => l());
    }, 1_000);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = undefined;
    }
  };
}

/** Ticking clock for relative times ("in 18s"); null on the server render (hydration-safe). */
export function useNow(): Date | null {
  return useSyncExternalStore(subscribe, () => snapshot, () => null);
}
