export function ChartSkeleton() {
  return (
    <div aria-hidden className="flex h-full w-full items-end gap-1 px-1 pb-6 motion-safe:animate-pulse">
      {[38, 52, 45, 60, 55, 70, 64, 72, 58, 66].map((h, i) => (
        <span key={i} className="flex-1 rounded-sm bg-[#141414]" style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}
