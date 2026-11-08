import { MessageSquare, Target } from "lucide-react";

interface MobilePredictBarProps {
  readonly hidden: boolean;
  readonly onOpenChat: () => void;
  readonly onPredict: () => void;
}

/** Sticky mobile dock: chat shortcut + "Predict", which opens the bet ticket sheet. */
export function MobilePredictBar({ hidden, onOpenChat, onPredict }: MobilePredictBarProps) {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-[#1E1E1E] bg-[#0A0A0A]/95 px-3 pt-3 backdrop-blur transition-transform motion-reduce:transition-none lg:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
    >
      <button
        type="button"
        onClick={onPredict}
        className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-[#E8001D] text-[14px] font-bold uppercase tracking-[0.06em] text-white hover:bg-[#FF1737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
        style={{ boxShadow: "0 8px 32px rgba(232,0,29,0.25)" }}
      >
        <Target size={16} aria-hidden />
        Predict
      </button>
      {/* Right side: the Next.js dev indicator sits bottom-left in development. */}
      <button
        type="button"
        onClick={onOpenChat}
        aria-label="Open live chat"
        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-[#2A2A2A] bg-[#141414] text-white hover:border-[#3A3A3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
      >
        <MessageSquare size={18} aria-hidden />
      </button>
    </div>
  );
}
