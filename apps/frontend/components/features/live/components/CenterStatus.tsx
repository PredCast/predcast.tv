interface CenterStatusProps {
  readonly message: string;
}

export function CenterStatus({ message }: CenterStatusProps) {
  return (
    <div className="flex h-full items-center justify-center bg-[#0A0A0A] text-white">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-b-2" style={{ borderColor: "#E8001D" }} />
        <p className="font-mono-ctv text-[11px] uppercase tracking-[0.16em] text-white/55">{message}</p>
      </div>
    </div>
  );
}
