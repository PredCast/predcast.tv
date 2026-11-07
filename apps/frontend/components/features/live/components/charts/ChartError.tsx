interface ChartErrorProps {
  readonly onRetry: () => void;
}

export function ChartError({ onRetry }: ChartErrorProps) {
  return (
    <div role="alert" className="flex h-full flex-col items-center justify-center gap-2 text-center">
      <p className="text-[12px] text-white/55">Price history is unavailable right now.</p>
      <button
        type="button"
        onClick={onRetry}
        className="font-mono-ctv rounded-md border border-[#2A2A2A] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white hover:border-[#E8001D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
      >
        Retry
      </button>
    </div>
  );
}
