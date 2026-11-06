interface PredictionsEmptyProps {
  readonly onPickMarket?: () => void;
}

export function PredictionsEmpty({ onPickMarket }: PredictionsEmptyProps) {
  return (
    <div className="flex flex-col items-center gap-2 px-2 py-8 text-center">
      <span className="font-mono-ctv inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8001D]">
        <span aria-hidden className="block h-0.5 w-4 bg-[#E8001D]" />
        No predictions yet
      </span>
      <p className="text-[12px] text-white/55">Pick an outcome in the Predict ticket to take your first position.</p>
      {onPickMarket && (
        <button
          type="button"
          onClick={onPickMarket}
          className="font-mono-ctv mt-1 rounded-md bg-[#E8001D] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white hover:bg-[#FF1737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
        >
          Browse markets
        </button>
      )}
    </div>
  );
}
