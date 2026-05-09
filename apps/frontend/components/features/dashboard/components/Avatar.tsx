'use client';

import { gradientFor, initialsFor } from '../domain/avatar';

interface AvatarProps {
    readonly seed: string;
    readonly label?: string;
    readonly size?: number;
    readonly square?: boolean;
    readonly photoUrl?: string | null;
}

/** Initials on a deterministic gradient, or a real photo if provided. */
export function Avatar({ seed, label, size = 44, square = false, photoUrl = null }: AvatarProps) {
    const initials = initialsFor(label || seed);
    const grad = gradientFor(seed || label || '');
    return (
        <div
            className={`flex items-center justify-center flex-shrink-0 overflow-hidden ${square ? 'rounded-md' : 'rounded-full'}`}
            style={{
                width: size,
                height: size,
                background: grad,
                border: '1px solid #2A2A2A',
            }}
        >
            {photoUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={photoUrl} alt={label || 'avatar'} className="h-full w-full object-cover" />
            ) : (
                <span
                    className="font-display font-extrabold uppercase text-white"
                    style={{ fontSize: Math.round(size * 0.36), letterSpacing: '0.02em' }}
                >
                    {initials}
                </span>
            )}
        </div>
    );
}
