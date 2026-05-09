'use client';

import { DashEyebrow } from './DashEyebrow';

interface SectionHeadDashProps {
    readonly eyebrow?: React.ReactNode;
    readonly title: React.ReactNode;
    readonly lead?: React.ReactNode;
    readonly right?: React.ReactNode;
}

/** Section header — eyebrow + big title + optional CTA on the right (or lead text). */
export function SectionHeadDash({ eyebrow, title, lead, right }: SectionHeadDashProps) {
    return (
        <div className="mb-9">
            {eyebrow && (
                <div className="mb-5">
                    <DashEyebrow dim>{eyebrow}</DashEyebrow>
                </div>
            )}
            <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto] lg:gap-12">
                <h2
                    className="font-display m-0 max-w-[760px] uppercase leading-[0.92] tracking-[-0.01em] text-white"
                    style={{ fontSize: 'clamp(36px, 4.4vw, 60px)', fontWeight: 800 }}
                >
                    {title}
                </h2>
                {right ? right : lead ? (
                    <p className="max-w-[420px] text-[15px] font-light leading-[1.55] text-white/65">{lead}</p>
                ) : null}
            </div>
        </div>
    );
}
