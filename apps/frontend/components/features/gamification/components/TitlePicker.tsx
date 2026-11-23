import type { PickerOption } from '../domain/cosmeticsOptions';

interface TitlePickerProps {
    readonly options: ReadonlyArray<PickerOption<string | null>>;
    readonly value: string | null;
    readonly accent: string;
    readonly onChange: (titleId: string | null) => void;
}

/** Owned titles as a radio group of chips; "No title" shows the rank on the card. */
export function TitlePicker({ options, value, accent, onChange }: TitlePickerProps) {
    return (
        <fieldset className="m-0 min-w-0 border-0 p-0">
            <legend className="font-mono-ctv mb-2.5 p-0 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">Title</legend>
            <div role="radiogroup" aria-label="Title" className="flex flex-wrap gap-2">
                {options.map((o) => {
                    const selected = o.value === value;
                    return (
                        <button
                            key={o.value ?? 'none'}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() => onChange(o.value)}
                            className="font-mono-ctv rounded-md border px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
                            style={
                                selected
                                    ? { borderColor: accent, color: accent, background: 'rgba(255,255,255,0.04)' }
                                    : { borderColor: '#2A2A2A', color: 'rgba(255,255,255,0.65)' }
                            }
                        >
                            {o.label}
                        </button>
                    );
                })}
            </div>
        </fieldset>
    );
}
