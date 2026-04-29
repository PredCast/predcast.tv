(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/apps/frontend/lib/api/error.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/errors/DomainError.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/errors/ValidationError.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ValidationError": (()=>ValidationError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-client] (ecmascript)");
;
class ValidationError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(message, details){
        super(message, 'VALIDATION_ERROR', 400, details);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/errors/NotFoundError.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "NotFoundError": (()=>NotFoundError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-client] (ecmascript)");
;
class NotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(resource, identifier){
        super(`${resource} with identifier '${identifier}' not found`, 'NOT_FOUND', 404, {
            resource,
            identifier
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/errors/UnauthorizedError.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "UnauthorizedError": (()=>UnauthorizedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-client] (ecmascript)");
;
class UnauthorizedError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(message = 'Unauthorized'){
        super(message, 'UNAUTHORIZED', 401);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/errors/ConflictError.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConflictError": (()=>ConflictError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-client] (ecmascript)");
;
class ConflictError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(message, details){
        super(message, 'CONFLICT', 409, details);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/errors/BusinessRuleError.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BusinessRuleError": (()=>BusinessRuleError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-client] (ecmascript)");
;
class BusinessRuleError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(message, details){
        super(message, 'BUSINESS_RULE_VIOLATION', 422, details);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/errors/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$NotFoundError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/NotFoundError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$UnauthorizedError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/UnauthorizedError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ConflictError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ConflictError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$BusinessRuleError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/BusinessRuleError.ts [app-client] (ecmascript)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/errors/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$NotFoundError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/NotFoundError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$UnauthorizedError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/UnauthorizedError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ConflictError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ConflictError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$BusinessRuleError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/BusinessRuleError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/packages/domain/src/shared/tokens.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/ports/ILogger.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/ports/IAuthConfig.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/ports/INetworkConfig.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/ports/ISchedulerService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/ports/ISubscriptionChecker.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/ports/IFootballApiService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/shared/ports/IBlockchainService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/matches/entities/Match.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/matches/repositories/IMatchRepository.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/matches/value-objects/MatchFetchWindow.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/predictions/value-objects/PredictionStatus.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/predictions/entities/Prediction.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Prediction": (()=>Prediction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/PredictionStatus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-client] (ecmascript)");
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('User ID and wallet address are required');
        }
        if (!props.matchId || !props.matchName) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('Match ID and name are required');
        }
        if (props.matchStartTime < now) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('Cannot place prediction on past matches');
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
        if (this.props.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictionStatus"].PENDING && this.props.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictionStatus"].IN_PROGRESS) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('Can only settle pending or in-progress predictions');
        }
        this.props.actualResult = actualResult;
        this.props.status = isWin ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictionStatus"].WON : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictionStatus"].LOST;
        this.props.settledAt = new Date();
        this.props.updatedAt = new Date();
    }
    cancel() {
        if (this.props.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictionStatus"].PENDING) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('Can only cancel pending predictions');
        }
        this.props.status = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictionStatus"].CANCELLED;
        this.props.updatedAt = new Date();
    }
    markInProgress() {
        if (this.props.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictionStatus"].PENDING) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('Can only mark pending predictions as in-progress');
        }
        this.props.status = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictionStatus"].IN_PROGRESS;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/predictions/repositories/IPredictionRepository.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/predictions/value-objects/Odds.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Odds": (()=>Odds)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-client] (ecmascript)");
;
class Odds {
    value;
    constructor(value){
        this.value = value;
    }
    static create(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('Odds must be a valid number');
        }
        if (value <= 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('Odds must be greater than 1');
        }
        if (value > 1000) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('Odds seem unrealistic (max 1000)');
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/predictions/value-objects/TransactionHash.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TransactionHash": (()=>TransactionHash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-client] (ecmascript)");
;
class TransactionHash {
    value;
    constructor(value){
        this.value = value;
    }
    static create(value) {
        if (!value || typeof value !== 'string') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('Transaction hash is required');
        }
        if (!/^0x[a-fA-F0-9]{64}$/.test(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"]('Invalid transaction hash format');
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/chat/entities/ChatMessage.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/chat/entities/ConnectedUser.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/chat/repositories/IChatRepository.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/fan-tokens/repositories/IFanTokenRepository.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/follows/entities/Follow.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/follows/repositories/IFollowRepository.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/streams/entities/Stream.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/streams/repositories/IStreamRepository.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/stream-wallet/entities/Donation.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/stream-wallet/entities/Subscription.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/stream-wallet/repositories/IStreamWalletRepository.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/waitlist/entities/WaitlistEntry.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/waitlist/repositories/IWaitlistRepository.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Shared — errors
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/index.ts [app-client] (ecmascript) <module evaluation>");
// Shared — tokens
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/tokens.ts [app-client] (ecmascript)");
// Shared — ports
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ILogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ILogger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IAuthConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IAuthConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$INetworkConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/INetworkConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ISchedulerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ISchedulerService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ISubscriptionChecker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ISubscriptionChecker.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IFootballApiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IFootballApiService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IBlockchainService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IBlockchainService.ts [app-client] (ecmascript)");
// Matches
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$entities$2f$Match$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/entities/Match.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$repositories$2f$IMatchRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/repositories/IMatchRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$value$2d$objects$2f$MatchFetchWindow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/value-objects/MatchFetchWindow.ts [app-client] (ecmascript)");
// Predictions
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$entities$2f$Prediction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/entities/Prediction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$repositories$2f$IPredictionRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/repositories/IPredictionRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$Odds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/Odds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/PredictionStatus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$TransactionHash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/TransactionHash.ts [app-client] (ecmascript)");
// Chat
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ChatMessage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ConnectedUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ConnectedUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$repositories$2f$IChatRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/repositories/IChatRepository.ts [app-client] (ecmascript)");
// Fan tokens
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$fan$2d$tokens$2f$repositories$2f$IFanTokenRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/fan-tokens/repositories/IFanTokenRepository.ts [app-client] (ecmascript)");
// Follows
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$follows$2f$entities$2f$Follow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/follows/entities/Follow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$follows$2f$repositories$2f$IFollowRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/follows/repositories/IFollowRepository.ts [app-client] (ecmascript)");
// Streams
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$streams$2f$entities$2f$Stream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/streams/entities/Stream.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$streams$2f$repositories$2f$IStreamRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/streams/repositories/IStreamRepository.ts [app-client] (ecmascript)");
// Stream wallet
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$entities$2f$Donation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/entities/Donation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$entities$2f$Subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/entities/Subscription.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$repositories$2f$IStreamWalletRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/repositories/IStreamWalletRepository.ts [app-client] (ecmascript)");
// Waitlist
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$waitlist$2f$entities$2f$WaitlistEntry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/waitlist/entities/WaitlistEntry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$waitlist$2f$repositories$2f$IWaitlistRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/waitlist/repositories/IWaitlistRepository.ts [app-client] (ecmascript)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/domain/src/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ILogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ILogger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IAuthConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IAuthConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$INetworkConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/INetworkConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ISchedulerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ISchedulerService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ISubscriptionChecker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ISubscriptionChecker.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IFootballApiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IFootballApiService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IBlockchainService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IBlockchainService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$entities$2f$Match$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/entities/Match.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$repositories$2f$IMatchRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/repositories/IMatchRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$value$2d$objects$2f$MatchFetchWindow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/value-objects/MatchFetchWindow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$entities$2f$Prediction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/entities/Prediction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$repositories$2f$IPredictionRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/repositories/IPredictionRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$Odds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/Odds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/PredictionStatus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$TransactionHash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/TransactionHash.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ChatMessage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ConnectedUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ConnectedUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$repositories$2f$IChatRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/repositories/IChatRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$fan$2d$tokens$2f$repositories$2f$IFanTokenRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/fan-tokens/repositories/IFanTokenRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$follows$2f$entities$2f$Follow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/follows/entities/Follow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$follows$2f$repositories$2f$IFollowRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/follows/repositories/IFollowRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$streams$2f$entities$2f$Stream$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/streams/entities/Stream.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$streams$2f$repositories$2f$IStreamRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/streams/repositories/IStreamRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$entities$2f$Donation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/entities/Donation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$entities$2f$Subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/entities/Subscription.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$repositories$2f$IStreamWalletRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/repositories/IStreamWalletRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$waitlist$2f$entities$2f$WaitlistEntry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/waitlist/entities/WaitlistEntry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$waitlist$2f$repositories$2f$IWaitlistRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/waitlist/repositories/IWaitlistRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/lib/api/errors.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "mapApiError": (()=>mapApiError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$NotFoundError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/NotFoundError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$UnauthorizedError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/UnauthorizedError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ConflictError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ConflictError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$BusinessRuleError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/BusinessRuleError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/error.ts [app-client] (ecmascript)");
;
;
function mapApiError(code, message) {
    switch(code){
        case 'NOT_FOUND':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$NotFoundError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotFoundError"](message, '');
        case 'UNAUTHORIZED':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$UnauthorizedError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnauthorizedError"](message);
        case 'CONFLICT':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ConflictError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConflictError"](message);
        case 'BUSINESS_RULE_VIOLATION':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$BusinessRuleError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BusinessRuleError"](message);
        case 'VALIDATION_ERROR':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"](message);
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiError"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiErrorCode"].UNKNOWN, `[${code}] ${message}`);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/api/client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$14$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/axios@1.14.0/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/error.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/errors.ts [app-client] (ecmascript)");
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapApiError"])(err.error.code, err.error.message);
    }
    throw new Error('Unknown API error');
}
/**
 * @notice Centralized API client with automatic JWT injection and error handling
 * @dev Implements request/response interceptors for auth and rate limiting
 */ class ApiClient {
    client;
    constructor(){
        this.client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$14$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
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
            const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthToken"])();
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
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthToken"])();
                }
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
            }
            // Handle rate limiting (429)
            if (error.response?.status === 429) {
                return this.handleRateLimit(error, originalRequest);
            }
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
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
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/api/endpoints/browse.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "browseApi": (()=>browseApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-client] (ecmascript)");
;
const browseApi = {
    getMatches: async ()=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/matches/browse');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/api/endpoints/chat.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "chatApi": (()=>chatApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-client] (ecmascript)");
;
const chatApi = {
    /**
   * @notice Join a chat room for a match
   * @param matchId Match ID
   * @param data Join room data
   * @return Promise resolving to success response
   */ joinRoom: (matchId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/chat/join/${matchId}`, data),
    /**
   * @notice Leave a chat room for a match
   * @param matchId Match ID
   * @param data Leave room data
   * @return Promise resolving to success response
   */ leaveRoom: (matchId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/chat/leave/${matchId}`, data),
    /**
   * @notice Send a text message to a chat room
   * @param matchId Match ID
   * @param data Message data
   * @return Promise resolving to created message
   */ sendMessage: (matchId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/chat/message/${matchId}`, data),
    /**
   * @notice Send a bet message to a chat room
   * @param matchId Match ID
   * @param data Bet message data
   * @return Promise resolving to created bet message
   */ sendBetMessage: (matchId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/chat/bet/${matchId}`, data),
    /**
   * @notice Fetch messages for a chat room
   * @param matchId Match ID
   * @param limit Maximum number of messages to fetch
   * @param offset Number of messages to skip
   * @return Promise resolving to array of messages
   */ getRoomMessages: (matchId, limit = 50, offset = 0)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/chat/messages/${matchId}?limit=${limit}&offset=${offset}`),
    /**
   * @notice Fetch connected users in a chat room
   * @param matchId Match ID
   * @return Promise resolving to array of connected users
   */ getConnectedUsers: (matchId)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/chat/users/${matchId}`),
    /**
   * @notice Fetch global chat statistics
   * @return Promise resolving to chat stats
   */ getChatStats: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/chat/stats')
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/api/endpoints/fan-tokens.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "fanTokensApi": (()=>fanTokensApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-client] (ecmascript)");
;
const fanTokensApi = {
    /**
   * @notice Fetches fan token balances for a wallet address
   * @param walletAddress User's wallet address
   * @return Promise resolving to user token balance
   */ getUserBalances: (walletAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/fan-tokens/balances/${walletAddress}`)
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/api/endpoints/follows.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "followsApi": (()=>followsApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-client] (ecmascript)");
;
const followsApi = {
    follow: async (followerId, streamerId, streamerName)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post('/follows', {
            followerId,
            streamerId,
            streamerName
        });
    },
    unfollow: async (followerId, streamerId)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete('/follows', {
            data: {
                followerId,
                streamerId
            }
        });
    },
    isFollowing: async (followerId, streamerId)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/follows/is-following?followerId=${encodeURIComponent(followerId)}&streamerId=${encodeURIComponent(streamerId)}`);
    },
    getFollowerCount: async (streamerId)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/follows/count/${encodeURIComponent(streamerId)}`);
    },
    getFollowedStreamers: async (followerId)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/follows/following/${encodeURIComponent(followerId)}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/api/endpoints/matches.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "matchesApi": (()=>matchesApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-client] (ecmascript)");
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
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/matches');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'matches').map(transformMatch);
    },
    /**
   * @notice Fetches single match by ID
   * @param id Match ID
   * @return Promise resolving to match data
   */ getById: async (id)=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/matches/${id}`);
        return transformMatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'match'));
    },
    /**
   * @notice Fetches live matches
   * @return Promise resolving to array of live matches
   */ getLive: async ()=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/matches/live');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'matches').map(transformMatch);
    },
    /**
   * @notice Fetches upcoming matches
   * @return Promise resolving to array of upcoming matches
   */ getUpcoming: async ()=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/matches/upcoming');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'matches').map(transformMatch);
    },
    /**
   * @notice Fetches matches by league
   * @param league League name
   * @return Promise resolving to array of matches in the league
   */ getByLeague: async (league)=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/matches/league/${league}`);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'matches').map(transformMatch);
    },
    /**
   * @notice Fetches match statistics summary
   * @return Promise resolving to statistics data
   */ getStats: async ()=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/matches/stats/summary');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'stats');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/api/endpoints/predictions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "predictionsApi": (()=>predictionsApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-client] (ecmascript)");
;
const predictionsApi = {
    /**
   * @notice Creates a new prediction
   * @param data Prediction data
   * @return Promise resolving to created prediction
   */ create: async (data)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/predictions', data);
    },
    /**
   * @notice Fetches predictions by user ID
   * @param userId User ID
   * @return Promise resolving to array of predictions
   */ getByUser: async (userId)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/predictions/${userId}`);
    },
    /**
   * @notice Fetches user prediction statistics
   * @param userId User ID
   * @return Promise resolving to prediction stats
   */ getUserStats: async (userId)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/predictions/stats/${userId}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/api/endpoints/stream-wallet.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "streamWalletApi": (()=>streamWalletApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-client] (ecmascript)");
;
const streamWalletApi = {
    /**
   * @notice Fetches all donations for a streamer
   * @param streamerAddress Streamer's wallet address
   * @return Promise resolving to donations array
   */ getStreamerDonations: (streamerAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/donations/${streamerAddress}`),
    /**
   * @notice Fetches all subscriptions for a streamer
   * @param streamerAddress Streamer's wallet address
   * @return Promise resolving to subscriptions array
   */ getStreamerSubscriptions: (streamerAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/subscriptions/${streamerAddress}`),
    /**
   * @notice Fetches earnings statistics for a streamer
   * @param streamerAddress Streamer's wallet address
   * @return Promise resolving to streamer stats
   */ getStreamerStats: (streamerAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/stats/${streamerAddress}`),
    /**
   * @notice Fetches donation history for a donor
   * @param donorAddress Donor's wallet address
   * @return Promise resolving to donations array
   */ getDonorHistory: (donorAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/donor/${donorAddress}/donations`),
    /**
   * @notice Fetches subscription history for a subscriber
   * @param subscriberAddress Subscriber's wallet address
   * @return Promise resolving to subscriptions array
   */ getSubscriberHistory: (subscriberAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/subscriber/${subscriberAddress}/subscriptions`)
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/api/endpoints/streams.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "streamsApi": (()=>streamsApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-client] (ecmascript)");
;
const streamsApi = {
    /**
   * @notice Fetches active streams for a match
   * @param matchId The match ID to get streams for
   */ getActive: async (matchId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/stream', {
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
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/stream/preferred', {
            params
        });
        return {
            stream: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'stream'),
            source: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'source')
        };
    },
    /**
   * @notice Creates a new stream
   */ create: async (request)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post('/stream', request);
    },
    /**
   * @notice Ends/deletes a stream
   */ end: async (streamId, streamerId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete('/stream', {
            data: {
                streamId,
                streamerId
            }
        });
    },
    /**
   * @notice Registers a viewer session joining a stream
   */ joinViewer: async (streamId, sessionToken)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/stream/${streamId}/join`, {
            sessionToken
        });
    },
    /**
   * @notice Registers a viewer session leaving a stream
   */ leaveViewer: async (streamId, sessionToken)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/stream/${streamId}/leave`, {
            sessionToken
        });
    },
    /**
   * @notice Uploads a stream thumbnail
   */ uploadThumbnail: async (streamId, file)=>{
        const form = new FormData();
        form.append('file', file, 'thumbnail.jpg');
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/stream/${streamId}/thumbnail`, form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/api/endpoints/waitlist.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "waitlistApi": (()=>waitlistApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-client] (ecmascript)");
;
const waitlistApi = {
    /**
   * @notice Join the waitlist
   * @param data Waitlist entry data
   * @return Promise resolving to created entry
   */ join: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post('/waitlist', data),
    /**
   * @notice Check if user has access
   * @param email User's email (optional)
   * @param walletAddress User's wallet address (optional)
   * @return Promise resolving to access check result
   */ checkAccess: (email, walletAddress)=>{
        const params = new URLSearchParams();
        if (email) params.append('email', email);
        if (walletAddress) params.append('walletAddress', walletAddress);
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/waitlist/check-access?${params.toString()}`);
    },
    /**
   * @notice Fetch waitlist statistics
   * @return Promise resolving to waitlist stats
   */ getStats: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('/waitlist/stats')
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/api/endpoints/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$browse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/browse.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/chat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$fan$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/fan-tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/follows.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/matches.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/predictions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/stream-wallet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/streams.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/waitlist.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/lib/api/endpoints/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$browse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/browse.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/chat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$fan$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/fan-tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/follows.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/matches.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/predictions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/stream-wallet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/streams.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/waitlist.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/lib/query/keys.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/hooks/useAuth.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/providers/auth-provider.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/hooks/useAuth.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/providers/auth-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useAuth.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/hooks/api/useBrowseMatches.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useBrowseMatches": (()=>useBrowseMatches)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$browse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/browse.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useAuth.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/providers/auth-provider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useBrowseMatches() {
    _s();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].browse.all,
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$browse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browseApi"].getMatches,
        enabled: isAuthenticated,
        staleTime: 30_000,
        refetchInterval: 60_000
    });
}
_s(useBrowseMatches, "czroWDo333PetoqhZg09CW0iHWA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/hooks/api/useChat.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/chat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
;
;
;
function useChatMessages(matchId, limit = 50, offset = 0) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].chat.messages(matchId, limit, offset),
        queryFn: {
            "useChatMessages.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getRoomMessages(matchId, limit, offset)
        }["useChatMessages.useQuery"],
        enabled: !!matchId
    });
}
_s(useChatMessages, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useConnectedUsers(matchId) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].chat.users(matchId),
        queryFn: {
            "useConnectedUsers.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getConnectedUsers(matchId)
        }["useConnectedUsers.useQuery"],
        enabled: !!matchId
    });
}
_s1(useConnectedUsers, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useChatStats() {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].chat.stats(),
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getChatStats
    });
}
_s2(useChatStats, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useJoinRoom() {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useJoinRoom.useMutation": ({ matchId, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].joinRoom(matchId, data)
        }["useJoinRoom.useMutation"],
        onSuccess: {
            "useJoinRoom.useMutation": (_, variables)=>{
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].chat.users(variables.matchId)
                });
            }
        }["useJoinRoom.useMutation"]
    });
}
_s3(useJoinRoom, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useLeaveRoom() {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useLeaveRoom.useMutation": ({ matchId, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].leaveRoom(matchId, data)
        }["useLeaveRoom.useMutation"],
        onSuccess: {
            "useLeaveRoom.useMutation": (_, variables)=>{
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].chat.users(variables.matchId)
                });
            }
        }["useLeaveRoom.useMutation"]
    });
}
_s4(useLeaveRoom, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useSendMessage() {
    _s5();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useSendMessage.useMutation": ({ matchId, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendMessage(matchId, data)
        }["useSendMessage.useMutation"],
        onSuccess: {
            "useSendMessage.useMutation": (_, variables)=>{
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].chat.all
                });
            }
        }["useSendMessage.useMutation"]
    });
}
_s5(useSendMessage, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useSendBetMessage() {
    _s6();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useSendBetMessage.useMutation": ({ matchId, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].sendBetMessage(matchId, data)
        }["useSendBetMessage.useMutation"],
        onSuccess: {
            "useSendBetMessage.useMutation": (_, variables)=>{
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].chat.all
                });
            }
        }["useSendBetMessage.useMutation"]
    });
}
_s6(useSendBetMessage, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/hooks/api/useFanTokens.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useUserFanTokenBalances": (()=>useUserFanTokenBalances)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$fan$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/fan-tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useUserFanTokenBalances(walletAddress) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].fanTokens.balances(walletAddress),
        queryFn: {
            "useUserFanTokenBalances.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$fan$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fanTokensApi"].getUserBalances(walletAddress)
        }["useUserFanTokenBalances.useQuery"],
        enabled: !!walletAddress
    });
}
_s(useUserFanTokenBalances, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/hooks/api/useFollows.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFollowMutation": (()=>useFollowMutation),
    "useFollowedStreamers": (()=>useFollowedStreamers),
    "useFollowerCount": (()=>useFollowerCount),
    "useIsFollowing": (()=>useIsFollowing),
    "useUnfollowMutation": (()=>useUnfollowMutation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/follows.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
function useIsFollowing(followerId, streamerId) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].follows.isFollowing(followerId ?? '', streamerId ?? ''),
        queryFn: {
            "useIsFollowing.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["followsApi"].isFollowing(followerId, streamerId)
        }["useIsFollowing.useQuery"],
        enabled: !!followerId && !!streamerId,
        staleTime: 30_000,
        select: {
            "useIsFollowing.useQuery": (data)=>data.isFollowing
        }["useIsFollowing.useQuery"]
    });
}
_s(useIsFollowing, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useFollowerCount(streamerId) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].follows.count(streamerId ?? ''),
        queryFn: {
            "useFollowerCount.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["followsApi"].getFollowerCount(streamerId)
        }["useFollowerCount.useQuery"],
        enabled: !!streamerId,
        staleTime: 30_000,
        select: {
            "useFollowerCount.useQuery": (data)=>data.count
        }["useFollowerCount.useQuery"]
    });
}
_s1(useFollowerCount, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useFollowedStreamers(followerId) {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].follows.following(followerId ?? ''),
        queryFn: {
            "useFollowedStreamers.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["followsApi"].getFollowedStreamers(followerId)
        }["useFollowedStreamers.useQuery"],
        enabled: !!followerId,
        staleTime: 30_000,
        select: {
            "useFollowedStreamers.useQuery": (data)=>data.follows
        }["useFollowedStreamers.useQuery"]
    });
}
_s2(useFollowedStreamers, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useFollowMutation(followerId) {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useFollowMutation.useMutation": ({ streamerId, streamerName })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["followsApi"].follow(followerId, streamerId, streamerName)
        }["useFollowMutation.useMutation"],
        onSuccess: {
            "useFollowMutation.useMutation": (_data, variables)=>{
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].follows.isFollowing(followerId ?? '', variables.streamerId)
                });
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].follows.count(variables.streamerId)
                });
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].follows.following(followerId ?? '')
                });
            }
        }["useFollowMutation.useMutation"]
    });
}
_s3(useFollowMutation, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUnfollowMutation(followerId) {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUnfollowMutation.useMutation": ({ streamerId })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["followsApi"].unfollow(followerId, streamerId)
        }["useUnfollowMutation.useMutation"],
        onSuccess: {
            "useUnfollowMutation.useMutation": (_data, variables)=>{
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].follows.isFollowing(followerId ?? '', variables.streamerId)
                });
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].follows.count(variables.streamerId)
                });
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].follows.following(followerId ?? '')
                });
            }
        }["useUnfollowMutation.useMutation"]
    });
}
_s4(useUnfollowMutation, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/hooks/api/useMatches.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLiveMatches": (()=>useLiveMatches),
    "useMatch": (()=>useMatch),
    "useMatchStats": (()=>useMatchStats),
    "useMatches": (()=>useMatches),
    "useMatchesByLeague": (()=>useMatchesByLeague),
    "useUpcomingMatches": (()=>useUpcomingMatches)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/matches.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useAuth.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/providers/auth-provider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
;
;
;
;
function useMatches() {
    _s();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].matches.lists(),
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesApi"].getAll,
        enabled: isAuthenticated
    });
}
_s(useMatches, "czroWDo333PetoqhZg09CW0iHWA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useMatch(id) {
    _s1();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].matches.detail(id),
        queryFn: {
            "useMatch.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesApi"].getById(id)
        }["useMatch.useQuery"],
        enabled: !!id && isAuthenticated
    });
}
_s1(useMatch, "czroWDo333PetoqhZg09CW0iHWA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useLiveMatches() {
    _s2();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].matches.live(),
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesApi"].getLive,
        refetchInterval: 30000,
        enabled: isAuthenticated
    });
}
_s2(useLiveMatches, "czroWDo333PetoqhZg09CW0iHWA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useUpcomingMatches() {
    _s3();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].matches.upcoming(),
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesApi"].getUpcoming,
        enabled: isAuthenticated
    });
}
_s3(useUpcomingMatches, "czroWDo333PetoqhZg09CW0iHWA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useMatchesByLeague(league) {
    _s4();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].matches.byLeague(league),
        queryFn: {
            "useMatchesByLeague.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesApi"].getByLeague(league)
        }["useMatchesByLeague.useQuery"],
        enabled: !!league && isAuthenticated
    });
}
_s4(useMatchesByLeague, "czroWDo333PetoqhZg09CW0iHWA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useMatchStats() {
    _s5();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].matches.stats(),
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesApi"].getStats,
        enabled: isAuthenticated
    });
}
_s5(useMatchStats, "czroWDo333PetoqhZg09CW0iHWA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/hooks/api/usePredictions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCreatePrediction": (()=>useCreatePrediction),
    "useUserPredictionStats": (()=>useUserPredictionStats),
    "useUserPredictions": (()=>useUserPredictions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/predictions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
function useUserPredictions(userId) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].predictions.byUser(userId),
        queryFn: {
            "useUserPredictions.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["predictionsApi"].getByUser(userId)
        }["useUserPredictions.useQuery"],
        enabled: !!userId
    });
}
_s(useUserPredictions, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useUserPredictionStats(userId) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].predictions.stats(userId),
        queryFn: {
            "useUserPredictionStats.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["predictionsApi"].getUserStats(userId)
        }["useUserPredictionStats.useQuery"],
        enabled: !!userId
    });
}
_s1(useUserPredictionStats, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreatePrediction() {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreatePrediction.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["predictionsApi"].create(data)
        }["useCreatePrediction.useMutation"],
        onSuccess: {
            "useCreatePrediction.useMutation": (_, variables)=>{
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].predictions.byUser(variables.userId)
                });
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].predictions.stats(variables.userId)
                });
            }
        }["useCreatePrediction.useMutation"]
    });
}
_s2(useCreatePrediction, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/hooks/api/useStreamWallet.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useDonorHistory": (()=>useDonorHistory),
    "useStreamerDonations": (()=>useStreamerDonations),
    "useStreamerStats": (()=>useStreamerStats),
    "useStreamerSubscriptions": (()=>useStreamerSubscriptions),
    "useSubscriberHistory": (()=>useSubscriberHistory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/stream-wallet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
;
;
;
function useStreamerDonations(streamerAddress) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].streamWallet.donations(streamerAddress),
        queryFn: {
            "useStreamerDonations.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamWalletApi"].getStreamerDonations(streamerAddress)
        }["useStreamerDonations.useQuery"],
        enabled: !!streamerAddress
    });
}
_s(useStreamerDonations, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useStreamerSubscriptions(streamerAddress) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].streamWallet.subscriptions(streamerAddress),
        queryFn: {
            "useStreamerSubscriptions.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamWalletApi"].getStreamerSubscriptions(streamerAddress)
        }["useStreamerSubscriptions.useQuery"],
        enabled: !!streamerAddress
    });
}
_s1(useStreamerSubscriptions, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useStreamerStats(streamerAddress) {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].streamWallet.stats(streamerAddress),
        queryFn: {
            "useStreamerStats.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamWalletApi"].getStreamerStats(streamerAddress)
        }["useStreamerStats.useQuery"],
        enabled: !!streamerAddress
    });
}
_s2(useStreamerStats, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useDonorHistory(donorAddress) {
    _s3();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].streamWallet.donorDonations(donorAddress),
        queryFn: {
            "useDonorHistory.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamWalletApi"].getDonorHistory(donorAddress)
        }["useDonorHistory.useQuery"],
        enabled: !!donorAddress
    });
}
_s3(useDonorHistory, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useSubscriberHistory(subscriberAddress) {
    _s4();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].streamWallet.subscriberSubscriptions(subscriberAddress),
        queryFn: {
            "useSubscriberHistory.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamWalletApi"].getSubscriberHistory(subscriberAddress)
        }["useSubscriberHistory.useQuery"],
        enabled: !!subscriberAddress
    });
}
_s4(useSubscriberHistory, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/hooks/api/useWaitlist.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCheckWaitlistAccess": (()=>useCheckWaitlistAccess),
    "useJoinWaitlist": (()=>useJoinWaitlist),
    "useWaitlistStats": (()=>useWaitlistStats)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/waitlist.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
function useCheckWaitlistAccess(email, walletAddress) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].waitlist.access(),
        queryFn: {
            "useCheckWaitlistAccess.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitlistApi"].checkAccess(email, walletAddress)
        }["useCheckWaitlistAccess.useQuery"],
        enabled: !!(email || walletAddress)
    });
}
_s(useCheckWaitlistAccess, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useWaitlistStats() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].waitlist.stats(),
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitlistApi"].getStats
    });
}
_s1(useWaitlistStats, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useJoinWaitlist() {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useJoinWaitlist.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitlistApi"].join(data)
        }["useJoinWaitlist.useMutation"],
        onSuccess: {
            "useJoinWaitlist.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].waitlist.access()
                });
                queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].waitlist.stats()
                });
            }
        }["useJoinWaitlist.useMutation"]
    });
}
_s2(useJoinWaitlist, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/hooks/api/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useBrowseMatches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useBrowseMatches.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useChat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useFanTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useFanTokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useFollows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useFollows.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useMatches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useMatches.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$usePredictions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/usePredictions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useStreamWallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useStreamWallet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useWaitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useWaitlist.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/hooks/api/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useBrowseMatches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useBrowseMatches.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useChat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useFanTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useFanTokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useFollows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useFollows.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useMatches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useMatches.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$usePredictions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/usePredictions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useStreamWallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useStreamWallet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useWaitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useWaitlist.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.5.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/components/WaitlistHeader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "WaitlistHeader": (()=>WaitlistHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useDynamicContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function WaitlistHeader() {
    _s();
    const { setShowAuthFlow, primaryWallet, handleLogOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDynamicContext"])();
    const connected = Boolean(primaryWallet?.address);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/Logo_FINAL.svg",
                                alt: "ChilizTV Logo",
                                width: 36,
                                height: 36,
                                className: "rounded-full shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/WaitlistHeader.tsx",
                                lineNumber: 17,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white text-[20px] uppercase tracking-wider font-semibold",
                                style: {
                                    fontFamily: 'Lexend, sans-serif'
                                },
                                children: "ChilizTV"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/WaitlistHeader.tsx",
                                lineNumber: 24,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/WaitlistHeader.tsx",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: !connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setShowAuthFlow(true),
                            className: "bg-primary hover:bg-primary/90 text-white font-bold rounded-lg px-6 transition-all duration-300",
                            style: {
                                fontFamily: 'Lexend, sans-serif'
                            },
                            children: "Connect Wallet"
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/components/WaitlistHeader.tsx",
                            lineNumber: 32,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/WaitlistHeader.tsx",
                                            lineNumber: 42,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white text-sm font-medium",
                                            style: {
                                                fontFamily: 'Lexend, sans-serif'
                                            },
                                            children: [
                                                primaryWallet?.address?.slice(0, 6),
                                                "...",
                                                primaryWallet?.address?.slice(-4)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/components/WaitlistHeader.tsx",
                                            lineNumber: 43,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/components/WaitlistHeader.tsx",
                                    lineNumber: 41,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>handleLogOut && handleLogOut(),
                                    className: "bg-primary hover:bg-primary/90 text-white font-bold rounded-lg px-6 transition-all duration-300",
                                    style: {
                                        fontFamily: 'Lexend, sans-serif'
                                    },
                                    children: "Disconnect"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/components/WaitlistHeader.tsx",
                                    lineNumber: 47,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/components/WaitlistHeader.tsx",
                            lineNumber: 40,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/components/WaitlistHeader.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/WaitlistHeader.tsx",
                lineNumber: 14,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/frontend/components/WaitlistHeader.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/WaitlistHeader.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_s(WaitlistHeader, "6yGVARNOPNqZfou7rI4HnHRCaV8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDynamicContext"]
    ];
});
_c = WaitlistHeader;
var _c;
__turbopack_context__.k.register(_c, "WaitlistHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/components/WaitlistFooter.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "WaitlistFooter": (()=>WaitlistFooter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
"use client";
;
;
;
// X (Twitter) Icon Component
const XIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        }, void 0, false, {
            fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
            lineNumber: 14,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
_c = XIcon;
function WaitlistFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative z-20 bg-black/50 backdrop-blur-md text-white border-t border-white/10 px-6 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm",
                style: {
                    fontFamily: 'Lexend, sans-serif'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/Logo_FINAL.svg",
                                alt: "ChilizTV",
                                width: 32,
                                height: 32,
                                className: "rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-[16px] uppercase tracking-wider font-semibold",
                                children: "ChilizTV"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/60 text-xs",
                                children: "Follow us"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://twitter.com/chiliztv",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-white/70 hover:text-primary transition-colors duration-200",
                                        "aria-label": "X (Twitter)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
                                            lineNumber: 40,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
                                        lineNumber: 33,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://linkedin.com/company/chiliztv",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-white/70 hover:text-primary transition-colors duration-200",
                                        "aria-label": "LinkedIn",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
                                            lineNumber: 49,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-white/50 text-xs mt-6",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " ChilizTV. All rights reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/frontend/components/WaitlistFooter.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_c1 = WaitlistFooter;
var _c, _c1;
__turbopack_context__.k.register(_c, "XIcon");
__turbopack_context__.k.register(_c1, "WaitlistFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/components/PixelCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PixelCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
class Pixel {
    width;
    height;
    ctx;
    x;
    y;
    color;
    speed;
    size;
    sizeStep;
    minSize;
    maxSizeInteger;
    maxSize;
    delay;
    counter;
    counterStep;
    isIdle;
    isReverse;
    isShimmer;
    constructor(canvas, context, x, y, color, speed, delay){
        this.width = canvas.width;
        this.height = canvas.height;
        this.ctx = context;
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = this.getRandomValue(0.1, 0.9) * speed;
        this.size = 0;
        this.sizeStep = Math.random() * 0.4;
        this.minSize = 0.5;
        this.maxSizeInteger = 2;
        this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
        this.delay = delay;
        this.counter = 0;
        this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
        this.isIdle = false;
        this.isReverse = false;
        this.isShimmer = false;
    }
    getRandomValue(min, max) {
        return Math.random() * (max - min) + min;
    }
    draw() {
        const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
    }
    appear() {
        this.isIdle = false;
        if (this.counter <= this.delay) {
            this.counter += this.counterStep;
            return;
        }
        if (this.size >= this.maxSize) {
            this.isShimmer = true;
        }
        if (this.isShimmer) {
            this.shimmer();
        } else {
            this.size += this.sizeStep;
        }
        this.draw();
    }
    disappear() {
        this.isShimmer = false;
        this.counter = 0;
        if (this.size <= 0) {
            this.isIdle = true;
            return;
        } else {
            this.size -= 0.1;
        }
        this.draw();
    }
    shimmer() {
        if (this.size >= this.maxSize) {
            this.isReverse = true;
        } else if (this.size <= this.minSize) {
            this.isReverse = false;
        }
        if (this.isReverse) {
            this.size -= this.speed;
        } else {
            this.size += this.speed;
        }
    }
}
function getEffectiveSpeed(value, reducedMotion) {
    const min = 0;
    const max = 100;
    const throttle = 0.001;
    if (value <= min || reducedMotion) {
        return min;
    } else if (value >= max) {
        return max * throttle;
    } else {
        return value * throttle;
    }
}
const VARIANTS = {
    default: {
        activeColor: null,
        gap: 5,
        speed: 35,
        colors: '#f8fafc,#f1f5f9,#cbd5e1',
        noFocus: false
    },
    blue: {
        activeColor: '#e0f2fe',
        gap: 10,
        speed: 25,
        colors: '#e0f2fe,#7dd3fc,#0ea5e9',
        noFocus: false
    },
    yellow: {
        activeColor: '#fef08a',
        gap: 3,
        speed: 20,
        colors: '#fef08a,#fde047,#eab308',
        noFocus: false
    },
    pink: {
        activeColor: '#fecdd3',
        gap: 6,
        speed: 80,
        colors: '#fecdd3,#fda4af,#e11d48',
        noFocus: true
    }
};
function PixelCard({ variant = 'default', gap, speed, colors, noFocus, className = '', children }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pixelsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timePreviousRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(performance.now());
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(window.matchMedia('(prefers-reduced-motion: reduce)').matches).current;
    const variantCfg = VARIANTS[variant] || VARIANTS.default;
    const finalGap = gap ?? variantCfg.gap;
    const finalSpeed = speed ?? variantCfg.speed;
    const finalColors = colors ?? variantCfg.colors;
    const finalNoFocus = noFocus ?? variantCfg.noFocus;
    const initPixels = ()=>{
        if (!containerRef.current || !canvasRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const width = Math.floor(rect.width);
        const height = Math.floor(rect.height);
        const ctx = canvasRef.current.getContext('2d');
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        canvasRef.current.style.width = `${width}px`;
        canvasRef.current.style.height = `${height}px`;
        const colorsArray = finalColors.split(',');
        const pxs = [];
        for(let x = 0; x < width; x += parseInt(finalGap.toString(), 10)){
            for(let y = 0; y < height; y += parseInt(finalGap.toString(), 10)){
                const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
                const dx = x - width / 2;
                const dy = y - height / 2;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const delay = reducedMotion ? 0 : distance;
                if (!ctx) return;
                pxs.push(new Pixel(canvasRef.current, ctx, x, y, color, getEffectiveSpeed(finalSpeed, reducedMotion), delay));
            }
        }
        pixelsRef.current = pxs;
    };
    const doAnimate = (fnName)=>{
        animationRef.current = requestAnimationFrame(()=>doAnimate(fnName));
        const timeNow = performance.now();
        const timePassed = timeNow - timePreviousRef.current;
        const timeInterval = 1000 / 60;
        if (timePassed < timeInterval) return;
        timePreviousRef.current = timeNow - timePassed % timeInterval;
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx || !canvasRef.current) return;
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        let allIdle = true;
        for(let i = 0; i < pixelsRef.current.length; i++){
            const pixel = pixelsRef.current[i];
            // @ts-expect-error Accessing dynamic method on Pixel helper
            pixel[fnName]();
            if (!pixel.isIdle) {
                allIdle = false;
            }
        }
        if (allIdle) {
            cancelAnimationFrame(animationRef.current);
        }
    };
    const handleAnimation = (name)=>{
        if (animationRef.current !== null) {
            cancelAnimationFrame(animationRef.current);
        }
        animationRef.current = requestAnimationFrame(()=>doAnimate(name));
    };
    const onMouseEnter = ()=>handleAnimation('appear');
    const onMouseLeave = ()=>handleAnimation('disappear');
    const onFocus = (e)=>{
        if (e.currentTarget.contains(e.relatedTarget)) return;
        handleAnimation('appear');
    };
    const onBlur = (e)=>{
        if (e.currentTarget.contains(e.relatedTarget)) return;
        handleAnimation('disappear');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PixelCard.useEffect": ()=>{
            initPixels();
            const observer = new ResizeObserver({
                "PixelCard.useEffect": ()=>{
                    initPixels();
                }
            }["PixelCard.useEffect"]);
            if (containerRef.current) {
                observer.observe(containerRef.current);
            }
            return ({
                "PixelCard.useEffect": ()=>{
                    observer.disconnect();
                    if (animationRef.current !== null) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            })["PixelCard.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["PixelCard.useEffect"], [
        finalGap,
        finalSpeed,
        finalColors,
        finalNoFocus
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `pixel-card ${className}`,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onFocus: finalNoFocus ? undefined : onFocus,
        onBlur: finalNoFocus ? undefined : onBlur,
        tabIndex: finalNoFocus ? -1 : 0,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                className: "pixel-canvas",
                ref: canvasRef
            }, void 0, false, {
                fileName: "[project]/apps/frontend/components/PixelCard.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/frontend/components/PixelCard.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, this);
}
_s(PixelCard, "1g2TH4O5gnWsyabujaCI4QYsjeI=");
_c = PixelCard;
var _c;
__turbopack_context__.k.register(_c, "PixelCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/app/waitlist/WaitlistContent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>WaitlistContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useWaitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useWaitlist.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TvIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/tv.js [app-client] (ecmascript) <export default as TvIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$WaitlistHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/WaitlistHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$WaitlistFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/WaitlistFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$PixelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/PixelCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
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
const SplineBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/apps/frontend/components/SplineBackground.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/apps/frontend/components/SplineBackground.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = SplineBackground;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;
function WaitlistContent() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openFaqIndex, setOpenFaqIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setShowAuthFlow, primaryWallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDynamicContext"])();
    const walletAddress = primaryWallet?.address;
    // Check waitlist access using React Query hook
    const { data: accessData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useWaitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckWaitlistAccess"])(undefined, walletAddress);
    const joinWaitlistMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useWaitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJoinWaitlist"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaitlistContent.useEffect": ()=>{
            const storedEmail = localStorage.getItem("waitlist_email");
            if (storedEmail) {
                setEmail(storedEmail);
            }
        }
    }["WaitlistContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaitlistContent.useEffect": ()=>{
            if (accessData?.hasAccess) {
                router.push("/");
            }
        }
    }["WaitlistContent.useEffect"], [
        accessData,
        router
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        const trimmedEmail = email.trim();
        if (!trimmedEmail) {
            setError("Email is required");
            return;
        }
        if (!EMAIL_PATTERN.test(trimmedEmail)) {
            setError("Please enter a valid email address");
            return;
        }
        if (trimmedEmail.length > MAX_EMAIL_LENGTH) {
            setError("Email is too long");
            return;
        }
        if (isSubmitted) {
            return;
        }
        setIsLoading(true);
        setIsSubmitted(true);
        joinWaitlistMutation.mutate({
            email: trimmedEmail,
            walletAddress,
            source: undefined
        }, {
            onSuccess: ()=>{
                setIsSuccess(true);
                localStorage.setItem("waitlist_email", trimmedEmail);
                setEmail(trimmedEmail);
                setIsLoading(false);
            },
            onError: (err)=>{
                setError(err.message || "Unable to join the waitlist. Please try again.");
                setIsSubmitted(false);
                setIsLoading(false);
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white overflow-x-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SplineBackground, {}, void 0, false, {
                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/20"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                    lineNumber: 110,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-[30%] left-[25%] w-1 h-1 bg-primary/60 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: '0s',
                                                animationDuration: '3s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 114,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-[70%] right-[25%] w-1 h-1 bg-[#FF3465]/40 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: '1s',
                                                animationDuration: '4s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 115,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-[50%] left-[70%] w-1 h-1 bg-primary/30 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: '2s',
                                                animationDuration: '5s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 116,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-[40%] left-[50%] w-1 h-1 bg-[#FF3465]/50 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: '0.5s',
                                                animationDuration: '3.5s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 117,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-[-200px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/15 rounded-full blur-3xl animate-pulse",
                                style: {
                                    animationDuration: '4s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                lineNumber: 125,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-[-150px] bottom-0 w-[300px] h-[300px] bg-[#FF3465]/10 rounded-full blur-2xl animate-pulse",
                                style: {
                                    animationDuration: '6s',
                                    animationDelay: '2s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                lineNumber: 126,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$WaitlistHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaitlistHeader"], {}, void 0, false, {
                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                lineNumber: 130,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                lineNumber: 133,
                columnNumber: 13
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                lineNumber: 133,
                columnNumber: 20
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                lineNumber: 133,
                columnNumber: 27
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                lineNumber: 133,
                columnNumber: 34
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                lineNumber: 133,
                columnNumber: 41
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                lineNumber: 133,
                columnNumber: 48
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hero",
                className: "relative z-20 w-full flex flex-col items-center px-8 pt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-20 w-full h-full flex flex-col items-center px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto text-center flex-1 flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[64px] md:text-[80px] lg:text-[96px] font-black text-white leading-[0.9] mb-6 drop-shadow-2xl",
                                    style: {
                                        fontFamily: 'Lexend, sans-serif'
                                    },
                                    children: [
                                        "Live Football.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 143,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary drop-shadow-2xl",
                                            children: "Live ChilizTV."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 144,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                    lineNumber: 141,
                                    columnNumber: 29
                                }, this),
                                isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-12 space-y-6 animate-in fade-in duration-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative inline-flex",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 animate-ping opacity-30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        className: "w-16 h-16 text-primary mx-auto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "w-16 h-16 text-primary relative"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 149,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[24px] md:text-[28px] font-semibold text-white drop-shadow-lg",
                                            style: {
                                                fontFamily: 'Lexend, sans-serif'
                                            },
                                            children: "You’re in the waitlist!"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 155,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                    lineNumber: 148,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-white mb-6 drop-shadow-lg",
                                            style: {
                                                fontFamily: 'Lexend, sans-serif'
                                            },
                                            children: "Join the Exclusive Waitlist"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 161,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            className: "mt-8 max-w-2xl mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row gap-3 items-center justify-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-full sm:w-auto flex-1 max-w-md",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "email",
                                                                    placeholder: "Enter your email",
                                                                    value: email,
                                                                    onChange: (e)=>setEmail(e.target.value),
                                                                    required: true,
                                                                    className: "w-full pl-12 pr-4 py-6 text-base bg-black/50 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 rounded-lg focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all",
                                                                    style: {
                                                                        fontFamily: 'Lexend, sans-serif'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "submit",
                                                            disabled: isLoading || isSubmitted,
                                                            size: "lg",
                                                            className: "bg-primary hover:bg-primary/90 px-8 py-6 text-[16px] font-bold tracking-wide uppercase rounded-lg shadow-2xl border-primary/20 border transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                                                            style: {
                                                                fontFamily: 'Lexend, sans-serif'
                                                            },
                                                            children: isLoading ? "Joining..." : "Join Waitlist"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 37
                                                }, this),
                                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 text-red-400 text-sm bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-lg px-6 py-3 inline-flex items-center gap-2 drop-shadow-lg",
                                                    style: {
                                                        fontFamily: 'Lexend, sans-serif'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "⚠️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 45
                                                        }, this),
                                                        error
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 41
                                                }, this),
                                                !walletAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/70 text-sm drop-shadow-md",
                                                            style: {
                                                                fontFamily: 'Lexend, sans-serif'
                                                            },
                                                            children: "Connect your wallet to get early access"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "button",
                                                            variant: "outline",
                                                            onClick: ()=>setShowAuthFlow(true),
                                                            className: "bg-gradient-to-br from-[#1a1919] to-[#0f0f0f] border border-white/10 text-white hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300",
                                                            style: {
                                                                fontFamily: 'Lexend, sans-serif'
                                                            },
                                                            children: "Connect Wallet"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 41
                                                }, this),
                                                walletAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 text-white/60 text-sm drop-shadow-md font-mono",
                                                    style: {
                                                        fontFamily: 'Lexend, sans-serif'
                                                    },
                                                    children: [
                                                        "✓ Wallet connected: ",
                                                        walletAddress.slice(0, 6),
                                                        "...",
                                                        walletAddress.slice(-4)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 166,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                            lineNumber: 140,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                        lineNumber: 139,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                    lineNumber: 137,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                lineNumber: 136,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "product-section",
                className: "py-16 sm:px-6 lg:px-8 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-center text-[20px] md:text-[24px] font-semibold text-white mb-12",
                            style: {
                                fontFamily: 'Lexend, sans-serif'
                            },
                            children: "Be among the first to experience the future of sports entertainment."
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                            lineNumber: 232,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$PixelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "pink",
                                    gap: 12,
                                    speed: 40,
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 flex flex-col justify-center p-6 w-full h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TvIcon$3e$__["TvIcon"], {
                                                            className: "w-6 h-6 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-semibold text-base",
                                                        style: {
                                                            fontFamily: 'Lexend, sans-serif'
                                                        },
                                                        children: "Sports Streaming"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                lineNumber: 240,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/80 text-sm leading-relaxed",
                                                style: {
                                                    fontFamily: 'Lexend, sans-serif'
                                                },
                                                children: "Watch streamers with a fan community, share your own content and earn fan tokens."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                lineNumber: 248,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                        lineNumber: 239,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                    lineNumber: 238,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$PixelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "pink",
                                    gap: 12,
                                    speed: 40,
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 flex flex-col justify-center p-6 w-full h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                            className: "w-6 h-6 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-semibold text-base",
                                                        style: {
                                                            fontFamily: 'Lexend, sans-serif'
                                                        },
                                                        children: "Predict & Earn"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                lineNumber: 255,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/80 text-sm leading-relaxed",
                                                style: {
                                                    fontFamily: 'Lexend, sans-serif'
                                                },
                                                children: "Make predictions, compete with your friends and the community to win exclusive rewards in fan tokens."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                lineNumber: 263,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                        lineNumber: 254,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                    lineNumber: 253,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$PixelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "pink",
                                    gap: 12,
                                    speed: 40,
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 flex flex-col justify-center p-6 w-full h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "w-6 h-6 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-semibold text-base",
                                                        style: {
                                                            fontFamily: 'Lexend, sans-serif'
                                                        },
                                                        children: "Everyone can be a Creator"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                lineNumber: 270,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/80 text-sm leading-relaxed",
                                                style: {
                                                    fontFamily: 'Lexend, sans-serif'
                                                },
                                                children: "Create your own sports content and monetize your passion. Stream live, share analysis, and fan tokens."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                lineNumber: 278,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                        lineNumber: 269,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                    lineNumber: 268,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                            lineNumber: 237,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                    lineNumber: 230,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                lineNumber: 229,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "faq-section",
                className: "py-16 sm:px-6 lg:px-8 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-center text-[64px] md:text-[72px] font-bold text-white mb-16",
                            style: {
                                fontFamily: 'Lexend, sans-serif'
                            },
                            children: "FAQ"
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                            lineNumber: 291,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                {
                                    question: "Who can stream on ChilizTV?",
                                    answer: "Anyone holding fan tokens can become a streamer on ChilizTV. Simply connect your wallet, verify your fan token holdings, and start sharing your sports content with the community. Whether you're a dedicated fan, analyst, or sports enthusiast, you have the power to create and monetize your content."
                                },
                                {
                                    question: "How does the ZK Identity system protect my privacy?",
                                    answer: "Our ZK (Zero-Knowledge) Identity system ensures 100% anonymity when withdrawing your funds. We collect zero personal data, and all transactions are cryptographically verified without revealing your identity. Your privacy is guaranteed through advanced zero-knowledge proofs, making your financial activities completely untraceable."
                                },
                                {
                                    question: "What sports can I make predictions on?",
                                    answer: "During the beta phase, ChilizTV will focus exclusively on football (soccer), allowing you to make predictions on matches, tournaments, and live events. As we expand, we'll be adding UFC, basketball, and many other popular sports to the platform."
                                },
                                {
                                    question: "How does the prediction system work?",
                                    answer: "Our prediction system allows you to make forecasts on live sports events and compete with the community. Place your predictions using fan tokens, and if you're correct, you'll earn rewards based on the prediction pool. The more accurate your predictions, the higher your ranking and potential earnings. All predictions are transparently recorded on the blockchain."
                                },
                                {
                                    question: "Can I watch live sports matches on ChilizTV?",
                                    answer: "ChilizTV is primarily a platform for fan-created content, live commentary, analysis, and community engagement around sports events. While we don't stream official matches directly, our creators provide real-time reactions, expert analysis, watch parties, and post-match discussions. You'll experience sports through the passionate lens of the fan community while earning and engaging with fan tokens."
                                }
                            ].map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: false,
                                    animate: {
                                        scale: openFaqIndex === index ? 1.02 : 1
                                    },
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    },
                                    className: `border-2 rounded-lg overflow-hidden bg-black/70 backdrop-blur-sm ${openFaqIndex === index ? 'border-primary shadow-lg shadow-primary/20' : 'border-white/20 hover:border-primary/50'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setOpenFaqIndex(openFaqIndex === index ? null : index),
                                            className: "w-full flex items-center justify-between px-6 py-4 text-left group transition-all duration-300 bg-black/30 hover:bg-black/50",
                                            style: {
                                                fontFamily: 'Lexend, sans-serif'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold text-sm",
                                                            children: [
                                                                "[",
                                                                index + 1,
                                                                "]"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-white font-semibold text-base md:text-lg uppercase tracking-wide",
                                                            children: faq.question
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    animate: {
                                                        rotate: openFaqIndex === index ? 180 : 0
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    },
                                                    className: "text-primary font-bold text-xl ml-4 flex-shrink-0",
                                                    children: openFaqIndex === index ? '[-]' : '[+]'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 332,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            initial: false,
                                            children: openFaqIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    height: "auto",
                                                    opacity: 1
                                                },
                                                exit: {
                                                    height: 0,
                                                    opacity: 0
                                                },
                                                transition: {
                                                    duration: 0.4,
                                                    ease: "easeInOut"
                                                },
                                                className: "overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        y: -10
                                                    },
                                                    animate: {
                                                        y: 0
                                                    },
                                                    exit: {
                                                        y: -10
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    },
                                                    className: "px-6 py-5 bg-black/20 border-t-2 border-primary/30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/80 text-sm leading-relaxed",
                                                        style: {
                                                            fontFamily: 'Lexend, sans-serif'
                                                        },
                                                        children: faq.answer
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                lineNumber: 353,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 351,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                    lineNumber: 319,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                            lineNumber: 296,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                    lineNumber: 289,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                lineNumber: 288,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "join",
                className: "py-16 sm:px-6 lg:px-8 pb-20 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-center text-[20px] md:text-[24px] font-semibold text-white mb-12",
                            style: {
                                fontFamily: 'Lexend, sans-serif'
                            },
                            children: "Ready to Join the Community?"
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                            lineNumber: 383,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "mt-8 max-w-2xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3 items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full sm:w-auto flex-1 max-w-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "email",
                                                    placeholder: "Enter your email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    required: true,
                                                    className: "w-full pl-12 pr-4 py-6 text-base bg-black/50 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 rounded-lg focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all",
                                                    style: {
                                                        fontFamily: 'Lexend, sans-serif'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 390,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: isLoading || isSubmitted,
                                            size: "lg",
                                            className: "bg-primary hover:bg-primary/90 px-8 py-6 text-[16px] font-bold tracking-wide uppercase rounded-lg shadow-2xl border-primary/20 border transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                                            style: {
                                                fontFamily: 'Lexend, sans-serif'
                                            },
                                            children: isLoading ? "Joining..." : "Join Waitlist"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 402,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                    lineNumber: 389,
                                    columnNumber: 25
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 text-red-400 text-sm bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-lg px-6 py-3 inline-flex items-center gap-2 drop-shadow-lg",
                                    style: {
                                        fontFamily: 'Lexend, sans-serif'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "⚠️"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 415,
                                            columnNumber: 33
                                        }, this),
                                        error
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                    lineNumber: 414,
                                    columnNumber: 29
                                }, this),
                                walletAddress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-white/60 text-sm drop-shadow-md font-mono",
                                    style: {
                                        fontFamily: 'Lexend, sans-serif'
                                    },
                                    children: [
                                        "✓ Wallet connected: ",
                                        walletAddress.slice(0, 6),
                                        "...",
                                        walletAddress.slice(-4)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                    lineNumber: 421,
                                    columnNumber: 41
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/70 text-sm drop-shadow-md",
                                            style: {
                                                fontFamily: 'Lexend, sans-serif'
                                            },
                                            children: "Connect your wallet to get early access"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 426,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "outline",
                                            onClick: ()=>setShowAuthFlow(true),
                                            className: "bg-gradient-to-br from-[#1a1919] to-[#0f0f0f] border border-white/10 text-white hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300",
                                            style: {
                                                fontFamily: 'Lexend, sans-serif'
                                            },
                                            children: "Connect Wallet"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                            lineNumber: 429,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                                    lineNumber: 425,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                            lineNumber: 388,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                    lineNumber: 382,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                lineNumber: 381,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$WaitlistFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaitlistFooter"], {}, void 0, false, {
                fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
                lineNumber: 444,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/frontend/app/waitlist/WaitlistContent.tsx",
        lineNumber: 101,
        columnNumber: 9
    }, this);
}
_s(WaitlistContent, "mCbQU1tO+D2wkFQA1u/eqyB8kD0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDynamicContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useWaitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckWaitlistAccess"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useWaitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJoinWaitlist"]
    ];
});
_c1 = WaitlistContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "SplineBackground");
__turbopack_context__.k.register(_c1, "WaitlistContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/frontend/app/waitlist/WaitlistContent.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/apps/frontend/app/waitlist/WaitlistContent.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=_522ab0f9._.js.map