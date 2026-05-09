/**
 * Cancels stuck pending transactions by replacing them with 0-value self-transfers
 * at a higher gas price. Run this when "replacement transaction underpriced" errors occur.
 *
 * Spicy public RPC may not expose mempool state reliably; this script proactively
 * cancels N future nonces to clear any hidden stuck txs.
 */
import * as dotenv from 'dotenv';
dotenv.config();

import { createWalletClient, createPublicClient, http, parseGwei } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { chainFor } from '@chiliztv/blockchain';

const chain = chainFor((process.env.NETWORK === 'mainnet' ? 'mainnet' : 'testnet'));
const ADMIN_PRIVATE_KEY = process.env.ADMIN_PRIVATE_KEY as `0x${string}`;

// How many nonces to proactively clear starting from current latest nonce
const PROACTIVE_CLEAR_COUNT = 20;

async function main() {
    if (!ADMIN_PRIVATE_KEY) throw new Error('ADMIN_PRIVATE_KEY not set');

    const account = privateKeyToAccount(ADMIN_PRIVATE_KEY);
    const publicClient = createPublicClient({ chain: chain, transport: http() });
    const walletClient = createWalletClient({ account, chain: chain, transport: http() });

    const latestNonce = await publicClient.getTransactionCount({ address: account.address, blockTag: 'latest' });
    const pendingNonce = await publicClient.getTransactionCount({ address: account.address, blockTag: 'pending' });

    console.log(`Address: ${account.address}`);
    console.log(`Latest nonce (confirmed): ${latestNonce}`);
    console.log(`Pending nonce (incl. mempool): ${pendingNonce}`);

    // Use the higher of pendingNonce and latestNonce + PROACTIVE_CLEAR_COUNT as upper bound
    const upperBound = Math.max(pendingNonce, latestNonce + PROACTIVE_CLEAR_COUNT);
    const count = upperBound - latestNonce;
    console.log(`\nProactively clearing ${count} nonces (${latestNonce} to ${upperBound - 1}) at 200 gwei...`);

    // 200 gwei: well above our previous 50 gwei stuck txs (needs +10% = 55 gwei to replace)
    const cancelGasPrice = parseGwei('200');

    for (let nonce = latestNonce; nonce < upperBound; nonce++) {
        process.stdout.write(`  Nonce ${nonce}... `);
        try {
            const hash = await walletClient.sendTransaction({
                to: account.address,
                value: 0n,
                nonce,
                maxFeePerGas: cancelGasPrice,
                maxPriorityFeePerGas: cancelGasPrice,
            });
            process.stdout.write(`sent (${hash.slice(0, 10)}...) `);
            const receipt = await publicClient.waitForTransactionReceipt({ hash, timeout: 60_000 });
            console.log(`confirmed in block ${receipt.blockNumber}`);
        } catch (err: any) {
            console.log(`failed: ${err.message?.split('\n')[0]}`);
        }
    }

    const finalNonce = await publicClient.getTransactionCount({ address: account.address, blockTag: 'latest' });
    console.log(`\nDone. Final confirmed nonce: ${finalNonce}`);
}

main().catch(console.error);
