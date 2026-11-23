import { spawn, spawnSync, type ChildProcess } from 'child_process';
import {
    concat,
    createPublicClient,
    createWalletClient,
    encodeAbiParameters,
    http,
    numberToHex,
    pad,
    toEventSelector,
    type AbiEvent,
    type Hex,
} from 'viem';
import { foundry } from 'viem/chains';

import { FOOTBALL_PARI_MATCH_ABI } from '@chiliztv/blockchain';

/**
 * Runtime code that emits LOG2 / LOG3 from its calldata: `[topicCount][topics…][data]`. Installed
 * with `anvil_setCode` in place of a FootballPariMatch proxy, it emits the contract's events with
 * the real ABI encoding without the deploy harness (`TODO(integration-deploy)` in `_setup.ts`).
 */
const LOG_EMITTER_CODE: Hex = '0x366000600037600051600314601d57604051602051606036036060a2005b606051604051602051608036036080a300';

/** Anvil's first dev account, unlocked by default. */
const SENDER = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';

export function anvilAvailable(): boolean {
    return spawnSync('anvil', ['--version'], { stdio: 'pipe' }).status === 0;
}

export interface AnvilChain {
    readonly rpcUrl: string;
    readonly process: ChildProcess;
}

/** Vanilla local chain (no fork, nothing leaves the machine) whose genesis is at `genesis`. */
export async function startAnvil(genesis: Date): Promise<AnvilChain> {
    const port = 18_545 + Math.floor(Math.random() * 1_000);
    const proc = spawn('anvil', ['--port', String(port), '--timestamp', String(Math.floor(genesis.getTime() / 1000))], {
        stdio: 'ignore',
    });
    const rpcUrl = `http://127.0.0.1:${port}`;
    const client = createPublicClient({ chain: foundry, transport: http(rpcUrl) });
    for (let i = 0; i < 50; i++) {
        try {
            await client.getBlockNumber();
            return { rpcUrl, process: proc };
        } catch {
            await new Promise((res) => setTimeout(res, 200));
        }
    }
    proc.kill('SIGTERM');
    throw new Error(`anvil did not answer on ${rpcUrl}`);
}

export async function stopAnvil(chain: AnvilChain | null): Promise<void> {
    if (!chain || chain.process.killed) return;
    chain.process.kill('SIGTERM');
    await new Promise<void>((res) => {
        chain.process.once('exit', () => res());
        setTimeout(res, 2_000);
    });
}

type EventName = 'MarketCreated' | 'PositionTaken' | 'MarketResolved' | 'MarketCancelled';

function eventOf(name: EventName): AbiEvent {
    const item = FOOTBALL_PARI_MATCH_ABI.find((i) => i.type === 'event' && i.name === name);
    if (!item || item.type !== 'event') throw new Error(`${name} missing from the FootballPariMatch ABI`);
    return item;
}

/** Topics and data of `name` encoded with the contract ABI; `values` follow its input order. */
function encodeLog(name: EventName, values: ReadonlyArray<unknown>): { topics: Hex[]; data: Hex } {
    const event = eventOf(name);
    const topics: Hex[] = [toEventSelector(event)];
    const plainTypes: AbiEvent['inputs'][number][] = [];
    const plainValues: unknown[] = [];
    event.inputs.forEach((input, i) => {
        if (input.indexed) topics.push(encodeAbiParameters([input], [values[i]]));
        else {
            plainTypes.push(input);
            plainValues.push(values[i]);
        }
    });
    return { topics, data: encodeAbiParameters(plainTypes, plainValues) };
}

/** Emits PariMatch events from `contract` on a local Anvil chain, one transaction (block) each. */
export class PariMatchLogEmitter {
    private readonly wallet;
    private readonly client;

    constructor(private readonly chain: AnvilChain, readonly contract: Hex) {
        this.client = createPublicClient({ chain: foundry, transport: http(chain.rpcUrl), pollingInterval: 50 });
        this.wallet = createWalletClient({ chain: foundry, transport: http(chain.rpcUrl), account: SENDER });
    }

    async install(): Promise<void> {
        await this.rpc('anvil_setCode', [this.contract, LOG_EMITTER_CODE]);
    }

    async emit(name: EventName, values: ReadonlyArray<unknown>): Promise<void> {
        const { topics, data } = encodeLog(name, values);
        const calldata = concat([pad(numberToHex(topics.length)), ...topics, data]);
        const hash = await this.wallet.sendTransaction({ to: this.contract, data: calldata });
        const receipt = await this.client.waitForTransactionReceipt({ hash });
        if (receipt.logs.length !== 1) throw new Error(`${name}: expected one log, got ${receipt.logs.length}`);
    }

    /** Buries the last events under the indexer's re-org margin (head − 6). */
    async mine(blocks: number): Promise<void> {
        await this.rpc('anvil_mine', [numberToHex(blocks)]);
    }

    private async rpc(method: string, params: ReadonlyArray<unknown>): Promise<void> {
        const r = await fetch(this.chain.rpcUrl, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
        });
        const body = (await r.json()) as { error?: { message: string } };
        if (body.error) throw new Error(`${method}: ${body.error.message}`);
    }
}
