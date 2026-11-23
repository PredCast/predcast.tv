import { achievementById } from '@chiliztv/domain/gamification/catalog/achievements';
import type { RankTier } from '@chiliztv/domain/gamification/catalog/ranks';
import { isTitleId, titleTranslationKey } from '@chiliztv/domain/gamification/catalog/titles';
import type { ProfileTagDto } from '@chiliztv/shared';

/** EN labels keyed by the `gamification.*` translation keys of the domain catalog (decision 9). */
const EN: Readonly<Record<string, string>> = {
    'gamification.rank.rookie': 'Rookie',
    'gamification.rank.starter': 'Starter',
    'gamification.rank.seasoned': 'Seasoned',
    'gamification.rank.captain': 'Captain',
    'gamification.rank.international': 'International',
    'gamification.rank.legend': 'Legend',
    'gamification.rank.icon': 'Icon',

    'gamification.title.new_recruit': 'New Recruit',
    'gamification.title.regular': 'Regular',
    'gamification.title.faithful': 'Faithful',
    'gamification.title.unbreakable': 'Unbreakable',
    'gamification.title.full_season': 'Full Season',
    'gamification.title.striker': 'Striker',
    'gamification.title.finisher': 'Finisher',
    'gamification.title.fox_in_the_box': 'Fox in the Box',
    'gamification.title.goleador': 'Goleador',
    'gamification.title.winning_machine': 'Winning Machine',
    'gamification.title.prediction_legend': 'Prediction Legend',
    'gamification.title.curious': 'Curious',
    'gamification.title.versatile': 'Versatile',
    'gamification.title.swiss_army_knife': 'Swiss Army Knife',
    'gamification.title.encyclopedia': 'Encyclopedia',
    'gamification.title.traveller': 'Traveller',
    'gamification.title.globetrotter': 'Globetrotter',
    'gamification.title.citizen_of_the_world': 'Citizen of the World',
    'gamification.title.contender': 'Contender',
    'gamification.title.podium': 'Podium',
    'gamification.title.cycle_champion': 'Champion',
    'gamification.title.spectator': 'Spectator',
    'gamification.title.in_the_stands': 'In the Stands',
    'gamification.title.kop': 'Kop',
    'gamification.title.ultra': 'Ultra',
    'gamification.title.season_ticket': 'Season Ticket',
    'gamification.title.club_memory': 'Club Memory',
    'gamification.title.cheerleader': 'Cheerleader',
    'gamification.title.voice_of_the_kop': 'Voice of the Kop',
    'gamification.title.stadium_announcer': 'Stadium Announcer',
    'gamification.title.studio_regular': 'Studio Regular',
    'gamification.title.patron': 'Patron',
    'gamification.title.benefactor': 'Benefactor',
    'gamification.title.mic_on': 'Mic On',
    'gamification.title.pundit': 'Pundit',
    'gamification.title.commentator': 'Commentator',
    'gamification.title.voice_of_the_match': 'Voice of the Match',
    'gamification.title.live_legend': 'Live Legend',
    'gamification.title.monument': 'Monument',
    'gamification.title.founder': 'Founder',
    'gamification.title.club_stalwart': 'Club Stalwart',
    'gamification.title.dressing_room_legend': 'Dressing-Room Legend',
    'gamification.title.club_icon': 'Club Icon',

    'gamification.achievement.first_steps': 'First Steps',
    'gamification.achievement.daily_streak': 'Daily Streak',
    'gamification.achievement.winning_bets': 'Winning Bets',
    'gamification.achievement.bet_volume': 'Bet Volume',
    'gamification.achievement.versatility': 'Versatility',
    'gamification.achievement.globetrotter': 'Globetrotter',
    'gamification.achievement.leaderboard': 'Leaderboard',
    'gamification.achievement.spectator': 'Spectator',
    'gamification.achievement.chatter': 'Chatter',
    'gamification.achievement.streamers_followed': 'Streamers Followed',
    'gamification.achievement.supporter': 'Supporter',
    'gamification.achievement.streamer_hours': 'Streamed Hours',
    'gamification.achievement.founder': 'Founder',

    'gamification.tag.new': 'New',
    'gamification.tag.streamer': 'Streamer',
    'gamification.tag.crown': 'Crown',
    'gamification.tag.founder': 'Founder',

    'gamification.frame.rank.rookie': 'Rookie',
    'gamification.frame.rank.starter': 'Starter',
    'gamification.frame.rank.seasoned': 'Seasoned',
    'gamification.frame.rank.captain': 'Captain',
    'gamification.frame.rank.international': 'International',
    'gamification.frame.rank.legend': 'Legend',
    'gamification.frame.rank.icon': 'Icon',
    'gamification.frame.podium.gold': 'Podium · Gold',
    'gamification.frame.podium.silver': 'Podium · Silver',
    'gamification.frame.podium.bronze': 'Podium · Bronze',
    'gamification.frame.crown': 'Crown',
    'gamification.frame.antenna.bronze': 'Antenna · Bronze',
    'gamification.frame.antenna.silver': 'Antenna · Silver',
    'gamification.frame.antenna.red': 'Antenna · Red',
    'gamification.frame.antenna.legend': 'Antenna · Legend',
    'gamification.frame.antenna.icon': 'Antenna · Icon',
    'gamification.frame.founder': 'Founder',

    'gamification.source.check_in': 'Daily check-in',
    'gamification.source.bet_volume': 'Bet volume',
    'gamification.source.bet_won': 'Winning bet',
    'gamification.source.watch': 'Watching',
    'gamification.source.chat_message': 'Chat message',
    'gamification.source.follow': 'Follow a streamer',
    'gamification.source.support': 'Streamer support',
    'gamification.source.stream_time': 'Live streaming',
    'gamification.source.onboarding_step': 'First steps',
    'gamification.source.achievement': 'Achievements',
    'gamification.source.admin_adjustment': 'Adjustment',
};

/** Missing keys read as the key itself, so a gap is visible instead of blank. */
export function t(key: string): string {
    return EN[key] ?? key;
}

export function rankLabel(tier: RankTier): string {
    return t(`gamification.rank.${tier}`);
}

/** `cycle_champion` reads "Champion · Cycle 31". */
export function titleLabel(titleId: string, cycleId: number | null = null): string {
    const label = isTitleId(titleId) ? t(titleTranslationKey(titleId)) : titleId;
    return titleId === 'cycle_champion' && cycleId !== null ? `${label} · Cycle ${cycleId}` : label;
}

export function achievementLabel(achievementId: string): string {
    return t(achievementById(achievementId)?.translationKey ?? achievementId);
}

export function tagLabel(tag: ProfileTagDto): string {
    return t(`gamification.tag.${tag}`);
}

/** `frame.rank.captain` reads "Captain". */
export function frameLabel(frameId: string): string {
    return t(`gamification.${frameId}`);
}

export function sourceLabel(source: string): string {
    return t(`gamification.source.${source}`);
}

const ROMAN =['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

export function romanTier(tier: number): string {
    return ROMAN[tier - 1] ?? String(tier);
}
