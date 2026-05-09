import { hashIdx } from './formatters';

/** Fallback gradients for `<Avatar />` (white initials remain legible). */
export const AVATAR_GRADIENTS: ReadonlyArray<string> = [
    'linear-gradient(135deg,#E8001D 0%,#7a0010 100%)',
    'linear-gradient(135deg,#1a0a2e 0%,#3d0d2a 100%)',
    'linear-gradient(135deg,#0d1b2a 0%,#16213e 100%)',
    'linear-gradient(135deg,#2d1200 0%,#1c1a00 100%)',
    'linear-gradient(135deg,#001a1a 0%,#0d2137 100%)',
    'linear-gradient(135deg,#1a001a 0%,#0a1628 100%)',
    'linear-gradient(135deg,#252525 0%,#141414 100%)',
];

/** Stable gradient per seed. */
export function gradientFor(seed: string): string {
    const idx = hashIdx(seed || 'default', AVATAR_GRADIENTS.length);
    return AVATAR_GRADIENTS[idx];
}

/** Up-to-2-char initials. */
export function initialsFor(label?: string | null, fallback = '??'): string {
    if (!label) return fallback;
    return label.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase() || fallback;
}
