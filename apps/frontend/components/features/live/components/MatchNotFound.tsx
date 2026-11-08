interface MatchNotFoundProps {
  readonly onBack: () => void;
}

export function MatchNotFound({ onBack }: MatchNotFoundProps) {
  return (
    <div className="flex h-full items-center justify-center bg-[#0A0A0A] text-white">
      <div className="max-w-md px-6 text-center">
        <p className="font-mono-ctv mb-4 text-[11px] uppercase tracking-[0.16em] text-[#E8001D]">No match found</p>
        <button
          type="button"
          onClick={onBack}
          className="font-mono-ctv inline-flex items-center justify-center gap-2 rounded-md bg-[#E8001D] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#FF1737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
        >
          Back to matches
        </button>
      </div>
    </div>
  );
}
