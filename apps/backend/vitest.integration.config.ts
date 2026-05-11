import path from 'node:path';
import { defineConfig } from 'vitest/config';

// Integration runs hit a real Anvil + Supabase local stack. They are slower
// and more brittle than unit tests, so they get their own config with longer
// timeouts and the retry knob enabled.
export default defineConfig({
    test: {
        environment: 'node',
        globals: false,
        include: ['src/testing/integration/**/*.test.ts'],
        testTimeout: 60_000,
        hookTimeout: 120_000,
        retry: 1,
        // Run integration suites serially — Anvil + Supabase are shared
        // resources and parallel tests would step on each other.
        pool: 'forks',
        poolOptions: { forks: { singleFork: true } },
    },
    resolve: {
        alias: [
            { find: /^@chiliztv\/domain$/, replacement: path.resolve(__dirname, '../../packages/domain/src/index.ts') },
            { find: /^@chiliztv\/domain\/(.*)$/, replacement: path.resolve(__dirname, '../../packages/domain/src/$1') },
            { find: /^@chiliztv\/blockchain$/, replacement: path.resolve(__dirname, '../../packages/blockchain/src/index.ts') },
            { find: /^@chiliztv\/blockchain\/(.*)$/, replacement: path.resolve(__dirname, '../../packages/blockchain/src/$1') },
            { find: /^@chiliztv\/shared$/, replacement: path.resolve(__dirname, '../../packages/shared/src/index.ts') },
            { find: /^@chiliztv\/shared\/(.*)$/, replacement: path.resolve(__dirname, '../../packages/shared/src/$1') },
        ],
    },
});
