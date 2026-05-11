'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PAGE_SIZE_OPTIONS, type PageSize } from '../hooks/usePagination';

interface PageSizeSelectorProps {
    readonly pageSize: PageSize;
    readonly options: ReadonlyArray<PageSize>;
    readonly onChange: (size: PageSize) => void;
}

function PageSizeSelector({ pageSize, options, onChange }: PageSizeSelectorProps) {
    return (
        <div className="font-mono-ctv inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-white/45">
            <span>Rows</span>
            <div className="inline-flex items-center overflow-hidden rounded-md border border-[#2A2A2A]">
                {options.map((opt) => {
                    const active = opt === pageSize;
                    return (
                        <button
                            key={opt}
                            type="button"
                            onClick={() => onChange(opt)}
                            className="px-2.5 py-1 text-[11px] font-bold tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
                            style={{
                                background: active ? 'rgba(232,0,29,0.12)' : 'transparent',
                                color: active ? '#fff' : 'rgba(255,255,255,0.45)',
                            }}
                            aria-pressed={active}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

interface PaginationProps {
    readonly page: number;
    readonly pageSize: PageSize;
    readonly total: number;
    readonly onPrev: () => void;
    readonly onNext: () => void;
    readonly onPageSizeChange: (size: PageSize) => void;
    readonly pageSizeOptions?: ReadonlyArray<PageSize>;
}

export function Pagination({
    page,
    pageSize,
    total,
    onPrev,
    onNext,
    onPageSizeChange,
    pageSizeOptions = PAGE_SIZE_OPTIONS,
}: PaginationProps) {
    const fitsInOnePage = total <= pageSize;
    const from = total === 0 ? 0 : page * pageSize + 1;
    const to = Math.min(total, (page + 1) * pageSize);
    const onLastPage = to >= total;

    return (
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#1E1E1E] bg-[#0d0d0d] px-6 py-3">
            <PageSizeSelector pageSize={pageSize} options={pageSizeOptions} onChange={onPageSizeChange} />
            {!fitsInOnePage && (
                <div className="font-mono-ctv inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.14em] text-white/45">
                    <span className="tabular-nums">
                        <span className="text-white/85">{from}-{to}</span> of <span className="text-white/85">{total}</span>
                    </span>
                    <div className="inline-flex items-center gap-1">
                        <button
                            type="button"
                            onClick={onPrev}
                            disabled={page === 0}
                            aria-label="Previous page"
                            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#2A2A2A] text-white/65 transition-colors hover:border-[#3A3A3A] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
                        >
                            <ChevronLeft size={14} />
                        </button>
                        <button
                            type="button"
                            onClick={onNext}
                            disabled={onLastPage}
                            aria-label="Next page"
                            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#2A2A2A] text-white/65 transition-colors hover:border-[#3A3A3A] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
                        >
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
