import { ChevronDown } from 'lucide-react';

interface ProgressionToggleProps {
    readonly id: string;
    readonly expanded: boolean;
    readonly controls: string;
    readonly onToggle: () => void;
}

/** Opens and closes the full Progression section of the dashboard. */
export function ProgressionToggle({ id, expanded, controls, onToggle }: ProgressionToggleProps) {
    return (
        <button
            id={id}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
            aria-controls={controls}
            className="font-mono-ctv inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#2A2A2A] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#E8001D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
        >
            {expanded ? 'Hide progression' : 'Show progression'}
            <ChevronDown
                aria-hidden
                className={`h-3.5 w-3.5 transition-transform motion-reduce:transition-none ${expanded ? 'rotate-180' : ''}`}
            />
        </button>
    );
}
