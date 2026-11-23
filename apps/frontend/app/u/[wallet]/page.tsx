import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PublicProfilePage } from "@/components/features/gamification/PublicProfilePage";

type ProfileRouteProps = {
    params: Promise<{ wallet: string }>;
};

export const metadata: Metadata = {
    title: "Player profile — PredCast",
};

export default async function ProfileRoute({ params }: ProfileRouteProps) {
    const { wallet } = await params;
    return (
        <main className="flex min-h-dvh flex-col bg-[#0A0A0A]">
            <Header />
            <div className="flex-1">
                <PublicProfilePage wallet={wallet} />
            </div>
            <Footer />
        </main>
    );
}
