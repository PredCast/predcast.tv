import { WiringAlert, WiringStep } from '../entities/WiringAlert';

export interface IWiringAlertRepository {
    upsert(matchAddress: string, missingSteps: ReadonlyArray<WiringStep>): Promise<void>;
    markResolved(matchAddress: string, resolvedAt: Date): Promise<void>;
    findUnresolved(): Promise<WiringAlert[]>;
}
