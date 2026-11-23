import Link from 'next/link';

/** Unknown wallet, no account, or gamification off: same neutral page, nothing leaked. */
export function ProfileUnavailable() {
    return (
        <div className="mx-auto flex max-w-[640px] flex-col items-start px-4 py-24 sm:px-8">
            <div className="font-mono-ctv inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8001D]">
                <span aria-hidden className="block h-0.5 w-4 bg-[#E8001D]" />
                Player profile
            </div>
            <h1 className="font-display m-0 mt-4 text-[44px] font-extrabold uppercase leading-[0.92] text-white">No profile here</h1>
            <p className="mt-4 text-[15px] font-light leading-[1.6] text-white/65">
                This player has no public profile yet, or the link is not valid.
            </p>
            <Link
                href="/browse"
                className="mt-8 rounded-md bg-[#E8001D] px-6 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#FF1737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            >
                Discover matches
            </Link>
        </div>
    );
}
