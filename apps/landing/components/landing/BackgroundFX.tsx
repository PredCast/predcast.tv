export function BackgroundFX() {
  return (
    <>
      {/* Subtle red grid — no mask so it covers the full page */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,0,29,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(232,0,29,0.018) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Top-left red glow */}
      <div
        aria-hidden
        className="fixed pointer-events-none z-0"
        style={{
          top: "-260px",
          left: "-160px",
          width: "720px",
          height: "720px",
          background:
            "radial-gradient(circle, rgba(232,0,29,0.22), transparent 60%)",
          filter: "blur(20px)",
        }}
      />
      {/* Bottom-right red glow */}
      <div
        aria-hidden
        className="fixed pointer-events-none z-0"
        style={{
          bottom: "-200px",
          right: "-160px",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(232,0,29,0.15), transparent 60%)",
          filter: "blur(20px)",
        }}
      />
    </>
  );
}
