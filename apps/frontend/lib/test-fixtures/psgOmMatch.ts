import type { Match } from "@/types/api.types";
import type {
  BrowseLeagueDto,
  BrowseMatchDto,
} from "@chiliztv/shared/dto/matches/BrowseMatchesDto";

export const TEST_MATCH_ID = 999999;

export const TEST_BETTING_CONTRACT_ADDRESS =
  "0xc56a3684419c80B4c179cD92d87165fdbAFbBe1e" as const;

const TEST_KICKOFF_AT = "2099-12-31T20:00:00.000Z";

const PSG_LOGO = "https://media.api-sports.io/football/teams/85.png";
const OM_LOGO = "https://media.api-sports.io/football/teams/81.png";
const LIGUE_1_LOGO = "https://media.api-sports.io/football/leagues/61.png";

export const TEST_BROWSE_MATCH: BrowseMatchDto = {
  id: TEST_MATCH_ID,
  homeTeam: { name: "PSG", logoUrl: PSG_LOGO },
  awayTeam: { name: "Olympique Marseille", logoUrl: OM_LOGO },
  kickoffAt: TEST_KICKOFF_AT,
  status: "NS",
  score: null,
  odds: { home: 1.65, draw: 4.2, away: 4.8 },
  streamsPreview: [],
};

export const TEST_BROWSE_LEAGUE: BrowseLeagueDto = {
  league: {
    id: 61,
    name: "Ligue 1 (Test)",
    logoUrl: LIGUE_1_LOGO,
    country: "France",
  },
  matches: [TEST_BROWSE_MATCH],
};

export const TEST_MATCH: Match = {
  id: TEST_MATCH_ID,
  homeTeam: "PSG",
  awayTeam: "Olympique Marseille",
  homeTeamLogo: PSG_LOGO,
  awayTeamLogo: OM_LOGO,
  league: "Ligue 1 (Test)",
  status: "NS",
  startTime: TEST_KICKOFF_AT,
  homeScore: 0,
  awayScore: 0,
  contractAddress: TEST_BETTING_CONTRACT_ADDRESS,
  odds: {
    match_winner: { home: 1.65, draw: 4.2, away: 4.8 },
  },
};

export function isTestMatchId(id: string | number): boolean {
  return String(id) === String(TEST_MATCH_ID);
}
