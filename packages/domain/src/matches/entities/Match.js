"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
class Match {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(props) {
        const now = new Date();
        return new Match({
            ...props,
            createdAt: now,
            updatedAt: now,
        });
    }
    static reconstitute(props) {
        return new Match(props);
    }
    isLive() {
        return ['1H', '2H', 'HT'].includes(this.props.status);
    }
    isUpcoming() {
        return this.props.status === 'NS' && this.props.matchDate > new Date();
    }
    isFinished() {
        return this.props.status === 'FT';
    }
    updateScore(homeScore, awayScore) {
        this.props.homeScore = homeScore;
        this.props.awayScore = awayScore;
        this.props.updatedAt = new Date();
    }
    updateStatus(status) {
        this.props.status = status;
        this.props.updatedAt = new Date();
    }
    getId() {
        return this.props.id;
    }
    getLeagueId() {
        return this.props.leagueId;
    }
    getStatus() {
        return this.props.status;
    }
    getMatchDate() {
        return this.props.matchDate;
    }
    getHomeScore() {
        return this.props.homeScore;
    }
    getAwayScore() {
        return this.props.awayScore;
    }
    getBettingContractAddress() {
        return this.props.bettingContractAddress;
    }
    toJSON() {
        return {
            id: this.props.id,
            apiFootballId: this.props.apiFootballId,
            homeTeam: {
                id: this.props.homeTeamId,
                name: this.props.homeTeamName,
                logo: this.props.homeTeamLogo,
            },
            awayTeam: {
                id: this.props.awayTeamId,
                name: this.props.awayTeamName,
                logo: this.props.awayTeamLogo,
            },
            league: {
                id: this.props.leagueId,
                name: this.props.leagueName,
                logo: this.props.leagueLogo,
            },
            season: this.props.season,
            status: this.props.status,
            matchDate: this.props.matchDate,
            venue: this.props.venue,
            score: this.props.homeScore !== undefined && this.props.awayScore !== undefined
                ? { home: this.props.homeScore, away: this.props.awayScore }
                : null,
            odds: this.props.odds,
            bettingContractAddress: this.props.bettingContractAddress,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        };
    }
}
exports.Match = Match;
