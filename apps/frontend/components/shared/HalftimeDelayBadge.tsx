/**
 * Amber pill shown on the HALFTIME market row when the upstream halftime
 * score hasn't arrived 2 min after the match reached HT/2H. Sets a clear
 * expectation: the position is still active, settle is just late. If
 * `HALFTIME_VOID_AFTER_2H_SECONDS` elapses without data, the backend
 * cancels the market and stakers can claimRefund.
 *
 * Visual style mirrors {@link StaleDataBadge} so the two amber pills
 * read as a coherent "degraded mode" family.
 */
interface HalftimeDelayBadgeProps {
  /** Render the badge only when this flag is set. Caller decides when to flip it. */
  readonly delayed?: boolean;
  /** Override the tooltip — default explains the state honestly. */
  readonly title?: string;
}

const DEFAULT_TITLE =
  "API-Football hasn't reported the halftime score yet. Your position is still active. " +
  "If the score doesn't arrive shortly, the market will be cancelled and stakes refunded.";

export function HalftimeDelayBadge({ delayed, title }: HalftimeDelayBadgeProps) {
  if (!delayed) return null;
  return (
    <span
      className="font-mono-ctv inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em]"
      style={{
        color: "#F5C518",
        borderColor: "rgba(245, 197, 24, 0.4)",
        background: "rgba(245, 197, 24, 0.06)",
      }}
      title={title ?? DEFAULT_TITLE}
    >
      <span
        aria-hidden
        className="block h-1.5 w-1.5 rounded-full"
        style={{ background: "#F5C518" }}
      />
      HT resolution may be delayed
    </span>
  );
}
