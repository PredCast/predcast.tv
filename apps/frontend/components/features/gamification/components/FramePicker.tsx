import type { UserProfileLike } from '@/components/shared/UserAvatar';

import type { PickerOption } from '../domain/cosmeticsOptions';
import { FramedAvatar } from './FramedAvatar';

interface FramePickerProps {
    readonly options: ReadonlyArray<PickerOption<string>>;
    readonly value: string;
    readonly wallet: string;
    readonly profile: UserProfileLike;
    readonly level: number;
    readonly onChange: (frameId: string) => void;
}

/** Owned frames, each previewed on the owner's avatar. */
export function FramePicker({ options, value, wallet, profile, level, onChange }: FramePickerProps) {
    return (
        <fieldset className="m-0 min-w-0 border-0 p-0">
            <legend className="font-mono-ctv mb-2.5 p-0 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">Frame</legend>
            <div role="radiogroup" aria-label="Frame" className="flex flex-wrap gap-2.5">
                {options.map((o) => {
                    const selected = o.value === value;
                    return (
                        <button
                            key={o.value}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            aria-label={o.label}
                            onClick={() => onChange(o.value)}
                            className={`flex w-[84px] flex-col items-center gap-2.5 rounded-lg border px-1.5 pb-2 pt-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] ${
                                selected ? 'border-[#E8001D] bg-[rgba(232,0,29,0.06)]' : 'border-[#1E1E1E] hover:border-[#3A3A3A]'
                            }`}
                        >
                            <FramedAvatar walletAddress={wallet} profile={profile} frameId={o.value} level={level} size={44} showLevel={false} />
                            <span className="font-mono-ctv text-center text-[8.5px] font-bold uppercase leading-tight tracking-[0.1em] text-white/65">
                                {o.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </fieldset>
    );
}
