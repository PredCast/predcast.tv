/**
 * API-Football team id → base fan-token symbol (never the `W*` / `-L` variants).
 * IDs checked against the official logo CDN (`media.api-sports.io/football/teams/{id}.png`).
 * Football clubs only: OG, UFC and Sauber have no API-Football team.
 */
export const TEAM_FAN_TOKENS: ReadonlyMap<number, string> = new Map([
    // Europe
    [85, 'PSG'],
    [81, 'OM'],
    [529, 'BAR'],
    [50, 'CITY'],
    [496, 'JUV'],
    [489, 'ACM'],
    [42, 'AFC'],
    [492, 'NAP'],
    [530, 'ATM'],
    [47, 'SPURS'],
    [505, 'INTER'],
    [497, 'ASR'],
    [212, 'POR'],
    [645, 'GAL'],
    [532, 'VCF'],
    [45, 'EFC'],
    [91, 'ASM'],
    [63, 'LUFC'],
    [66, 'AVL'],
    [998, 'TRA'],
    // Brazil
    [127, 'MENGO'],
    [121, 'VERDAO'],
    [126, 'SPFC'],
    [131, 'SCCP'],
]);
