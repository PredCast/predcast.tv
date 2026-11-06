import { Header } from "@/components/Header";
import { LivePage as LiveFeaturePage } from "@/components/features/live";

type LivePageProps = {
    params: Promise<{
        id: string[];
    }>;
};

export default async function LivePage({ params }: LivePageProps) {
    const { id } = await params;
    // `app/live/[...id]` is a catch-all route, so `id` resolves to `string[]`
    // at runtime (e.g. ["999999"]). The feature page compares it with the
    // "999999" test sentinel, so it must receive the first segment only.
    const matchId = Array.isArray(id) ? id[0] : id;

    if (!matchId) {
        return <div>Invalid match ID</div>;
    }

    return (
        <main className="flex min-h-dvh flex-col bg-[#0A0A0A]">
            <Header />
            <div className="flex-1">
                <LiveFeaturePage id={matchId} />
            </div>
        </main>
    );
}
