import { decodeContractError } from "@/lib/contracts/errors";

/** One-line user-facing message for a contract / wallet error. */
export function contractErrorMessage(error: unknown): string {
  const decoded = decodeContractError(error);
  return decoded.description ? `${decoded.title} — ${decoded.description}` : decoded.title;
}
