// Client-side PNG rasterisation for the win share card.
import { toBlob } from 'html-to-image';

/**
 * Fetches an image and returns it as a data URL — best-effort, null on any
 * failure. Pre-inlining team crests this way means the captured card holds no
 * remote URL, so the canvas is never tainted (the #1 cause of capture failure).
 */
export async function toDataUrl(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { mode: 'cors', cache: 'force-cache' });
    if (!res.ok) return null;
    const blob = await res.blob();
    return await new Promise<string | null>((resolve) => {
      const fr = new FileReader();
      fr.onload = () => resolve(typeof fr.result === 'string' ? fr.result : null);
      fr.onerror = () => resolve(null);
      fr.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

/**
 * Rasterises a full-size win-card node to a PNG Blob. Best-effort: returns
 * null if capture fails (e.g. a team logo CDN without CORS taints the canvas),
 * so callers can fall back to a link share. Fonts are flushed first so the
 * Barlow/JetBrains glyphs are embedded.
 */
export async function captureWinCard(node: HTMLElement): Promise<Blob | null> {
  try {
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      await document.fonts.ready;
    }
    return await toBlob(node, {
      pixelRatio: 1, // node is already 1080-wide — native share resolution
      cacheBust: true,
      backgroundColor: '#0A0A0A',
    });
  } catch {
    return null;
  }
}
