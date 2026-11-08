import { createContext } from "react";

/**
 * Token of the active chart tab (null on the cross pair). Read by the future Buy / Sell
 * actions so they trade what the viewer is looking at; nothing consumes it yet.
 */
export const SelectedFanTokenContext = createContext<string | null>(null);
