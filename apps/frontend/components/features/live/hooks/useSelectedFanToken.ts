"use client";

import { useContext } from "react";

import { SelectedFanTokenContext } from "../context/selectedFanTokenContext";

/** Token of the active chart tab, for the Buy / Sell actions placed in the chart block. */
export function useSelectedFanToken(): string | null {
  return useContext(SelectedFanTokenContext);
}
