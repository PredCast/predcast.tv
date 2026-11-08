"use client";

import { useCallback } from "react";

/** Anchor of the desktop bet ticket. */
export const PREDICT_ANCHOR_ID = "predict-panel";

/** Matches Tailwind `lg`, where the sidebar ticket is rendered. */
const DESKTOP_QUERY = "(min-width: 1024px)";

/**
 * "Predict" shortcut: on desktop, scrolls to the sidebar ticket and focuses it;
 * below `lg`, opens the mobile bet sheet instead.
 */
export function usePredictShortcut(openMobileSheet: () => void): () => void {
  return useCallback(() => {
    if (!window.matchMedia(DESKTOP_QUERY).matches) {
      openMobileSheet();
      return;
    }
    const target = document.getElementById(PREDICT_ANCHOR_ID);
    if (!target) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    target.focus({ preventScroll: true });
  }, [openMobileSheet]);
}
