/** Loading state of the public profile. */
export function PublicProfileSkeleton() {
    return (
        <div aria-busy="true" aria-label="Loading profile" className="mx-auto max-w-[1100px] px-4 pb-20 pt-10 sm:px-8 sm:pt-14">
            <div className="flex animate-pulse items-center gap-6 motion-reduce:animate-none">
                <span className="h-[120px] w-[120px] shrink-0 rounded-full bg-[#1A1A1A]" />
                <div className="flex-1 space-y-3">
                    <span className="block h-10 w-2/3 max-w-[360px] rounded bg-[#1A1A1A]" />
                    <span className="block h-3 w-40 rounded bg-[#141414]" />
                </div>
            </div>
            <div className="mt-10 h-40 animate-pulse rounded-xl bg-[#111] motion-reduce:animate-none" />
        </div>
    );
}
