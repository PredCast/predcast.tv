interface MarketsEmptyStateProps {
  readonly message: string;
}

export function MarketsEmptyState({ message }: MarketsEmptyStateProps) {
  return (
    <div className="font-mono-ctv px-4 py-10 text-center text-[11px] uppercase tracking-[0.16em] text-white/45">
      {message}
    </div>
  );
}
