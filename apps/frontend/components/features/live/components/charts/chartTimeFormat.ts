import { TickMarkType, type Time } from "lightweight-charts";

// lightweight-charts formats the axis in UTC; these keep it on the viewer's local time, like the tooltip.
const TIME = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" });
const DAY = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short" });
const MONTH = new Intl.DateTimeFormat(undefined, { month: "short" });
const YEAR = new Intl.DateTimeFormat(undefined, { year: "numeric" });
const FULL = new Intl.DateTimeFormat(undefined, { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });

/** Series times are always epoch seconds here; business-day strings never reach the chart. */
const toDate = (time: Time): Date | null => (typeof time === "number" ? new Date(time * 1000) : null);

export function formatTickMark(time: Time, type: TickMarkType): string {
  const date = toDate(time);
  if (!date) return "";
  switch (type) {
    case TickMarkType.Year:
      return YEAR.format(date);
    case TickMarkType.Month:
      return MONTH.format(date);
    case TickMarkType.DayOfMonth:
      return DAY.format(date);
    default:
      return TIME.format(date);
  }
}

export function formatCrosshairTime(time: Time): string {
  const date = toDate(time);
  return date ? FULL.format(date) : "";
}
