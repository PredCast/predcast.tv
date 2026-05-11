import { inject, injectable } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { TokenPrice } from '@chiliztv/domain/prices/entities/TokenPrice';
import { ITokenPriceRepository } from '@chiliztv/domain/prices/repositories/ITokenPriceRepository';

@injectable()
export class GetTokenPricesUseCase {
    constructor(
        @inject(TOKENS.ITokenPriceRepository)
        private readonly repo: ITokenPriceRepository,
    ) {}

    execute(): Promise<TokenPrice[]> {
        return this.repo.findAll();
    }

    executeBySymbols(symbols: ReadonlyArray<string>): Promise<ReadonlyMap<string, TokenPrice>> {
        return this.repo.findManyBySymbols(symbols);
    }

    executeBySymbol(symbol: string): Promise<TokenPrice | null> {
        return this.repo.findBySymbol(symbol);
    }
}
