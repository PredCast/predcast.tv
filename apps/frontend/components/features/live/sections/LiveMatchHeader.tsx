import { LiveHero } from "@/components/live/sections";
import type { Match } from "@/types/api.types";

import { buildScoreBreakdown } from "../domain/scoreBreakdown";

interface LiveMatchHeaderProps {
  readonly match: Match;
  readonly onBack: () => void;
}

export function LiveMatchHeader({ match, onBack }: LiveMatchHeaderProps) {
  return (
    <LiveHero
      homeTeam={match.homeTeam}
      awayTeam={match.awayTeam}
      homeScore={match.homeScore}
      awayScore={match.awayScore}
      scoreBreakdown={buildScoreBreakdown(match)}
      homeLogo={match.homeTeamLogo}
      awayLogo={match.awayTeamLogo}
      homeForm={match.homeForm}
      awayForm={match.awayForm}
      status={match.status}
      elapsed={match.elapsed ?? undefined}
      kickoffAt={match.startTime}
      league={match.league}
      onChainMatch={!!match.contractAddress}
      dataStale={match.dataStale}
      onBack={onBack}
    />
  );
}
