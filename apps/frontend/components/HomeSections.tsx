"use client";

import Link from "next/link";
import { Crosshair, Tv, TrendingUp, ArrowRight, Eye } from "lucide-react";
import { HeroMatchList } from "./HeroMatchList";

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
    { label: "Predictions Made", value: "—", sub: "All time" },
    { label: "Active Streamers", value: "—", sub: "Live right now" },
    { label: "Pool TVL", value: "—", sub: "In USDC" },
    { label: "Current APY", value: "—", sub: "Rolling 30d" },
];

const STEPS = [
    {
        num: "01",
        icon: Eye,
        title: "Watch",
        body: "Stream live sports from creators on the Chiliz network. Real matches, real time, zero platform tax.",
    },
    {
        num: "02",
        icon: Crosshair,
        title: "Predict",
        body: "Place on-chain predictions on live match outcomes — 1X2, Over/Under, Asian Handicap. Settled transparently.",
    },
    {
        num: "03",
        icon: TrendingUp,
        title: "Earn",
        body: "Win predictions or provide pool liquidity. Earn USDC yield automatically from every losing bet.",
    },
];

const FEATURES = [
    {
        icon: Crosshair,
        title: "Prediction Markets",
        body: "On-chain markets for live sports events. Multiple bet types, transparent odds, automatic on-chain settlement. No offshore books, no trust required.",
        tags: ["On-chain", "Multiple markets", "Live odds"],
        accentRgb: "232,0,29",
    },
    {
        icon: Tv,
        title: "Live Streaming",
        body: "Creators stream directly to fans and monetise through subscriptions and tips. Revenue goes straight to their stream wallet — no platform cut.",
        tags: ["No fees", "Subscriptions", "Fan tips"],
        accentRgb: "232,0,29",
    },
    {
        icon: TrendingUp,
        title: "Liquidity Pool",
        body: "Be the house. Deposit USDC into the pool and earn yield from every losing prediction. No lock-up, fully on-chain mechanics.",
        tags: ["No lock-up", "USDC yield", "Trustless"],
        accentRgb: "245,197,24",
    },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
    return (
        <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-4 rounded-full flex-shrink-0" style={{ background: "#E8001D" }} />
                <span
                    className="text-[11px] font-bold tracking-[0.14em] uppercase"
                    style={{ color: "#E8001D", fontFamily: "'Lexend', sans-serif" }}
                >
                    {eyebrow}
                </span>
            </div>
            <h2
                className="text-[36px] sm:text-[52px] font-black uppercase leading-none text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
                {title}
            </h2>
        </div>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function HomeSections() {
    return (
        <div style={{ background: "#0A0A0A" }}>

            {/* ── Stats band ─────────────────────────────────────────────── */}
            <section style={{ borderTop: "1px solid #161616", borderBottom: "1px solid #161616" }}>
                <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {STATS.map(({ label, value, sub }, i) => (
                            <div
                                key={label}
                                className="flex flex-col items-start py-7 px-5"
                                style={{ borderLeft: i > 0 ? "1px solid #161616" : "none" }}
                            >
                                <div
                                    className="text-[10px] font-semibold tracking-[0.12em] uppercase mb-2"
                                    style={{ color: "#555", fontFamily: "'Lexend', sans-serif" }}
                                >
                                    {label}
                                </div>
                                <div
                                    className="text-[30px] font-bold leading-none mb-1.5"
                                    style={{ color: "#fff", fontFamily: "'JetBrains Mono', monospace" }}
                                >
                                    {value}
                                </div>
                                <div
                                    className="text-[10px]"
                                    style={{ color: "#444", fontFamily: "'Lexend', sans-serif" }}
                                >
                                    {sub}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Live & Upcoming matches ────────────────────────────────── */}
            <section className="py-16 sm:py-20" style={{ borderTop: "1px solid #161616" }}>
                <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20">
                    <SectionHeading eyebrow="Now Playing" title="Live & Upcoming" />
                    <HeroMatchList />
                </div>
            </section>

            {/* ── How it works ───────────────────────────────────────────── */}
            <section className="py-20 sm:py-28">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20">
                    <SectionHeading eyebrow="The Protocol" title="How It Works" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "#1A1A1A" }}>
                        {STEPS.map(({ num, icon: Icon, title, body }) => (
                            <div
                                key={title}
                                className="relative p-8 sm:p-10"
                                style={{ background: "#0A0A0A" }}
                            >
                                {/* Watermark number */}
                                <div
                                    className="absolute top-6 right-6 font-black leading-none select-none pointer-events-none"
                                    style={{
                                        fontSize: "88px",
                                        color: "rgba(232,0,29,0.05)",
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        lineHeight: 1,
                                    }}
                                >
                                    {num}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-11 h-11 rounded flex items-center justify-center mb-6 flex-shrink-0"
                                    style={{
                                        background: "rgba(232,0,29,0.1)",
                                        border: "1px solid rgba(232,0,29,0.2)",
                                    }}
                                >
                                    <Icon size={18} style={{ color: "#E8001D" }} />
                                </div>

                                <h3
                                    className="text-[24px] font-black uppercase text-white mb-3"
                                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                >
                                    {title}
                                </h3>
                                <p
                                    className="text-[13px] leading-relaxed"
                                    style={{ color: "#666", fontFamily: "'Lexend', sans-serif" }}
                                >
                                    {body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Feature cards ──────────────────────────────────────────── */}
            <section
                className="py-20 sm:py-28"
                style={{ borderTop: "1px solid #161616" }}
            >
                <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20">
                    <SectionHeading eyebrow="Features" title="What You Can Do" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {FEATURES.map(({ icon: Icon, title, body, tags, accentRgb }) => (
                            <div
                                key={title}
                                className="relative rounded-lg overflow-hidden flex flex-col"
                                style={{ background: "#111", border: "1px solid #1E1E1E" }}
                            >
                                {/* Top accent line */}
                                <div
                                    className="h-[2px] flex-shrink-0"
                                    style={{
                                        background: `linear-gradient(90deg, rgb(${accentRgb}) 0%, transparent 65%)`,
                                    }}
                                />

                                <div className="flex flex-col flex-1 p-7">
                                    {/* Icon */}
                                    <div
                                        className="w-11 h-11 rounded flex items-center justify-center mb-6 flex-shrink-0"
                                        style={{
                                            background: `rgba(${accentRgb},0.1)`,
                                            border: `1px solid rgba(${accentRgb},0.2)`,
                                        }}
                                    >
                                        <Icon size={18} style={{ color: `rgb(${accentRgb})` }} />
                                    </div>

                                    <h3
                                        className="text-[22px] font-black uppercase text-white mb-3"
                                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                    >
                                        {title}
                                    </h3>

                                    <p
                                        className="text-[13px] leading-relaxed flex-1 mb-6"
                                        style={{ color: "#666", fontFamily: "'Lexend', sans-serif" }}
                                    >
                                        {body}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded"
                                                style={{
                                                    background: "#1A1A1A",
                                                    color: "#666",
                                                    border: "1px solid #252525",
                                                    fontFamily: "'Lexend', sans-serif",
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Built on Chiliz callout ─────────────────────────────────── */}
            <section style={{ borderTop: "1px solid #161616" }}>
                <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex flex-wrap items-center gap-4">
                            {["Built on Chiliz", "Powered by USDC", "Fully on-chain", "No KYC"].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[11px] font-semibold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full"
                                    style={{
                                        background: "#141414",
                                        color: "#555",
                                        border: "1px solid #222",
                                        fontFamily: "'Lexend', sans-serif",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p
                            className="text-[12px] text-center sm:text-right"
                            style={{ color: "#444", fontFamily: "'Lexend', sans-serif", maxWidth: "260px" }}
                        >
                            ChilizTV runs on the Chiliz blockchain — the home of sports tokens.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Final CTA ──────────────────────────────────────────────── */}
            <section
                className="relative overflow-hidden py-24 sm:py-32 text-center"
                style={{ borderTop: "1px solid #161616" }}
            >
                {/* Subtle red glow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(232,0,29,0.08) 0%, transparent 70%)",
                    }}
                />

                <div className="relative max-w-2xl mx-auto px-6">
                    <p
                        className="text-[11px] font-bold tracking-[0.16em] uppercase mb-4"
                        style={{ color: "#E8001D", fontFamily: "'Lexend', sans-serif" }}
                    >
                        Get Started
                    </p>
                    <h2
                        className="text-[40px] sm:text-[60px] font-black uppercase leading-none text-white mb-6"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                        The future of sports
                        <br />
                        fandom is on-chain.
                    </h2>
                    <p
                        className="text-[14px] mb-10 leading-relaxed mx-auto max-w-sm"
                        style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Lexend', sans-serif" }}
                    >
                        Join ChilizTV — predict outcomes, watch live matches, and earn from the protocol you use.
                    </p>
                    <Link
                        href="/browse"
                        className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-bold text-white text-[15px] transition-all duration-300 hover:scale-105"
                        style={{ background: "#E8001D", fontFamily: "'Lexend', sans-serif" }}
                    >
                        Launch App
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
