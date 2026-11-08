import { PageHeader } from '@/components/layout/PageHeader';
import { MarketsView } from '@/components/markets/MarketsView';
import { SignerBalance } from '@/components/markets/SignerBalance';

export default function MarketsPage() {
  return (
    <div>
      <PageHeader eyebrow="Markets" title="Matches &amp; markets" right={<SignerBalance />} />
      <MarketsView />
    </div>
  );
}
