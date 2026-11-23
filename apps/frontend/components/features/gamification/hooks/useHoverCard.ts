'use client';

import { useCallback, useEffect, useRef, useState, type FocusEvent, type KeyboardEvent, type PointerEvent } from 'react';

/** Mouse hover opens after 300 ms (§9.3); leaving closes after a short grace to reach the card. */
export const HOVER_OPEN_DELAY_MS = 300;
const HOVER_CLOSE_DELAY_MS = 150;

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Open state of a profile hover card: hover with delay, keyboard focus opens at once, Tab moves
 * into the (portalled) card, tap toggles on touch. A card the user clicked into or focused stays
 * open until Escape or an outside click, so a dialog opened from it (report) is not torn down.
 */
export function useHoverCard() {
    const [open, setOpen] = useState(false);
    const timer = useRef<number | null>(null);
    const pinned = useRef(false);
    const quietFocus = useRef(false);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const clear = useCallback(() => {
        if (timer.current !== null) window.clearTimeout(timer.current);
        timer.current = null;
    }, []);
    const show = useCallback(() => {
        clear();
        setOpen(true);
    }, [clear]);
    const hide = useCallback(() => {
        clear();
        pinned.current = false;
        setOpen(false);
    }, [clear]);
    const later = useCallback((fn: () => void, ms: number) => {
        clear();
        timer.current = window.setTimeout(fn, ms);
    }, [clear]);

    useEffect(() => clear, [clear]);

    const inContent = (node: EventTarget | null): boolean =>
        node instanceof Node && !!contentRef.current?.contains(node);

    const trigger = {
        ref: triggerRef,
        onPointerEnter: (e: PointerEvent) => {
            if (e.pointerType === 'mouse') later(show, HOVER_OPEN_DELAY_MS);
        },
        onPointerLeave: (e: PointerEvent) => {
            if (e.pointerType === 'mouse' && !pinned.current) later(hide, HOVER_CLOSE_DELAY_MS);
        },
        onFocus: (e: FocusEvent<HTMLButtonElement>) => {
            if (quietFocus.current) {
                quietFocus.current = false;
                return;
            }
            if (e.currentTarget.matches(':focus-visible')) show();
        },
        onBlur: (e: FocusEvent) => {
            if (!inContent(e.relatedTarget) && !pinned.current) later(hide, HOVER_CLOSE_DELAY_MS);
        },
        onClick: () => {
            if (open) {
                pinned.current = true;
                return;
            }
            show();
        },
        onKeyDown: (e: KeyboardEvent) => {
            if (e.key !== 'Tab' || e.shiftKey || !open) return;
            const first = contentRef.current?.querySelector<HTMLElement>(FOCUSABLE);
            if (!first) return;
            e.preventDefault();
            pinned.current = true;
            first.focus();
        },
    };

    const content = {
        ref: contentRef,
        onPointerEnter: () => clear(),
        onPointerLeave: (e: PointerEvent) => {
            if (e.pointerType === 'mouse' && !pinned.current) later(hide, HOVER_CLOSE_DELAY_MS);
        },
        onPointerDown: () => {
            pinned.current = true;
        },
        onBlur: (e: FocusEvent) => {
            const next = e.relatedTarget;
            // `null`: a click on a non-focusable spot; outside clicks are handled by the popover.
            if (next === null || inContent(next) || next === triggerRef.current) return;
            // Focus moving to a dialog opened from the card (report) keeps it open.
            if (next instanceof Element && next.closest('[role="dialog"], [role="alertdialog"]')) return;
            hide();
        },
    };

    /** Escape: close and give focus back to the name without reopening the card. */
    const dismiss = useCallback(() => {
        const focusWasInside = contentRef.current?.contains(document.activeElement) ?? false;
        hide();
        if (focusWasInside) {
            quietFocus.current = true;
            triggerRef.current?.focus();
        }
    }, [hide]);

    return { open, show, hide, dismiss, trigger, content, triggerRef };
}
