import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { Follow } from '@chiliztv/domain/follows/entities/Follow';
import { IFollowRepository } from '@chiliztv/domain/follows/repositories/IFollowRepository';

export interface GetFollowedStreamersQuery {
  readonly followerId: string;
  readonly limit: number;
  readonly offset: number;
}

export interface GetFollowedStreamersResult {
  readonly items: Follow[];
  readonly total: number;
}

@injectable()
export class GetFollowedStreamersUseCase {
  constructor(
    @inject(TOKENS.IFollowRepository)
    private readonly followRepository: IFollowRepository
  ) {}

  async execute(query: GetFollowedStreamersQuery): Promise<GetFollowedStreamersResult> {
    const [items, total] = await Promise.all([
      this.followRepository.getFollowedStreamers(query.followerId, {
        limit: query.limit,
        offset: query.offset,
      }),
      this.followRepository.countFollowedStreamers(query.followerId),
    ]);
    return { items, total };
  }
}
