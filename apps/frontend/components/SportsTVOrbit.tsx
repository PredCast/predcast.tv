"use client";

// All measurements are 3× original then scaled back 25% (= 2.25× original)
const BALLS: Array<{
  emoji: string;
  r: number;
  dur: number;
  del: number;
  cw: boolean;
  size: number;
}> = [
  { emoji: "⚽", r: 243, dur: 9,  del:  0, cw: true,  size: 47 },
  { emoji: "🏀", r: 310, dur: 14, del: -4, cw: false, size: 43 },
  { emoji: "🎾", r: 193, dur: 7,  del: -2, cw: true,  size: 39 },
  { emoji: "🏈", r: 274, dur: 16, del: -8, cw: false, size: 39 },
  { emoji: "⚾", r: 225, dur: 11, del: -5, cw: true,  size: 39 },
];

export default function SportsTVOrbit() {
  return (
    <div
      className="relative flex items-center justify-center w-full select-none"
      style={{ height: 540 }}
      aria-hidden="true"
    >
      {/* Faint orbit ring guides */}
      {[193, 243, 310].map((r) => (
        <div
          key={r}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: r * 2,
            height: r * 2,
            border: "1px solid rgba(255,255,255,0.035)",
          }}
        />
      ))}

      {/* Central TV */}
      <div className="relative z-10 flex flex-col items-center pointer-events-none">
        {/* Antennas */}
        <div className="flex gap-[63px] mb-1 justify-center">
          <div
            style={{
              width: 4,
              height: 48,
              background: "linear-gradient(180deg, #666 0%, #1a1a1a 100%)",
              transform: "rotate(-13deg)",
              borderRadius: 3,
              transformOrigin: "bottom center",
            }}
          />
          <div
            style={{
              width: 4,
              height: 39,
              background: "linear-gradient(180deg, #666 0%, #1a1a1a 100%)",
              transform: "rotate(13deg)",
              borderRadius: 3,
              transformOrigin: "bottom center",
            }}
          />
        </div>

        {/* TV Body */}
        <div
          style={{
            width: 315,
            height: 225,
            background: "linear-gradient(145deg, #1e1e1e 0%, #0d0d0d 100%)",
            border: "3px solid rgba(232,0,29,0.32)",
            borderRadius: 15,
            position: "relative",
            animation: "tv-glow 3s ease-in-out infinite",
          }}
        >
          {/* Screen */}
          <div
            style={{
              position: "absolute",
              top: 18,
              left: 18,
              right: 18,
              bottom: 30,
              background:
                "radial-gradient(ellipse at 45% 40%, rgba(232,0,29,0.16) 0%, #060606 72%)",
              border: "2px solid rgba(232,0,29,0.18)",
              borderRadius: 9,
              overflow: "hidden",
            }}
          >
            {/* CRT scan lines */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)",
                pointerEvents: "none",
              }}
            />
            {/* LIVE badge */}
            <div
              style={{
                position: "absolute",
                top: 9,
                left: 9,
                background: "#E8001D",
                borderRadius: 5,
                padding: "3px 9px",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "white",
                  animation: "pulse 1.2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  color: "white",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  fontFamily: "Lexend, sans-serif",
                }}
              >
                LIVE
              </span>
            </div>
          </div>

          {/* Control dots */}
          <div
            style={{
              position: "absolute",
              bottom: 8,
              right: 15,
              display: "flex",
              gap: 6,
              alignItems: "center",
            }}
          >
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#E8001D", opacity: 0.85 }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#252525" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#252525" }} />
          </div>
        </div>

        {/* Stand neck */}
        <div
          style={{
            width: 6,
            height: 21,
            background: "linear-gradient(180deg, #1a1a1a, #111)",
          }}
        />
        {/* Stand base */}
        <div
          style={{
            width: 135,
            height: 14,
            background:
              "linear-gradient(90deg, transparent 0%, #1e1e1e 30%, #1e1e1e 70%, transparent 100%)",
            borderRadius: 8,
          }}
        />
      </div>

      {/* Orbiting sports balls */}
      {BALLS.map(({ emoji, r, dur, del, cw, size }, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: size,
            height: size,
            marginTop: -(size / 2),
            marginLeft: -(size / 2),
            fontSize: size,
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: `${cw ? "orbit-cw" : "orbit-ccw"} ${dur}s linear ${del}s infinite`,
            ["--r" as string]: `${r}px`,
            filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.7))",
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
}
