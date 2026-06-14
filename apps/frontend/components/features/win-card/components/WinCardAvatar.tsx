'use client';

import { useState } from 'react';
import styles from './WinCard.module.css';

const GRADS: ReadonlyArray<readonly [string, string]> = [
  ['#E8001D', '#6F0011'],
  ['#F5C518', '#6F5400'],
  ['#2dd4a4', '#0C5A45'],
  ['#FF1737', '#4D0008'],
  ['#B0001A', '#2A0005'],
];

/**
 * The user's profile picture, or a deterministic gradient initial when there's
 * no avatar (or it fails to load). `avatar` is a remote URL on the visible card
 * and a pre-inlined data URL on the capture card (so html-to-image stays clean).
 */
export function WinCardAvatar({
  pseudo,
  avatar = null,
  size = 72,
}: Readonly<{ pseudo: string; avatar?: string | null; size?: number }>) {
  const [err, setErr] = useState(false);
  let h = 0;
  for (const c of pseudo) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const [a, b] = GRADS[h % GRADS.length];
  const showImg = !!avatar && !err;

  return (
    <div
      className={styles.avatar}
      style={{
        width: size,
        height: size,
        overflow: 'hidden',
        background: showImg ? '#1A1A1A' : `linear-gradient(135deg, ${a}, ${b})`,
      }}
    >
      {showImg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={avatar as string}
          alt={pseudo}
          width={size}
          height={size}
          style={{ width: size, height: size, objectFit: 'cover' }}
          onError={() => setErr(true)}
        />
      ) : (
        <span className={styles.wscDisp} style={{ fontSize: size * 0.5 }}>
          {(pseudo[0] ?? '?').toUpperCase()}
        </span>
      )}
    </div>
  );
}
