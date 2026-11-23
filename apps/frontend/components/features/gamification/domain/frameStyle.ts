import { PODIUM_COLORS } from '@chiliztv/domain/gamification/catalog/frames';

export interface FrameRing {
    /** CSS background of the ring disc. */
    readonly ring: string;
    readonly width: number;
    readonly glow: string;
    /** Slow rotation (Legend, Icon); stopped under `prefers-reduced-motion`. */
    readonly spinSeconds: number | null;
    /** Second ring drawn outside the avatar. */
    readonly outer: { readonly inset: number; readonly border: string } | null;
    readonly crown: boolean;
}

const LEGEND_CONIC = 'conic-gradient(from 0deg, #E8001D, #F5C518, #E8001D, #B0001A, #E8001D)';
const ICON_CONIC = 'conic-gradient(from 0deg, #E8001D, #F5C518, #FFFFFF, #F5C518, #E8001D)';

const ring = (r: string, width: number, glow = 'none', extra: Partial<FrameRing> = {}): FrameRing => ({
    ring: r, width, glow, spinSeconds: null, outer: null, crown: false, ...extra,
});

const podium = (color: string, dark: string, glow = 'none'): FrameRing =>
    ring(`repeating-conic-gradient(${color} 0deg 12deg, ${dark} 12deg 18deg)`, 4, glow);

const antenna = (r: string, dash: string, glow = 'none'): FrameRing =>
    ring(r, 3, glow, { outer: { inset: 6, border: `1px dashed ${dash}` } });

/** Renderer tokens of §4.2 / §4.3, taken from mockup 04. */
const FRAMES: Readonly<Record<string, FrameRing>> = {
    'frame.rank.rookie': ring('#3A3A3A', 2),
    'frame.rank.starter': ring('#C8794B', 2),
    'frame.rank.seasoned': ring('#D8D8DC', 2, 'none', { outer: { inset: 4, border: '1px solid rgba(216,216,220,0.55)' } }),
    'frame.rank.captain': ring('#F5C518', 3, '0 0 18px rgba(245,197,24,0.35)'),
    'frame.rank.international': ring('#E8001D', 3, '0 0 22px rgba(232,0,29,0.55)'),
    'frame.rank.legend': ring(LEGEND_CONIC, 3, '0 0 24px rgba(232,0,29,0.45)', { spinSeconds: 12 }),
    'frame.rank.icon': ring(ICON_CONIC, 4, '0 0 26px rgba(245,197,24,0.45), 0 0 10px rgba(232,0,29,0.5)', {
        spinSeconds: 18,
        outer: { inset: 6, border: '2px dotted rgba(245,197,24,0.75)' },
    }),
    'frame.podium.gold': podium(PODIUM_COLORS.gold, '#7A6109', '0 0 18px rgba(245,197,24,0.3)'),
    'frame.podium.silver': podium(PODIUM_COLORS.silver, '#6B6B70'),
    'frame.podium.bronze': podium(PODIUM_COLORS.bronze, '#6E3C20'),
    'frame.crown': ring('#F5C518', 3, '0 0 22px rgba(245,197,24,0.5)', { crown: true }),
    'frame.antenna.bronze': antenna('#C8794B', 'rgba(200,121,75,0.7)'),
    'frame.antenna.silver': antenna('#D8D8DC', 'rgba(216,216,220,0.65)'),
    'frame.antenna.red': antenna('#E8001D', 'rgba(232,0,29,0.65)', '0 0 16px rgba(232,0,29,0.35)'),
    'frame.antenna.legend': antenna(LEGEND_CONIC, 'rgba(245,197,24,0.7)', '0 0 20px rgba(232,0,29,0.4)'),
    'frame.antenna.icon': antenna(ICON_CONIC, 'rgba(255,255,255,0.7)', '0 0 22px rgba(245,197,24,0.4)'),
    'frame.founder': ring('repeating-conic-gradient(#E8001D 0deg 20deg, #FFFFFF 20deg 23deg)', 3),
};

/** Unknown ids fall back to the Rookie ring. */
export function frameRingOf(frameId: string): FrameRing {
    return FRAMES[frameId] ?? FRAMES['frame.rank.rookie'];
}

/** Halos are scaled down on small avatars so a list row does not bleed into its neighbours. */
export function scaledGlow(glow: string, size: number): string {
    if (glow === 'none' || size >= 48) return glow;
    return glow.replace(/0 0 (\d+)px/g, (_m, px: string) => `0 0 ${Math.round((Number(px) * size) / 60)}px`);
}
