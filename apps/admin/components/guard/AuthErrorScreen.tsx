"use client";

/** Auth failure — the wallet has been disconnected; offers a way back to connect. */
export function AuthErrorScreen({ message, onBack }: Readonly<{ message: string; onBack: () => void }>) {
  return (
    <main className="flex min-h-svh items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-xl border border-[#E8001D]/30 bg-[#111] p-8 text-center">
        <h1 className="font-display text-[28px] font-extrabold uppercase leading-none text-[#FF1737]">
          Authentication failed
        </h1>
        <p className="font-mono-ctv mt-3 text-[11px] tracking-[0.06em] text-white/55">{message}</p>
        <button
          type="button"
          onClick={onBack}
          className="font-mono-ctv mt-6 w-full rounded-md bg-[#E8001D] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-all hover:bg-[#FF1737]"
        >
          ← Back to wallet connect
        </button>
      </div>
    </main>
  );
}
