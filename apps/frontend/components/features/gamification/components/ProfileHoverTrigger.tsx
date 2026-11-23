'use client';

import { useId, type CSSProperties, type ReactNode } from 'react';
import { Popover } from 'radix-ui';

import { useProfileCard } from '@/hooks/api';

import { useHoverCard } from '../hooks/useHoverCard';
import { ProfileCardSkeleton } from './ProfileCardSkeleton';
import { ProfileHoverCard } from './ProfileHoverCard';

interface ProfileHoverTriggerProps {
    readonly wallet: string;
    readonly children: ReactNode;
    readonly className?: string;
    readonly style?: CSSProperties;
    /** False on the viewer's own name (self-report is refused). */
    readonly reportable?: boolean;
}

/**
 * Username button opening the profile card: 300 ms hover, keyboard focus, tap on touch, Escape
 * closes (CA23). The card is fetched only once opened, portalled out of scrolling lists.
 */
export function ProfileHoverTrigger({ wallet, children, className = '', style, reportable = true }: ProfileHoverTriggerProps) {
    const contentId = useId();
    const { open, hide, dismiss, trigger, content, triggerRef } = useHoverCard();
    const { data: card, isError } = useProfileCard(open ? wallet : undefined);
    const visible = open && !isError;

    return (
        <Popover.Root open={visible} onOpenChange={(next) => { if (!next) hide(); }}>
            <Popover.Anchor asChild>
                <button
                    type="button"
                    {...trigger}
                    aria-haspopup="dialog"
                    aria-expanded={visible}
                    aria-controls={visible ? contentId : undefined}
                    className={`cursor-pointer border-0 border-b border-dotted border-white/25 bg-transparent p-0 text-left hover:border-current focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] ${className}`}
                    style={style}
                >
                    {children}
                </button>
            </Popover.Anchor>
            <Popover.Portal>
                <Popover.Content
                    id={contentId}
                    {...content}
                    side="bottom"
                    align="start"
                    sideOffset={8}
                    collisionPadding={16}
                    className="z-[80] outline-none"
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    onCloseAutoFocus={(e) => e.preventDefault()}
                    onEscapeKeyDown={(e) => {
                        e.preventDefault();
                        dismiss();
                    }}
                    onInteractOutside={(e) => {
                        if (e.target instanceof Node && triggerRef.current?.contains(e.target)) e.preventDefault();
                    }}
                >
                    {card ? <ProfileHoverCard card={card} reportable={reportable} /> : <ProfileCardSkeleton />}
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}
