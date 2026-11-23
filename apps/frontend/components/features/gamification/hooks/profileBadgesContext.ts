'use client';

import { createContext } from 'react';
import type { ProfileBadgeDto } from '@chiliztv/shared';

/** Badges loaded once for a list (chat, leaderboard) and read by each row. Keys are lowercase. */
export const ProfileBadgesContext = createContext<ReadonlyMap<string, ProfileBadgeDto>>(new Map());
