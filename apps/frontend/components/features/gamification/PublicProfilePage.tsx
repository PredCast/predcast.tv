'use client';

import { usePublicProfile } from '@/hooks/api';

import { isProfileWallet } from './domain/publicProfileDisplay';
import { ProfileUnavailable } from './components/ProfileUnavailable';
import { PublicProfileSkeleton } from './components/PublicProfileSkeleton';
import { PublicAchievementsGrid } from './sections/PublicAchievementsGrid';
import { PublicProfileHero } from './sections/PublicProfileHero';

interface PublicProfilePageProps {
    readonly wallet: string;
}

/** `/u/[wallet]` (G16): level, rank, title, showcase and public achievements. Never an amount nor the account's wallets. */
export function PublicProfilePage({ wallet }: PublicProfilePageProps) {
    const valid = isProfileWallet(wallet);
    const { data: profile, isLoading, isError } = usePublicProfile(valid ? wallet : undefined);

    if (!valid || isError) return <ProfileUnavailable />;
    if (isLoading || !profile) return <PublicProfileSkeleton />;
    return (
        <div className="mx-auto max-w-[1100px] px-4 pb-20 pt-10 sm:px-8 sm:pt-14">
            <PublicProfileHero profile={profile} />
            <PublicAchievementsGrid achievements={profile.achievements} />
        </div>
    );
}
