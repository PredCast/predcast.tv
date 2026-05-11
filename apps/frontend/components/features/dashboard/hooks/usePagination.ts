'use client';

import { useCallback, useEffect, useState } from 'react';

export const DEFAULT_PAGE_SIZE = 5;
export const PAGE_SIZE_OPTIONS = [5, 10, 25] as const;
export type PageSize = typeof PAGE_SIZE_OPTIONS[number];

export interface UsePaginationOptions {
    /** Initial page size — must be one of `PAGE_SIZE_OPTIONS`. Defaults to 5. */
    readonly initialPageSize?: PageSize;
    /**
     * Any external value that should reset the page to 0 when it changes
     * (e.g. the active filter, the wallet, the tab). Optional.
     */
    readonly resetKey?: unknown;
}

export interface PaginationState {
    readonly page: number;
    readonly pageSize: PageSize;
    readonly offset: number;
    readonly setPage: (page: number) => void;
    readonly setPageSize: (size: PageSize) => void;
    readonly nextPage: () => void;
    readonly prevPage: () => void;
}

/**
 * Owns `{ page, pageSize }` state. Changing `pageSize` resets `page` to 0;
 * changing `resetKey` does the same. Consumers compute `lastPage` themselves
 * once they know the total — `Pagination` then disables Next when on it.
 */
export function usePagination(options: UsePaginationOptions = {}): PaginationState {
    const { initialPageSize = DEFAULT_PAGE_SIZE, resetKey } = options;

    const [page, setPageState] = useState(0);
    const [pageSize, setPageSizeState] = useState<PageSize>(initialPageSize);

    useEffect(() => {
        setPageState(0);
    }, [resetKey]);

    const setPage = useCallback((p: number) => setPageState(Math.max(0, Math.floor(p))), []);
    const setPageSize = useCallback((size: PageSize) => {
        setPageSizeState(size);
        setPageState(0);
    }, []);
    const nextPage = useCallback(() => setPageState((p) => p + 1), []);
    const prevPage = useCallback(() => setPageState((p) => Math.max(0, p - 1)), []);

    return {
        page,
        pageSize,
        offset: page * pageSize,
        setPage,
        setPageSize,
        nextPage,
        prevPage,
    };
}

/** Clamp `page` so it never exceeds the last valid page for the given total. */
export function clampPage(page: number, total: number, pageSize: number): number {
    if (total <= 0) return 0;
    const last = Math.max(0, Math.ceil(total / pageSize) - 1);
    return Math.min(Math.max(0, page), last);
}
