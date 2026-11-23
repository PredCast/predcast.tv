import { describe, expect, it } from 'vitest';

import { MessageType } from '@chiliztv/domain/chat/entities/ChatMessage';

import { accountFixture, linkedWalletFixture } from '../../../../testing/fixtures/gamification.fixtures';
import { buildSourcesHarness } from '../../../../testing/gamification/sourcesHarness';
import { GamificationActivityRecorder } from '../../services/GamificationActivityRecorder';
import type { RecordChatXpUseCase } from '../RecordChatXpUseCase';

function setup() {
    const h = buildSourcesHarness();
    const account = accountFixture();
    const wallet = linkedWalletFixture(account);
    h.addAccount(account, [wallet]);
    return { h, account, accountId: account.id, wallet: wallet.walletAddress };
}

const chat = (accountId: string, id: string, text: string) => ({
    accountId, messageId: id, matchId: 999_001, messageType: MessageType.REGULAR, text,
});

describe('RecordChatXpUseCase', () => {
    it('CA11 — 6 valid messages give 5 XP; the hash is stored, never the text', async () => {
        const { h, accountId } = setup();
        for (let i = 1; i <= 6; i++) {
            await h.chatXp.execute(chat(accountId, `m${i}`, `What a goal number ${i}!`));
            h.clock.advanceBySec(30);
        }
        const rows = h.rowsOf('chat_message');
        expect(rows.map((r) => r.xp)).toEqual([1, 1, 1, 1, 1, 0]);
        expect(rows[5].reason).toBe('daily_cap');
        expect(typeof rows[0].metadata.textHash).toBe('string');
        expect(JSON.stringify(h.store.rows)).not.toContain('What a goal');
        expect((await h.store.progress.getSnapshot(accountId)).chat_messages?.value).toBe(6);
        expect(h.rowsOf('onboarding_step').map((r) => r.refKey)).toEqual([`onboarding:${accountId}:chat`]);
    });

    it('CA11 — a duplicate or a message 10 s after the previous one writes no row', async () => {
        const { h, accountId } = setup();
        await h.chatXp.execute(chat(accountId, 'a', 'Allez les bleus'));
        h.clock.advanceBySec(10);
        expect(await h.chatXp.execute(chat(accountId, 'b', 'Something else entirely'))).toEqual({ status: 'rejected', reason: 'too_soon' });
        h.clock.advanceBySec(60);
        expect(await h.chatXp.execute(chat(accountId, 'c', '  ALLEZ   les bleus '))).toEqual({ status: 'rejected', reason: 'duplicate' });
        expect(await h.chatXp.execute(chat(accountId, 'd', 'gg'))).toEqual({ status: 'rejected', reason: 'too_short' });
        expect(h.rowsOf('chat_message')).toHaveLength(1);
    });

    it('CA11 — a message removed by moderation is reversed once (-1 XP, progress down)', async () => {
        const { h, accountId } = setup();
        await h.chatXp.execute(chat(accountId, 'msg-removed', 'Penalty for sure'));
        const before = h.store.profile(accountId).xpTotal;
        h.source.removals.push({ messageId: 'msg-removed', removedAt: h.clock.now() });
        await h.chain.execute();
        await h.chain.execute();

        const reversal = h.store.rows.filter((r) => r.refKey === 'rev:chat:msg-removed');
        expect(reversal).toHaveLength(1);
        expect(reversal[0].xp).toBe(-1);
        expect(reversal[0].reason).toBe('message_removed');
        expect(h.store.profile(accountId).xpTotal).toBe(before - 1);
        expect((await h.store.progress.getSnapshot(accountId)).chat_messages?.value).toBe(0);
    });

    it('CA20 — a banned account earns no chat XP', async () => {
        const { h, accountId, wallet } = setup();
        h.ban(wallet);
        await h.chatXp.execute(chat(accountId, 'x', 'Banned but talking'));
        expect(h.rowsOf('chat_message').map((r) => [r.xp, r.reason])).toEqual([[0, 'banned']]);
        expect(h.store.profile(accountId).xpTotal).toBe(0);
    });

    it('a gamification failure never fails the chat send', async () => {
        const { h, accountId } = setup();
        const failing = { execute: async () => { throw new Error('db down'); } } as unknown as RecordChatXpUseCase;
        const recorder = new GamificationActivityRecorder(h.clock, h.logger, failing, h.followXp, h.profileSteps);
        await expect(recorder.chatMessageSent(chat(accountId, 'y', 'Still sent'))).resolves.toBeUndefined();
    });
});

describe('RecordFollowXpUseCase', () => {
    it('credits once per streamer for life, 15 XP per day at most, never oneself', async () => {
        const { h, account, accountId } = setup();
        const follow = (streamerId: string) => h.followXp.execute({ accountId, followerDynamicUserId: account.dynamicUserId, streamerId });
        for (const streamer of ['s1', 's2', 's3', 's4']) await follow(streamer);
        expect(await follow('s1')).toEqual({ status: 'duplicate', accountId });
        expect(await follow(account.dynamicUserId)).toEqual({ status: 'rejected', reason: 'self_follow' });

        expect(h.rowsOf('follow').map((r) => r.xp)).toEqual([5, 5, 5, 0]);
        expect((await h.store.progress.getSnapshot(accountId)).streamers_followed?.items).toEqual(['s1', 's2', 's3', 's4']);
        expect(h.rowsOf('onboarding_step').map((r) => r.refKey)).toEqual([`onboarding:${accountId}:follow`]);
    });
});

describe('RecordProfileStepUseCase', () => {
    it('credits username and avatar once each; five steps unlock First Steps', async () => {
        const { h, accountId } = setup();
        await h.activity.profileUpdated(accountId, { username: 'alice', avatarUrl: 'https://cdn.example/a.png' });
        await h.activity.profileUpdated(accountId, { username: 'alice2', avatarUrl: null });
        expect(h.rowsOf('onboarding_step').map((r) => r.refKey)).toEqual([
            `onboarding:${accountId}:username`,
            `onboarding:${accountId}:avatar`,
        ]);

        for (const step of ['chat', 'follow', 'watch'] as const) await h.profileSteps.execute(accountId, step, h.clock.now());
        expect(h.store.achievements.map((a) => a.achievementId)).toContain('first_steps');
    });
});
