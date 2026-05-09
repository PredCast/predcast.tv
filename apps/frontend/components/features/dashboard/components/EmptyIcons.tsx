import type { ReactNode } from 'react';

const ICON_BASE = {
    width: 32,
    height: 32,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
} as const;

export const EMPTY_ICONS = {
    chart: (
        <svg {...ICON_BASE}><path d="M3 3v18h18" /><path d="m7 14 3-3 3 3 5-5" /></svg>
    ),
    pool: (
        <svg {...ICON_BASE}><path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0M2 18c2-3 4-3 6 0s4 3 6 0 4-3 6 0M2 6c2-3 4-3 6 0s4 3 6 0 4-3 6 0" /></svg>
    ),
    ticket: (
        <svg {...ICON_BASE}><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" /><path d="M9 6v12" /></svg>
    ),
    coin: (
        <svg {...ICON_BASE}><circle cx="12" cy="12" r="9" /><path d="M9 9h4a2 2 0 1 1 0 4H9m0 0v3m0-7v7" /></svg>
    ),
    pulse: (
        <svg {...ICON_BASE}><path d="M3 12h4l3-9 4 18 3-9h4" /></svg>
    ),
    heart: (
        <svg {...ICON_BASE}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    ),
    bell: (
        <svg {...ICON_BASE}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" /></svg>
    ),
    satellite: (
        <svg {...ICON_BASE}><path d="M5 19a8 8 0 0 1 6-6" /><path d="M3 21a12 12 0 0 1 10-10" /><path d="m13.4 3.34 7.26 7.26a2 2 0 0 1 0 2.83l-2.83 2.83-10.1-10.1L10.57 3.3a2 2 0 0 1 2.83 0z" /></svg>
    ),
    cash: (
        <svg {...ICON_BASE}><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="3" /><path d="M6 10v4M18 10v4" /></svg>
    ),
} as const satisfies Record<string, ReactNode>;

export type EmptyIconKey = keyof typeof EMPTY_ICONS;
