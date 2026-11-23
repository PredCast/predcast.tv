import { describe, expect, it } from 'vitest';
import { z } from 'zod';

import { ACHIEVEMENTS } from '@chiliztv/domain/gamification/catalog/achievements';
import type { UnlockedAchievement } from '@chiliztv/domain/gamification/entities/Progress';
import { xpForLevel } from '@chiliztv/domain/gamification/policies/levelCurve';
import {
    CurrentDoubleXpResponseSchema,
    ProfileBadgeDtoSchema,
    ProfileBadgesResponseSchema,
    ProfileCardDtoSchema,
    PublicProfileDtoSchema,
} from '@chiliztv/shared';

import { accountFixture, doubleXpEventFixture, GAMI_NOW, linkedWalletFixture, streakFixture } from '../../../../testing/fixtures/gamification.fixtures';
import { buildGamificationReadHarness } from '../../../../testing/gamification/gamificationReadHarness';

/** CA15: no public response may carry an amount nor the private Bet Volume achievement. */
const FORBIDDEN_KEY = /amount|stake|pnl|volume/i;

/** Every object key a Zod schema can produce, nested shapes included. */
function schemaKeys(schema: z.ZodTypeAny): string[] {
    if (schema instanceof z.ZodObject) {
        return Object.entries(schema.shape as Record<string, z.ZodTypeAny>).flatMap(([key, value]) => [key, ...schemaKeys(value)]);
    }
    if (schema instanceof z.ZodArray) return schemaKeys(schema.element);
    if (schema instanceof z.ZodNullable || schema instanceof z.ZodOptional) return schemaKeys(schema.unwrap());
    if (schema instanceof z.ZodRecord) return schemaKeys(schema.valueSchema);
    if (schema instanceof z.ZodUnion) return (schema.options as z.ZodTypeAny[]).flatMap(schemaKeys);
    if (schema instanceof z.ZodEffects) return schemaKeys(schema.innerType());
    if (schema instanceof z.ZodLazy) return schemaKeys(schema.schema);
    return [];
}

/** Every key of a JSON value, at any depth. */
function jsonKeys(value: unknown): string[] {
    if (Array.isArray(value)) return value.flatMap(jsonKeys);
    if (value !== null && typeof value === 'object') {
        return Object.entries(value).flatMap(([key, v]) => [key, ...jsonKeys(v)]);
    }
    return [];
}

const PUBLIC_SCHEMAS = {
    ProfileBadgeDto: ProfileBadgeDtoSchema,
    ProfileBadgesResponse: ProfileBadgesResponseSchema,
    ProfileCardDto: ProfileCardDtoSchema,
    PublicProfileDto: PublicProfileDtoSchema,
    DoubleXpPublicDto: CurrentDoubleXpResponseSchema,
} as const;

describe('CA15 — public read models never expose an amount', () => {
    it.each(Object.entries(PUBLIC_SCHEMAS))('%s declares no amount-like key', (_name, schema) => {
        const keys = schemaKeys(schema);
        expect(keys.length).toBeGreaterThan(0);
        expect(keys.filter((k) => FORBIDDEN_KEY.test(k))).toEqual([]);
    });

    it('responses of a big bettor carry no amount key, no Bet Volume tier and no other linked wallet', async () => {
        const h = buildGamificationReadHarness();
        const wallet = '0x' + 'd1'.repeat(20);
        const otherWallet = '0x' + 'd2'.repeat(20);
        const account = accountFixture({ primaryWallet: wallet });
        h.addAccount(account, [
            linkedWalletFixture(account, { walletAddress: wallet }),
            linkedWalletFixture(account, { walletAddress: otherWallet }),
        ], 'WHALE');
        h.store.setProfile(account.id, {
            xpTotal: xpForLevel(40), level: 40, levelPeak: 40, showcase: ['bet_volume:6'],
            streak: streakFixture({ current: 5, lastDay: '2027-03-01' }),
        });
        const betVolume = ACHIEVEMENTS.find((a) => a.id === 'bet_volume');
        const tiers = betVolume?.tiers.map((t): UnlockedAchievement => ({
            accountId: account.id, achievementId: 'bet_volume', tier: t.tier, unlockedAt: GAMI_NOW, context: {},
        })) ?? [];
        h.store.achievements.push(...tiers);
        h.store.progressMap.set(account.id, new Map([['bet_volume_usdc', { value: 250_000, items: [] }]]));
        h.store.events = [doubleXpEventFixture()];

        const responses = [
            ProfileCardDtoSchema.parse(await h.card.execute(wallet)),
            PublicProfileDtoSchema.parse(await h.profile.execute(wallet)),
            ProfileBadgesResponseSchema.parse(await h.badges.execute({ wallets: [wallet], ip: 'ca15' })),
            CurrentDoubleXpResponseSchema.parse(await h.doubleXp.execute()),
        ];
        for (const response of responses) {
            expect(jsonKeys(response).filter((k) => FORBIDDEN_KEY.test(k))).toEqual([]);
            const json = JSON.stringify(response);
            expect(json).not.toContain('bet_volume');
            expect(json).not.toContain('250000');
            expect(json).not.toContain(otherWallet);
        }
    });
});
