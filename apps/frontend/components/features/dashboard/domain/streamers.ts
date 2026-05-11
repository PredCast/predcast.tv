export interface FollowedStreamer {
    readonly id: string;
    readonly streamerId: string;
    readonly name: string;
    readonly league: string | null;
    readonly live: boolean;
}

export interface SubscribedStreamer {
    readonly id: string;
    readonly streamerId: string;
    readonly name: string;
    readonly renewsAt: number;
    readonly monthlyUSDC: number | null;
    readonly active: boolean;
}
