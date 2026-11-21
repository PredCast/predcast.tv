"use client";

import type { ReactNode } from "react";

interface ModalAlertProps {
  children: ReactNode;
  className?: string;
}

/** Red inline alert used for swap-path and transaction errors in the streamer modals. */
export function ModalAlert({ children, className = "" }: ModalAlertProps) {
  return (
    <div
      role="alert"
      className={`rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-[12px] text-red-300 ${className}`}
    >
      {children}
    </div>
  );
}
