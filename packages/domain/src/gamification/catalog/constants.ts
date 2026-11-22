/** Minimum stake of one `bets` row for it to earn volume XP or bet progress (decision 2). */
export const QUALIFYING_STAKE_USDC = 5;

/** `founder` is unlocked by reaching level 5 before `GAMIFICATION_LAUNCH_AT + 60 days`. */
export const FOUNDER_WINDOW_DAYS = 60;
export const FOUNDER_LEVEL = 5;

/** A double XP event must start at least this long after its creation. */
export const DOUBLE_XP_MIN_NOTICE_HOURS = 24;
export const DOUBLE_XP_MAX_DURATION_HOURS = 72;
export const DOUBLE_XP_MAX_PER_MONTH = 4;
export const DOUBLE_XP_MAX_MULTIPLIER = 2;
/** Multipliers are multiples of 1 / DOUBLE_XP_MULTIPLIER_STEPS (0.25). */
export const DOUBLE_XP_MULTIPLIER_STEPS = 4;

export const MAX_LEVEL = 60;
export const XP_PER_LEVEL_STEP = 50;

export const CHECK_IN_BASE_XP = 50;
export const CHECK_IN_STREAK_STEP_XP = 5;
export const CHECK_IN_MAX_XP = 100;

export const STREAK_FREEZE_EVERY_DAYS = 7;
export const STREAK_MAX_FREEZES = 2;

export const CHAT_MIN_LENGTH = 4;
export const CHAT_MIN_ALPHANUMERICS = 2;
export const CHAT_MIN_INTERVAL_SECONDS = 20;
export const CHAT_DUPLICATE_WINDOW_HOURS = 24;
export const CHAT_PROGRESS_DAILY_CAP = 50;

export const WATCH_XP_TRANCHE_MINUTES = 10;
export const WATCH_XP_MAX_MINUTES = 100;
export const WATCH_PROGRESS_DAILY_CAP_MINUTES = 240;
export const WATCH_LEAGUE_MINUTES = 10;
export const ONBOARDING_WATCH_MINUTES = 5;

export const STREAM_XP_TRANCHE_MINUTES = 6;
export const STREAM_PROGRESS_DAILY_CAP_MINUTES = 360;
export const STREAMER_EXEMPT_LIFETIME_MINUTES = 60;
export const STREAM_VIEWER_MIN_ACCOUNT_AGE_HOURS = 24;

export const SUPPORT_MIN_AMOUNT_USDC = 1;

/** XP of one market in the `per_market` safer variant of `bet_volume` (§13.1); amount ignored. */
export const BET_VOLUME_PER_MARKET_XP = 5;
export const BET_VOLUME_PER_MARKET_DAILY_CAP = 25;

export const SHOWCASE_SLOT_LEVELS: ReadonlyArray<number> = [1, 10, 20];
