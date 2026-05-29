import { ChapterShell } from "../components/ChapterShell";
import { ChapterHeading } from "../components/ChapterHeading";
import { ChapterLead } from "../components/ChapterLead";
import { StepsList, type Step } from "../components/StepsList";

const STEPS: Step[] = [
  {
    n: "01 →",
    title: "Pick a market",
    body: (
      <>
        <p className="m-0">Six market types open per match — every variant is a separate pool you can take a position on:</p>
        <ul className="mt-3.5 list-disc pl-4.5 text-[15px]">
          <li className="py-1">
            <strong className="font-medium text-white">1X2 Winner</strong> — Home / Draw / Away at full-time
          </li>
          <li className="py-1">
            <strong className="font-medium text-white">1X2 Halftime</strong> — same idea, settles at the break
          </li>
          <li className="py-1">
            <strong className="font-medium text-white">Over/Under 1.5 goals</strong> — total goals fewer or more than 1.5
          </li>
          <li className="py-1">
            <strong className="font-medium text-white">Over/Under 2.5 goals</strong> — same line bumped to 2.5
          </li>
          <li className="py-1">
            <strong className="font-medium text-white">Both teams to score</strong> — Yes / No
          </li>
          <li className="py-1">
            <strong className="font-medium text-white">Double Chance</strong> — 1X (home or draw), 12 (no draw), 2X (away or draw)
          </li>
        </ul>
      </>
    ),
  },
  {
    n: "01b →",
    title: "Halftime claim, not full-time",
    body: (
      <p className="m-0">
        The Halftime market resolves the moment the score is locked at the whistle — you don&apos;t wait until 90&apos; to claim. If the upstream score is missing 15 min into the 2nd half, the market is cancelled and stakes refund automatically.
      </p>
    ),
  },
  {
    n: "02 →",
    title: "Choose side and amount",
    body: (
      <p className="m-0">
        Pick an outcome. Stake in USDC, or any supported token — the router converts automatically via Kayen DEX. Dialog shows the live pool, your implied probability and an estimated payout.
      </p>
    ),
  },
  {
    n: "03 →",
    title: "Confirm on-chain",
    body: (
      <p className="m-0">
        One signature. Your stake joins the outcome&apos;s pool the moment the tx mines — immutable until settlement. Final payout depends on the closing pool distribution.
      </p>
    ),
  },
  {
    n: "04 →",
    title: "Settle and claim",
    body: (
      <p className="m-0">
        Result posts on-chain at full-time. Winners sign a claim transaction. USDC lands in your wallet — no middleman, no manual approval.
      </p>
    ),
  },
];

export function ChapterPredict() {
  return (
    <ChapterShell num="02" metaTop="Prediction markets" metaBottom="How predictions work">
      <ChapterHeading>
        Predict what <span className="text-[#E8001D]">you know.</span>
      </ChapterHeading>
      <ChapterLead>
        On-chain markets per match. No bookmaker — the crowd&apos;s positions set the implied probability. 5% fee on the winning pool — 1% funds the leaderboard.
      </ChapterLead>
      <StepsList items={STEPS} />
    </ChapterShell>
  );
}
