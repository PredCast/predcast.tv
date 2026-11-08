/**
 * Real API-Football clubs for fixtures that need a team identity (fan-token mapping).
 * IDs were checked against the official logo CDN (`media.api-sports.io/football/teams/{id}.png`)
 * because the API itself was unreachable; logos point at the same CDN.
 */
export interface TeamFixture {
    readonly id: number;
    readonly name: string;
    readonly logo: string;
}

const logo = (id: number) => `https://media.api-sports.io/football/teams/${id}.png`;

export const TEAM_FIXTURES = {
    PSG: { id: 85, name: 'Paris Saint-Germain', logo: logo(85) },
    OM: { id: 81, name: 'Olympique de Marseille', logo: logo(81) },
    LENS: { id: 116, name: 'RC Lens', logo: logo(116) },
    LILLE: { id: 79, name: 'Lille', logo: logo(79) },
    RENNES: { id: 94, name: 'Rennes', logo: logo(94) },
} as const satisfies Record<string, TeamFixture>;

export const LIGUE_1 = { id: 61, name: 'Ligue 1', country: 'France', logo: 'https://media.api-sports.io/football/leagues/61.png' };
