'use client';

import { useRef } from 'react';
import { Loader2 } from 'lucide-react';
import { Avatar } from './Avatar';

interface ProfileAvatarProps {
    readonly seed: string;
    readonly label: string;
    readonly size?: number;
    readonly photoUrl: string | null;
    readonly uploading?: boolean;
    readonly onUpload: (file: File) => void;
    readonly onRemove: () => void;
}

const ACCEPTED_MIME = 'image/jpeg,image/png,image/webp';

/**
 * Editable hero avatar. Click → file picker. Parent handles upload via the
 * `/users/avatar` route + Dynamic metadata update; this component is purely UI.
 */
export function ProfileAvatar({ seed, label, size = 128, photoUrl, uploading = false, onUpload, onRemove }: ProfileAvatarProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) onUpload(file);
        // Reset so re-picking the same file fires `change` again.
        e.target.value = '';
    };

    return (
        <div className="relative inline-block flex-shrink-0" style={{ width: size, height: size }}>
            <span
                aria-hidden
                className="pointer-events-none absolute -inset-1 rounded-full"
                style={{
                    background: 'conic-gradient(from 220deg, rgba(232,0,29,0.0), rgba(232,0,29,0.55), rgba(232,0,29,0.0))',
                    filter: 'blur(2px)',
                    opacity: 0.6,
                }}
            />
            <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={uploading}
                aria-label="Change profile photo"
                className="group relative block h-full w-full overflow-hidden rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                style={{ border: '2px solid #1E1E1E', cursor: uploading ? 'wait' : 'pointer' }}
            >
                <Avatar seed={seed} label={label} size={size - 4} photoUrl={photoUrl} />
                <span
                    className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ opacity: uploading ? 1 : undefined }}
                >
                    <span className="font-mono-ctv flex flex-col items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                        {uploading ? (
                            <>
                                <Loader2 size={20} className="animate-spin" />
                                Uploading…
                            </>
                        ) : (
                            <>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                    <circle cx="12" cy="13" r="4" />
                                </svg>
                                {photoUrl ? 'Change' : 'Upload'}
                            </>
                        )}
                    </span>
                </span>
            </button>

            {photoUrl && !uploading && (
                <button
                    type="button"
                    onClick={onRemove}
                    aria-label="Remove profile photo"
                    className="absolute -right-1 -top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full border bg-[#0A0A0A] text-white/65 transition-colors hover:border-[#E8001D] hover:text-white"
                    style={{ borderColor: '#2A2A2A' }}
                >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                </button>
            )}

            <span
                aria-hidden
                className="pointer-events-none absolute -bottom-0.5 -right-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#2A2A2A] bg-[#111] text-white"
                style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.5)' }}
            >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                </svg>
            </span>

            <input ref={inputRef} type="file" accept={ACCEPTED_MIME} className="sr-only" onChange={handleFile} />
        </div>
    );
}
