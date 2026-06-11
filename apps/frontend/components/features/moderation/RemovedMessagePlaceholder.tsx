'use client';

/**
 * Rendered in place of a soft-deleted chat message — the slot stays visible
 * so the conversation flow is preserved, only the content is withheld.
 */
export function RemovedMessagePlaceholder() {
  return (
    <div className="px-2 py-1.5">
      <span className="font-mono-ctv text-[10px] uppercase tracking-[0.16em] text-white/30">
        Message removed by community moderation
      </span>
    </div>
  );
}
