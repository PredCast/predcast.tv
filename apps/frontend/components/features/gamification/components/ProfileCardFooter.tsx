import Link from 'next/link';

import { ReportButton } from '@/components/features/moderation/ReportButton';

import { memberSinceLabel } from '../domain/levelDisplay';

interface ProfileCardFooterProps {
    readonly wallet: string;
    readonly memberSince: string;
    /** Hidden on the viewer's own card (self-report is refused). */
    readonly reportable: boolean;
}

/** Member since, View profile, report (mockup 04 `.hc__foot`). */
export function ProfileCardFooter({ wallet, memberSince, reportable }: ProfileCardFooterProps) {
    return (
        <div className="flex items-center justify-between gap-2.5 bg-[#0d0d0d] pb-3 pl-[18px] pr-3.5 pt-[11px]">
            <span className="font-mono-ctv text-[9px] uppercase leading-[1.4] tracking-[0.12em] text-white/45">
                Member since
                <br />
                {memberSinceLabel(memberSince)}
            </span>
            <div className="flex shrink-0 items-center gap-1.5">
                <Link
                    href={`/u/${wallet}`}
                    className="font-mono-ctv rounded-md border border-[#2A2A2A] px-[9px] py-[7px] text-[9px] font-bold uppercase leading-none tracking-[0.14em] text-white transition-colors hover:border-[#E8001D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
                >
                    View profile
                </Link>
                {reportable && (
                    <ReportButton
                        targetType="account"
                        targetId={wallet}
                        iconOnly
                        className="border border-[#1E1E1E] !p-1.5 hover:border-[#3A3A3A]"
                    />
                )}
            </div>
        </div>
    );
}
