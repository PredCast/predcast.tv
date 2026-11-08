interface MarketsSkeletonRowProps {
  readonly first?: boolean;
}

export function MarketsSkeletonRow({ first = false }: MarketsSkeletonRowProps) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-4"
      style={{ borderTop: first ? "none" : "1px solid #1E1E1E" }}
    >
      <div className="h-9 w-9 animate-pulse rounded-md" style={{ background: "#1E1E1E" }} />
      <div className="flex-1">
        <div className="mb-1.5 h-3 w-24 animate-pulse rounded" style={{ background: "#1E1E1E" }} />
        <div className="h-2.5 w-32 animate-pulse rounded" style={{ background: "#141414" }} />
      </div>
    </div>
  );
}
