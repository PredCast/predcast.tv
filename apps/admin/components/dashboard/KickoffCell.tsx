/** "SAT 07 / 21:00" in local time. */
export function KickoffCell({ at }: Readonly<{ at: string }>) {
  const d = new Date(at);
  const day = d.toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit' }).replace(',', '');
  const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  return (
    <span className="flex flex-col font-mono leading-4">
      <span className="text-[10px] uppercase tracking-[0.12em] text-fg-meta">{day}</span>
      <span className="text-[13px] text-white">{time}</span>
    </span>
  );
}
