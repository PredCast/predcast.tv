/** Outcome of one chain processor step: rows read and accounts whose XP or progress moved. */
export interface ChainStepResult {
    readonly processed: number;
    readonly touched: ReadonlySet<string>;
}
