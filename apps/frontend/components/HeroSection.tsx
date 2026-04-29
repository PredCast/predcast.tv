"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
// import SplineBackground from "./SplineBackground"; // disabled: heavy 3D scene, re-enable when performance budget allows
import SportsTVOrbit from "./SportsTVOrbit";

const TRUST_SIGNALS = [
  { label: "On-chain", icon: "⛓️" },
  { label: "No KYC",   icon: "🔓" },
  { label: "USDC Yield", icon: "💰" },
];

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center w-full overflow-hidden bg-black pt-20">
      {/* <SplineBackground /> */}

      {/* Subtle dot-grid texture for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute left-[-200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse"
          style={{ background: "rgba(232,0,29,0.12)", animationDuration: "4s" }}
        />
        <div
          className="absolute right-[-150px] bottom-0 w-[350px] h-[350px] rounded-full blur-2xl animate-pulse"
          style={{ background: "rgba(255,52,101,0.07)", animationDuration: "6s", animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-20 w-full px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — headline + CTAs */}
          <div>
            {/* Protocol tag */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border"
              style={{
                background: "rgba(232,0,29,0.08)",
                borderColor: "rgba(232,0,29,0.25)",
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#E8001D" }}
              />
              <span
                className="text-[11px] font-bold tracking-[0.12em] uppercase"
                style={{ color: "#E8001D", fontFamily: "Lexend, sans-serif" }}
              >
                Sports SocialFi Protocol
              </span>
            </div>

            <h1
              className="font-black text-white leading-[0.9] mb-5 drop-shadow-2xl"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "clamp(48px, 7vw, 96px)",
              }}
            >
              Live Sports.
              <br />
              <span style={{ color: "#E8001D" }}>Live ChilizTV.</span>
            </h1>

            <p
              className="text-[15px] sm:text-[17px] mb-7 leading-relaxed max-w-md"
              style={{ fontFamily: "Lexend, sans-serif", color: "rgba(255,255,255,0.65)" }}
            >
              Predict match outcomes, watch live sports, and earn USDC yield —
              all on-chain on the Chiliz blockchain.
            </p>

            {/* Trust signals */}
            <div className="flex items-center gap-5 mb-8 flex-wrap">
              {TRUST_SIGNALS.map(({ label, icon }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <span className="text-[13px]">{icon}</span>
                  <span
                    className="text-[11px] font-semibold"
                    style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Lexend, sans-serif" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-row gap-3 flex-wrap">
              <Link
                href="/browse"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 hover:brightness-110 text-[15px] whitespace-nowrap"
                style={{ background: "#E8001D", fontFamily: "Lexend, sans-serif" }}
              >
                Launch App
              </Link>
              <Link
                href="/whitepaper"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:bg-white/5 hover:border-white/50 text-[15px] whitespace-nowrap border"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  borderColor: "rgba(255,255,255,0.2)",
                  fontFamily: "Lexend, sans-serif",
                }}
              >
                Whitepaper
              </Link>
            </div>
          </div>

          {/* Right — sports TV orbit animation */}
          <div className="relative w-full flex items-center justify-center overflow-hidden">
            <SportsTVOrbit />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-40">
        <span
          className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white"
          style={{ fontFamily: "Lexend, sans-serif" }}
        >
          Scroll
        </span>
        <ChevronDown
          size={16}
          className="text-white animate-bounce"
          style={{ animationDuration: "2s" }}
        />
      </div>
    </section>
  );
}
