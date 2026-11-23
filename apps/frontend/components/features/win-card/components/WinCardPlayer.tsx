'use client';

import { FrameRing } from '@/components/features/gamification/components/FrameRing';
import { rankLabel, titleLabel } from '@/components/features/gamification/domain/labels';
import { rankStyleForLevel, rankStyleOf } from '@/components/features/gamification/domain/rankStyle';

import type { WinCardData } from '../domain/types';
import styles from './WinCard.module.css';
import { WinCardAvatar } from './WinCardAvatar';

interface WinCardPlayerProps {
  readonly data: WinCardData;
  readonly story: boolean;
}

/** Ring thickness at the 1080 px canvas scale (the card is shown scaled down). */
const RING_PX = 6;

/** Footer identity: avatar in the worn frame with the level chip, pseudo, title or rank, weekly rank (G19). */
export function WinCardPlayer({ data, story }: WinCardPlayerProps) {
  const g = data.gamification;
  const avatarSize = story ? 74 : 60;
  const outer = avatarSize + 2 * RING_PX;
  const chip = g ? rankStyleForLevel(g.level) : null;
  const subline = g ? (g.titleId ? titleLabel(g.titleId, g.titleCycleId) : `${rankLabel(g.rankTier)} rank`) : null;

  return (
    <div className={styles.player}>
      {g && chip ? (
        <span style={{ position: 'relative', display: 'grid', placeItems: 'center', width: outer, height: outer, borderRadius: '50%', flex: 'none' }}>
          <FrameRing frameId={g.frameId} size={outer} still />
          <span style={{ position: 'relative', zIndex: 1, borderRadius: '50%', border: '3px solid #0A0A0A', display: 'grid' }}>
            <WinCardAvatar pseudo={data.pseudo} avatar={data.avatar} size={avatarSize - 6} />
          </span>
          <span
            className={styles.wscMono}
            style={{
              position: 'absolute', zIndex: 3, left: '50%', bottom: -10, transform: 'translateX(-50%)',
              fontSize: story ? 17 : 15, fontWeight: 700, lineHeight: 1, padding: '4px 8px', borderRadius: 5,
              background: '#0A0A0A', border: `2px solid ${chip.chip}`, color: chip.chipText,
            }}
          >
            {g.level}
          </span>
        </span>
      ) : (
        <WinCardAvatar pseudo={data.pseudo} avatar={data.avatar} size={avatarSize} />
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: story ? 8 : 6, minWidth: 0 }}>
        <span className={`${styles.pseudo} ${styles.wscMono}`} style={{ fontSize: story ? 28 : 23 }}>
          {data.pseudo}
        </span>
        {g && subline ? (
          <span className={`${styles.rank} ${styles.wscMono}`} style={{ fontSize: story ? 21 : 18, color: rankStyleOf(g.rankTier).accent }}>
            Lvl {g.level} · {subline}
          </span>
        ) : null}
        {data.rank ? (
          <span className={`${styles.rank} ${styles.wscMono}`} style={{ fontSize: story ? 21 : 18 }}>
            {data.rank}
          </span>
        ) : null}
      </div>
    </div>
  );
}
