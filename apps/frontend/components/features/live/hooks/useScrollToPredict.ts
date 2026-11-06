"use client";

import { useCallback } from "react";

/** Desktop ticket first; the mobile markets block is used when the sidebar is hidden. */
export const PREDICT_ANCHOR_ID = "predict-panel";
export const PREDICT_ANCHOR_MOBILE_ID = "predict-panel-mobile";

/** Scrolls to whichever prediction panel is rendered for the current breakpoint and moves focus to it. */
export function useScrollToPredict(): () => void {
  return useCallback(() => {
    const target = [PREDICT_ANCHOR_ID, PREDICT_ANCHOR_MOBILE_ID]
      .map((id) => document.getElementById(id))
      .find((el): el is HTMLElement => !!el && el.offsetParent !== null);
    if (!target) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    target.focus({ preventScroll: true });
  }, []);
}
