import { PageHeader } from '@/components/layout/PageHeader';
import { PlayerDetailView } from '@/components/directory/PlayerDetailView';

export default async function PlayerDetailPage({
  params,
}: Readonly<{ params: Promise<{ wallet: string }> }>) {
  const { wallet } = await params;
  return (
    <div>
      <PageHeader eyebrow="Directory" title="Player" />
      <PlayerDetailView wallet={wallet} />
    </div>
  );
}
