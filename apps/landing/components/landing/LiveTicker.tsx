"use client";

interface MockItem {
  home: string;
  away: string;
  league: string;
  odds: string;
  time: string;
}

const MOCK_MATCHES: MockItem[] = [
  { home: "REAL", away: "MCI",  league: "UEFA CL",  odds: "2.15 / 3.40 / 3.20", time: "20:45" },
  { home: "PSG",  away: "BAR",  league: "UEFA CL",  odds: "2.80 / 3.20 / 2.60", time: "20:45" },
  { home: "LIV",  away: "ATM",  league: "UEFA CL",  odds: "1.95 / 3.50 / 4.10", time: "18:30" },
  { home: "BVB",  away: "INT",  league: "UEFA CL",  odds: "2.40 / 3.10 / 3.00", time: "20:45" },
  { home: "ARS",  away: "GAL",  league: "UEFA EL",  odds: "1.80 / 3.60 / 4.50", time: "21:00" },
  { home: "ACM",  away: "BEN",  league: "UEFA EL",  odds: "2.25 / 3.30 / 3.10", time: "18:30" },
];

function Item({ m }: { m: MockItem }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="text-white/45">{m.time}</span>
      <span className="font-bold text-white">
        {m.home}{" "}
        <span className="font-bold text-[#E8001D]">vs</span>{" "}
        {m.away}
      </span>
      <span className="text-[#2A2A2A]">·</span>
      <span>{m.odds}</span>
      <span className="text-[#2A2A2A]">·</span>
      <span className="text-white/45">{m.league}</span>
    </span>
  );
}

export function LiveTicker() {
  const loop = [...MOCK_MATCHES, ...MOCK_MATCHES];

  return (
    <div
      className="relative z-4 overflow-hidden border-y border-[#1E1E1E] bg-[#111] py-3.5"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
      }}
      aria-label="Live matches ticker"
    >
      <div
        className="ctv-marquee font-mono-ctv flex gap-12 whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.06em] text-white/65"
        role="marquee"
      >
        {loop.map((m, i) => (
          <Item key={i} m={m} />
        ))}
      </div>
    </div>
  );
}
