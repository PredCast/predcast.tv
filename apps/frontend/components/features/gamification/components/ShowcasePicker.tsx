import { showcaseHeading } from '../domain/showcaseDisplay';
import type { ShowcaseOption } from '../domain/cosmeticsOptions';
import { ShowcaseTile } from './ShowcaseTile';

interface ShowcasePickerProps {
    readonly options: ReadonlyArray<ShowcaseOption>;
    readonly selected: ReadonlyArray<string>;
    readonly slots: number;
    readonly onToggle: (key: string) => void;
}

/** Public tiers to pin on the card, in click order, up to the unlocked slots. */
export function ShowcasePicker({ options, selected, slots, onToggle }: ShowcasePickerProps) {
    const full = selected.length >= slots;
    return (
        <fieldset className="m-0 min-w-0 border-0 p-0">
            <legend className="font-mono-ctv mb-2.5 p-0 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                {showcaseHeading(slots)} · {selected.length} / {slots}
            </legend>
            {options.length === 0 ? (
                <p className="m-0 text-[12.5px] font-light text-white/45">Unlock a public achievement to pin it here.</p>
            ) : (
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                    {options.map((o) => {
                        const index = selected.indexOf(o.key);
                        const on = index >= 0;
                        return (
                            <button
                                key={o.key}
                                type="button"
                                aria-pressed={on}
                                disabled={!on && full}
                                onClick={() => onToggle(o.key)}
                                className={`relative rounded-lg text-left transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] disabled:cursor-not-allowed disabled:opacity-40 ${
                                    on ? 'ring-1 ring-white' : 'opacity-70 hover:opacity-100'
                                }`}
                            >
                                <ShowcaseTile tile={o.tile} wide />
                                {on && (
                                    <span className="font-mono-ctv absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-[#E8001D] text-[10px] font-bold text-white">
                                        {index + 1}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </fieldset>
    );
}
