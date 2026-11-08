import { useCallback, useEffect, useState } from "react";

/** Live width of an element (null until measured); attach the returned callback as its `ref`. */
export function useElementWidth<T extends HTMLElement>(): [(node: T | null) => void, number | null] {
  const [node, setNode] = useState<T | null>(null);
  const [width, setWidth] = useState<number | null>(null);
  const ref = useCallback((el: T | null) => setNode(el), []);

  useEffect(() => {
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  return [ref, width];
}
