/** Placeholder while the card loads on first hover. */
export function ProfileCardSkeleton() {
    return (
        <div
            role="status"
            aria-label="Loading profile card"
            className="w-[320px] max-w-[calc(100vw-32px)] overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#111]"
            style={{ boxShadow: '0 18px 48px rgba(0,0,0,0.65)' }}
        >
            <div className="flex items-center gap-4 border-b border-[#1E1E1E] p-[18px]">
                <span className="h-[60px] w-[60px] shrink-0 animate-pulse rounded-full bg-[#1A1A1A] motion-reduce:animate-none" />
                <span className="flex flex-1 flex-col gap-2">
                    <span className="h-5 w-3/4 animate-pulse rounded bg-[#1A1A1A] motion-reduce:animate-none" />
                    <span className="h-2.5 w-1/2 animate-pulse rounded bg-[#1A1A1A] motion-reduce:animate-none" />
                </span>
            </div>
            <div className="h-[150px] animate-pulse bg-[#141414] motion-reduce:animate-none" />
        </div>
    );
}
