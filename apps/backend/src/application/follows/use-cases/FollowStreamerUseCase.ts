import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { Follow } from '@chiliztv/domain/follows/entities/Follow';
import { IFollowRepository } from '@chiliztv/domain/follows/repositories/IFollowRepository';
import { GamificationActivityRecorder } from '../../gamification/services/GamificationActivityRecorder';

export interface FollowStreamerCommand {
  followerId: string;
  streamerId: string;
  streamerName: string;
  /** From the JWT; absent on a legacy session (no follow XP). */
  accountId?: string;
}

@injectable()
export class FollowStreamerUseCase {
  constructor(
    @inject(TOKENS.IFollowRepository)
    private readonly followRepository: IFollowRepository,
    @inject(GamificationActivityRecorder)
    private readonly gamification: GamificationActivityRecorder,
  ) {}

  async execute({ accountId, ...props }: FollowStreamerCommand): Promise<Follow> {
    const follow = await this.followRepository.follow(props);
    if (accountId) {
      await this.gamification.streamerFollowed({
        accountId,
        followerDynamicUserId: props.followerId,
        streamerId: props.streamerId,
      });
    }
    return follow;
  }
}
