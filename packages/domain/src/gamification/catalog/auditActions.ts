/** `audit_log.action` values written by the gamification admin actions. */
export const GAMIFICATION_AUDIT_ACTIONS = {
    doubleXpCreate: 'gamification.double_xp.create',
    doubleXpCancel: 'gamification.double_xp.cancel',
    accountSuspend: 'gamification.account.suspend',
    accountUnsuspend: 'gamification.account.unsuspend',
    xpAdjust: 'gamification.xp.adjust',
} as const;

export type GamificationAuditAction = (typeof GAMIFICATION_AUDIT_ACTIONS)[keyof typeof GAMIFICATION_AUDIT_ACTIONS];
