module.exports = {

"[project]/apps/frontend/lib/api/error.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ApiError": (()=>ApiError),
    "ApiErrorCode": (()=>ApiErrorCode),
    "handleApiError": (()=>handleApiError)
});
var ApiErrorCode = /*#__PURE__*/ function(ApiErrorCode) {
    ApiErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ApiErrorCode["FORBIDDEN"] = "FORBIDDEN";
    ApiErrorCode["NOT_FOUND"] = "NOT_FOUND";
    ApiErrorCode["RATE_LIMIT"] = "RATE_LIMIT";
    ApiErrorCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
    ApiErrorCode["SERVER_ERROR"] = "SERVER_ERROR";
    ApiErrorCode["NETWORK_ERROR"] = "NETWORK_ERROR";
    ApiErrorCode["UNKNOWN"] = "UNKNOWN";
    return ApiErrorCode;
}({});
class ApiError extends Error {
    code;
    statusCode;
    details;
    constructor(code, message, statusCode, details){
        super(message), this.code = code, this.statusCode = statusCode, this.details = details;
        this.name = 'ApiError';
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}
function handleApiError(error) {
    if (!error.response) {
        return new ApiError("NETWORK_ERROR", 'Network error occurred. Please check your connection.', undefined, error);
    }
    const status = error.response.status;
    const responseData = error.response.data;
    const message = responseData?.message || responseData?.error || error.message;
    switch(status){
        case 401:
            return new ApiError("UNAUTHORIZED", message, status, responseData);
        case 403:
            return new ApiError("FORBIDDEN", message, status, responseData);
        case 404:
            return new ApiError("NOT_FOUND", message, status, responseData);
        case 429:
            return new ApiError("RATE_LIMIT", 'Too many requests. Please try again later.', status, responseData);
        case 422:
        case 400:
            return new ApiError("VALIDATION_ERROR", message, status, responseData);
        case 500:
        case 502:
        case 503:
        case 504:
            return new ApiError("SERVER_ERROR", 'Server error occurred. Please try again later.', status, responseData);
        default:
            return new ApiError("UNKNOWN", message, status, responseData);
    }
}
}}),
"[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DomainError": (()=>DomainError)
});
class DomainError extends Error {
    code;
    statusCode;
    details;
    constructor(message, code, statusCode = 500, details){
        super(message), this.code = code, this.statusCode = statusCode, this.details = details;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
    toJSON() {
        return {
            code: this.code,
            message: this.message,
            ...this.details ? {
                details: this.details
            } : {}
        };
    }
}
}}),
"[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ValidationError": (()=>ValidationError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
;
class ValidationError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(message, details){
        super(message, 'VALIDATION_ERROR', 400, details);
    }
}
}}),
"[project]/packages/domain/src/shared/errors/NotFoundError.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NotFoundError": (()=>NotFoundError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
;
class NotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(resource, identifier){
        super(`${resource} with identifier '${identifier}' not found`, 'NOT_FOUND', 404, {
            resource,
            identifier
        });
    }
}
}}),
"[project]/packages/domain/src/shared/errors/UnauthorizedError.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UnauthorizedError": (()=>UnauthorizedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
;
class UnauthorizedError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(message = 'Unauthorized'){
        super(message, 'UNAUTHORIZED', 401);
    }
}
}}),
"[project]/packages/domain/src/shared/errors/ConflictError.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConflictError": (()=>ConflictError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
;
class ConflictError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(message, details){
        super(message, 'CONFLICT', 409, details);
    }
}
}}),
"[project]/packages/domain/src/shared/errors/BusinessRuleError.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BusinessRuleError": (()=>BusinessRuleError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
;
class BusinessRuleError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(message, details){
        super(message, 'BUSINESS_RULE_VIOLATION', 422, details);
    }
}
}}),
"[project]/packages/domain/src/shared/errors/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$NotFoundError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/NotFoundError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$UnauthorizedError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/UnauthorizedError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ConflictError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ConflictError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$BusinessRuleError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/BusinessRuleError.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
}}),
"[project]/packages/domain/src/shared/errors/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$NotFoundError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/NotFoundError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$UnauthorizedError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/UnauthorizedError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ConflictError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ConflictError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$BusinessRuleError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/BusinessRuleError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/packages/domain/src/shared/tokens.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TOKENS": (()=>TOKENS)
});
const TOKENS = {
    // Repositories
    IMatchRepository: Symbol.for('IMatchRepository'),
    IPredictionRepository: Symbol.for('IPredictionRepository'),
    IChatRepository: Symbol.for('IChatRepository'),
    IStreamRepository: Symbol.for('IStreamRepository'),
    IStreamWalletRepository: Symbol.for('IStreamWalletRepository'),
    IWaitlistRepository: Symbol.for('IWaitlistRepository'),
    IFollowRepository: Symbol.for('IFollowRepository'),
    IFanTokenRepository: Symbol.for('IFanTokenRepository'),
    // Ports — external services
    IFootballApiService: Symbol.for('IFootballApiService'),
    IBlockchainService: Symbol.for('IBlockchainService'),
    ISchedulerService: Symbol.for('ISchedulerService'),
    IStreamingService: Symbol.for('IStreamingService'),
    // Ports — config
    IAuthConfig: Symbol.for('IAuthConfig'),
    INetworkConfig: Symbol.for('INetworkConfig'),
    ILogger: Symbol.for('ILogger'),
    // Ports — cross-domain
    ISubscriptionChecker: Symbol.for('ISubscriptionChecker')
};
}}),
"[project]/packages/domain/src/shared/ports/ILogger.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/shared/ports/IAuthConfig.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/shared/ports/INetworkConfig.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/shared/ports/ISchedulerService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/shared/ports/ISubscriptionChecker.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/shared/ports/IFootballApiService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/shared/ports/IBlockchainService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/matches/entities/Match.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Match": (()=>Match)
});
class Match {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        const now = new Date();
        return new Match({
            ...props,
            createdAt: now,
            updatedAt: now
        });
    }
    static reconstitute(props) {
        return new Match(props);
    }
    isLive() {
        return [
            '1H',
            '2H',
            'HT'
        ].includes(this.props.status);
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
                logo: this.props.homeTeamLogo
            },
            awayTeam: {
                id: this.props.awayTeamId,
                name: this.props.awayTeamName,
                logo: this.props.awayTeamLogo
            },
            league: {
                id: this.props.leagueId,
                name: this.props.leagueName,
                logo: this.props.leagueLogo
            },
            season: this.props.season,
            status: this.props.status,
            matchDate: this.props.matchDate,
            venue: this.props.venue,
            score: this.props.homeScore !== undefined && this.props.awayScore !== undefined ? {
                home: this.props.homeScore,
                away: this.props.awayScore
            } : null,
            odds: this.props.odds,
            bettingContractAddress: this.props.bettingContractAddress,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt
        };
    }
}
}}),
"[project]/packages/domain/src/matches/repositories/IMatchRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/matches/value-objects/MatchFetchWindow.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MatchFetchWindow": (()=>MatchFetchWindow)
});
class MatchFetchWindow {
    static FETCH_DAYS_AHEAD = 7;
    static CLEANUP_HOURS_AFTER = 24;
    static fetchFrom(now) {
        const from = new Date(now);
        from.setDate(from.getDate() - 1);
        return from;
    }
    static fetchTo(now) {
        const to = new Date(now);
        to.setDate(to.getDate() + MatchFetchWindow.FETCH_DAYS_AHEAD);
        return to;
    }
    static cleanupBefore(now) {
        const before = new Date(now);
        before.setHours(before.getHours() - MatchFetchWindow.CLEANUP_HOURS_AFTER);
        return before;
    }
}
}}),
"[project]/packages/domain/src/predictions/value-objects/PredictionStatus.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PredictionStatus": (()=>PredictionStatus)
});
var PredictionStatus = /*#__PURE__*/ function(PredictionStatus) {
    PredictionStatus["PENDING"] = "PENDING";
    PredictionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    PredictionStatus["WON"] = "WON";
    PredictionStatus["LOST"] = "LOST";
    PredictionStatus["CANCELLED"] = "CANCELLED";
    return PredictionStatus;
}({});
}}),
"[project]/packages/domain/src/predictions/entities/Prediction.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Prediction": (()=>Prediction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/PredictionStatus.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)");
;
;
class Prediction {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        const now = new Date();
        if (!props.userId || !props.walletAddress) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('User ID and wallet address are required');
        }
        if (!props.matchId || !props.matchName) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Match ID and name are required');
        }
        if (props.matchStartTime < now) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Cannot place prediction on past matches');
        }
        return new Prediction({
            ...props,
            placedAt: now,
            createdAt: now,
            updatedAt: now
        });
    }
    static reconstitute(props) {
        return new Prediction(props);
    }
    settle(actualResult, isWin) {
        if (this.props.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].PENDING && this.props.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].IN_PROGRESS) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Can only settle pending or in-progress predictions');
        }
        this.props.actualResult = actualResult;
        this.props.status = isWin ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].WON : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].LOST;
        this.props.settledAt = new Date();
        this.props.updatedAt = new Date();
    }
    cancel() {
        if (this.props.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].PENDING) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Can only cancel pending predictions');
        }
        this.props.status = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].CANCELLED;
        this.props.updatedAt = new Date();
    }
    markInProgress() {
        if (this.props.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].PENDING) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Can only mark pending predictions as in-progress');
        }
        this.props.status = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].IN_PROGRESS;
        this.props.updatedAt = new Date();
    }
    getId() {
        return this.props.id;
    }
    getUserId() {
        return this.props.userId;
    }
    getWalletAddress() {
        return this.props.walletAddress;
    }
    getMatchId() {
        return this.props.matchId;
    }
    getPredictionType() {
        return this.props.predictionType;
    }
    getPredictionValue() {
        return this.props.predictionValue;
    }
    getTransactionHash() {
        return this.props.transactionHash;
    }
    getStatus() {
        return this.props.status;
    }
    getOdds() {
        return this.props.odds;
    }
    getMatchStartTime() {
        return this.props.matchStartTime;
    }
    toJSON() {
        return {
            id: this.props.id,
            userId: this.props.userId,
            walletAddress: this.props.walletAddress,
            username: this.props.username,
            matchId: this.props.matchId,
            matchName: this.props.matchName,
            predictionType: this.props.predictionType,
            predictionValue: this.props.predictionValue,
            predictedTeam: this.props.predictedTeam,
            odds: this.props.odds.getValue(),
            status: this.props.status,
            actualResult: this.props.actualResult,
            transactionHash: this.props.transactionHash.getValue(),
            placedAt: this.props.placedAt,
            matchStartTime: this.props.matchStartTime,
            settledAt: this.props.settledAt,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt
        };
    }
}
}}),
"[project]/packages/domain/src/predictions/repositories/IPredictionRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/predictions/value-objects/Odds.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Odds": (()=>Odds)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)");
;
class Odds {
    value;
    constructor(value){
        this.value = value;
    }
    static create(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Odds must be a valid number');
        }
        if (value <= 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Odds must be greater than 1');
        }
        if (value > 1000) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Odds seem unrealistic (max 1000)');
        }
        return new Odds(value);
    }
    getValue() {
        return this.value;
    }
    equals(other) {
        return this.value === other.value;
    }
}
}}),
"[project]/packages/domain/src/predictions/value-objects/TransactionHash.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TransactionHash": (()=>TransactionHash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)");
;
class TransactionHash {
    value;
    constructor(value){
        this.value = value;
    }
    static create(value) {
        if (!value || typeof value !== 'string') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Transaction hash is required');
        }
        if (!/^0x[a-fA-F0-9]{64}$/.test(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Invalid transaction hash format');
        }
        return new TransactionHash(value);
    }
    getValue() {
        return this.value;
    }
    equals(other) {
        return this.value === other.value;
    }
}
}}),
"[project]/packages/domain/src/chat/entities/ChatMessage.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChatMessage": (()=>ChatMessage),
    "MessageType": (()=>MessageType)
});
var MessageType = /*#__PURE__*/ function(MessageType) {
    MessageType["REGULAR"] = "REGULAR";
    MessageType["BET"] = "BET";
    MessageType["SYSTEM"] = "SYSTEM";
    MessageType["DONATION"] = "DONATION";
    return MessageType;
}({});
class ChatMessage {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        return new ChatMessage({
            ...props,
            id: crypto.randomUUID(),
            timestamp: new Date()
        });
    }
    static reconstitute(props) {
        return new ChatMessage(props);
    }
    getId() {
        return this.props.id;
    }
    getMatchId() {
        return this.props.matchId;
    }
    getStreamId() {
        return this.props.streamId;
    }
    getUserId() {
        return this.props.userId;
    }
    isBetMessage() {
        return this.props.type === "BET";
    }
    toJSON() {
        return {
            id: this.props.id,
            matchId: this.props.matchId,
            streamId: this.props.streamId ?? null,
            userId: this.props.userId,
            walletAddress: this.props.walletAddress,
            username: this.props.username,
            message: this.props.message,
            timestamp: this.props.timestamp.getTime(),
            type: this.props.type,
            isFeatured: this.props.isFeatured,
            ...this.props.systemType && {
                systemType: this.props.systemType
            },
            ...this.props.betType && {
                betType: this.props.betType
            },
            ...this.props.betSubType && {
                betSubType: this.props.betSubType
            },
            ...this.props.amount && {
                amount: this.props.amount
            },
            ...this.props.odds && {
                odds: this.props.odds
            }
        };
    }
}
}}),
"[project]/packages/domain/src/chat/entities/ConnectedUser.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConnectedUser": (()=>ConnectedUser)
});
class ConnectedUser {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        const now = new Date();
        return new ConnectedUser({
            ...props,
            id: crypto.randomUUID(),
            connectedAt: now,
            lastActivity: now
        });
    }
    static reconstitute(props) {
        return new ConnectedUser(props);
    }
    updateActivity() {
        this.props.lastActivity = new Date();
    }
    getId() {
        return this.props.id;
    }
    getMatchId() {
        return this.props.matchId;
    }
    getUserId() {
        return this.props.userId;
    }
    toJSON() {
        return {
            id: this.props.id,
            matchId: this.props.matchId,
            userId: this.props.userId,
            username: this.props.username,
            connectedAt: this.props.connectedAt.getTime(),
            lastActivity: this.props.lastActivity.getTime()
        };
    }
}
}}),
"[project]/packages/domain/src/chat/repositories/IChatRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/fan-tokens/repositories/IFanTokenRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/follows/entities/Follow.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Follow": (()=>Follow)
});
class Follow {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        return new Follow({
            ...props,
            id: crypto.randomUUID(),
            createdAt: new Date()
        });
    }
    static reconstitute(props) {
        return new Follow(props);
    }
    getId() {
        return this.props.id;
    }
    toJSON() {
        return {
            ...this.props
        };
    }
}
}}),
"[project]/packages/domain/src/follows/repositories/IFollowRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/streams/entities/Stream.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Stream": (()=>Stream),
    "StreamStatus": (()=>StreamStatus)
});
var StreamStatus = /*#__PURE__*/ function(StreamStatus) {
    StreamStatus["CREATED"] = "created";
    StreamStatus["LIVE"] = "live";
    StreamStatus["ENDED"] = "ended";
    return StreamStatus;
}({});
class Stream {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        const now = new Date();
        return new Stream({
            ...props,
            id: crypto.randomUUID(),
            createdAt: now
        });
    }
    static reconstitute(props) {
        return new Stream(props);
    }
    /** Transition to LIVE. No-op if already LIVE (idempotent). */ start() {
        if (this.props.status === "live") return;
        this.props.status = "live";
    }
    /** Transition to ENDED. No-op if already ENDED (idempotent). */ end() {
        if (this.props.status === "ended") return;
        this.props.status = "ended";
        this.props.endedAt = new Date();
    }
    /** Refresh heartbeat timestamp — guarantees lastHeartbeatAt is non-null while LIVE. */ heartbeat() {
        this.props.lastHeartbeatAt = new Date();
    }
    getStatus() {
        return this.props.status;
    }
    updateViewerCount(count) {
        this.props.viewerCount = count;
    }
    getId() {
        return this.props.id;
    }
    getStreamKey() {
        return this.props.streamKey;
    }
    getStreamerId() {
        return this.props.streamerId;
    }
    /** Backward-compatible helper. Returns true only when status is LIVE. */ isLive() {
        return this.props.status === "live";
    }
    toJSON() {
        return {
            id: this.props.id,
            matchId: this.props.matchId,
            streamerId: this.props.streamerId,
            streamerName: this.props.streamerName,
            streamerWalletAddress: this.props.streamerWalletAddress,
            streamKey: this.props.streamKey,
            hlsUrl: this.props.hlsUrl,
            title: this.props.title,
            status: this.props.status,
            isLive: this.props.status === "live",
            thumbnailUrl: this.props.thumbnailUrl ?? null,
            lastHeartbeatAt: this.props.lastHeartbeatAt,
            viewerCount: this.props.viewerCount,
            endedAt: this.props.endedAt,
            createdAt: this.props.createdAt
        };
    }
}
}}),
"[project]/packages/domain/src/streams/repositories/IStreamRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/stream-wallet/entities/Donation.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Donation": (()=>Donation)
});
class Donation {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        return new Donation({
            ...props,
            id: crypto.randomUUID()
        });
    }
    static reconstitute(props) {
        return new Donation(props);
    }
    toJSON() {
        return {
            id: this.props.id,
            streamerAddress: this.props.streamerAddress,
            donorAddress: this.props.donorAddress,
            streamWalletAddress: this.props.streamWalletAddress,
            amount: this.props.amount,
            platformFee: this.props.platformFee,
            streamerAmount: this.props.streamerAmount,
            message: this.props.message,
            transactionHash: this.props.transactionHash,
            timestamp: this.props.timestamp
        };
    }
}
}}),
"[project]/packages/domain/src/stream-wallet/entities/Subscription.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Subscription": (()=>Subscription)
});
class Subscription {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        return new Subscription({
            ...props,
            id: crypto.randomUUID()
        });
    }
    static reconstitute(props) {
        return new Subscription(props);
    }
    isActive() {
        const now = new Date();
        return this.props.startDate <= now && now <= this.props.endDate;
    }
    toJSON() {
        return {
            id: this.props.id,
            streamerAddress: this.props.streamerAddress,
            subscriberAddress: this.props.subscriberAddress,
            streamWalletAddress: this.props.streamWalletAddress,
            durationSeconds: this.props.durationSeconds,
            amount: this.props.amount,
            platformFee: this.props.platformFee,
            streamerAmount: this.props.streamerAmount,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            transactionHash: this.props.transactionHash,
            status: this.props.status,
            isActive: this.isActive()
        };
    }
}
}}),
"[project]/packages/domain/src/stream-wallet/repositories/IStreamWalletRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/waitlist/entities/WaitlistEntry.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WaitlistEntry": (()=>WaitlistEntry)
});
class WaitlistEntry {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        return new WaitlistEntry({
            ...props,
            id: crypto.randomUUID(),
            createdAt: new Date()
        });
    }
    static reconstitute(props) {
        return new WaitlistEntry(props);
    }
    getId() {
        return this.props.id;
    }
    getEmail() {
        return this.props.email;
    }
    getWalletAddress() {
        return this.props.walletAddress;
    }
    hasAccess() {
        return this.props.hasAccess;
    }
    toJSON() {
        return {
            id: this.props.id,
            email: this.props.email,
            walletAddress: this.props.walletAddress,
            source: this.props.source,
            hasAccess: this.props.hasAccess,
            createdAt: this.props.createdAt
        };
    }
}
}}),
"[project]/packages/domain/src/waitlist/repositories/IWaitlistRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Shared — errors
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/index.ts [app-ssr] (ecmascript) <module evaluation>");
// Shared — tokens
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/tokens.ts [app-ssr] (ecmascript)");
// Shared — ports
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ILogger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ILogger.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IAuthConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IAuthConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$INetworkConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/INetworkConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ISchedulerService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ISchedulerService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ISubscriptionChecker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ISubscriptionChecker.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IFootballApiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IFootballApiService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IBlockchainService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IBlockchainService.ts [app-ssr] (ecmascript)");
// Matches
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$entities$2f$Match$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/entities/Match.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$repositories$2f$IMatchRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/repositories/IMatchRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$value$2d$objects$2f$MatchFetchWindow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/value-objects/MatchFetchWindow.ts [app-ssr] (ecmascript)");
// Predictions
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$entities$2f$Prediction$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/entities/Prediction.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$repositories$2f$IPredictionRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/repositories/IPredictionRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$Odds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/Odds.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/PredictionStatus.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$TransactionHash$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/TransactionHash.ts [app-ssr] (ecmascript)");
// Chat
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ChatMessage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ConnectedUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ConnectedUser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$repositories$2f$IChatRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/repositories/IChatRepository.ts [app-ssr] (ecmascript)");
// Fan tokens
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$fan$2d$tokens$2f$repositories$2f$IFanTokenRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/fan-tokens/repositories/IFanTokenRepository.ts [app-ssr] (ecmascript)");
// Follows
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$follows$2f$entities$2f$Follow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/follows/entities/Follow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$follows$2f$repositories$2f$IFollowRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/follows/repositories/IFollowRepository.ts [app-ssr] (ecmascript)");
// Streams
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$streams$2f$entities$2f$Stream$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/streams/entities/Stream.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$streams$2f$repositories$2f$IStreamRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/streams/repositories/IStreamRepository.ts [app-ssr] (ecmascript)");
// Stream wallet
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$entities$2f$Donation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/entities/Donation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$entities$2f$Subscription$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/entities/Subscription.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$repositories$2f$IStreamWalletRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/repositories/IStreamWalletRepository.ts [app-ssr] (ecmascript)");
// Waitlist
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$waitlist$2f$entities$2f$WaitlistEntry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/waitlist/entities/WaitlistEntry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$waitlist$2f$repositories$2f$IWaitlistRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/waitlist/repositories/IWaitlistRepository.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/packages/domain/src/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ILogger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ILogger.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IAuthConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IAuthConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$INetworkConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/INetworkConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ISchedulerService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ISchedulerService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ISubscriptionChecker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ISubscriptionChecker.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IFootballApiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IFootballApiService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IBlockchainService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IBlockchainService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$entities$2f$Match$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/entities/Match.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$repositories$2f$IMatchRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/repositories/IMatchRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$value$2d$objects$2f$MatchFetchWindow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/value-objects/MatchFetchWindow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$entities$2f$Prediction$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/entities/Prediction.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$repositories$2f$IPredictionRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/repositories/IPredictionRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$Odds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/Odds.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/PredictionStatus.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$TransactionHash$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/TransactionHash.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ChatMessage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ConnectedUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ConnectedUser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$repositories$2f$IChatRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/repositories/IChatRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$fan$2d$tokens$2f$repositories$2f$IFanTokenRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/fan-tokens/repositories/IFanTokenRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$follows$2f$entities$2f$Follow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/follows/entities/Follow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$follows$2f$repositories$2f$IFollowRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/follows/repositories/IFollowRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$streams$2f$entities$2f$Stream$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/streams/entities/Stream.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$streams$2f$repositories$2f$IStreamRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/streams/repositories/IStreamRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$entities$2f$Donation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/entities/Donation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$entities$2f$Subscription$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/entities/Subscription.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$repositories$2f$IStreamWalletRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/repositories/IStreamWalletRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$waitlist$2f$entities$2f$WaitlistEntry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/waitlist/entities/WaitlistEntry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$waitlist$2f$repositories$2f$IWaitlistRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/waitlist/repositories/IWaitlistRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/lib/api/errors.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mapApiError": (()=>mapApiError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$NotFoundError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/NotFoundError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$UnauthorizedError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/UnauthorizedError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ConflictError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ConflictError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$BusinessRuleError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/BusinessRuleError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/error.ts [app-ssr] (ecmascript)");
;
;
function mapApiError(code, message) {
    switch(code){
        case 'NOT_FOUND':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$NotFoundError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotFoundError"](message, '');
        case 'UNAUTHORIZED':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$UnauthorizedError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnauthorizedError"](message);
        case 'CONFLICT':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ConflictError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConflictError"](message);
        case 'BUSINESS_RULE_VIOLATION':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$BusinessRuleError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BusinessRuleError"](message);
        case 'VALIDATION_ERROR':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"](message);
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiErrorCode"].UNKNOWN, `[${code}] ${message}`);
    }
}
}}),
"[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiClient": (()=>apiClient),
    "apiDelete": (()=>apiDelete),
    "apiGet": (()=>apiGet),
    "apiPost": (()=>apiPost),
    "apiPut": (()=>apiPut),
    "handleFormatBError": (()=>handleFormatBError),
    "normalizeFormatA": (()=>normalizeFormatA),
    "normalizeFormatB": (()=>normalizeFormatB)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$14$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/axios@1.14.0/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/error.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/errors.ts [app-ssr] (ecmascript)");
;
;
;
;
function normalizeFormatB(raw) {
    if (raw !== null && typeof raw === 'object' && 'success' in raw && raw.success === true && 'data' in raw) {
        return raw.data;
    }
    return raw;
}
function normalizeFormatA(raw, payloadKey) {
    if (raw !== null && typeof raw === 'object' && payloadKey in raw) {
        return raw[payloadKey];
    }
    return normalizeFormatB(raw);
}
function handleFormatBError(raw) {
    if (raw !== null && typeof raw === 'object' && 'success' in raw && raw.success === false && 'error' in raw) {
        const err = raw;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapApiError"])(err.error.code, err.error.message);
    }
    throw new Error('Unknown API error');
}
/**
 * @notice Centralized API client with automatic JWT injection and error handling
 * @dev Implements request/response interceptors for auth and rate limiting
 */ class ApiClient {
    client;
    constructor(){
        this.client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$14$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
            baseURL: ("TURBOPACK compile-time value", "http://localhost:3001") ?? 'http://localhost:3001',
            timeout: 30000,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this.setupInterceptors();
    }
    /**
   * @notice Configures request and response interceptors
   * @dev Handles JWT injection, 401 refresh, and 429 rate limiting
   */ setupInterceptors() {
        this.client.interceptors.request.use(async (config)=>{
            const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthToken"])();
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }, (error)=>Promise.reject(error));
        this.client.interceptors.response.use((response)=>{
            // Defensive: the backend always uses non-200 for errors, but guard
            // against any future 200+success:false body on Format B endpoints.
            const data = response.data;
            if (data !== null && typeof data === 'object' && 'success' in data && data.success === false && 'error' in data) {
                handleFormatBError(data);
            }
            return response;
        }, async (error)=>{
            const originalRequest = error.config;
            // Handle 401 Unauthorized - clear token and let auth provider regenerate
            if (error.response?.status === 401) {
                // Prevent infinite retry loops by checking if we've already tried
                if (!originalRequest._retry) {
                    originalRequest._retry = true;
                    // Clear expired/invalid token
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAuthToken"])();
                }
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error);
            }
            // Handle rate limiting (429)
            if (error.response?.status === 429) {
                return this.handleRateLimit(error, originalRequest);
            }
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        });
    }
    /**
   * @notice Handles rate limiting with exponential backoff
   * @param error The Axios error response
   * @param originalRequest The original request config
   * @param maxRetries Maximum number of retry attempts
   * @return Promise resolving to the successful response
   */ async handleRateLimit(error, originalRequest, maxRetries = 3) {
        const retryCount = originalRequest._retryCount || 0;
        if (retryCount >= maxRetries) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        }
        const retryAfter = error.response?.headers['retry-after'];
        const delay = retryAfter ? parseInt(retryAfter, 10) * 1000 : Math.pow(2, retryCount) * 1000;
        await new Promise((resolve)=>setTimeout(resolve, delay));
        originalRequest._retryCount = retryCount + 1;
        return this.client(originalRequest);
    }
    /**
   * @notice Performs GET request
   * @param url Request URL
   * @param config Optional Axios config
   * @return Promise resolving to response data
   */ async get(url, config) {
        const response = await this.client.get(url, config);
        return response.data;
    }
    /**
   * @notice Performs POST request
   * @param url Request URL
   * @param data Request body data
   * @param config Optional Axios config
   * @return Promise resolving to response data
   */ async post(url, data, config) {
        const response = await this.client.post(url, data, config);
        return response.data;
    }
    /**
   * @notice Performs PUT request
   * @param url Request URL
   * @param data Request body data
   * @param config Optional Axios config
   * @return Promise resolving to response data
   */ async put(url, data, config) {
        const response = await this.client.put(url, data, config);
        return response.data;
    }
    /**
   * @notice Performs DELETE request
   * @param url Request URL
   * @param config Optional Axios config
   * @return Promise resolving to response data
   */ async delete(url, config) {
        const response = await this.client.delete(url, config);
        return response.data;
    }
}
const apiClient = new ApiClient();
async function apiGet(path, config) {
    const raw = await apiClient.get(path, config);
    return normalizeFormatB(raw);
}
async function apiPost(path, body, config) {
    const raw = await apiClient.post(path, body, config);
    return normalizeFormatB(raw);
}
async function apiPut(path, body, config) {
    const raw = await apiClient.put(path, body, config);
    return normalizeFormatB(raw);
}
async function apiDelete(path, config) {
    await apiClient.delete(path, config);
}
}}),
"[project]/apps/frontend/lib/api/endpoints/browse.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "browseApi": (()=>browseApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const browseApi = {
    getMatches: async ()=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/matches/browse');
    }
};
}}),
"[project]/apps/frontend/lib/api/endpoints/chat.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "chatApi": (()=>chatApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const chatApi = {
    /**
   * @notice Join a chat room for a match
   * @param matchId Match ID
   * @param data Join room data
   * @return Promise resolving to success response
   */ joinRoom: (matchId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/chat/join/${matchId}`, data),
    /**
   * @notice Leave a chat room for a match
   * @param matchId Match ID
   * @param data Leave room data
   * @return Promise resolving to success response
   */ leaveRoom: (matchId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/chat/leave/${matchId}`, data),
    /**
   * @notice Send a text message to a chat room
   * @param matchId Match ID
   * @param data Message data
   * @return Promise resolving to created message
   */ sendMessage: (matchId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/chat/message/${matchId}`, data),
    /**
   * @notice Send a bet message to a chat room
   * @param matchId Match ID
   * @param data Bet message data
   * @return Promise resolving to created bet message
   */ sendBetMessage: (matchId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/chat/bet/${matchId}`, data),
    /**
   * @notice Fetch messages for a chat room
   * @param matchId Match ID
   * @param limit Maximum number of messages to fetch
   * @param offset Number of messages to skip
   * @return Promise resolving to array of messages
   */ getRoomMessages: (matchId, limit = 50, offset = 0)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/chat/messages/${matchId}?limit=${limit}&offset=${offset}`),
    /**
   * @notice Fetch connected users in a chat room
   * @param matchId Match ID
   * @return Promise resolving to array of connected users
   */ getConnectedUsers: (matchId)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/chat/users/${matchId}`),
    /**
   * @notice Fetch global chat statistics
   * @return Promise resolving to chat stats
   */ getChatStats: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/chat/stats')
};
}}),
"[project]/apps/frontend/lib/api/endpoints/fan-tokens.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fanTokensApi": (()=>fanTokensApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const fanTokensApi = {
    /**
   * @notice Fetches fan token balances for a wallet address
   * @param walletAddress User's wallet address
   * @return Promise resolving to user token balance
   */ getUserBalances: (walletAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/fan-tokens/balances/${walletAddress}`)
};
}}),
"[project]/apps/frontend/lib/api/endpoints/follows.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "followsApi": (()=>followsApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const followsApi = {
    follow: async (followerId, streamerId, streamerName)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/follows', {
            followerId,
            streamerId,
            streamerName
        });
    },
    unfollow: async (followerId, streamerId)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete('/follows', {
            data: {
                followerId,
                streamerId
            }
        });
    },
    isFollowing: async (followerId, streamerId)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/follows/is-following?followerId=${encodeURIComponent(followerId)}&streamerId=${encodeURIComponent(streamerId)}`);
    },
    getFollowerCount: async (streamerId)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/follows/count/${encodeURIComponent(streamerId)}`);
    },
    getFollowedStreamers: async (followerId)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/follows/following/${encodeURIComponent(followerId)}`);
    }
};
}}),
"[project]/apps/frontend/lib/api/endpoints/matches.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "matchesApi": (()=>matchesApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
/**
 * Maps the nested MatchResponseDto (raw backend shape) to the flat Match type
 * consumed by frontend components. Consumers depend on Match, not MatchResponseDto.
 *
 * score?.home can be number | null at runtime (backend returns null when no score);
 * `?? undefined` normalises null → undefined to satisfy Match.homeScore?: number.
 */ function transformMatch(m) {
    return {
        id: m.apiFootballId,
        homeTeam: m.homeTeam.name,
        awayTeam: m.awayTeam.name,
        homeTeamLogo: m.homeTeam.logo,
        awayTeamLogo: m.awayTeam.logo,
        league: m.league.name,
        status: m.status,
        startTime: m.matchDate,
        homeScore: m.score?.home ?? undefined,
        awayScore: m.score?.away ?? undefined,
        venue: m.venue,
        contractAddress: m.bettingContractAddress,
        odds: m.odds ? {
            match_winner: {
                home: m.odds.homeWin,
                draw: m.odds.draw,
                away: m.odds.awayWin
            }
        } : undefined
    };
}
const matchesApi = {
    /**
   * @notice Fetches all matches
   * @return Promise resolving to array of matches
   */ getAll: async ()=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/matches');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'matches').map(transformMatch);
    },
    /**
   * @notice Fetches single match by ID
   * @param id Match ID
   * @return Promise resolving to match data
   */ getById: async (id)=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/matches/${id}`);
        return transformMatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'match'));
    },
    /**
   * @notice Fetches live matches
   * @return Promise resolving to array of live matches
   */ getLive: async ()=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/matches/live');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'matches').map(transformMatch);
    },
    /**
   * @notice Fetches upcoming matches
   * @return Promise resolving to array of upcoming matches
   */ getUpcoming: async ()=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/matches/upcoming');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'matches').map(transformMatch);
    },
    /**
   * @notice Fetches matches by league
   * @param league League name
   * @return Promise resolving to array of matches in the league
   */ getByLeague: async (league)=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/matches/league/${league}`);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'matches').map(transformMatch);
    },
    /**
   * @notice Fetches match statistics summary
   * @return Promise resolving to statistics data
   */ getStats: async ()=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/matches/stats/summary');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'stats');
    }
};
}}),
"[project]/apps/frontend/lib/api/endpoints/predictions.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "predictionsApi": (()=>predictionsApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const predictionsApi = {
    /**
   * @notice Creates a new prediction
   * @param data Prediction data
   * @return Promise resolving to created prediction
   */ create: async (data)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiPost"])('/predictions', data);
    },
    /**
   * @notice Fetches predictions by user ID
   * @param userId User ID
   * @return Promise resolving to array of predictions
   */ getByUser: async (userId)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiGet"])(`/predictions/${userId}`);
    },
    /**
   * @notice Fetches user prediction statistics
   * @param userId User ID
   * @return Promise resolving to prediction stats
   */ getUserStats: async (userId)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiGet"])(`/predictions/stats/${userId}`);
    }
};
}}),
"[project]/apps/frontend/lib/api/endpoints/stream-wallet.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "streamWalletApi": (()=>streamWalletApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const streamWalletApi = {
    /**
   * @notice Fetches all donations for a streamer
   * @param streamerAddress Streamer's wallet address
   * @return Promise resolving to donations array
   */ getStreamerDonations: (streamerAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/donations/${streamerAddress}`),
    /**
   * @notice Fetches all subscriptions for a streamer
   * @param streamerAddress Streamer's wallet address
   * @return Promise resolving to subscriptions array
   */ getStreamerSubscriptions: (streamerAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/subscriptions/${streamerAddress}`),
    /**
   * @notice Fetches earnings statistics for a streamer
   * @param streamerAddress Streamer's wallet address
   * @return Promise resolving to streamer stats
   */ getStreamerStats: (streamerAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/stats/${streamerAddress}`),
    /**
   * @notice Fetches donation history for a donor
   * @param donorAddress Donor's wallet address
   * @return Promise resolving to donations array
   */ getDonorHistory: (donorAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/donor/${donorAddress}/donations`),
    /**
   * @notice Fetches subscription history for a subscriber
   * @param subscriberAddress Subscriber's wallet address
   * @return Promise resolving to subscriptions array
   */ getSubscriberHistory: (subscriberAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/subscriber/${subscriberAddress}/subscriptions`)
};
}}),
"[project]/apps/frontend/lib/api/endpoints/streams.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "streamsApi": (()=>streamsApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const streamsApi = {
    /**
   * @notice Fetches active streams for a match
   * @param matchId The match ID to get streams for
   */ getActive: async (matchId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/stream', {
            params: {
                matchId
            }
        });
    },
    /**
   * @notice Fetches the preferred stream for a user (follow-aware)
   * @param matchId The match ID
   * @param userId Optional user ID for follow-based prioritization
   */ getPreferred: async (matchId, userId)=>{
        const params = {
            matchId
        };
        if (userId) params.userId = userId;
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/stream/preferred', {
            params
        });
        return {
            stream: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'stream'),
            source: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'source')
        };
    },
    /**
   * @notice Creates a new stream
   */ create: async (request)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/stream', request);
    },
    /**
   * @notice Ends/deletes a stream
   */ end: async (streamId, streamerId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete('/stream', {
            data: {
                streamId,
                streamerId
            }
        });
    },
    /**
   * @notice Registers a viewer session joining a stream
   */ joinViewer: async (streamId, sessionToken)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/stream/${streamId}/join`, {
            sessionToken
        });
    },
    /**
   * @notice Registers a viewer session leaving a stream
   */ leaveViewer: async (streamId, sessionToken)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/stream/${streamId}/leave`, {
            sessionToken
        });
    },
    /**
   * @notice Uploads a stream thumbnail
   */ uploadThumbnail: async (streamId, file)=>{
        const form = new FormData();
        form.append('file', file, 'thumbnail.jpg');
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/stream/${streamId}/thumbnail`, form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
};
}}),
"[project]/apps/frontend/lib/api/endpoints/waitlist.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "waitlistApi": (()=>waitlistApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const waitlistApi = {
    /**
   * @notice Join the waitlist
   * @param data Waitlist entry data
   * @return Promise resolving to created entry
   */ join: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/waitlist', data),
    /**
   * @notice Check if user has access
   * @param email User's email (optional)
   * @param walletAddress User's wallet address (optional)
   * @return Promise resolving to access check result
   */ checkAccess: (email, walletAddress)=>{
        const params = new URLSearchParams();
        if (email) params.append('email', email);
        if (walletAddress) params.append('walletAddress', walletAddress);
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/waitlist/check-access?${params.toString()}`);
    },
    /**
   * @notice Fetch waitlist statistics
   * @return Promise resolving to waitlist stats
   */ getStats: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/waitlist/stats')
};
}}),
"[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$browse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/browse.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/chat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$fan$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/fan-tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/follows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/matches.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/predictions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/stream-wallet.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/streams.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/waitlist.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
}}),
"[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$browse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/browse.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/chat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$fan$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/fan-tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/follows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/matches.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/predictions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/stream-wallet.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/streams.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/waitlist.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/lib/query/keys.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @notice Query key factory for React Query cache management
 * @dev Provides type-safe, hierarchical query keys for all API resources
 */ __turbopack_context__.s({
    "queryKeys": (()=>queryKeys)
});
const queryKeys = {
    browse: {
        all: [
            'browse'
        ]
    },
    matches: {
        all: [
            'matches'
        ],
        lists: ()=>[
                ...queryKeys.matches.all,
                'list'
            ],
        list: (filters)=>[
                ...queryKeys.matches.lists(),
                filters
            ],
        details: ()=>[
                ...queryKeys.matches.all,
                'detail'
            ],
        detail: (id)=>[
                ...queryKeys.matches.details(),
                id
            ],
        live: ()=>[
                ...queryKeys.matches.all,
                'live'
            ],
        upcoming: ()=>[
                ...queryKeys.matches.all,
                'upcoming'
            ],
        byLeague: (league)=>[
                ...queryKeys.matches.all,
                'league',
                league
            ],
        stats: ()=>[
                ...queryKeys.matches.all,
                'stats'
            ]
    },
    predictions: {
        all: [
            'predictions'
        ],
        lists: ()=>[
                ...queryKeys.predictions.all,
                'list'
            ],
        byUser: (userId)=>[
                ...queryKeys.predictions.lists(),
                userId
            ],
        stats: (userId)=>[
                ...queryKeys.predictions.all,
                'stats',
                userId
            ]
    },
    chat: {
        all: [
            'chat'
        ],
        messages: (matchId, limit, offset)=>[
                ...queryKeys.chat.all,
                'messages',
                matchId,
                limit,
                offset
            ],
        users: (matchId)=>[
                ...queryKeys.chat.all,
                'users',
                matchId
            ],
        stats: ()=>[
                ...queryKeys.chat.all,
                'stats'
            ]
    },
    streamWallet: {
        all: [
            'streamWallet'
        ],
        donations: (streamerAddress)=>[
                ...queryKeys.streamWallet.all,
                'donations',
                streamerAddress
            ],
        subscriptions: (streamerAddress)=>[
                ...queryKeys.streamWallet.all,
                'subscriptions',
                streamerAddress
            ],
        stats: (streamerAddress)=>[
                ...queryKeys.streamWallet.all,
                'stats',
                streamerAddress
            ],
        donorDonations: (donorAddress)=>[
                ...queryKeys.streamWallet.all,
                'donor',
                donorAddress,
                'donations'
            ],
        subscriberSubscriptions: (subscriberAddress)=>[
                ...queryKeys.streamWallet.all,
                'subscriber',
                subscriberAddress,
                'subscriptions'
            ]
    },
    waitlist: {
        all: [
            'waitlist'
        ],
        access: ()=>[
                ...queryKeys.waitlist.all,
                'access'
            ],
        stats: ()=>[
                ...queryKeys.waitlist.all,
                'stats'
            ]
    },
    fanTokens: {
        all: [
            'fanTokens'
        ],
        balances: (walletAddress)=>[
                ...queryKeys.fanTokens.all,
                'balances',
                walletAddress
            ]
    },
    follows: {
        all: [
            'follows'
        ],
        isFollowing: (followerId, streamerId)=>[
                ...queryKeys.follows.all,
                'isFollowing',
                followerId,
                streamerId
            ],
        count: (streamerId)=>[
                ...queryKeys.follows.all,
                'count',
                streamerId
            ],
        following: (followerId)=>[
                ...queryKeys.follows.all,
                'following',
                followerId
            ]
    }
};
}}),
"[project]/apps/frontend/hooks/useAuth.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/providers/auth-provider.tsx [app-ssr] (ecmascript)");
;
}}),
"[project]/apps/frontend/hooks/useAuth.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/providers/auth-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useAuth.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/hooks/api/useBrowseMatches.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useBrowseMatches": (()=>useBrowseMatches)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$browse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/browse.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useAuth.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/providers/auth-provider.tsx [app-ssr] (ecmascript)");
;
;
;
;
function useBrowseMatches() {
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].browse.all,
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$browse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["browseApi"].getMatches,
        enabled: isAuthenticated,
        staleTime: 30_000,
        refetchInterval: 60_000
    });
}
}}),
"[project]/apps/frontend/hooks/api/useChat.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useChatMessages": (()=>useChatMessages),
    "useChatStats": (()=>useChatStats),
    "useConnectedUsers": (()=>useConnectedUsers),
    "useJoinRoom": (()=>useJoinRoom),
    "useLeaveRoom": (()=>useLeaveRoom),
    "useSendBetMessage": (()=>useSendBetMessage),
    "useSendMessage": (()=>useSendMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/chat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-ssr] (ecmascript)");
;
;
;
function useChatMessages(matchId, limit = 50, offset = 0) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].chat.messages(matchId, limit, offset),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].getRoomMessages(matchId, limit, offset),
        enabled: !!matchId
    });
}
function useConnectedUsers(matchId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].chat.users(matchId),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].getConnectedUsers(matchId),
        enabled: !!matchId
    });
}
function useChatStats() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].chat.stats(),
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].getChatStats
    });
}
function useJoinRoom() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ matchId, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].joinRoom(matchId, data),
        onSuccess: (_, variables)=>{
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].chat.users(variables.matchId)
            });
        }
    });
}
function useLeaveRoom() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ matchId, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].leaveRoom(matchId, data),
        onSuccess: (_, variables)=>{
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].chat.users(variables.matchId)
            });
        }
    });
}
function useSendMessage() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ matchId, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].sendMessage(matchId, data),
        onSuccess: (_, variables)=>{
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].chat.all
            });
        }
    });
}
function useSendBetMessage() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ matchId, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].sendBetMessage(matchId, data),
        onSuccess: (_, variables)=>{
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].chat.all
            });
        }
    });
}
}}),
"[project]/apps/frontend/hooks/api/useFanTokens.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useUserFanTokenBalances": (()=>useUserFanTokenBalances)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$fan$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/fan-tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-ssr] (ecmascript)");
;
;
;
function useUserFanTokenBalances(walletAddress) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].fanTokens.balances(walletAddress),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$fan$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fanTokensApi"].getUserBalances(walletAddress),
        enabled: !!walletAddress
    });
}
}}),
"[project]/apps/frontend/hooks/api/useFollows.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFollowMutation": (()=>useFollowMutation),
    "useFollowedStreamers": (()=>useFollowedStreamers),
    "useFollowerCount": (()=>useFollowerCount),
    "useIsFollowing": (()=>useIsFollowing),
    "useUnfollowMutation": (()=>useUnfollowMutation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/follows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function useIsFollowing(followerId, streamerId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].follows.isFollowing(followerId ?? '', streamerId ?? ''),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["followsApi"].isFollowing(followerId, streamerId),
        enabled: !!followerId && !!streamerId,
        staleTime: 30_000,
        select: (data)=>data.isFollowing
    });
}
function useFollowerCount(streamerId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].follows.count(streamerId ?? ''),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["followsApi"].getFollowerCount(streamerId),
        enabled: !!streamerId,
        staleTime: 30_000,
        select: (data)=>data.count
    });
}
function useFollowedStreamers(followerId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].follows.following(followerId ?? ''),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["followsApi"].getFollowedStreamers(followerId),
        enabled: !!followerId,
        staleTime: 30_000,
        select: (data)=>data.follows
    });
}
function useFollowMutation(followerId) {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ streamerId, streamerName })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["followsApi"].follow(followerId, streamerId, streamerName),
        onSuccess: (_data, variables)=>{
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].follows.isFollowing(followerId ?? '', variables.streamerId)
            });
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].follows.count(variables.streamerId)
            });
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].follows.following(followerId ?? '')
            });
        }
    });
}
function useUnfollowMutation(followerId) {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ streamerId })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["followsApi"].unfollow(followerId, streamerId),
        onSuccess: (_data, variables)=>{
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].follows.isFollowing(followerId ?? '', variables.streamerId)
            });
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].follows.count(variables.streamerId)
            });
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].follows.following(followerId ?? '')
            });
        }
    });
}
}}),
"[project]/apps/frontend/hooks/api/useMatches.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLiveMatches": (()=>useLiveMatches),
    "useMatch": (()=>useMatch),
    "useMatchStats": (()=>useMatchStats),
    "useMatches": (()=>useMatches),
    "useMatchesByLeague": (()=>useMatchesByLeague),
    "useUpcomingMatches": (()=>useUpcomingMatches)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/matches.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useAuth.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/providers/auth-provider.tsx [app-ssr] (ecmascript)");
;
;
;
;
function useMatches() {
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].matches.lists(),
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesApi"].getAll,
        enabled: isAuthenticated
    });
}
function useMatch(id) {
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].matches.detail(id),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesApi"].getById(id),
        enabled: !!id && isAuthenticated
    });
}
function useLiveMatches() {
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].matches.live(),
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesApi"].getLive,
        refetchInterval: 30000,
        enabled: isAuthenticated
    });
}
function useUpcomingMatches() {
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].matches.upcoming(),
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesApi"].getUpcoming,
        enabled: isAuthenticated
    });
}
function useMatchesByLeague(league) {
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].matches.byLeague(league),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesApi"].getByLeague(league),
        enabled: !!league && isAuthenticated
    });
}
function useMatchStats() {
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].matches.stats(),
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesApi"].getStats,
        enabled: isAuthenticated
    });
}
}}),
"[project]/apps/frontend/hooks/api/usePredictions.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCreatePrediction": (()=>useCreatePrediction),
    "useUserPredictionStats": (()=>useUserPredictionStats),
    "useUserPredictions": (()=>useUserPredictions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/predictions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-ssr] (ecmascript)");
;
;
;
function useUserPredictions(userId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].predictions.byUser(userId),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predictionsApi"].getByUser(userId),
        enabled: !!userId
    });
}
function useUserPredictionStats(userId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].predictions.stats(userId),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predictionsApi"].getUserStats(userId),
        enabled: !!userId
    });
}
function useCreatePrediction() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predictionsApi"].create(data),
        onSuccess: (_, variables)=>{
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].predictions.byUser(variables.userId)
            });
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].predictions.stats(variables.userId)
            });
        }
    });
}
}}),
"[project]/apps/frontend/hooks/api/useStreamWallet.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useDonorHistory": (()=>useDonorHistory),
    "useStreamerDonations": (()=>useStreamerDonations),
    "useStreamerStats": (()=>useStreamerStats),
    "useStreamerSubscriptions": (()=>useStreamerSubscriptions),
    "useSubscriberHistory": (()=>useSubscriberHistory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/stream-wallet.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-ssr] (ecmascript)");
;
;
;
function useStreamerDonations(streamerAddress) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].streamWallet.donations(streamerAddress),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamWalletApi"].getStreamerDonations(streamerAddress),
        enabled: !!streamerAddress
    });
}
function useStreamerSubscriptions(streamerAddress) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].streamWallet.subscriptions(streamerAddress),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamWalletApi"].getStreamerSubscriptions(streamerAddress),
        enabled: !!streamerAddress
    });
}
function useStreamerStats(streamerAddress) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].streamWallet.stats(streamerAddress),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamWalletApi"].getStreamerStats(streamerAddress),
        enabled: !!streamerAddress
    });
}
function useDonorHistory(donorAddress) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].streamWallet.donorDonations(donorAddress),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamWalletApi"].getDonorHistory(donorAddress),
        enabled: !!donorAddress
    });
}
function useSubscriberHistory(subscriberAddress) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].streamWallet.subscriberSubscriptions(subscriberAddress),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamWalletApi"].getSubscriberHistory(subscriberAddress),
        enabled: !!subscriberAddress
    });
}
}}),
"[project]/apps/frontend/hooks/api/useWaitlist.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCheckWaitlistAccess": (()=>useCheckWaitlistAccess),
    "useJoinWaitlist": (()=>useJoinWaitlist),
    "useWaitlistStats": (()=>useWaitlistStats)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/waitlist.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-ssr] (ecmascript)");
;
;
;
function useCheckWaitlistAccess(email, walletAddress) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].waitlist.access(),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitlistApi"].checkAccess(email, walletAddress),
        enabled: !!(email || walletAddress)
    });
}
function useWaitlistStats() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].waitlist.stats(),
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitlistApi"].getStats
    });
}
function useJoinWaitlist() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitlistApi"].join(data),
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].waitlist.access()
            });
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].waitlist.stats()
            });
        }
    });
}
}}),
"[project]/apps/frontend/hooks/api/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useBrowseMatches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useBrowseMatches.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useChat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useChat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useFanTokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useFanTokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useFollows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useFollows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useMatches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useMatches.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$usePredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/usePredictions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useStreamWallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useStreamWallet.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useWaitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useWaitlist.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
}}),
"[project]/apps/frontend/hooks/api/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useBrowseMatches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useBrowseMatches.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useChat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useChat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useFanTokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useFanTokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useFollows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useFollows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useMatches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useMatches.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$usePredictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/usePredictions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useStreamWallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useStreamWallet.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useWaitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useWaitlist.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/lib/contracts/generated.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "bettingMatchAbi": (()=>bettingMatchAbi),
    "bettingMatchFactoryAbi": (()=>bettingMatchFactoryAbi),
    "streamWalletAbi": (()=>streamWalletAbi),
    "streamWalletFactoryAbi": (()=>streamWalletFactoryAbi),
    "useBettingMatchFactoryReadAllMatches": (()=>useBettingMatchFactoryReadAllMatches),
    "useBettingMatchFactoryReadGetAllMatches": (()=>useBettingMatchFactoryReadGetAllMatches),
    "useBettingMatchFactoryReadGetSportType": (()=>useBettingMatchFactoryReadGetSportType),
    "useBettingMatchFactoryReadMatchSportType": (()=>useBettingMatchFactoryReadMatchSportType),
    "useBettingMatchFactoryReadOwner": (()=>useBettingMatchFactoryReadOwner),
    "useBettingMatchFactoryReadundefined": (()=>useBettingMatchFactoryReadundefined),
    "useBettingMatchFactorySimulateCreateBasketballMatch": (()=>useBettingMatchFactorySimulateCreateBasketballMatch),
    "useBettingMatchFactorySimulateCreateFootballMatch": (()=>useBettingMatchFactorySimulateCreateFootballMatch),
    "useBettingMatchFactorySimulateRenounceOwnership": (()=>useBettingMatchFactorySimulateRenounceOwnership),
    "useBettingMatchFactorySimulateTransferOwnership": (()=>useBettingMatchFactorySimulateTransferOwnership),
    "useBettingMatchFactorySimulateundefined": (()=>useBettingMatchFactorySimulateundefined),
    "useBettingMatchFactoryWatchMatchCreated": (()=>useBettingMatchFactoryWatchMatchCreated),
    "useBettingMatchFactoryWatchOwnershipTransferred": (()=>useBettingMatchFactoryWatchOwnershipTransferred),
    "useBettingMatchFactoryWatchundefined": (()=>useBettingMatchFactoryWatchundefined),
    "useBettingMatchFactoryWriteCreateBasketballMatch": (()=>useBettingMatchFactoryWriteCreateBasketballMatch),
    "useBettingMatchFactoryWriteCreateFootballMatch": (()=>useBettingMatchFactoryWriteCreateFootballMatch),
    "useBettingMatchFactoryWriteRenounceOwnership": (()=>useBettingMatchFactoryWriteRenounceOwnership),
    "useBettingMatchFactoryWriteTransferOwnership": (()=>useBettingMatchFactoryWriteTransferOwnership),
    "useBettingMatchFactoryWriteundefined": (()=>useBettingMatchFactoryWriteundefined),
    "useBettingMatchReadAdminRole": (()=>useBettingMatchReadAdminRole),
    "useBettingMatchReadDefaultAdminRole": (()=>useBettingMatchReadDefaultAdminRole),
    "useBettingMatchReadFootballMarkets": (()=>useBettingMatchReadFootballMarkets),
    "useBettingMatchReadGetBetDetails": (()=>useBettingMatchReadGetBetDetails),
    "useBettingMatchReadGetCurrentOdds": (()=>useBettingMatchReadGetCurrentOdds),
    "useBettingMatchReadGetFootballMarket": (()=>useBettingMatchReadGetFootballMarket),
    "useBettingMatchReadGetMarketCore": (()=>useBettingMatchReadGetMarketCore),
    "useBettingMatchReadGetMarketInfo": (()=>useBettingMatchReadGetMarketInfo),
    "useBettingMatchReadGetOddsHistory": (()=>useBettingMatchReadGetOddsHistory),
    "useBettingMatchReadGetRoleAdmin": (()=>useBettingMatchReadGetRoleAdmin),
    "useBettingMatchReadGetUserBets": (()=>useBettingMatchReadGetUserBets),
    "useBettingMatchReadHasRole": (()=>useBettingMatchReadHasRole),
    "useBettingMatchReadMarketBothScore": (()=>useBettingMatchReadMarketBothScore),
    "useBettingMatchReadMarketCorrectScore": (()=>useBettingMatchReadMarketCorrectScore),
    "useBettingMatchReadMarketCount": (()=>useBettingMatchReadMarketCount),
    "useBettingMatchReadMarketFirstScorer": (()=>useBettingMatchReadMarketFirstScorer),
    "useBettingMatchReadMarketGoalsTotal": (()=>useBettingMatchReadMarketGoalsTotal),
    "useBettingMatchReadMarketHalftime": (()=>useBettingMatchReadMarketHalftime),
    "useBettingMatchReadMarketWinner": (()=>useBettingMatchReadMarketWinner),
    "useBettingMatchReadMatchName": (()=>useBettingMatchReadMatchName),
    "useBettingMatchReadMaxOdds": (()=>useBettingMatchReadMaxOdds),
    "useBettingMatchReadMinOdds": (()=>useBettingMatchReadMinOdds),
    "useBettingMatchReadOddsPrecision": (()=>useBettingMatchReadOddsPrecision),
    "useBettingMatchReadOddsSetterRole": (()=>useBettingMatchReadOddsSetterRole),
    "useBettingMatchReadOwner": (()=>useBettingMatchReadOwner),
    "useBettingMatchReadPaused": (()=>useBettingMatchReadPaused),
    "useBettingMatchReadPauserRole": (()=>useBettingMatchReadPauserRole),
    "useBettingMatchReadProxiableUuid": (()=>useBettingMatchReadProxiableUuid),
    "useBettingMatchReadResolverRole": (()=>useBettingMatchReadResolverRole),
    "useBettingMatchReadSportType": (()=>useBettingMatchReadSportType),
    "useBettingMatchReadSupportsInterface": (()=>useBettingMatchReadSupportsInterface),
    "useBettingMatchReadTreasuryRole": (()=>useBettingMatchReadTreasuryRole),
    "useBettingMatchReadUpgradeInterfaceVersion": (()=>useBettingMatchReadUpgradeInterfaceVersion),
    "useBettingMatchReadundefined": (()=>useBettingMatchReadundefined),
    "useBettingMatchSimulateAddMarket": (()=>useBettingMatchSimulateAddMarket),
    "useBettingMatchSimulateAddMarketWithLine": (()=>useBettingMatchSimulateAddMarketWithLine),
    "useBettingMatchSimulateCancelMarket": (()=>useBettingMatchSimulateCancelMarket),
    "useBettingMatchSimulateClaim": (()=>useBettingMatchSimulateClaim),
    "useBettingMatchSimulateClaimAll": (()=>useBettingMatchSimulateClaimAll),
    "useBettingMatchSimulateClaimRefund": (()=>useBettingMatchSimulateClaimRefund),
    "useBettingMatchSimulateCloseMarket": (()=>useBettingMatchSimulateCloseMarket),
    "useBettingMatchSimulateEmergencyPause": (()=>useBettingMatchSimulateEmergencyPause),
    "useBettingMatchSimulateEmergencyWithdraw": (()=>useBettingMatchSimulateEmergencyWithdraw),
    "useBettingMatchSimulateGrantRole": (()=>useBettingMatchSimulateGrantRole),
    "useBettingMatchSimulateInitialize": (()=>useBettingMatchSimulateInitialize),
    "useBettingMatchSimulateOpenMarket": (()=>useBettingMatchSimulateOpenMarket),
    "useBettingMatchSimulatePlaceBet": (()=>useBettingMatchSimulatePlaceBet),
    "useBettingMatchSimulateRenounceOwnership": (()=>useBettingMatchSimulateRenounceOwnership),
    "useBettingMatchSimulateRenounceRole": (()=>useBettingMatchSimulateRenounceRole),
    "useBettingMatchSimulateResolveMarket": (()=>useBettingMatchSimulateResolveMarket),
    "useBettingMatchSimulateRevokeRole": (()=>useBettingMatchSimulateRevokeRole),
    "useBettingMatchSimulateSetMarketOdds": (()=>useBettingMatchSimulateSetMarketOdds),
    "useBettingMatchSimulateSuspendMarket": (()=>useBettingMatchSimulateSuspendMarket),
    "useBettingMatchSimulateTransferOwnership": (()=>useBettingMatchSimulateTransferOwnership),
    "useBettingMatchSimulateUnpause": (()=>useBettingMatchSimulateUnpause),
    "useBettingMatchSimulateUpgradeToAndCall": (()=>useBettingMatchSimulateUpgradeToAndCall),
    "useBettingMatchSimulateundefined": (()=>useBettingMatchSimulateundefined),
    "useBettingMatchWatchBetPlaced": (()=>useBettingMatchWatchBetPlaced),
    "useBettingMatchWatchInitialized": (()=>useBettingMatchWatchInitialized),
    "useBettingMatchWatchMarketCancelled": (()=>useBettingMatchWatchMarketCancelled),
    "useBettingMatchWatchMarketCreated": (()=>useBettingMatchWatchMarketCreated),
    "useBettingMatchWatchMarketResolved": (()=>useBettingMatchWatchMarketResolved),
    "useBettingMatchWatchMarketStateChanged": (()=>useBettingMatchWatchMarketStateChanged),
    "useBettingMatchWatchMatchInitialized": (()=>useBettingMatchWatchMatchInitialized),
    "useBettingMatchWatchOddsUpdated": (()=>useBettingMatchWatchOddsUpdated),
    "useBettingMatchWatchOwnershipTransferred": (()=>useBettingMatchWatchOwnershipTransferred),
    "useBettingMatchWatchPaused": (()=>useBettingMatchWatchPaused),
    "useBettingMatchWatchPayout": (()=>useBettingMatchWatchPayout),
    "useBettingMatchWatchRefund": (()=>useBettingMatchWatchRefund),
    "useBettingMatchWatchRoleAdminChanged": (()=>useBettingMatchWatchRoleAdminChanged),
    "useBettingMatchWatchRoleGranted": (()=>useBettingMatchWatchRoleGranted),
    "useBettingMatchWatchRoleRevoked": (()=>useBettingMatchWatchRoleRevoked),
    "useBettingMatchWatchUnpaused": (()=>useBettingMatchWatchUnpaused),
    "useBettingMatchWatchUpgraded": (()=>useBettingMatchWatchUpgraded),
    "useBettingMatchWatchundefined": (()=>useBettingMatchWatchundefined),
    "useBettingMatchWriteAddMarket": (()=>useBettingMatchWriteAddMarket),
    "useBettingMatchWriteAddMarketWithLine": (()=>useBettingMatchWriteAddMarketWithLine),
    "useBettingMatchWriteCancelMarket": (()=>useBettingMatchWriteCancelMarket),
    "useBettingMatchWriteClaim": (()=>useBettingMatchWriteClaim),
    "useBettingMatchWriteClaimAll": (()=>useBettingMatchWriteClaimAll),
    "useBettingMatchWriteClaimRefund": (()=>useBettingMatchWriteClaimRefund),
    "useBettingMatchWriteCloseMarket": (()=>useBettingMatchWriteCloseMarket),
    "useBettingMatchWriteEmergencyPause": (()=>useBettingMatchWriteEmergencyPause),
    "useBettingMatchWriteEmergencyWithdraw": (()=>useBettingMatchWriteEmergencyWithdraw),
    "useBettingMatchWriteGrantRole": (()=>useBettingMatchWriteGrantRole),
    "useBettingMatchWriteInitialize": (()=>useBettingMatchWriteInitialize),
    "useBettingMatchWriteOpenMarket": (()=>useBettingMatchWriteOpenMarket),
    "useBettingMatchWritePlaceBet": (()=>useBettingMatchWritePlaceBet),
    "useBettingMatchWriteRenounceOwnership": (()=>useBettingMatchWriteRenounceOwnership),
    "useBettingMatchWriteRenounceRole": (()=>useBettingMatchWriteRenounceRole),
    "useBettingMatchWriteResolveMarket": (()=>useBettingMatchWriteResolveMarket),
    "useBettingMatchWriteRevokeRole": (()=>useBettingMatchWriteRevokeRole),
    "useBettingMatchWriteSetMarketOdds": (()=>useBettingMatchWriteSetMarketOdds),
    "useBettingMatchWriteSuspendMarket": (()=>useBettingMatchWriteSuspendMarket),
    "useBettingMatchWriteTransferOwnership": (()=>useBettingMatchWriteTransferOwnership),
    "useBettingMatchWriteUnpause": (()=>useBettingMatchWriteUnpause),
    "useBettingMatchWriteUpgradeToAndCall": (()=>useBettingMatchWriteUpgradeToAndCall),
    "useBettingMatchWriteundefined": (()=>useBettingMatchWriteundefined),
    "useStreamWalletFactoryReadDefaultPlatformFeeBps": (()=>useStreamWalletFactoryReadDefaultPlatformFeeBps),
    "useStreamWalletFactoryReadGetWallet": (()=>useStreamWalletFactoryReadGetWallet),
    "useStreamWalletFactoryReadHasWallet": (()=>useStreamWalletFactoryReadHasWallet),
    "useStreamWalletFactoryReadImplementation": (()=>useStreamWalletFactoryReadImplementation),
    "useStreamWalletFactoryReadOwner": (()=>useStreamWalletFactoryReadOwner),
    "useStreamWalletFactoryReadStreamerWallets": (()=>useStreamWalletFactoryReadStreamerWallets),
    "useStreamWalletFactoryReadTreasury": (()=>useStreamWalletFactoryReadTreasury),
    "useStreamWalletFactoryReadundefined": (()=>useStreamWalletFactoryReadundefined),
    "useStreamWalletFactorySimulateDeployWalletFor": (()=>useStreamWalletFactorySimulateDeployWalletFor),
    "useStreamWalletFactorySimulateDonateToStream": (()=>useStreamWalletFactorySimulateDonateToStream),
    "useStreamWalletFactorySimulateRenounceOwnership": (()=>useStreamWalletFactorySimulateRenounceOwnership),
    "useStreamWalletFactorySimulateSetPlatformFee": (()=>useStreamWalletFactorySimulateSetPlatformFee),
    "useStreamWalletFactorySimulateSetTreasury": (()=>useStreamWalletFactorySimulateSetTreasury),
    "useStreamWalletFactorySimulateSubscribeToStream": (()=>useStreamWalletFactorySimulateSubscribeToStream),
    "useStreamWalletFactorySimulateTransferOwnership": (()=>useStreamWalletFactorySimulateTransferOwnership),
    "useStreamWalletFactorySimulateundefined": (()=>useStreamWalletFactorySimulateundefined),
    "useStreamWalletFactoryWatchDonationProcessed": (()=>useStreamWalletFactoryWatchDonationProcessed),
    "useStreamWalletFactoryWatchOwnershipTransferred": (()=>useStreamWalletFactoryWatchOwnershipTransferred),
    "useStreamWalletFactoryWatchPlatformFeeUpdated": (()=>useStreamWalletFactoryWatchPlatformFeeUpdated),
    "useStreamWalletFactoryWatchStreamWalletCreated": (()=>useStreamWalletFactoryWatchStreamWalletCreated),
    "useStreamWalletFactoryWatchSubscriptionProcessed": (()=>useStreamWalletFactoryWatchSubscriptionProcessed),
    "useStreamWalletFactoryWatchTreasuryUpdated": (()=>useStreamWalletFactoryWatchTreasuryUpdated),
    "useStreamWalletFactoryWatchundefined": (()=>useStreamWalletFactoryWatchundefined),
    "useStreamWalletFactoryWriteDeployWalletFor": (()=>useStreamWalletFactoryWriteDeployWalletFor),
    "useStreamWalletFactoryWriteDonateToStream": (()=>useStreamWalletFactoryWriteDonateToStream),
    "useStreamWalletFactoryWriteRenounceOwnership": (()=>useStreamWalletFactoryWriteRenounceOwnership),
    "useStreamWalletFactoryWriteSetPlatformFee": (()=>useStreamWalletFactoryWriteSetPlatformFee),
    "useStreamWalletFactoryWriteSetTreasury": (()=>useStreamWalletFactoryWriteSetTreasury),
    "useStreamWalletFactoryWriteSubscribeToStream": (()=>useStreamWalletFactoryWriteSubscribeToStream),
    "useStreamWalletFactoryWriteTransferOwnership": (()=>useStreamWalletFactoryWriteTransferOwnership),
    "useStreamWalletFactoryWriteundefined": (()=>useStreamWalletFactoryWriteundefined),
    "useStreamWalletReadAvailableBalance": (()=>useStreamWalletReadAvailableBalance),
    "useStreamWalletReadFactory": (()=>useStreamWalletReadFactory),
    "useStreamWalletReadGetDonationAmount": (()=>useStreamWalletReadGetDonationAmount),
    "useStreamWalletReadGetSubscription": (()=>useStreamWalletReadGetSubscription),
    "useStreamWalletReadIsSubscribed": (()=>useStreamWalletReadIsSubscribed),
    "useStreamWalletReadLifetimeDonations": (()=>useStreamWalletReadLifetimeDonations),
    "useStreamWalletReadOwner": (()=>useStreamWalletReadOwner),
    "useStreamWalletReadPlatformFeeBps": (()=>useStreamWalletReadPlatformFeeBps),
    "useStreamWalletReadProxiableUuid": (()=>useStreamWalletReadProxiableUuid),
    "useStreamWalletReadStreamer": (()=>useStreamWalletReadStreamer),
    "useStreamWalletReadSubscriptions": (()=>useStreamWalletReadSubscriptions),
    "useStreamWalletReadTotalRevenue": (()=>useStreamWalletReadTotalRevenue),
    "useStreamWalletReadTotalSubscribers": (()=>useStreamWalletReadTotalSubscribers),
    "useStreamWalletReadTotalWithdrawn": (()=>useStreamWalletReadTotalWithdrawn),
    "useStreamWalletReadTreasury": (()=>useStreamWalletReadTreasury),
    "useStreamWalletReadUpgradeInterfaceVersion": (()=>useStreamWalletReadUpgradeInterfaceVersion),
    "useStreamWalletReadundefined": (()=>useStreamWalletReadundefined),
    "useStreamWalletSimulateDonate": (()=>useStreamWalletSimulateDonate),
    "useStreamWalletSimulateInitialize": (()=>useStreamWalletSimulateInitialize),
    "useStreamWalletSimulateRecordSubscription": (()=>useStreamWalletSimulateRecordSubscription),
    "useStreamWalletSimulateRenounceOwnership": (()=>useStreamWalletSimulateRenounceOwnership),
    "useStreamWalletSimulateTransferOwnership": (()=>useStreamWalletSimulateTransferOwnership),
    "useStreamWalletSimulateUpgradeToAndCall": (()=>useStreamWalletSimulateUpgradeToAndCall),
    "useStreamWalletSimulateWithdrawRevenue": (()=>useStreamWalletSimulateWithdrawRevenue),
    "useStreamWalletSimulateundefined": (()=>useStreamWalletSimulateundefined),
    "useStreamWalletWatchDonationReceived": (()=>useStreamWalletWatchDonationReceived),
    "useStreamWalletWatchInitialized": (()=>useStreamWalletWatchInitialized),
    "useStreamWalletWatchOwnershipTransferred": (()=>useStreamWalletWatchOwnershipTransferred),
    "useStreamWalletWatchPlatformFeeCollected": (()=>useStreamWalletWatchPlatformFeeCollected),
    "useStreamWalletWatchRevenueWithdrawn": (()=>useStreamWalletWatchRevenueWithdrawn),
    "useStreamWalletWatchSubscriptionRecorded": (()=>useStreamWalletWatchSubscriptionRecorded),
    "useStreamWalletWatchUpgraded": (()=>useStreamWalletWatchUpgraded),
    "useStreamWalletWatchundefined": (()=>useStreamWalletWatchundefined),
    "useStreamWalletWriteDonate": (()=>useStreamWalletWriteDonate),
    "useStreamWalletWriteInitialize": (()=>useStreamWalletWriteInitialize),
    "useStreamWalletWriteRecordSubscription": (()=>useStreamWalletWriteRecordSubscription),
    "useStreamWalletWriteRenounceOwnership": (()=>useStreamWalletWriteRenounceOwnership),
    "useStreamWalletWriteTransferOwnership": (()=>useStreamWalletWriteTransferOwnership),
    "useStreamWalletWriteUpgradeToAndCall": (()=>useStreamWalletWriteUpgradeToAndCall),
    "useStreamWalletWriteWithdrawRevenue": (()=>useStreamWalletWriteWithdrawRevenue),
    "useStreamWalletWriteundefined": (()=>useStreamWalletWriteundefined)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.96.1_@tanstack+react-query@5.96.1_react@19.2.4__@ty_9cc1b734e49407b526111a54d0626853/node_modules/wagmi/dist/esm/hooks/codegen/createUseReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.96.1_@tanstack+react-query@5.96.1_react@19.2.4__@ty_9cc1b734e49407b526111a54d0626853/node_modules/wagmi/dist/esm/hooks/codegen/createUseWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.96.1_@tanstack+react-query@5.96.1_react@19.2.4__@ty_9cc1b734e49407b526111a54d0626853/node_modules/wagmi/dist/esm/hooks/codegen/createUseSimulateContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.96.1_@tanstack+react-query@5.96.1_react@19.2.4__@ty_9cc1b734e49407b526111a54d0626853/node_modules/wagmi/dist/esm/hooks/codegen/createUseWatchContractEvent.js [app-ssr] (ecmascript)");
;
const bettingMatchAbi = [
    {
        type: 'constructor',
        inputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'receive',
        stateMutability: 'payable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'ADMIN_ROLE',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'DEFAULT_ADMIN_ROLE',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'MARKET_BOTH_SCORE',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'MARKET_CORRECT_SCORE',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'MARKET_FIRST_SCORER',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'MARKET_GOALS_TOTAL',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'MARKET_HALFTIME',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'MARKET_WINNER',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'MAX_ODDS',
        outputs: [
            {
                name: '',
                internalType: 'uint32',
                type: 'uint32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'MIN_ODDS',
        outputs: [
            {
                name: '',
                internalType: 'uint32',
                type: 'uint32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'ODDS_PRECISION',
        outputs: [
            {
                name: '',
                internalType: 'uint32',
                type: 'uint32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'ODDS_SETTER_ROLE',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'PAUSER_ROLE',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'RESOLVER_ROLE',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'TREASURY_ROLE',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'UPGRADE_INTERFACE_VERSION',
        outputs: [
            {
                name: '',
                internalType: 'string',
                type: 'string'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketType',
                internalType: 'bytes32',
                type: 'bytes32'
            },
            {
                name: 'initialOdds',
                internalType: 'uint32',
                type: 'uint32'
            }
        ],
        name: 'addMarket',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketType',
                internalType: 'bytes32',
                type: 'bytes32'
            },
            {
                name: 'initialOdds',
                internalType: 'uint32',
                type: 'uint32'
            },
            {
                name: 'line',
                internalType: 'int16',
                type: 'int16'
            }
        ],
        name: 'addMarketWithLine',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'reason',
                internalType: 'string',
                type: 'string'
            }
        ],
        name: 'cancelMarket',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'betIndex',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'claim',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'claimAll',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'betIndex',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'claimRefund',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'closeMarket',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'emergencyPause',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'emergencyWithdraw',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: '',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'footballMarkets',
        outputs: [
            {
                name: 'marketType',
                internalType: 'bytes32',
                type: 'bytes32'
            },
            {
                name: 'line',
                internalType: 'int16',
                type: 'int16'
            },
            {
                name: 'maxSelections',
                internalType: 'uint8',
                type: 'uint8'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'user',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'betIndex',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'getBetDetails',
        outputs: [
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'selection',
                internalType: 'uint64',
                type: 'uint64'
            },
            {
                name: 'odds',
                internalType: 'uint32',
                type: 'uint32'
            },
            {
                name: 'timestamp',
                internalType: 'uint40',
                type: 'uint40'
            },
            {
                name: 'claimed',
                internalType: 'bool',
                type: 'bool'
            },
            {
                name: 'potentialPayout',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'getCurrentOdds',
        outputs: [
            {
                name: '',
                internalType: 'uint32',
                type: 'uint32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'getFootballMarket',
        outputs: [
            {
                name: 'marketTypeStr',
                internalType: 'string',
                type: 'string'
            },
            {
                name: 'line',
                internalType: 'int16',
                type: 'int16'
            },
            {
                name: 'maxSelections',
                internalType: 'uint8',
                type: 'uint8'
            },
            {
                name: 'state',
                internalType: 'enum BettingMatch.MarketState',
                type: 'uint8'
            },
            {
                name: 'currentOdds',
                internalType: 'uint32',
                type: 'uint32'
            },
            {
                name: 'result',
                internalType: 'uint64',
                type: 'uint64'
            },
            {
                name: 'totalPool',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'getMarketCore',
        outputs: [
            {
                name: '',
                internalType: 'struct BettingMatch.MarketCore',
                type: 'tuple',
                components: [
                    {
                        name: 'state',
                        internalType: 'enum BettingMatch.MarketState',
                        type: 'uint8'
                    },
                    {
                        name: 'result',
                        internalType: 'uint64',
                        type: 'uint64'
                    },
                    {
                        name: 'createdAt',
                        internalType: 'uint40',
                        type: 'uint40'
                    },
                    {
                        name: 'resolvedAt',
                        internalType: 'uint40',
                        type: 'uint40'
                    },
                    {
                        name: 'totalPool',
                        internalType: 'uint256',
                        type: 'uint256'
                    }
                ]
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'getMarketInfo',
        outputs: [
            {
                name: 'marketType',
                internalType: 'bytes32',
                type: 'bytes32'
            },
            {
                name: 'state',
                internalType: 'enum BettingMatch.MarketState',
                type: 'uint8'
            },
            {
                name: 'currentOdds',
                internalType: 'uint32',
                type: 'uint32'
            },
            {
                name: 'result',
                internalType: 'uint64',
                type: 'uint64'
            },
            {
                name: 'totalPool',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'getOddsHistory',
        outputs: [
            {
                name: '',
                internalType: 'uint32[]',
                type: 'uint32[]'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'role',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        name: 'getRoleAdmin',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'user',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'getUserBets',
        outputs: [
            {
                name: '',
                internalType: 'struct BettingMatch.Bet[]',
                type: 'tuple[]',
                components: [
                    {
                        name: 'amount',
                        internalType: 'uint256',
                        type: 'uint256'
                    },
                    {
                        name: 'selection',
                        internalType: 'uint64',
                        type: 'uint64'
                    },
                    {
                        name: 'oddsIndex',
                        internalType: 'uint16',
                        type: 'uint16'
                    },
                    {
                        name: 'timestamp',
                        internalType: 'uint40',
                        type: 'uint40'
                    },
                    {
                        name: 'claimed',
                        internalType: 'bool',
                        type: 'bool'
                    }
                ]
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'role',
                internalType: 'bytes32',
                type: 'bytes32'
            },
            {
                name: 'account',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'grantRole',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'role',
                internalType: 'bytes32',
                type: 'bytes32'
            },
            {
                name: 'account',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'hasRole',
        outputs: [
            {
                name: '',
                internalType: 'bool',
                type: 'bool'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_matchName',
                internalType: 'string',
                type: 'string'
            },
            {
                name: '_owner',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'marketCount',
        outputs: [
            {
                name: '',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'matchName',
        outputs: [
            {
                name: '',
                internalType: 'string',
                type: 'string'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'openMarket',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'owner',
        outputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'paused',
        outputs: [
            {
                name: '',
                internalType: 'bool',
                type: 'bool'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'selection',
                internalType: 'uint64',
                type: 'uint64'
            }
        ],
        name: 'placeBet',
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'role',
                internalType: 'bytes32',
                type: 'bytes32'
            },
            {
                name: 'callerConfirmation',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'renounceRole',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'result',
                internalType: 'uint64',
                type: 'uint64'
            }
        ],
        name: 'resolveMarket',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'role',
                internalType: 'bytes32',
                type: 'bytes32'
            },
            {
                name: 'account',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'revokeRole',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'newOdds',
                internalType: 'uint32',
                type: 'uint32'
            }
        ],
        name: 'setMarketOdds',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'sportType',
        outputs: [
            {
                name: '',
                internalType: 'string',
                type: 'string'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'interfaceId',
                internalType: 'bytes4',
                type: 'bytes4'
            }
        ],
        name: 'supportsInterface',
        outputs: [
            {
                name: '',
                internalType: 'bool',
                type: 'bool'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'suspendMarket',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'newOwner',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'unpause',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'data',
                internalType: 'bytes',
                type: 'bytes'
            }
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true
            },
            {
                name: 'user',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'betIndex',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            },
            {
                name: 'selection',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false
            },
            {
                name: 'odds',
                internalType: 'uint32',
                type: 'uint32',
                indexed: false
            },
            {
                name: 'oddsIndex',
                internalType: 'uint16',
                type: 'uint16',
                indexed: false
            }
        ],
        name: 'BetPlaced'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false
            }
        ],
        name: 'Initialized'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true
            },
            {
                name: 'reason',
                internalType: 'string',
                type: 'string',
                indexed: false
            }
        ],
        name: 'MarketCancelled'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true
            },
            {
                name: 'marketType',
                internalType: 'string',
                type: 'string',
                indexed: false
            },
            {
                name: 'initialOdds',
                internalType: 'uint32',
                type: 'uint32',
                indexed: false
            }
        ],
        name: 'MarketCreated'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true
            },
            {
                name: 'result',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false
            },
            {
                name: 'resolvedAt',
                internalType: 'uint40',
                type: 'uint40',
                indexed: false
            }
        ],
        name: 'MarketResolved'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true
            },
            {
                name: 'oldState',
                internalType: 'enum BettingMatch.MarketState',
                type: 'uint8',
                indexed: false
            },
            {
                name: 'newState',
                internalType: 'enum BettingMatch.MarketState',
                type: 'uint8',
                indexed: false
            }
        ],
        name: 'MarketStateChanged'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'name',
                internalType: 'string',
                type: 'string',
                indexed: true
            },
            {
                name: 'sportType',
                internalType: 'string',
                type: 'string',
                indexed: false
            },
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: true
            }
        ],
        name: 'MatchInitialized'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true
            },
            {
                name: 'oldOdds',
                internalType: 'uint32',
                type: 'uint32',
                indexed: false
            },
            {
                name: 'newOdds',
                internalType: 'uint32',
                type: 'uint32',
                indexed: false
            },
            {
                name: 'oddsIndex',
                internalType: 'uint16',
                type: 'uint16',
                indexed: false
            }
        ],
        name: 'OddsUpdated'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'previousOwner',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'newOwner',
                internalType: 'address',
                type: 'address',
                indexed: true
            }
        ],
        name: 'OwnershipTransferred'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'account',
                internalType: 'address',
                type: 'address',
                indexed: false
            }
        ],
        name: 'Paused'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true
            },
            {
                name: 'user',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'betIndex',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            }
        ],
        name: 'Payout'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true
            },
            {
                name: 'user',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'betIndex',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            }
        ],
        name: 'Refund'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'role',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true
            },
            {
                name: 'previousAdminRole',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true
            },
            {
                name: 'newAdminRole',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true
            }
        ],
        name: 'RoleAdminChanged'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'role',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true
            },
            {
                name: 'account',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'sender',
                internalType: 'address',
                type: 'address',
                indexed: true
            }
        ],
        name: 'RoleGranted'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'role',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true
            },
            {
                name: 'account',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'sender',
                internalType: 'address',
                type: 'address',
                indexed: true
            }
        ],
        name: 'RoleRevoked'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'account',
                internalType: 'address',
                type: 'address',
                indexed: false
            }
        ],
        name: 'Unpaused'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'implementation',
                internalType: 'address',
                type: 'address',
                indexed: true
            }
        ],
        name: 'Upgraded'
    },
    {
        type: 'error',
        inputs: [],
        name: 'AccessControlBadConfirmation'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'account',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'neededRole',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        name: 'AccessControlUnauthorizedAccount'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'target',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'AddressEmptyCode'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'user',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'betIndex',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'AlreadyClaimed'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'user',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'betIndex',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'BetLost'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'user',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'betIndex',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'BetNotFound'
    },
    {
        type: 'error',
        inputs: [],
        name: 'ContractNotPaused'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'implementation',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'ERC1967InvalidImplementation'
    },
    {
        type: 'error',
        inputs: [],
        name: 'ERC1967NonPayable'
    },
    {
        type: 'error',
        inputs: [],
        name: 'EnforcedPause'
    },
    {
        type: 'error',
        inputs: [],
        name: 'ExpectedPause'
    },
    {
        type: 'error',
        inputs: [],
        name: 'FailedCall'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'required',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'available',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'InsufficientContractBalance'
    },
    {
        type: 'error',
        inputs: [],
        name: 'InvalidInitialization'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'InvalidMarketId'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'current',
                internalType: 'enum BettingMatch.MarketState',
                type: 'uint8'
            },
            {
                name: 'required',
                internalType: 'enum BettingMatch.MarketState',
                type: 'uint8'
            }
        ],
        name: 'InvalidMarketState'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'marketType',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        name: 'InvalidMarketType'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'odds',
                internalType: 'uint32',
                type: 'uint32'
            },
            {
                name: 'min',
                internalType: 'uint32',
                type: 'uint32'
            },
            {
                name: 'max',
                internalType: 'uint32',
                type: 'uint32'
            }
        ],
        name: 'InvalidOddsValue'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'selection',
                internalType: 'uint64',
                type: 'uint64'
            },
            {
                name: 'maxAllowed',
                internalType: 'uint8',
                type: 'uint8'
            }
        ],
        name: 'InvalidSelection'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'MarketNotCancelled'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'MaxOddsEntriesReached'
    },
    {
        type: 'error',
        inputs: [],
        name: 'NotInitializing'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'marketId',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'OddsNotSet'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'OwnableInvalidOwner'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'account',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'OwnableUnauthorizedAccount'
    },
    {
        type: 'error',
        inputs: [],
        name: 'ReentrancyGuardReentrantCall'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'to',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'TransferFailed'
    },
    {
        type: 'error',
        inputs: [],
        name: 'UUPSUnauthorizedCallContext'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'slot',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        name: 'UUPSUnsupportedProxiableUUID'
    },
    {
        type: 'error',
        inputs: [],
        name: 'ZeroBetAmount'
    }
];
const bettingMatchFactoryAbi = [
    {
        type: 'constructor',
        inputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: '',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'allMatches',
        outputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_matchName',
                internalType: 'string',
                type: 'string'
            },
            {
                name: '_owner',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'createBasketballMatch',
        outputs: [
            {
                name: 'proxy',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: '_matchName',
                internalType: 'string',
                type: 'string'
            },
            {
                name: '_owner',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'createFootballMatch',
        outputs: [
            {
                name: 'proxy',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'getAllMatches',
        outputs: [
            {
                name: '',
                internalType: 'address[]',
                type: 'address[]'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'matchAddress',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'getSportType',
        outputs: [
            {
                name: '',
                internalType: 'enum BettingMatchFactory.SportType',
                type: 'uint8'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'matchSportType',
        outputs: [
            {
                name: '',
                internalType: 'enum BettingMatchFactory.SportType',
                type: 'uint8'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'owner',
        outputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'newOwner',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'proxy',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'sportType',
                internalType: 'enum BettingMatchFactory.SportType',
                type: 'uint8',
                indexed: false
            },
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: true
            }
        ],
        name: 'MatchCreated'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'previousOwner',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'newOwner',
                internalType: 'address',
                type: 'address',
                indexed: true
            }
        ],
        name: 'OwnershipTransferred'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'OwnableInvalidOwner'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'account',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'OwnableUnauthorizedAccount'
    }
];
const streamWalletAbi = [
    {
        type: 'constructor',
        inputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'receive',
        stateMutability: 'payable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'UPGRADE_INTERFACE_VERSION',
        outputs: [
            {
                name: '',
                internalType: 'string',
                type: 'string'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'availableBalance',
        outputs: [
            {
                name: '',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'message',
                internalType: 'string',
                type: 'string'
            }
        ],
        name: 'donate',
        outputs: [
            {
                name: 'platformFee',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'streamerAmount',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'factory',
        outputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'donor',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'getDonationAmount',
        outputs: [
            {
                name: '',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'user',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'getSubscription',
        outputs: [
            {
                name: '',
                internalType: 'struct StreamWallet.Subscription',
                type: 'tuple',
                components: [
                    {
                        name: 'amount',
                        internalType: 'uint256',
                        type: 'uint256'
                    },
                    {
                        name: 'startTime',
                        internalType: 'uint256',
                        type: 'uint256'
                    },
                    {
                        name: 'expiryTime',
                        internalType: 'uint256',
                        type: 'uint256'
                    },
                    {
                        name: 'active',
                        internalType: 'bool',
                        type: 'bool'
                    }
                ]
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'streamer_',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'treasury_',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'platformFeeBps_',
                internalType: 'uint16',
                type: 'uint16'
            }
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'user',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'isSubscribed',
        outputs: [
            {
                name: '',
                internalType: 'bool',
                type: 'bool'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'lifetimeDonations',
        outputs: [
            {
                name: '',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'owner',
        outputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'platformFeeBps',
        outputs: [
            {
                name: '',
                internalType: 'uint16',
                type: 'uint16'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'proxiableUUID',
        outputs: [
            {
                name: '',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'subscriber',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'duration',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'recordSubscription',
        outputs: [
            {
                name: 'platformFee',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'streamerAmount',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'streamer',
        outputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'subscriptions',
        outputs: [
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'startTime',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'expiryTime',
                internalType: 'uint256',
                type: 'uint256'
            },
            {
                name: 'active',
                internalType: 'bool',
                type: 'bool'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'totalRevenue',
        outputs: [
            {
                name: '',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'totalSubscribers',
        outputs: [
            {
                name: '',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'totalWithdrawn',
        outputs: [
            {
                name: '',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'newOwner',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'treasury',
        outputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'newImplementation',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'data',
                internalType: 'bytes',
                type: 'bytes'
            }
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'withdrawRevenue',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'donor',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            },
            {
                name: 'message',
                internalType: 'string',
                type: 'string',
                indexed: false
            },
            {
                name: 'platformFee',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            },
            {
                name: 'streamerAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            }
        ],
        name: 'DonationReceived'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'version',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false
            }
        ],
        name: 'Initialized'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'previousOwner',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'newOwner',
                internalType: 'address',
                type: 'address',
                indexed: true
            }
        ],
        name: 'OwnershipTransferred'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            },
            {
                name: 'treasury',
                internalType: 'address',
                type: 'address',
                indexed: true
            }
        ],
        name: 'PlatformFeeCollected'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'streamer',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            }
        ],
        name: 'RevenueWithdrawn'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'subscriber',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            },
            {
                name: 'duration',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            },
            {
                name: 'expiryTime',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            }
        ],
        name: 'SubscriptionRecorded'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'implementation',
                internalType: 'address',
                type: 'address',
                indexed: true
            }
        ],
        name: 'Upgraded'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'target',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'AddressEmptyCode'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'implementation',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'ERC1967InvalidImplementation'
    },
    {
        type: 'error',
        inputs: [],
        name: 'ERC1967NonPayable'
    },
    {
        type: 'error',
        inputs: [],
        name: 'FailedCall'
    },
    {
        type: 'error',
        inputs: [],
        name: 'InsufficientBalance'
    },
    {
        type: 'error',
        inputs: [],
        name: 'InvalidAmount'
    },
    {
        type: 'error',
        inputs: [],
        name: 'InvalidDuration'
    },
    {
        type: 'error',
        inputs: [],
        name: 'InvalidInitialization'
    },
    {
        type: 'error',
        inputs: [],
        name: 'NotInitializing'
    },
    {
        type: 'error',
        inputs: [],
        name: 'OnlyFactory'
    },
    {
        type: 'error',
        inputs: [],
        name: 'OnlyStreamer'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'OwnableInvalidOwner'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'account',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'OwnableUnauthorizedAccount'
    },
    {
        type: 'error',
        inputs: [],
        name: 'ReentrancyGuardReentrantCall'
    },
    {
        type: 'error',
        inputs: [],
        name: 'UUPSUnauthorizedCallContext'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'slot',
                internalType: 'bytes32',
                type: 'bytes32'
            }
        ],
        name: 'UUPSUnsupportedProxiableUUID'
    }
];
const streamWalletFactoryAbi = [
    {
        type: 'constructor',
        inputs: [
            {
                name: 'initialOwner',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'treasury_',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'defaultPlatformFeeBps_',
                internalType: 'uint16',
                type: 'uint16'
            }
        ],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'defaultPlatformFeeBps',
        outputs: [
            {
                name: '',
                internalType: 'uint16',
                type: 'uint16'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'streamer',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'deployWalletFor',
        outputs: [
            {
                name: 'wallet',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'streamer',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'message',
                internalType: 'string',
                type: 'string'
            }
        ],
        name: 'donateToStream',
        outputs: [
            {
                name: 'wallet',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'streamer',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'getWallet',
        outputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'streamer',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'hasWallet',
        outputs: [
            {
                name: '',
                internalType: 'bool',
                type: 'bool'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'implementation',
        outputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'owner',
        outputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'newFeeBps',
                internalType: 'uint16',
                type: 'uint16'
            }
        ],
        name: 'setPlatformFee',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'newTreasury',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'setTreasury',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'streamerWallets',
        outputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'streamer',
                internalType: 'address',
                type: 'address'
            },
            {
                name: 'duration',
                internalType: 'uint256',
                type: 'uint256'
            }
        ],
        name: 'subscribeToStream',
        outputs: [
            {
                name: 'wallet',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'newOwner',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        inputs: [],
        name: 'treasury',
        outputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'streamer',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'donor',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            },
            {
                name: 'message',
                internalType: 'string',
                type: 'string',
                indexed: false
            }
        ],
        name: 'DonationProcessed'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'previousOwner',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'newOwner',
                internalType: 'address',
                type: 'address',
                indexed: true
            }
        ],
        name: 'OwnershipTransferred'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'oldFeeBps',
                internalType: 'uint16',
                type: 'uint16',
                indexed: false
            },
            {
                name: 'newFeeBps',
                internalType: 'uint16',
                type: 'uint16',
                indexed: false
            }
        ],
        name: 'PlatformFeeUpdated'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'streamer',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'wallet',
                internalType: 'address',
                type: 'address',
                indexed: true
            }
        ],
        name: 'StreamWalletCreated'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'streamer',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'subscriber',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false
            }
        ],
        name: 'SubscriptionProcessed'
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'oldTreasury',
                internalType: 'address',
                type: 'address',
                indexed: true
            },
            {
                name: 'newTreasury',
                internalType: 'address',
                type: 'address',
                indexed: true
            }
        ],
        name: 'TreasuryUpdated'
    },
    {
        type: 'error',
        inputs: [],
        name: 'InvalidAddress'
    },
    {
        type: 'error',
        inputs: [],
        name: 'InvalidAmount'
    },
    {
        type: 'error',
        inputs: [],
        name: 'InvalidDuration'
    },
    {
        type: 'error',
        inputs: [],
        name: 'InvalidFeeBps'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'OwnableInvalidOwner'
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'account',
                internalType: 'address',
                type: 'address'
            }
        ],
        name: 'OwnableUnauthorizedAccount'
    },
    {
        type: 'error',
        inputs: [],
        name: 'ReentrancyGuardReentrantCall'
    },
    {
        type: 'error',
        inputs: [],
        name: 'WalletAlreadyExists'
    }
];
const useBettingMatchReadundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi
});
const useBettingMatchReadAdminRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'ADMIN_ROLE'
});
const useBettingMatchReadDefaultAdminRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'DEFAULT_ADMIN_ROLE'
});
const useBettingMatchReadMarketBothScore = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'MARKET_BOTH_SCORE'
});
const useBettingMatchReadMarketCorrectScore = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'MARKET_CORRECT_SCORE'
});
const useBettingMatchReadMarketFirstScorer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'MARKET_FIRST_SCORER'
});
const useBettingMatchReadMarketGoalsTotal = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'MARKET_GOALS_TOTAL'
});
const useBettingMatchReadMarketHalftime = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'MARKET_HALFTIME'
});
const useBettingMatchReadMarketWinner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'MARKET_WINNER'
});
const useBettingMatchReadMaxOdds = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'MAX_ODDS'
});
const useBettingMatchReadMinOdds = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'MIN_ODDS'
});
const useBettingMatchReadOddsPrecision = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'ODDS_PRECISION'
});
const useBettingMatchReadOddsSetterRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'ODDS_SETTER_ROLE'
});
const useBettingMatchReadPauserRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'PAUSER_ROLE'
});
const useBettingMatchReadResolverRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'RESOLVER_ROLE'
});
const useBettingMatchReadTreasuryRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'TREASURY_ROLE'
});
const useBettingMatchReadUpgradeInterfaceVersion = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'UPGRADE_INTERFACE_VERSION'
});
const useBettingMatchReadFootballMarkets = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'footballMarkets'
});
const useBettingMatchReadGetBetDetails = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'getBetDetails'
});
const useBettingMatchReadGetCurrentOdds = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'getCurrentOdds'
});
const useBettingMatchReadGetFootballMarket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'getFootballMarket'
});
const useBettingMatchReadGetMarketCore = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'getMarketCore'
});
const useBettingMatchReadGetMarketInfo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'getMarketInfo'
});
const useBettingMatchReadGetOddsHistory = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'getOddsHistory'
});
const useBettingMatchReadGetRoleAdmin = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'getRoleAdmin'
});
const useBettingMatchReadGetUserBets = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'getUserBets'
});
const useBettingMatchReadHasRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'hasRole'
});
const useBettingMatchReadMarketCount = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'marketCount'
});
const useBettingMatchReadMatchName = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'matchName'
});
const useBettingMatchReadOwner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'owner'
});
const useBettingMatchReadPaused = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'paused'
});
const useBettingMatchReadProxiableUuid = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'proxiableUUID'
});
const useBettingMatchReadSportType = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'sportType'
});
const useBettingMatchReadSupportsInterface = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchAbi,
    functionName: 'supportsInterface'
});
const useBettingMatchWriteundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi
});
const useBettingMatchWriteAddMarket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'addMarket'
});
const useBettingMatchWriteAddMarketWithLine = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'addMarketWithLine'
});
const useBettingMatchWriteCancelMarket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'cancelMarket'
});
const useBettingMatchWriteClaim = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'claim'
});
const useBettingMatchWriteClaimAll = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'claimAll'
});
const useBettingMatchWriteClaimRefund = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'claimRefund'
});
const useBettingMatchWriteCloseMarket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'closeMarket'
});
const useBettingMatchWriteEmergencyPause = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'emergencyPause'
});
const useBettingMatchWriteEmergencyWithdraw = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'emergencyWithdraw'
});
const useBettingMatchWriteGrantRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'grantRole'
});
const useBettingMatchWriteInitialize = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'initialize'
});
const useBettingMatchWriteOpenMarket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'openMarket'
});
const useBettingMatchWritePlaceBet = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'placeBet'
});
const useBettingMatchWriteRenounceOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'renounceOwnership'
});
const useBettingMatchWriteRenounceRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'renounceRole'
});
const useBettingMatchWriteResolveMarket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'resolveMarket'
});
const useBettingMatchWriteRevokeRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'revokeRole'
});
const useBettingMatchWriteSetMarketOdds = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'setMarketOdds'
});
const useBettingMatchWriteSuspendMarket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'suspendMarket'
});
const useBettingMatchWriteTransferOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'transferOwnership'
});
const useBettingMatchWriteUnpause = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'unpause'
});
const useBettingMatchWriteUpgradeToAndCall = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchAbi,
    functionName: 'upgradeToAndCall'
});
const useBettingMatchSimulateundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi
});
const useBettingMatchSimulateAddMarket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'addMarket'
});
const useBettingMatchSimulateAddMarketWithLine = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'addMarketWithLine'
});
const useBettingMatchSimulateCancelMarket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'cancelMarket'
});
const useBettingMatchSimulateClaim = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'claim'
});
const useBettingMatchSimulateClaimAll = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'claimAll'
});
const useBettingMatchSimulateClaimRefund = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'claimRefund'
});
const useBettingMatchSimulateCloseMarket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'closeMarket'
});
const useBettingMatchSimulateEmergencyPause = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'emergencyPause'
});
const useBettingMatchSimulateEmergencyWithdraw = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'emergencyWithdraw'
});
const useBettingMatchSimulateGrantRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'grantRole'
});
const useBettingMatchSimulateInitialize = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'initialize'
});
const useBettingMatchSimulateOpenMarket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'openMarket'
});
const useBettingMatchSimulatePlaceBet = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'placeBet'
});
const useBettingMatchSimulateRenounceOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'renounceOwnership'
});
const useBettingMatchSimulateRenounceRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'renounceRole'
});
const useBettingMatchSimulateResolveMarket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'resolveMarket'
});
const useBettingMatchSimulateRevokeRole = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'revokeRole'
});
const useBettingMatchSimulateSetMarketOdds = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'setMarketOdds'
});
const useBettingMatchSimulateSuspendMarket = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'suspendMarket'
});
const useBettingMatchSimulateTransferOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'transferOwnership'
});
const useBettingMatchSimulateUnpause = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'unpause'
});
const useBettingMatchSimulateUpgradeToAndCall = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchAbi,
    functionName: 'upgradeToAndCall'
});
const useBettingMatchWatchundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi
});
const useBettingMatchWatchBetPlaced = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'BetPlaced'
});
const useBettingMatchWatchInitialized = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'Initialized'
});
const useBettingMatchWatchMarketCancelled = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'MarketCancelled'
});
const useBettingMatchWatchMarketCreated = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'MarketCreated'
});
const useBettingMatchWatchMarketResolved = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'MarketResolved'
});
const useBettingMatchWatchMarketStateChanged = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'MarketStateChanged'
});
const useBettingMatchWatchMatchInitialized = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'MatchInitialized'
});
const useBettingMatchWatchOddsUpdated = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'OddsUpdated'
});
const useBettingMatchWatchOwnershipTransferred = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'OwnershipTransferred'
});
const useBettingMatchWatchPaused = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'Paused'
});
const useBettingMatchWatchPayout = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'Payout'
});
const useBettingMatchWatchRefund = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'Refund'
});
const useBettingMatchWatchRoleAdminChanged = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'RoleAdminChanged'
});
const useBettingMatchWatchRoleGranted = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'RoleGranted'
});
const useBettingMatchWatchRoleRevoked = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'RoleRevoked'
});
const useBettingMatchWatchUnpaused = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'Unpaused'
});
const useBettingMatchWatchUpgraded = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchAbi,
    eventName: 'Upgraded'
});
const useBettingMatchFactoryReadundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchFactoryAbi
});
const useBettingMatchFactoryReadAllMatches = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchFactoryAbi,
    functionName: 'allMatches'
});
const useBettingMatchFactoryReadGetAllMatches = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchFactoryAbi,
    functionName: 'getAllMatches'
});
const useBettingMatchFactoryReadGetSportType = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchFactoryAbi,
    functionName: 'getSportType'
});
const useBettingMatchFactoryReadMatchSportType = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchFactoryAbi,
    functionName: 'matchSportType'
});
const useBettingMatchFactoryReadOwner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: bettingMatchFactoryAbi,
    functionName: 'owner'
});
const useBettingMatchFactoryWriteundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchFactoryAbi
});
const useBettingMatchFactoryWriteCreateBasketballMatch = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchFactoryAbi,
    functionName: 'createBasketballMatch'
});
const useBettingMatchFactoryWriteCreateFootballMatch = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchFactoryAbi,
    functionName: 'createFootballMatch'
});
const useBettingMatchFactoryWriteRenounceOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchFactoryAbi,
    functionName: 'renounceOwnership'
});
const useBettingMatchFactoryWriteTransferOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: bettingMatchFactoryAbi,
    functionName: 'transferOwnership'
});
const useBettingMatchFactorySimulateundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchFactoryAbi
});
const useBettingMatchFactorySimulateCreateBasketballMatch = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchFactoryAbi,
    functionName: 'createBasketballMatch'
});
const useBettingMatchFactorySimulateCreateFootballMatch = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchFactoryAbi,
    functionName: 'createFootballMatch'
});
const useBettingMatchFactorySimulateRenounceOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchFactoryAbi,
    functionName: 'renounceOwnership'
});
const useBettingMatchFactorySimulateTransferOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: bettingMatchFactoryAbi,
    functionName: 'transferOwnership'
});
const useBettingMatchFactoryWatchundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchFactoryAbi
});
const useBettingMatchFactoryWatchMatchCreated = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchFactoryAbi,
    eventName: 'MatchCreated'
});
const useBettingMatchFactoryWatchOwnershipTransferred = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: bettingMatchFactoryAbi,
    eventName: 'OwnershipTransferred'
});
const useStreamWalletReadundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi
});
const useStreamWalletReadUpgradeInterfaceVersion = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'UPGRADE_INTERFACE_VERSION'
});
const useStreamWalletReadAvailableBalance = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'availableBalance'
});
const useStreamWalletReadFactory = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'factory'
});
const useStreamWalletReadGetDonationAmount = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'getDonationAmount'
});
const useStreamWalletReadGetSubscription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'getSubscription'
});
const useStreamWalletReadIsSubscribed = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'isSubscribed'
});
const useStreamWalletReadLifetimeDonations = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'lifetimeDonations'
});
const useStreamWalletReadOwner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'owner'
});
const useStreamWalletReadPlatformFeeBps = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'platformFeeBps'
});
const useStreamWalletReadProxiableUuid = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'proxiableUUID'
});
const useStreamWalletReadStreamer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'streamer'
});
const useStreamWalletReadSubscriptions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'subscriptions'
});
const useStreamWalletReadTotalRevenue = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'totalRevenue'
});
const useStreamWalletReadTotalSubscribers = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'totalSubscribers'
});
const useStreamWalletReadTotalWithdrawn = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'totalWithdrawn'
});
const useStreamWalletReadTreasury = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletAbi,
    functionName: 'treasury'
});
const useStreamWalletWriteundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletAbi
});
const useStreamWalletWriteDonate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletAbi,
    functionName: 'donate'
});
const useStreamWalletWriteInitialize = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletAbi,
    functionName: 'initialize'
});
const useStreamWalletWriteRecordSubscription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletAbi,
    functionName: 'recordSubscription'
});
const useStreamWalletWriteRenounceOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletAbi,
    functionName: 'renounceOwnership'
});
const useStreamWalletWriteTransferOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletAbi,
    functionName: 'transferOwnership'
});
const useStreamWalletWriteUpgradeToAndCall = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletAbi,
    functionName: 'upgradeToAndCall'
});
const useStreamWalletWriteWithdrawRevenue = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletAbi,
    functionName: 'withdrawRevenue'
});
const useStreamWalletSimulateundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletAbi
});
const useStreamWalletSimulateDonate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletAbi,
    functionName: 'donate'
});
const useStreamWalletSimulateInitialize = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletAbi,
    functionName: 'initialize'
});
const useStreamWalletSimulateRecordSubscription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletAbi,
    functionName: 'recordSubscription'
});
const useStreamWalletSimulateRenounceOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletAbi,
    functionName: 'renounceOwnership'
});
const useStreamWalletSimulateTransferOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletAbi,
    functionName: 'transferOwnership'
});
const useStreamWalletSimulateUpgradeToAndCall = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletAbi,
    functionName: 'upgradeToAndCall'
});
const useStreamWalletSimulateWithdrawRevenue = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletAbi,
    functionName: 'withdrawRevenue'
});
const useStreamWalletWatchundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletAbi
});
const useStreamWalletWatchDonationReceived = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletAbi,
    eventName: 'DonationReceived'
});
const useStreamWalletWatchInitialized = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletAbi,
    eventName: 'Initialized'
});
const useStreamWalletWatchOwnershipTransferred = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletAbi,
    eventName: 'OwnershipTransferred'
});
const useStreamWalletWatchPlatformFeeCollected = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletAbi,
    eventName: 'PlatformFeeCollected'
});
const useStreamWalletWatchRevenueWithdrawn = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletAbi,
    eventName: 'RevenueWithdrawn'
});
const useStreamWalletWatchSubscriptionRecorded = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletAbi,
    eventName: 'SubscriptionRecorded'
});
const useStreamWalletWatchUpgraded = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletAbi,
    eventName: 'Upgraded'
});
const useStreamWalletFactoryReadundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletFactoryAbi
});
const useStreamWalletFactoryReadDefaultPlatformFeeBps = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'defaultPlatformFeeBps'
});
const useStreamWalletFactoryReadGetWallet = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'getWallet'
});
const useStreamWalletFactoryReadHasWallet = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'hasWallet'
});
const useStreamWalletFactoryReadImplementation = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'implementation'
});
const useStreamWalletFactoryReadOwner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'owner'
});
const useStreamWalletFactoryReadStreamerWallets = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'streamerWallets'
});
const useStreamWalletFactoryReadTreasury = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseReadContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'treasury'
});
const useStreamWalletFactoryWriteundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletFactoryAbi
});
const useStreamWalletFactoryWriteDeployWalletFor = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'deployWalletFor'
});
const useStreamWalletFactoryWriteDonateToStream = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'donateToStream'
});
const useStreamWalletFactoryWriteRenounceOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'renounceOwnership'
});
const useStreamWalletFactoryWriteSetPlatformFee = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'setPlatformFee'
});
const useStreamWalletFactoryWriteSetTreasury = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'setTreasury'
});
const useStreamWalletFactoryWriteSubscribeToStream = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'subscribeToStream'
});
const useStreamWalletFactoryWriteTransferOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWriteContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'transferOwnership'
});
const useStreamWalletFactorySimulateundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletFactoryAbi
});
const useStreamWalletFactorySimulateDeployWalletFor = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'deployWalletFor'
});
const useStreamWalletFactorySimulateDonateToStream = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'donateToStream'
});
const useStreamWalletFactorySimulateRenounceOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'renounceOwnership'
});
const useStreamWalletFactorySimulateSetPlatformFee = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'setPlatformFee'
});
const useStreamWalletFactorySimulateSetTreasury = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'setTreasury'
});
const useStreamWalletFactorySimulateSubscribeToStream = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'subscribeToStream'
});
const useStreamWalletFactorySimulateTransferOwnership = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseSimulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseSimulateContract"])({
    abi: streamWalletFactoryAbi,
    functionName: 'transferOwnership'
});
const useStreamWalletFactoryWatchundefined = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletFactoryAbi
});
const useStreamWalletFactoryWatchDonationProcessed = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletFactoryAbi,
    eventName: 'DonationProcessed'
});
const useStreamWalletFactoryWatchOwnershipTransferred = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletFactoryAbi,
    eventName: 'OwnershipTransferred'
});
const useStreamWalletFactoryWatchPlatformFeeUpdated = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletFactoryAbi,
    eventName: 'PlatformFeeUpdated'
});
const useStreamWalletFactoryWatchStreamWalletCreated = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletFactoryAbi,
    eventName: 'StreamWalletCreated'
});
const useStreamWalletFactoryWatchSubscriptionProcessed = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletFactoryAbi,
    eventName: 'SubscriptionProcessed'
});
const useStreamWalletFactoryWatchTreasuryUpdated = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$codegen$2f$createUseWatchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUseWatchContractEvent"])({
    abi: streamWalletFactoryAbi,
    eventName: 'TreasuryUpdated'
});
}}),
"[project]/apps/frontend/hooks/useBettingMatch.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Hook for user interactions with a specific BettingMatch (FootballMatch) contract V2
 * Used to place bets, claim winnings, and view match information
 */ __turbopack_context__.s({
    "MarketState": (()=>MarketState),
    "useBettingMatch": (()=>useBettingMatch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/contracts/generated.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.96.1_@tanstack+react-query@5.96.1_react@19.2.4__@ty_9cc1b734e49407b526111a54d0626853/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/unit/parseEther.js [app-ssr] (ecmascript)");
;
;
;
;
var MarketState = /*#__PURE__*/ function(MarketState) {
    MarketState[MarketState["Inactive"] = 0] = "Inactive";
    MarketState[MarketState["Open"] = 1] = "Open";
    MarketState[MarketState["Suspended"] = 2] = "Suspended";
    MarketState[MarketState["Closed"] = 3] = "Closed";
    MarketState[MarketState["Resolved"] = 4] = "Resolved";
    MarketState[MarketState["Cancelled"] = 5] = "Cancelled";
    return MarketState;
}({});
function useBettingMatch(matchAddress, userAddress, marketId = 0 // Default to Winner market
) {
    // ============================================
    // Write Hooks - Place Bet
    // ============================================
    const { writeContract: writePlaceBet, data: betTxHash, isPending: isBetPending, error: betWriteError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBettingMatchWritePlaceBet"])();
    const { isLoading: isBetConfirming, isSuccess: isBetSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: betTxHash
    });
    // ============================================
    // Write Hooks - Claim Winnings
    // ============================================
    const { writeContract: writeClaim, data: claimTxHash, isPending: isClaimPending, error: claimWriteError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBettingMatchWriteClaim"])();
    const { isLoading: isClaimConfirming, isSuccess: isClaimSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: claimTxHash
    });
    // ============================================
    // Write Hooks - Claim All
    // ============================================
    const { writeContract: writeClaimAll, data: claimAllTxHash, isPending: isClaimAllPending, error: claimAllWriteError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBettingMatchWriteClaimAll"])();
    const { isLoading: isClaimAllConfirming, isSuccess: isClaimAllSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: claimAllTxHash
    });
    // ============================================
    // Write Hooks - Claim Refund
    // ============================================
    const { writeContract: writeRefund, data: refundTxHash, isPending: isRefundPending, error: refundWriteError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBettingMatchWriteClaimRefund"])();
    const { isLoading: isRefundConfirming, isSuccess: isRefundSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: refundTxHash
    });
    // ============================================
    // Read Hooks - Match Info
    // ============================================
    const { data: matchNameData, isLoading: isLoadingMatchName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBettingMatchReadMatchName"])({
        address: matchAddress
    });
    const { data: marketCountData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBettingMatchReadMarketCount"])({
        address: matchAddress
    });
    const { data: isPausedData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBettingMatchReadPaused"])({
        address: matchAddress
    });
    const { data: marketData, refetch: refetchMarket } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBettingMatchReadGetFootballMarket"])({
        address: matchAddress,
        args: [
            BigInt(marketId)
        ]
    });
    // ============================================
    // Read Hooks - User Bets
    // ============================================
    const { data: userBetsData, refetch: refetchUserBet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBettingMatchReadGetUserBets"])({
        address: matchAddress,
        args: userAddress ? [
            BigInt(marketId),
            userAddress
        ] : undefined,
        query: {
            enabled: !!userAddress
        }
    });
    // ============================================
    // Write Functions
    // ============================================
    const placeBet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((marketId, selection, amountInCHZ)=>{
        if (!writePlaceBet) {
            console.error('writePlaceBet is not available');
            return;
        }
        const amountWei = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseEther"])(amountInCHZ);
        writePlaceBet({
            address: matchAddress,
            args: [
                BigInt(marketId),
                BigInt(selection)
            ],
            value: amountWei
        });
    }, [
        writePlaceBet,
        matchAddress
    ]);
    const claim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((marketId, betIndex)=>{
        if (!writeClaim) {
            console.error('writeClaim is not available');
            return;
        }
        writeClaim({
            address: matchAddress,
            args: [
                BigInt(marketId),
                BigInt(betIndex)
            ]
        });
    }, [
        writeClaim,
        matchAddress
    ]);
    const claimAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((marketId)=>{
        if (!writeClaimAll) {
            console.error('writeClaimAll is not available');
            return;
        }
        writeClaimAll({
            address: matchAddress,
            args: [
                BigInt(marketId)
            ]
        });
    }, [
        writeClaimAll,
        matchAddress
    ]);
    const claimRefund = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((marketId, betIndex)=>{
        if (!writeRefund) {
            console.error('writeRefund is not available');
            return;
        }
        writeRefund({
            address: matchAddress,
            args: [
                BigInt(marketId),
                BigInt(betIndex)
            ]
        });
    }, [
        writeRefund,
        matchAddress
    ]);
    // ============================================
    // Helper Functions
    // ============================================
    const getMarket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((marketId)=>{
        if (!marketData) return undefined;
        // getFootballMarket returns: marketTypeStr, line, maxSelections, state, currentOdds, result, totalPool
        return {
            marketType: marketData[0],
            odds: BigInt(marketData[4]),
            state: marketData[3],
            result: BigInt(marketData[5])
        };
    }, [
        marketData
    ]);
    const getUserBets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((_marketId, _userAddress)=>{
        if (!userBetsData) return undefined;
        const bets = userBetsData;
        return [
            ...bets
        ].map((bet, index)=>({
                amount: bet.amount,
                selection: bet.selection,
                claimed: bet.claimed,
                betIndex: index
            }));
    }, [
        userBetsData
    ]);
    const getUserBet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((marketId, userAddress)=>{
        const bets = getUserBets(marketId, userAddress);
        if (!bets || bets.length === 0) return undefined;
        // Return first unclaimed bet for backward compatibility, or first bet
        const firstUnclaimed = bets.find((b)=>!b.claimed);
        const bet = firstUnclaimed ?? bets[0];
        return {
            amount: bet.amount,
            selection: bet.selection,
            claimed: bet.claimed
        };
    }, [
        getUserBets
    ]);
    // ============================================
    // Auto-refetch after successful transactions
    // ============================================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isBetSuccess || isClaimSuccess || isClaimAllSuccess || isRefundSuccess) {
            refetchMarket();
            refetchUserBet();
        }
    }, [
        isBetSuccess,
        isClaimSuccess,
        isClaimAllSuccess,
        isRefundSuccess,
        refetchMarket,
        refetchUserBet
    ]);
    // ============================================
    // Return Hook Data
    // ============================================
    return {
        // Write functions
        placeBet,
        claim,
        claimAll,
        claimRefund,
        // Read functions - Market data
        getMarket,
        marketCount: marketCountData ? Number(marketCountData) : undefined,
        matchName: matchNameData,
        isPaused: isPausedData,
        // Read functions - User data
        getUserBet,
        getUserBets,
        // States
        betState: {
            isPending: isBetPending,
            isConfirming: isBetConfirming,
            isSuccess: isBetSuccess,
            error: betWriteError,
            txHash: betTxHash
        },
        claimState: {
            isPending: isClaimPending,
            isConfirming: isClaimConfirming,
            isSuccess: isClaimSuccess,
            error: claimWriteError,
            txHash: claimTxHash
        },
        claimAllState: {
            isPending: isClaimAllPending,
            isConfirming: isClaimAllConfirming,
            isSuccess: isClaimAllSuccess,
            error: claimAllWriteError,
            txHash: claimAllTxHash
        },
        refundState: {
            isPending: isRefundPending,
            isConfirming: isRefundConfirming,
            isSuccess: isRefundSuccess,
            error: refundWriteError,
            txHash: refundTxHash
        },
        // Loading states
        isLoadingMatchInfo: isLoadingMatchName,
        // Refetch functions
        refetchMarket,
        refetchUserBet
    };
}
}}),
"[project]/apps/frontend/hooks/useBettingMatchFactory.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Hook for admin actions on BettingMatchFactory contract
 * Used to create new match contracts (Football or Basketball)
 */ __turbopack_context__.s({
    "useBettingMatchFactory": (()=>useBettingMatchFactory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/contracts/generated.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.96.1_@tanstack+react-query@5.96.1_react@19.2.4__@ty_9cc1b734e49407b526111a54d0626853/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-ssr] (ecmascript)");
;
;
;
function useBettingMatchFactory(factoryAddress) {
    // ============================================
    // Write Hooks - Football Match Creation
    // ============================================
    const { writeContract: writeCreateFootballMatch, data: footballTxHash, isPending: isFootballPending, error: footballWriteError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBettingMatchFactoryWriteCreateFootballMatch"])();
    const { isLoading: isFootballConfirming, isSuccess: isFootballSuccess, data: footballReceipt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: footballTxHash
    });
    // ============================================
    // Write Hooks - Basketball Match Creation
    // ============================================
    const { writeContract: writeCreateBasketballMatch, data: basketballTxHash, isPending: isBasketballPending, error: basketballWriteError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBettingMatchFactoryWriteCreateBasketballMatch"])();
    const { isLoading: isBasketballConfirming, isSuccess: isBasketballSuccess, data: basketballReceipt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: basketballTxHash
    });
    // ============================================
    // Read Hooks
    // ============================================
    const { data: allMatches, isLoading: isLoadingMatches, isRefetching: isRefetchingMatches, refetch: refetchMatches } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBettingMatchFactoryReadGetAllMatches"])({
        address: factoryAddress
    });
    const { data: sportTypeData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBettingMatchFactoryReadGetSportType"])({
        address: factoryAddress,
        args: allMatches && allMatches.length > 0 ? [
            allMatches[0]
        ] : undefined
    });
    // ============================================
    // Write Functions
    // ============================================
    const createFootballMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((matchName, owner)=>{
        if (!writeCreateFootballMatch) {
            console.error('writeCreateFootballMatch is not available');
            return;
        }
        writeCreateFootballMatch({
            address: factoryAddress,
            args: [
                matchName,
                owner
            ]
        });
    }, [
        writeCreateFootballMatch,
        factoryAddress
    ]);
    const createBasketballMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((matchName, owner)=>{
        if (!writeCreateBasketballMatch) {
            console.error('writeCreateBasketballMatch is not available');
            return;
        }
        writeCreateBasketballMatch({
            address: factoryAddress,
            args: [
                matchName,
                owner
            ]
        });
    }, [
        writeCreateBasketballMatch,
        factoryAddress
    ]);
    // Helper to get sport type for a specific match
    const getSportType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((matchAddress)=>{
        // This would require a separate read call, simplified here
        return sportTypeData;
    }, [
        sportTypeData
    ]);
    // ============================================
    // Return Hook Data
    // ============================================
    return {
        // Write functions
        createFootballMatch,
        createBasketballMatch,
        // Read data
        allMatches,
        getSportType,
        // States
        footballCreation: {
            isPending: isFootballPending,
            isConfirming: isFootballConfirming,
            isSuccess: isFootballSuccess,
            error: footballWriteError,
            txHash: footballTxHash,
            matchAddress: footballReceipt?.logs?.[0]?.address
        },
        basketballCreation: {
            isPending: isBasketballPending,
            isConfirming: isBasketballConfirming,
            isSuccess: isBasketballSuccess,
            error: basketballWriteError,
            txHash: basketballTxHash,
            matchAddress: basketballReceipt?.logs?.[0]?.address
        },
        // Loading states
        isLoadingMatches,
        isRefetchingMatches,
        // Refetch
        refetchMatches
    };
}
}}),
"[project]/apps/frontend/services/api.service.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @notice Legacy API service - baseURL only
 * @dev Used by stream services (stream-client, stream-viewer)
 * @dev For new code, use lib/api/client.ts instead
 */ __turbopack_context__.s({
    "ApiService": (()=>ApiService)
});
class ApiService {
    static baseURL = ("TURBOPACK compile-time value", "http://localhost:3001") || 'http://localhost:3000';
}
}}),
"[project]/apps/frontend/services/stream-client.service.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StreamClientService": (()=>StreamClientService),
    "streamClientService": (()=>streamClientService)
});
'use client';
class StreamClientService {
    peerConnection = null;
    animationFrameId = null;
    canvas = null;
    ctx = null;
    screenVideo = null;
    cameraVideo = null;
    overlayPosition = {
        x: 20,
        y: 20
    };
    overlaySize = {
        width: 200,
        height: 150
    };
    overlayVisible = true;
    width = 1280;
    height = 720;
    fps = 25;
    /** WHIP ingest base URL — mediamtx WebRTC server (port 8889, separate from HLS on 8888) */ get mediamtxWhipUrl() {
        return ("TURBOPACK compile-time value", "http://localhost:8889") ?? 'http://localhost:8889';
    }
    // ── Public API ───────────────────
    async startStream(streamKey, mediaStream) {
        await this.publishViaWhip(streamKey, this.buildSimpleCanvasStream(mediaStream));
    }
    async startStreamWithOverlay(streamKey, screenStream, cameraStream, cameraPosition, cameraSize, cameraVisible, _containerWidth, _containerHeight, microphoneStream) {
        this.overlayPosition = cameraPosition;
        this.overlaySize = cameraSize;
        this.overlayVisible = cameraVisible;
        await this.publishViaWhip(streamKey, this.buildOverlayCanvasStream(screenStream, cameraStream, microphoneStream));
    }
    stopStream() {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        this.peerConnection?.close();
        this.peerConnection = null;
        this.canvas = null;
        this.ctx = null;
        this.screenVideo = null;
        this.cameraVideo = null;
    }
    updateOverlaySettings(position, size, visible, _containerWidth, _containerHeight) {
        this.overlayPosition = position;
        this.overlaySize = size;
        this.overlayVisible = visible;
    }
    // ── Private helpers ───────────────────────────────────────────────────────
    /**
   * Renders a single MediaStream onto a canvas and captures it.
   * The browser's GPU encoder handles H.264 compression.
   */ buildSimpleCanvasStream(mediaStream) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d', {
            willReadFrequently: false
        });
        const video = document.createElement('video');
        video.srcObject = mediaStream;
        video.muted = true;
        video.autoplay = true;
        video.playsInline = true;
        video.play().catch(()=>{});
        const draw = ()=>{
            if (!this.ctx || !this.canvas) return;
            this.ctx.drawImage(video, 0, 0, this.width, this.height);
            this.animationFrameId = requestAnimationFrame(draw);
        };
        this.animationFrameId = requestAnimationFrame(draw);
        const stream = this.canvas.captureStream(this.fps);
        const audioTrack = mediaStream.getAudioTracks()[0];
        if (audioTrack) stream.addTrack(audioTrack);
        return stream;
    }
    /**
   * Composites screen + camera overlay on a canvas and captures it.
   * Overlay position/size are updated live via updateOverlaySettings().
   */ buildOverlayCanvasStream(screenStream, cameraStream, microphoneStream) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d', {
            willReadFrequently: false
        });
        this.screenVideo = document.createElement('video');
        this.screenVideo.srcObject = screenStream;
        this.screenVideo.muted = true;
        this.screenVideo.autoplay = true;
        this.screenVideo.playsInline = true;
        this.screenVideo.play().catch(()=>{});
        this.cameraVideo = document.createElement('video');
        this.cameraVideo.srcObject = cameraStream;
        this.cameraVideo.muted = true;
        this.cameraVideo.autoplay = true;
        this.cameraVideo.playsInline = true;
        this.cameraVideo.play().catch(()=>{});
        const draw = ()=>{
            if (!this.ctx || !this.canvas || !this.screenVideo || !this.cameraVideo) return;
            // Full-screen background
            this.ctx.drawImage(this.screenVideo, 0, 0, this.width, this.height);
            // Camera overlay (draggable/resizable position updated in real time)
            if (this.overlayVisible) {
                this.ctx.drawImage(this.cameraVideo, this.overlayPosition.x, this.overlayPosition.y, this.overlaySize.width, this.overlaySize.height);
            }
            this.animationFrameId = requestAnimationFrame(draw);
        };
        this.animationFrameId = requestAnimationFrame(draw);
        const stream = this.canvas.captureStream(this.fps);
        const audioSource = microphoneStream ?? cameraStream;
        const audioTrack = audioSource.getAudioTracks()[0];
        if (audioTrack) stream.addTrack(audioTrack);
        return stream;
    }
    /**
   * Publishes a MediaStream to mediamtx via the WHIP protocol.
   * WHIP = WebRTC HTTP Ingest Protocol (single POST with SDP offer/answer).
   */ async publishViaWhip(streamKey, mediaStream) {
        this.peerConnection = new RTCPeerConnection({
            iceServers: []
        });
        for (const track of mediaStream.getTracks()){
            this.peerConnection.addTrack(track, mediaStream);
        }
        // Force H.264 for video — mediamtx HLS muxer skips VP8/VP9, only packages H.264/H.265
        const videoTransceiver = this.peerConnection.getTransceivers().find((t)=>t.sender.track?.kind === 'video');
        if (videoTransceiver && RTCRtpSender.getCapabilities) {
            const codecs = RTCRtpSender.getCapabilities('video')?.codecs ?? [];
            const h264 = codecs.filter((c)=>c.mimeType === 'video/H264');
            if (h264.length > 0) videoTransceiver.setCodecPreferences(h264);
        }
        const offer = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(offer);
        // Wait for ICE gathering to complete (on localhost this is near-instant)
        await new Promise((resolve)=>{
            if (this.peerConnection?.iceGatheringState === 'complete') {
                resolve();
                return;
            }
            this.peerConnection?.addEventListener('icegatheringstatechange', ()=>{
                if (this.peerConnection?.iceGatheringState === 'complete') resolve();
            });
        });
        const response = await fetch(`${this.mediamtxWhipUrl}/live/${streamKey}/whip`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/sdp'
            },
            body: this.peerConnection.localDescription.sdp
        });
        if (!response.ok) {
            throw new Error(`WHIP publish failed: ${response.status} ${response.statusText}`);
        }
        const answerSdp = await response.text();
        await this.peerConnection.setRemoteDescription({
            type: 'answer',
            sdp: answerSdp
        });
    }
}
const streamClientService = new StreamClientService();
}}),
"[project]/apps/frontend/services/stream-viewer.service.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StreamViewerService": (()=>StreamViewerService),
    "streamViewerService": (()=>streamViewerService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$14$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/axios@1.14.0/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/streams.ts [app-ssr] (ecmascript)");
;
;
class StreamViewerService {
    /**
     * Get active streams for a match
     */ async getActiveStreams(matchId) {
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamsApi"].getActive(matchId);
        } catch (error) {
            console.error('❌ Error fetching active streams:', error);
            return {
                success: false,
                streams: [],
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
    /**
     * Get preferred stream for a user (follow-aware, falls back to top viewer)
     */ async getPreferredStream(matchId, userId) {
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamsApi"].getPreferred(matchId, userId);
        } catch  {
            return {
                stream: null,
                source: 'none'
            };
        }
    }
    /**
     * Create a new stream
     */ async createStream(request) {
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamsApi"].create(request);
        } catch (error) {
            console.error('❌ Error creating stream:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
    /**
     * End/delete a stream
     */ async endStream(streamId, streamerId) {
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamsApi"].end(streamId, streamerId);
        } catch (error) {
            console.error('❌ Error ending stream:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
    async joinStream(streamId, sessionToken) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamsApi"].joinViewer(streamId, sessionToken);
        } catch  {
        // Non-blocking — viewer count reconciled by cron
        }
    }
    async leaveStream(streamId, sessionToken) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamsApi"].leaveViewer(streamId, sessionToken);
        } catch  {
        // Non-blocking
        }
    }
    async uploadThumbnail(streamId, file) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamsApi"].uploadThumbnail(streamId, file);
        } catch  {
        // Non-blocking
        }
    }
    /**
     * Get stream playlist URL (served directly by mediamtx, not the backend)
     */ getStreamPlaylistUrl(streamKey) {
        const mediamtxUrl = ("TURBOPACK compile-time value", "http://localhost:8888") ?? 'http://localhost:8888';
        return `${mediamtxUrl}/live/${streamKey}/index.m3u8`;
    }
    /**
     * Check if playlist file is available (with retry)
     * Direct call to mediamtx — not routed through the backend API
     */ async checkPlaylistAvailable(streamKey, maxRetries = 10, delay = 500) {
        const playlistUrl = this.getStreamPlaylistUrl(streamKey);
        for(let i = 0; i < maxRetries; i++){
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$14$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].head(playlistUrl, {
                    timeout: 2000,
                    validateStatus: (status)=>status === 200 || status === 404
                });
                if (response.status === 200) {
                    console.log(`✅ Playlist available after ${i + 1} attempt(s)`);
                    return true;
                }
                if (i < maxRetries - 1) {
                    await new Promise((resolve)=>setTimeout(resolve, delay));
                }
            } catch  {
                if (i < maxRetries - 1) {
                    await new Promise((resolve)=>setTimeout(resolve, delay));
                }
            }
        }
        console.warn(`⚠️ Playlist not available after ${maxRetries} attempts`);
        return false;
    }
}
const streamViewerService = new StreamViewerService();
}}),
"[project]/apps/frontend/lib/supabase.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "supabase": (()=>supabase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$101$2e$1_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+supabase-js@2.101.1_bufferutil@4.1.0_utf-8-validate@6.0.6/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://uofqrnrclomfhrybbxkf.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZnFybnJjbG9tZmhyeWJieGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5Mzg1MDMsImV4cCI6MjA2ODUxNDUwM30.XsGdCINMgM8pkju3i2MHXL5BYKfUnNEBmsLm-2Bc2Mo");
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$101$2e$1_bufferutil$40$4$2e$1$2e$0_utf$2d$8$2d$validate$40$6$2e$0$2e$6$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}}),
"[project]/apps/frontend/models/chat.model.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// MessageType re-exported from domain — values: 'REGULAR' | 'BET' | 'SYSTEM' | 'DONATION'
__turbopack_context__.s({
    "BetType": (()=>BetType),
    "SystemMessageType": (()=>SystemMessageType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ChatMessage.ts [app-ssr] (ecmascript)");
;
var SystemMessageType = /*#__PURE__*/ function(SystemMessageType) {
    SystemMessageType["MATCH_START"] = "match_start";
    SystemMessageType["MATCH_END"] = "match_end";
    SystemMessageType["GOAL"] = "goal";
    SystemMessageType["USER_JOINED"] = "user_joined";
    SystemMessageType["USER_LEFT"] = "user_left";
    SystemMessageType["DONATION"] = "donation";
    SystemMessageType["SUBSCRIPTION"] = "subscription";
    SystemMessageType["BET_PLACED"] = "bet";
    return SystemMessageType;
}({});
var BetType = /*#__PURE__*/ function(BetType) {
    BetType["MATCH_WINNER"] = "match_winner";
    BetType["OVER_UNDER"] = "over_under";
    BetType["BOTH_TEAMS_SCORE"] = "both_teams_score";
    BetType["DOUBLE_CHANCE"] = "double_chance";
    BetType["DRAW_NO_BET"] = "draw_no_bet";
    BetType["FIRST_HALF_WINNER"] = "first_half_winner";
    BetType["FIRST_HALF_GOALS"] = "first_half_goals";
    BetType["HT_FT"] = "ht_ft";
    BetType["CORRECT_SCORE"] = "correct_score";
    BetType["EXACT_GOALS_NUMBER"] = "exact_goals_number";
    BetType["GOALSCORERS"] = "goalscorers";
    BetType["CLEAN_SHEET"] = "clean_sheet";
    BetType["WIN_TO_NIL"] = "win_to_nil";
    BetType["HIGHEST_SCORING_HALF"] = "highest_scoring_half";
    BetType["ODD_EVEN_GOALS"] = "odd_even_goals";
    BetType["FIRST_HALF_ODD_EVEN"] = "first_half_odd_even";
    return BetType;
}({});
}}),
"[project]/apps/frontend/models/chat.model.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ChatMessage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$models$2f$chat$2e$model$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/frontend/models/chat.model.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/services/supabase-chat.service.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SupabaseChatService": (()=>SupabaseChatService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$models$2f$chat$2e$model$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/models/chat.model.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ChatMessage.ts [app-ssr] (ecmascript)");
;
;
/**
 * Normalises legacy lowercase message_type values stored in Supabase
 * to the domain MessageType enum (uppercase).
 */ function normalizeMessageType(raw) {
    const mapping = {
        'message': __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].REGULAR,
        'text': __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].REGULAR,
        'bet': __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].BET,
        'system': __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].SYSTEM,
        'donation': __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].DONATION,
        // Already-uppercase values pass through unchanged
        'REGULAR': __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].REGULAR,
        'BET': __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].BET,
        'SYSTEM': __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].SYSTEM,
        'DONATION': __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].DONATION
    };
    return mapping[raw] ?? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].REGULAR;
}
class SupabaseChatService {
    subscriptions = new Map();
    streamSubscriptions = new Map();
    async sendMessage(matchId, userId, username, message, walletAddress) {
        try {
            const { data: matchExists, error: matchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('matches').select('api_football_id').eq('api_football_id', matchId);
            if (matchError || !matchExists || matchExists.length === 0) {
                console.warn(`Match ${matchId} n'existe pas dans Supabase`);
                return {
                    id: `simulated-${Date.now()}`,
                    matchId: matchId,
                    userId: userId,
                    username: username,
                    message: message,
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].REGULAR,
                    walletAddress: walletAddress,
                    createdAt: new Date(),
                    updatedAt: new Date()
                };
            }
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('chat_messages').insert({
                match_id: matchId,
                user_id: userId,
                username: username,
                message: message,
                message_type: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].REGULAR,
                wallet_address: walletAddress?.toLowerCase() ?? walletAddress,
                created_at: new Date().toISOString()
            }).select().single();
            if (error) {
                throw new Error(`Erreur lors de l'envoi du message: ${error.message}`);
            }
            return this.mapSupabaseMessageToChatMessage(data);
        } catch (err) {
            console.error('Erreur sendMessage:', err);
            return {
                id: `error-${Date.now()}`,
                matchId: matchId,
                userId: userId,
                username: username,
                message: message,
                type: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].REGULAR,
                walletAddress: walletAddress,
                createdAt: new Date(),
                updatedAt: new Date()
            };
        }
    }
    async sendBetMessage(matchId, userId, username, betType, betSubType, amount, odds, walletAddress) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('chat_messages').insert({
            match_id: matchId,
            user_id: userId,
            username: username,
            message: `Pari ${betType} - ${betSubType}`,
            message_type: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].BET,
            bet_type: betType,
            bet_sub_type: betSubType,
            amount: amount,
            odds: odds,
            wallet_address: walletAddress,
            created_at: new Date().toISOString()
        }).select().single();
        if (error) {
            throw new Error(`Erreur lors de l'envoi du message de pari: ${error.message}`);
        }
        return this.mapSupabaseMessageToBetMessage(data);
    }
    async sendSystemMessage(matchId, systemType, message) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('chat_messages').insert({
            match_id: matchId,
            user_id: 'system',
            username: 'Système',
            message: message,
            message_type: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].SYSTEM,
            system_type: systemType,
            created_at: new Date().toISOString()
        }).select().single();
        if (error) {
            throw new Error(`Erreur lors de l'envoi du message système: ${error.message}`);
        }
        return this.mapSupabaseMessageToSystemMessage(data);
    }
    async joinRoom(matchId, userId, username, walletAddress) {
        try {
            const { data: matchExists, error: matchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('matches').select('api_football_id').eq('api_football_id', matchId);
            if (matchError || !matchExists || matchExists.length === 0) {
                console.warn(`Match ${matchId} n'existe pas dans la base de données Supabase`);
                return {
                    id: `${matchId}-${userId}`,
                    username: username,
                    connectedAt: new Date(),
                    lastActivity: new Date()
                };
            }
            // Upsert : insert si absent, update si déjà connecté (évite 409 en cas d'appels simultanés / React Strict Mode)
            const connectedUserPayload = {
                match_id: matchId,
                user_id: userId,
                username: username,
                wallet_address: walletAddress?.toLowerCase() || null,
                connected_at: new Date().toISOString(),
                last_activity: new Date().toISOString()
            };
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('chat_connected_users').upsert(connectedUserPayload, {
                onConflict: 'match_id,user_id',
                ignoreDuplicates: false
            }).select().single();
            if (error) {
                console.warn("Erreur lors de la connexion à la room:", error);
                return {
                    id: `${matchId}-${userId}`,
                    username: username,
                    connectedAt: new Date(),
                    lastActivity: new Date()
                };
            }
            return this.mapSupabaseUserToConnectedUser(data);
        } catch (err) {
            console.error('Erreur joinRoom:', err);
            return {
                id: `${matchId}-${userId}`,
                username: username,
                connectedAt: new Date(),
                lastActivity: new Date()
            };
        }
    }
    async leaveRoom(matchId, userId) {
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('chat_connected_users').delete().eq('match_id', matchId).eq('user_id', userId);
            if (error) {
                console.warn("Erreur lors de la déconnexion:", error);
            // Ne pas lever d'erreur, juste logger
            }
        } catch (err) {
            console.warn("Erreur lors de la déconnexion:", err);
        }
    }
    async getRoomMessages(matchId, limit = 50) {
        try {
            const { data: matchExists, error: matchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('matches').select('api_football_id').eq('api_football_id', matchId);
            if (matchError || !matchExists || matchExists.length === 0) {
                console.warn(`Match ${matchId} n'existe pas dans Supabase, retour tableau vide`);
                return [];
            }
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('chat_messages').select('*').eq('match_id', matchId).order('created_at', {
                ascending: false
            }).limit(limit);
            if (error) {
                throw new Error(`Erreur lors de la récupération des messages: ${error.message}`);
            }
            return data.map((msg)=>this.mapSupabaseMessageToChatMessage(msg)).reverse();
        } catch (err) {
            console.error('Erreur getRoomMessages:', err);
            return [];
        }
    }
    async getConnectedUsers(matchId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('chat_connected_users').select('*').eq('match_id', matchId).order('connected_at', {
            ascending: true
        });
        if (error) {
            throw new Error(`Erreur lors de la récupération des utilisateurs: ${error.message}`);
        }
        return data.map((user)=>this.mapSupabaseUserToConnectedUser(user));
    }
    subscribeToMatchMessages(matchId, callback) {
        this.unsubscribeFromMatch(matchId);
        const subscription = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].channel(`chat_match_${matchId}`).on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'chat_messages',
            filter: `match_id=eq.${matchId}`
        }, (payload)=>{
            // Server filter covers match_id; filter stream_id client-side since
            // Supabase Realtime only supports one filter per postgres_changes subscription.
            if (payload.new.stream_id != null) return;
            const message = this.mapSupabaseMessageToChatMessage(payload.new);
            callback(message);
        }).subscribe();
        this.subscriptions.set(matchId, subscription);
        return subscription;
    }
    unsubscribeFromMatch(matchId) {
        const subscription = this.subscriptions.get(matchId);
        if (subscription) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(subscription);
            this.subscriptions.delete(matchId);
        }
    }
    subscribeToStreamMessages(streamId, callback) {
        this.unsubscribeFromStream(streamId);
        const subscription = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].channel(`chat_stream_${streamId}`).on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'chat_messages',
            filter: `stream_id=eq.${streamId}`
        }, (payload)=>{
            const message = this.mapSupabaseMessageToChatMessage(payload.new);
            callback(message);
        }).subscribe();
        this.streamSubscriptions.set(streamId, subscription);
        return subscription;
    }
    unsubscribeFromStream(streamId) {
        const subscription = this.streamSubscriptions.get(streamId);
        if (subscription) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(subscription);
            this.streamSubscriptions.delete(streamId);
        }
    }
    async getGeneralMessages(matchId, limit = 50) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('chat_messages').select('*').eq('match_id', matchId).is('stream_id', null).order('created_at', {
                ascending: false
            }).limit(limit);
            if (error) {
                throw new Error(`Erreur lors de la récupération des messages généraux: ${error.message}`);
            }
            return data.map((msg)=>this.mapSupabaseMessageToChatMessage(msg)).reverse();
        } catch (err) {
            console.error('Erreur getGeneralMessages:', err);
            return [];
        }
    }
    async getStreamMessages(streamId, limit = 50) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('chat_messages').select('*').eq('stream_id', streamId).order('created_at', {
                ascending: false
            }).limit(limit);
            if (error) {
                throw new Error(`Erreur lors de la récupération des messages stream: ${error.message}`);
            }
            return data.map((msg)=>this.mapSupabaseMessageToChatMessage(msg)).reverse();
        } catch (err) {
            console.error('Erreur getStreamMessages:', err);
            return [];
        }
    }
    async sendStreamMessage(streamId, matchId, userId, username, walletAddress, message) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('chat_messages').insert({
            match_id: matchId,
            stream_id: streamId,
            user_id: userId,
            username: username,
            message: message,
            message_type: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].REGULAR,
            wallet_address: walletAddress?.toLowerCase() ?? walletAddress,
            created_at: new Date().toISOString()
        }).select().single();
        if (error) {
            throw new Error(`Erreur lors de l'envoi du message stream: ${error.message}`);
        }
        return this.mapSupabaseMessageToChatMessage(data);
    }
    unsubscribeFromAll() {
        this.subscriptions.forEach((subscription)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(subscription);
        });
        this.subscriptions.clear();
        this.streamSubscriptions.forEach((subscription)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(subscription);
        });
        this.streamSubscriptions.clear();
    }
    async getStats() {
        const [messagesCount, usersCount, lastMessage] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('chat_messages').select('id', {
                count: 'exact'
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('chat_connected_users').select('id', {
                count: 'exact'
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('chat_messages').select('created_at').order('created_at', {
                ascending: false
            }).limit(1).single()
        ]);
        return {
            totalMessages: messagesCount.count || 0,
            totalUsers: usersCount.count || 0,
            activeRooms: this.subscriptions.size,
            lastMessageAt: lastMessage.data?.created_at ? new Date(lastMessage.data.created_at) : null
        };
    }
    mapSupabaseMessageToChatMessage(data) {
        return {
            id: data.id,
            matchId: data.match_id,
            streamId: data.stream_id ?? null,
            userId: data.user_id,
            username: data.username,
            message: data.message,
            type: normalizeMessageType(data.message_type),
            walletAddress: data.wallet_address || '',
            createdAt: new Date(data.created_at),
            updatedAt: data.updated_at ? new Date(data.updated_at) : new Date(data.created_at),
            isFeatured: data.is_featured,
            systemEventType: data.system_type
        };
    }
    mapSupabaseMessageToBetMessage(data) {
        return {
            ...this.mapSupabaseMessageToChatMessage(data),
            type: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].BET,
            betType: data.bet_type,
            betSubType: data.bet_sub_type,
            betAmount: data.amount,
            betOdds: data.odds
        };
    }
    mapSupabaseMessageToSystemMessage(data) {
        return {
            ...this.mapSupabaseMessageToChatMessage(data),
            type: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageType"].SYSTEM,
            systemEventType: data.system_type
        };
    }
    mapSupabaseUserToConnectedUser(data) {
        return {
            id: data.id,
            username: data.username,
            connectedAt: new Date(data.connected_at),
            lastActivity: new Date(data.last_activity)
        };
    }
}
}}),
"[project]/apps/frontend/services/token-price.service.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Service pour récupérer les prix et changements des fan tokens depuis CoinGecko
 */ __turbopack_context__.s({
    "fetchAllTokenPrices": (()=>fetchAllTokenPrices),
    "fetchCHZPrice": (()=>fetchCHZPrice),
    "fetchTokenPrice": (()=>fetchTokenPrice),
    "fetchTokenPrices": (()=>fetchTokenPrices)
});
const priceCache = {};
const CACHE_DURATION = 60000;
/**
 * Mapping des symboles de tokens vers leurs IDs CoinGecko
 * Liste complète des fan tokens disponibles sur CoinGecko
 */ const COINGECKO_TOKEN_IDS = {
    // Football (Soccer) - Europe
    PSG: "paris-saint-germain-fan-token",
    BAR: "fc-barcelona-fan-token",
    JUV: "juventus-fan-token",
    INTER: "internazionale-milan-fan-token",
    ACM: "ac-milan-fan-token",
    ATM: "atletico-madrid",
    CITY: "manchester-city-fan-token",
    AFC: "arsenal-fan-token",
    ASR: "as-roma-fan-token",
    POR: "fc-porto",
    GAL: "galatasaray-fan-token",
    TRA: "trabzonspor-fan-token",
    NAP: "napoli-fan-token",
    VCF: "valencia-cf-fan-token",
    SPURS: "tottenham-hotspur-fan-token",
    EFC: "everton-fan-token",
    ASM: "as-monaco-fan-token",
    LUFC: "leeds-united-fan-token",
    AVL: "aston-villa-fan-token",
    // Football (Soccer) - Brazil
    MENGO: "flamengo-fan-token",
    VERDAO: "palmeiras",
    SPFC: "sao-paulo-fc-fan-token",
    SCCP: "corinthians-fan-token",
    // Other sports
    OG: "og-fan-token",
    UFC: "ufc-fan-token",
    // Native token
    CHZ: "chiliz"
};
async function fetchTokenPrices(symbols) {
    try {
        const cacheKey = symbols.sort().join(",");
        const cached = priceCache[cacheKey];
        const now = Date.now();
        if (cached && now - cached.timestamp < CACHE_DURATION) {
            console.log("📦 Using cached token prices");
            return cached.data;
        }
        const tokenIds = symbols.map((symbol)=>COINGECKO_TOKEN_IDS[symbol.toUpperCase()]).filter((id)=>id !== undefined);
        if (tokenIds.length === 0) {
            console.warn("⚠️ No valid token IDs found for symbols:", symbols);
            return {};
        }
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${tokenIds.join(",")}&vs_currencies=usd&include_24hr_change=true`);
        if (!response.ok) {
            if (response.status === 429) {
                console.warn("⚠️ CoinGecko rate limit reached, using cache if available");
                if (cached) {
                    return cached.data;
                }
            }
            throw new Error(`CoinGecko API error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const prices = {};
        symbols.forEach((symbol)=>{
            const tokenId = COINGECKO_TOKEN_IDS[symbol.toUpperCase()];
            if (tokenId && data[tokenId]) {
                const tokenData = data[tokenId];
                prices[symbol.toUpperCase()] = {
                    symbol: symbol.toUpperCase(),
                    price: tokenData.usd || 0,
                    priceChange24h: tokenData.usd_24h_change || 0,
                    priceChangePercent24h: tokenData.usd_24h_change || 0
                };
            }
        });
        priceCache[cacheKey] = {
            data: prices,
            timestamp: now
        };
        return prices;
    } catch (error) {
        console.error("❌ Error fetching token prices from CoinGecko:", error);
        const cacheKey = symbols.sort().join(",");
        const cached = priceCache[cacheKey];
        if (cached) {
            console.log("📦 Using expired cache due to error");
            return cached.data;
        }
        return {};
    }
}
async function fetchTokenPrice(symbol) {
    const prices = await fetchTokenPrices([
        symbol
    ]);
    return prices[symbol.toUpperCase()] || null;
}
async function fetchAllTokenPrices() {
    const allSymbols = Object.keys(COINGECKO_TOKEN_IDS);
    return fetchTokenPrices(allSymbols);
}
async function fetchCHZPrice() {
    try {
        const prices = await fetchTokenPrices([
            "CHZ"
        ]);
        return prices["CHZ"]?.price || 0;
    } catch (error) {
        console.error("❌ Error fetching CHZ price:", error);
        return 0;
    }
}
}}),
"[project]/apps/frontend/services/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$api$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/services/api.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$stream$2d$client$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/services/stream-client.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$stream$2d$viewer$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/services/stream-viewer.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$supabase$2d$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/services/supabase-chat.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$token$2d$price$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/services/token-price.service.ts [app-ssr] (ecmascript)");
;
;
;
;
;
}}),
"[project]/apps/frontend/services/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$api$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/services/api.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$stream$2d$client$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/services/stream-client.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$stream$2d$viewer$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/services/stream-viewer.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$supabase$2d$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/services/supabase-chat.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$token$2d$price$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/services/token-price.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/frontend/services/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/hooks/useChatRoom.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useChatRoom": (()=>useChatRoom)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/services/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$supabase$2d$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/services/supabase-chat.service.ts [app-ssr] (ecmascript)");
'use client';
;
;
const chatService = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$services$2f$supabase$2d$chat$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SupabaseChatService"]();
function useChatRoom({ roomType, roomId, matchId, userId, username, walletAddress, active }) {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const activeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(active);
    const roomIdStr = String(roomId);
    // Keep activeRef in sync without triggering subscription re-runs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        activeRef.current = active;
    }, [
        active
    ]);
    // Fetch history + subscribe on room change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Stream room with no streamId yet — nothing to do
        if (roomType === 'stream' && !roomIdStr) return;
        let cancelled = false;
        setMessages([]);
        setIsLoading(true);
        setError(null);
        setUnreadCount(0);
        const fetchHistory = async ()=>{
            try {
                let history;
                if (roomType === 'stream') {
                    history = await chatService.getStreamMessages(roomIdStr);
                } else {
                    history = await chatService.getGeneralMessages(matchId);
                }
                if (!cancelled) {
                    setMessages(history);
                    setIsLoading(false);
                }
            } catch (err) {
                if (!cancelled) {
                    setError('Failed to load messages');
                    setIsLoading(false);
                }
            }
        };
        fetchHistory();
        const handleNewMessage = (msg)=>{
            if (activeRef.current) {
                setMessages((prev)=>{
                    // Deduplicate: replace optimistic message if content matches
                    const optimisticIdx = prev.findIndex((m)=>m.id.startsWith('optimistic-') && m.message === msg.message && m.userId === msg.userId);
                    if (optimisticIdx !== -1) {
                        const next = [
                            ...prev
                        ];
                        next[optimisticIdx] = msg;
                        return next;
                    }
                    return [
                        ...prev,
                        msg
                    ];
                });
            } else {
                setUnreadCount((n)=>n + 1);
            }
        };
        if (roomType === 'stream') {
            chatService.subscribeToStreamMessages(roomIdStr, handleNewMessage);
        } else {
            chatService.subscribeToMatchMessages(matchId, handleNewMessage);
        }
        return ()=>{
            cancelled = true;
            if (roomType === 'stream') {
                chatService.unsubscribeFromStream(roomIdStr);
            } else {
                chatService.unsubscribeFromMatch(matchId);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        roomType,
        roomIdStr,
        matchId
    ]);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (text)=>{
        const optimisticMsg = {
            id: `optimistic-${Date.now()}`,
            matchId,
            streamId: roomType === 'stream' ? roomIdStr : null,
            userId,
            username,
            walletAddress,
            message: text,
            type: 'message',
            createdAt: new Date(),
            updatedAt: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                optimisticMsg
            ]);
        try {
            if (roomType === 'stream') {
                await chatService.sendStreamMessage(roomIdStr, matchId, userId, username, walletAddress, text);
            } else {
                await chatService.sendMessage(matchId, userId, username, text, walletAddress);
            }
        } catch (err) {
            // Remove optimistic message on failure
            setMessages((prev)=>prev.filter((m)=>m.id !== optimisticMsg.id));
            setError('Failed to send message');
        }
    }, [
        roomType,
        roomIdStr,
        matchId,
        userId,
        username,
        walletAddress
    ]);
    const clearUnread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setUnreadCount(0), []);
    return {
        messages,
        isLoading,
        error,
        sendMessage,
        unreadCount,
        clearUnread
    };
}
}}),
"[project]/apps/frontend/hooks/useFanTokens.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFanTokens": (()=>useFanTokens)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useFanTokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useFanTokens.ts [app-ssr] (ecmascript)");
;
;
function useFanTokens(walletAddress, enabled = true) {
    const { data, isLoading, error: queryError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useFanTokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserFanTokenBalances"])(walletAddress || "");
    // Memoize the result to prevent infinite loops from array reference changes
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!walletAddress || !enabled) {
            return {
                totalBalance: 0,
                tokenBreakdown: {},
                tokenBalances: [],
                isLoading: false,
                error: null,
                isFeatured: false
            };
        }
        if (isLoading) {
            return {
                totalBalance: 0,
                tokenBreakdown: {},
                tokenBalances: [],
                isLoading: true,
                error: null,
                isFeatured: false
            };
        }
        if (queryError) {
            return {
                totalBalance: 0,
                tokenBreakdown: {},
                tokenBalances: [],
                isLoading: false,
                error: queryError.message || "Failed to fetch token balances",
                isFeatured: false
            };
        }
        if (data?.success && data.balance) {
            const balances = {};
            const balancesArray = [];
            data.balance.tokenBalances.forEach((tb)=>{
                balances[tb.token.symbol] = tb.balance;
                balancesArray.push({
                    symbol: tb.token.symbol,
                    balance: tb.balance
                });
            });
            return {
                totalBalance: data.balance.totalBalance,
                tokenBreakdown: balances,
                tokenBalances: balancesArray,
                isLoading: false,
                error: null,
                isFeatured: data.balance.isFeatured
            };
        }
        return {
            totalBalance: 0,
            tokenBreakdown: {},
            tokenBalances: [],
            isLoading: false,
            error: null,
            isFeatured: false
        };
    }, [
        walletAddress,
        enabled,
        data,
        isLoading,
        queryError
    ]);
}
}}),
"[project]/apps/frontend/hooks/useMultiChat.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMultiChat": (()=>useMultiChat)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useChatRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useChatRoom.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useMultiChat({ matchId, streamId, userId, username, walletAddress }) {
    const [activeTab, setActiveTabState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(streamId ? 'stream' : 'match');
    // When streamId appears/disappears, switch tab accordingly
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setActiveTabState(streamId ? 'stream' : 'match');
    }, [
        !!streamId
    ]);
    const matchRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useChatRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatRoom"])({
        roomType: 'match',
        roomId: matchId,
        matchId,
        userId,
        username,
        walletAddress,
        active: activeTab === 'match'
    });
    const streamRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useChatRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatRoom"])({
        roomType: 'stream',
        roomId: streamId ?? '',
        matchId,
        userId,
        username,
        walletAddress,
        active: activeTab === 'stream' && !!streamId
    });
    const setActiveTab = (tab)=>{
        setActiveTabState(tab);
        if (tab === 'match') matchRoom.clearUnread();
        if (tab === 'stream') streamRoom.clearUnread();
    };
    const activeRoom = activeTab === 'stream' && streamId ? streamRoom : matchRoom;
    return {
        activeTab,
        setActiveTab,
        matchRoom,
        streamRoom: streamId ? streamRoom : null,
        activeRoom
    };
}
}}),
"[project]/apps/frontend/hooks/useStreamWallet.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useStreamWallet": (()=>useStreamWallet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useDynamicContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/unit/parseEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.47.6_bufferutil@4.1.0_typescript@5.9.3_utf-8-validate@6.0.6_zod@4.3.6/node_modules/viem/_esm/utils/unit/formatEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@2.19.5_@tanstack+query-core@5.96.1_@tanstack+react-query@5.96.1_react@19.2.4__@ty_9cc1b734e49407b526111a54d0626853/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/contracts/generated.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useStreamWallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useStreamWallet.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const FACTORY_ADDRESS = ("TURBOPACK compile-time value", "0x4b1ea9bf6e087ac2aeb56ae46d8cb3b3bbb07f5a") || '0x7310cE3bD564fA63587a388b87a8C973a0BA3d7B';
function useStreamWallet({ streamerAddress }) {
    const { primaryWallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDynamicContext"])();
    const walletAddress = primaryWallet?.address;
    // Backend data using React Query hooks
    const { data: donationsData, isLoading: isLoadingDonations, refetch: refetchDonations } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useStreamWallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStreamerDonations"])(streamerAddress || "");
    const { data: subscriptionsData, isLoading: isLoadingSubscriptions, refetch: refetchSubscriptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useStreamWallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStreamerSubscriptions"])(streamerAddress || "");
    const donations = donationsData?.donations || [];
    const subscriptions = subscriptionsData?.subscriptions || [];
    const isLoadingBackend = isLoadingDonations || isLoadingSubscriptions;
    // ============================================================
    // Blockchain reads
    // ============================================================
    const { data: hasWallet, refetch: refetchHasWallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStreamWalletFactoryReadHasWallet"])({
        address: FACTORY_ADDRESS,
        args: streamerAddress ? [
            streamerAddress
        ] : undefined
    });
    const { data: streamWalletAddress, refetch: refetchWalletAddress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStreamWalletFactoryReadGetWallet"])({
        address: FACTORY_ADDRESS,
        args: streamerAddress ? [
            streamerAddress
        ] : undefined
    });
    const { data: totalRevenue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStreamWalletReadTotalRevenue"])({
        address: streamWalletAddress
    });
    const { data: totalWithdrawn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStreamWalletReadTotalWithdrawn"])({
        address: streamWalletAddress
    });
    const { data: availableBalance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStreamWalletReadAvailableBalance"])({
        address: streamWalletAddress
    });
    const { data: platformFeeBps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStreamWalletReadPlatformFeeBps"])({
        address: streamWalletAddress
    });
    const { data: totalSubscribers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStreamWalletReadTotalSubscribers"])({
        address: streamWalletAddress
    });
    const { data: isSubscribed, refetch: refetchIsSubscribed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStreamWalletReadIsSubscribed"])({
        address: streamWalletAddress,
        args: walletAddress ? [
            walletAddress
        ] : undefined
    });
    const { data: subscription, refetch: refetchSubscription } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStreamWalletReadGetSubscription"])({
        address: streamWalletAddress,
        args: walletAddress ? [
            walletAddress
        ] : undefined
    });
    // ============================================================
    // Blockchain writes (using generated hooks)
    // ============================================================
    const { writeContract: donateWrite, isPending: isDonatePending, isSuccess: isDonateSuccess, data: donateTxHash, error: donateError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStreamWalletFactoryWriteDonateToStream"])();
    const { writeContract: subscribeWrite, isPending: isSubscribePending, isSuccess: isSubscribeSuccess, data: subscribeTxHash, error: subscribeError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$contracts$2f$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStreamWalletFactoryWriteSubscribeToStream"])();
    // ============================================================
    // Transaction confirmations
    // ============================================================
    const { isLoading: isDonateConfirming } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: donateTxHash
    });
    const { isLoading: isSubscribeConfirming } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$19$2e$5_$40$tanstack$2b$query$2d$core$40$5$2e$96$2e$1_$40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4_$5f40$ty_9cc1b734e49407b526111a54d0626853$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: subscribeTxHash
    });
    // ============================================================
    // Refetch backend data
    // ============================================================
    const fetchBackendData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        refetchDonations();
        refetchSubscriptions();
    }, [
        refetchDonations,
        refetchSubscriptions
    ]);
    // Handle errors from write hooks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (donateError) {
            console.error('❌ Donate error:', donateError);
            const message = donateError.message || 'Failed to send donation';
            if (message.includes('User rejected') || message.includes('rejected')) {
                alert('Transaction was rejected');
            } else {
                alert(`Error: ${message}`);
            }
        }
    }, [
        donateError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (subscribeError) {
            console.error('❌ Subscribe error:', subscribeError);
            const message = subscribeError.message || 'Failed to subscribe';
            if (message.includes('User rejected') || message.includes('rejected')) {
                alert('Transaction was rejected');
            } else {
                alert(`Error: ${message}`);
            }
        }
    }, [
        subscribeError
    ]);
    // Refetch after successful transactions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDonateSuccess && donateTxHash) {
            // Refetch wallet info in case it was just created
            refetchHasWallet();
            refetchWalletAddress();
            // Wait a bit for indexing then refetch backend data
            setTimeout(()=>{
                fetchBackendData();
            }, 3000);
        }
    }, [
        isDonateSuccess,
        donateTxHash,
        refetchHasWallet,
        refetchWalletAddress,
        fetchBackendData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSubscribeSuccess && subscribeTxHash) {
            refetchIsSubscribed();
            refetchSubscription();
            // Wait a bit for indexing then refetch
            setTimeout(()=>{
                fetchBackendData();
            }, 3000);
        }
    }, [
        isSubscribeSuccess,
        subscribeTxHash,
        refetchIsSubscribed,
        refetchSubscription,
        fetchBackendData
    ]);
    // ============================================================
    // Statistics (combine blockchain + backend)
    // ============================================================
    const statistics = {
        totalRevenue: totalRevenue ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(totalRevenue) : '0',
        totalDonations: donations.length,
        totalSubscribers: totalSubscribers ? Number(totalSubscribers) : subscriptions.length,
        totalWithdrawn: totalWithdrawn ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(totalWithdrawn) : '0',
        availableBalance: availableBalance ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(availableBalance) : '0',
        platformFeeBps: platformFeeBps ? Number(platformFeeBps) / 100 : 5
    };
    // ============================================================
    // Transaction functions (wrapped for error handling)
    // ============================================================
    const donate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (amount, message)=>{
        if (!streamerAddress) {
            console.error('❌ Missing streamer address');
            return;
        }
        if (!donateWrite) {
            console.error('❌ Wallet not connected');
            alert('Please connect your wallet');
            return;
        }
        try {
            donateWrite({
                address: FACTORY_ADDRESS,
                args: [
                    streamerAddress,
                    message
                ],
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseEther"])(amount)
            });
        } catch (error) {
            console.error('❌ Error donating:', error);
            if (error.message?.includes('User rejected')) {
                alert('Transaction was rejected');
            } else {
                alert(`Error: ${error.message || 'Failed to send donation'}`);
            }
        }
    }, [
        streamerAddress,
        donateWrite
    ]);
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (amount, durationDays)=>{
        if (!streamerAddress) {
            console.error('❌ Missing streamer address');
            return;
        }
        if (!subscribeWrite) {
            console.error('❌ Wallet not connected');
            alert('Please connect your wallet');
            return;
        }
        try {
            const durationSeconds = BigInt(durationDays * 24 * 60 * 60);
            subscribeWrite({
                address: FACTORY_ADDRESS,
                args: [
                    streamerAddress,
                    durationSeconds
                ],
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseEther"])(amount)
            });
        } catch (error) {
            console.error('❌ Error subscribing:', error);
            if (error.message?.includes('User rejected')) {
                alert('Transaction was rejected');
            } else {
                alert(`Error: ${error.message || 'Failed to subscribe'}`);
            }
        }
    }, [
        streamerAddress,
        subscribeWrite
    ]);
    // ============================================================
    // Subscription details
    // ============================================================
    const subscriptionDetails = subscription ? {
        isSubscribed: !!isSubscribed && subscription.active && Number(subscription.expiryTime) > Date.now() / 1000,
        amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$47$2e$6_bufferutil$40$4$2e$1$2e$0_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$6$2e$0$2e$6_zod$40$4$2e$3$2e$6$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(subscription.amount),
        expiryTime: new Date(Number(subscription.expiryTime) * 1000).toLocaleDateString(),
        active: subscription.active
    } : null;
    // ============================================================
    // Return hook interface
    // ============================================================
    return {
        // Wallet info
        hasWallet: !!hasWallet,
        streamWalletAddress: streamWalletAddress,
        isLoading: isLoadingBackend,
        // Statistics
        statistics,
        // History from backend
        donations,
        subscriptions,
        // Donation
        donate,
        donationState: {
            isPending: isDonatePending,
            isConfirming: isDonateConfirming,
            isSuccess: isDonateSuccess,
            txHash: donateTxHash
        },
        // Subscription
        subscribe,
        subscriptionState: {
            isPending: isSubscribePending,
            isConfirming: isSubscribeConfirming,
            isSuccess: isSubscribeSuccess,
            txHash: subscribeTxHash
        },
        subscription: subscriptionDetails,
        // Refetch
        refetch: fetchBackendData
    };
}
}}),
"[project]/apps/frontend/hooks/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useAuth.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useBettingMatch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useBettingMatch.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useBettingMatchFactory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useBettingMatchFactory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useChatRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useChatRoom.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useFanTokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useFanTokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useMultiChat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useMultiChat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useStreamWallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useStreamWallet.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
}}),
"[project]/apps/frontend/hooks/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useAuth.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useBettingMatch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useBettingMatch.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useBettingMatchFactory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useBettingMatchFactory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useChatRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useChatRoom.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useFanTokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useFanTokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useMultiChat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useMultiChat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useStreamWallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useStreamWallet.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/app/verifying/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VerifyingPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useWaitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useWaitlist.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useDynamicContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/providers/auth-provider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function VerifyingContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { primaryWallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDynamicContext"])();
    const { isAuthenticated, isLoading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [storedEmail, setStoredEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const nextTarget = searchParams.get("next") || "/live";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    const { data: accessData, isLoading: accessLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useWaitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCheckWaitlistAccess"])(storedEmail, primaryWallet?.address);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (authLoading || accessLoading) {
            return;
        }
        if (!storedEmail && !primaryWallet?.address) {
            router.replace("/waitlist");
            return;
        }
        if (primaryWallet?.address && !isAuthenticated) {
            return;
        }
        if (accessData?.hasAccess) {
            router.replace(nextTarget);
        } else if (accessData && !accessData.hasAccess) {
            router.replace("/waitlist");
        }
    }, [
        primaryWallet?.address,
        router,
        nextTarget,
        isAuthenticated,
        authLoading,
        accessData,
        accessLoading,
        storedEmail
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-black text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center space-y-3 animate-in fade-in duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm uppercase tracking-[0.3em] text-primary",
                    children: "ChilizTV"
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/app/verifying/page.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl font-semibold text-white/80",
                    children: "Verifying access..."
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/app/verifying/page.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/60 text-xs",
                    children: "Hang tight while we confirm your status."
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/app/verifying/page.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/frontend/app/verifying/page.tsx",
            lineNumber: 49,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/app/verifying/page.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
function VerifyingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-black text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-3 animate-in fade-in duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm uppercase tracking-[0.3em] text-primary",
                        children: "ChilizTV"
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/verifying/page.tsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-semibold text-white/80",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/verifying/page.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/verifying/page.tsx",
                lineNumber: 62,
                columnNumber: 17
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/apps/frontend/app/verifying/page.tsx",
            lineNumber: 61,
            columnNumber: 13
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VerifyingContent, {}, void 0, false, {
            fileName: "[project]/apps/frontend/app/verifying/page.tsx",
            lineNumber: 68,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/app/verifying/page.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=_b06160c5._.js.map