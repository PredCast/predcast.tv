import type { DoubleXpWindow } from '../policies/doubleXpPolicy';

export interface DoubleXpEvent extends DoubleXpWindow {
    readonly name: string;
    readonly createdByWallet: string;
    readonly createdAt: Date;
    readonly cancelledByWallet: string | null;
}
