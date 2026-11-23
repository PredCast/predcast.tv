import { Crown } from 'lucide-react';

import { frameRingOf, scaledGlow } from '../domain/frameStyle';

interface FrameRingProps {
    readonly frameId: string;
    /** Outer diameter of the parent, ring included. */
    readonly size: number;
    /** Freezes rotations (image capture). */
    readonly still?: boolean;
}

/** Legend and Icon rings rotate; `motion-reduce` stops them (CA23). */
const SPIN_CLASS: Readonly<Record<number, string>> = {
    12: 'animate-[spin_12s_linear_infinite] motion-reduce:animate-none',
    18: 'animate-[spin_18s_linear_infinite] motion-reduce:animate-none',
};

/** Decorative layers of a frame (§4.2–4.3): outer ring, ring disc, crown. The parent is `relative` and round. */
export function FrameRing({ frameId, size, still = false }: FrameRingProps) {
    const frame = frameRingOf(frameId);
    const crownSize = Math.round(size * 0.42);
    const spin = !still && frame.spinSeconds ? SPIN_CLASS[frame.spinSeconds] ?? '' : '';
    return (
        <>
            {frame.outer && (
                <span
                    aria-hidden
                    className="pointer-events-none absolute rounded-full"
                    style={{ inset: -frame.outer.inset, border: frame.outer.border }}
                />
            )}
            <span
                aria-hidden
                className={`pointer-events-none absolute inset-0 rounded-full ${spin}`}
                style={{ background: frame.ring, boxShadow: scaledGlow(frame.glow, size) }}
            />
            {frame.crown && (
                <Crown
                    aria-hidden
                    className="absolute left-1/2 z-[3] -translate-x-1/2 text-[#F5C518]"
                    style={{
                        top: -Math.round(size * 0.3),
                        width: crownSize,
                        height: crownSize,
                        fill: 'rgba(245,197,24,0.18)',
                        filter: 'drop-shadow(0 0 6px rgba(245,197,24,0.5))',
                    }}
                    strokeWidth={2.2}
                />
            )}
        </>
    );
}
