interface MarketPolicyNoticeProps {
  readonly message: string;
}

export function MarketPolicyNotice({ message }: MarketPolicyNoticeProps) {
  return (
    <div
      role="status"
      aria-label={message}
      className="font-mono-ctv mt-2 rounded px-3 py-1.5 text-[10px] uppercase tracking-[0.16em]"
      style={{
        background: "rgba(232,0,29,0.08)",
        border: "1px solid rgba(232,0,29,0.3)",
        color: "#E8001D",
      }}
    >
      {message}
    </div>
  );
}
