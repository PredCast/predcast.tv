/** Chain ids the fan-token deployments are keyed by. */
export const CHAIN_IDS = { chilizMainnet: 88888, base: 8453 } as const;

export interface FanTokenDeployment {
    readonly address: `0x${string}`;
    readonly decimals: number;
}

/**
 * On-chain deployments of fan tokens NOT yet wired into the swap / bet flows.
 * The tokens those flows use live in `apps/backend/src/infrastructure/config/chiliz.config.ts`
 * (and `apps/frontend/config/chiliz.config.ts`); both lists are to be consolidated with
 * the Buy / Sell task. Addresses from CoinGecko's `detail_platforms`.
 */
export const FAN_TOKEN_DEPLOYMENTS: Readonly<Record<string, Readonly<Record<number, FanTokenDeployment>>>> = {
    // Launched via a Socios FTO (Oct 2026): 18 decimals on Chiliz, unlike the 0-dp CAP-20 fan tokens.
    OM: {
        [CHAIN_IDS.chilizMainnet]: { address: '0x08cde3ab71adc228332cb774c4ecca4d664ab807', decimals: 18 },
        [CHAIN_IDS.base]: { address: '0xa5073c2e9ca348c0550198b582af50ec7f2a48d4', decimals: 18 },
    },
};
