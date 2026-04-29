"use client";

import { useState } from "react";
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { Abi, keccak256, toBytes } from "viem";
import { ChevronDown, ChevronUp, Loader2, CheckCircle2, XCircle, Copy, ExternalLink } from "lucide-react";
import { networkType } from "@/config/chiliz.config";

// ─── Constants ────────────────────────────────────────────────────────────────

const MARKET_TYPES = [
  { label: "WINNER",        value: keccak256(toBytes("WINNER")) },
  { label: "GOALS_TOTAL",   value: keccak256(toBytes("GOALS_TOTAL")) },
  { label: "BOTH_SCORE",    value: keccak256(toBytes("BOTH_SCORE")) },
  { label: "HALFTIME",      value: keccak256(toBytes("HALFTIME")) },
  { label: "CORRECT_SCORE", value: keccak256(toBytes("CORRECT_SCORE")) },
  { label: "FIRST_SCORER",  value: keccak256(toBytes("FIRST_SCORER")) },
  { label: "TOTAL_POINTS",  value: keccak256(toBytes("TOTAL_POINTS")) },
  { label: "SPREAD",        value: keccak256(toBytes("SPREAD")) },
  { label: "QUARTER_WINNER",value: keccak256(toBytes("QUARTER_WINNER")) },
  { label: "FIRST_TO_SCORE",value: keccak256(toBytes("FIRST_TO_SCORE")) },
  { label: "HIGHEST_QUARTER",value: keccak256(toBytes("HIGHEST_QUARTER")) },
];

const ROLES = [
  { label: "DEFAULT_ADMIN_ROLE", value: "0x0000000000000000000000000000000000000000000000000000000000000000" },
  { label: "ADMIN_ROLE",         value: keccak256(toBytes("ADMIN_ROLE")) },
  { label: "RESOLVER_ROLE",      value: keccak256(toBytes("RESOLVER_ROLE")) },
  { label: "PAUSER_ROLE",        value: keccak256(toBytes("PAUSER_ROLE")) },
  { label: "ODDS_SETTER_ROLE",   value: keccak256(toBytes("ODDS_SETTER_ROLE")) },
  { label: "SWAP_ROUTER_ROLE",   value: keccak256(toBytes("SWAP_ROUTER_ROLE")) },
  { label: "MATCH_AUTHORIZER_ROLE", value: keccak256(toBytes("MATCH_AUTHORIZER_ROLE")) },
  { label: "ROUTER_ROLE",        value: keccak256(toBytes("ROUTER_ROLE")) },
  { label: "MATCH_ROLE",         value: keccak256(toBytes("MATCH_ROLE")) },
];

const UNSET = Symbol("unset");

// ─── Helpers ──────────────────────────────────────────────────────────────────

function coerceArg(value: string, type: string): unknown {
  const v = value.trim();
  if (type === "address") return v as `0x${string}`;
  if (type.match(/^u?int/)) {
    if (!v) return BigInt(0);
    return BigInt(v);
  }
  if (type === "bool") return v === "true" || v === "1";
  if (type === "bytes32") {
    if (v.startsWith("0x") && v.length === 66) return v as `0x${string}`;
    try { return keccak256(toBytes(v)); } catch { return v as `0x${string}`; }
  }
  if (type === "bytes") {
    return v as `0x${string}`;
  }
  return v;
}

function formatResult(data: unknown): string {
  if (data === undefined || data === null) return "null";
  if (typeof data === "bigint") return data.toString();
  try {
    return JSON.stringify(data, (_, v) => (typeof v === "bigint" ? v.toString() : v), 2);
  } catch {
    return String(data);
  }
}

function explorerUrl(hash: string) {
  const base = networkType === "mainnet"
    ? "https://explorer.chiliz.com/tx"
    : "https://spicy-explorer.chiliz.com/tx";
  return `${base}/${hash}`;
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AbiInput {
  name: string;
  type: string;
  internalType?: string;
}

export interface AbiFn {
  name: string;
  inputs: AbiInput[];
  outputs?: Array<{ name: string; type: string }>;
  stateMutability: "view" | "pure" | "nonpayable" | "payable";
  description?: string;
  hints?: Record<string, string>;
}

interface InputFieldProps {
  input: AbiInput;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}

// ─── InputField ───────────────────────────────────────────────────────────────

function InputField({ input, value, onChange, hint }: InputFieldProps) {
  const isMarketType = input.type === "bytes32" && input.name.toLowerCase().includes("markettype");
  const isRole = input.type === "bytes32" && input.name.toLowerCase() === "role";
  const isBool = input.type === "bool";

  const label = (
    <div className="flex items-center gap-2 mb-1">
      <span className="text-[12px] font-semibold" style={{ color: "#ccc" }}>{input.name}</span>
      <span className="text-[10px] font-mono" style={{ color: "#555" }}>{input.type}</span>
      {hint && <span className="text-[10px]" style={{ color: "#666" }}>— {hint}</span>}
    </div>
  );

  const baseInputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0A0A0A",
    border: "1px solid #2A2A2A",
    borderRadius: 6,
    padding: "7px 10px",
    color: "#ddd",
    fontSize: 12,
    fontFamily: "'Courier New', monospace",
    outline: "none",
  };

  if (isMarketType) {
    return (
      <div>
        {label}
        <select value={value} onChange={e => onChange(e.target.value)} style={{ ...baseInputStyle, cursor: "pointer" }}>
          <option value="">— select market type —</option>
          {MARKET_TYPES.map(m => (
            <option key={m.label} value={m.value}>{m.label}</option>
          ))}
        </select>
        {value && <p className="mt-1 text-[10px] font-mono" style={{ color: "#444" }}>{value}</p>}
      </div>
    );
  }

  if (isRole) {
    return (
      <div>
        {label}
        <select value={value} onChange={e => onChange(e.target.value)} style={{ ...baseInputStyle, cursor: "pointer" }}>
          <option value="">— select role —</option>
          {ROLES.map(r => (
            <option key={r.label} value={r.value}>{r.label}</option>
          ))}
        </select>
        {value && <p className="mt-1 text-[10px] font-mono" style={{ color: "#444" }}>{value.slice(0, 20)}...</p>}
      </div>
    );
  }

  if (isBool) {
    return (
      <div>
        {label}
        <select value={value} onChange={e => onChange(e.target.value)} style={{ ...baseInputStyle, cursor: "pointer" }}>
          <option value="false">false</option>
          <option value="true">true</option>
        </select>
      </div>
    );
  }

  return (
    <div>
      {label}
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={
          input.type.startsWith("uint") || input.type.startsWith("int")
            ? "0"
            : input.type === "address"
            ? "0x..."
            : input.type === "bytes32"
            ? "0x... or string"
            : ""
        }
        style={baseInputStyle}
      />
    </div>
  );
}

// ─── Shared card shell ────────────────────────────────────────────────────────

interface CardShellProps {
  fn: AbiFn;
  mode: "read" | "write" | "payable";
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function CardShell({ fn, mode, open, onToggle, children }: CardShellProps) {
  const badge =
    mode === "read"
      ? { bg: "rgba(0,200,83,0.12)", color: "#00C853", label: "READ" }
      : mode === "payable"
      ? { bg: "rgba(234,179,8,0.12)", color: "#EAB308", label: "PAYABLE" }
      : { bg: "rgba(232,0,29,0.12)", color: "#E8001D", label: "WRITE" };

  const borderColor = mode === "read" ? "#00C853" : mode === "payable" ? "#EAB308" : "#E8001D";

  return (
    <div
      style={{
        border: `1px solid #1E1E1E`,
        borderLeft: `3px solid ${open ? borderColor : "#1E1E1E"}`,
        borderRadius: 8,
        overflow: "hidden",
        transition: "border-left-color 0.15s",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-2 px-4 py-3 text-left transition-colors duration-100"
        style={{ background: open ? "#0F0F0F" : "transparent" }}
        onMouseEnter={e => { if (!open) (e.currentTarget as HTMLButtonElement).style.background = "#0A0A0A"; }}
        onMouseLeave={e => { if (!open) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
      >
        <span
          className="text-[10px] font-black px-2 py-0.5 rounded flex-shrink-0"
          style={{ background: badge.bg, color: badge.color, fontFamily: "'Barlow', sans-serif", letterSpacing: "0.08em" }}
        >
          {badge.label}
        </span>
        <span className="font-mono text-sm" style={{ color: "#e0e0e0" }}>
          {fn.name}
        </span>
        <span className="font-mono text-[11px] truncate" style={{ color: "#444" }}>
          ({fn.inputs.map(i => `${i.type} ${i.name}`).join(", ")})
        </span>
        {fn.description && (
          <span className="text-[11px] hidden lg:block ml-1 truncate" style={{ color: "#555" }}>
            — {fn.description}
          </span>
        )}
        <div className="ml-auto flex-shrink-0" style={{ color: "#555" }}>
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      </button>

      {open && (
        <div style={{ borderTop: "1px solid #1A1A1A", background: "#080808" }}>
          {children}
        </div>
      )}
    </div>
  );
}

// ─── ReadCard ─────────────────────────────────────────────────────────────────

interface ReadCardProps {
  abi: Abi;
  address: `0x${string}`;
  fn: AbiFn;
}

export function ReadCard({ abi, address, fn }: ReadCardProps) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<unknown>(UNSET);
  const [localError, setLocalError] = useState<string | null>(null);

  const args = fn.inputs.map(i => coerceArg(values[i.name] ?? "", i.type));

  const { refetch, isLoading } = useReadContract({
    abi,
    address,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    functionName: fn.name as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    args: args as any,
    query: { enabled: false },
  });

  const handleExecute = async () => {
    setLocalError(null);
    try {
      const { data, error } = await refetch();
      if (error) setLocalError(error.message.slice(0, 300));
      else setResult(data);
    } catch (e) {
      setLocalError(e instanceof Error ? e.message.slice(0, 300) : String(e));
    }
  };

  const copyResult = () => {
    if (result !== UNSET) navigator.clipboard.writeText(formatResult(result));
  };

  const disabled = !address || address === "0x0000000000000000000000000000000000000000";

  return (
    <CardShell fn={fn} mode="read" open={open} onToggle={() => setOpen(o => !o)}>
      <div className="p-4 flex flex-col gap-3">
        {fn.description && (
          <p className="text-[12px]" style={{ color: "#666" }}>{fn.description}</p>
        )}

        {fn.inputs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {fn.inputs.map(input => (
              <InputField
                key={input.name}
                input={input}
                value={values[input.name] ?? ""}
                hint={fn.hints?.[input.name]}
                onChange={v => setValues(prev => ({ ...prev, [input.name]: v }))}
              />
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={handleExecute}
            disabled={isLoading || disabled}
            className="flex items-center gap-2 px-4 py-2 rounded text-[12px] font-bold transition-opacity"
            style={{
              background: disabled ? "#1A1A1A" : "#00C853",
              color: disabled ? "#555" : "#000",
              opacity: isLoading ? 0.7 : 1,
              cursor: disabled ? "not-allowed" : "pointer",
              fontFamily: "'Barlow', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            {isLoading ? <Loader2 size={13} className="animate-spin" /> : null}
            {isLoading ? "Querying..." : "Execute"}
          </button>

          {disabled && (
            <span className="text-[11px]" style={{ color: "#555" }}>Contract address not set</span>
          )}
        </div>

        {localError && (
          <div className="flex items-start gap-2 p-3 rounded" style={{ background: "rgba(232,0,29,0.08)", border: "1px solid rgba(232,0,29,0.2)" }}>
            <XCircle size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#E8001D" }} />
            <p className="text-[11px] font-mono break-all" style={{ color: "#ff6b6b" }}>{localError}</p>
          </div>
        )}

        {result !== UNSET && (
          <div style={{ position: "relative" }}>
            <button
              onClick={copyResult}
              style={{ position: "absolute", top: 8, right: 8, color: "#555" }}
              title="Copy"
            >
              <Copy size={12} />
            </button>
            <pre
              className="rounded p-3 text-[11px] overflow-x-auto"
              style={{
                background: "#040404",
                border: "1px solid #1A1A1A",
                color: "#7fe087",
                fontFamily: "'Courier New', monospace",
                maxHeight: 280,
              }}
            >
              {formatResult(result)}
            </pre>
          </div>
        )}
      </div>
    </CardShell>
  );
}

// ─── WriteCard ────────────────────────────────────────────────────────────────

export function WriteCard({ abi, address, fn }: ReadCardProps) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});

  const { writeContract, data: hash, isPending, error: writeError, reset } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const handleSubmit = () => {
    reset();
    const args = fn.inputs.map(i => coerceArg(values[i.name] ?? "", i.type));
    writeContract({
      abi,
      address,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      functionName: fn.name as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      args: args as any,
    });
  };

  const disabled = !address || address === "0x0000000000000000000000000000000000000000";
  const isBusy = isPending || isConfirming;
  const mode = fn.stateMutability === "payable" ? "payable" : "write";

  return (
    <CardShell fn={fn} mode={mode} open={open} onToggle={() => { setOpen(o => !o); reset(); }}>
      <div className="p-4 flex flex-col gap-3">
        {fn.description && (
          <p className="text-[12px]" style={{ color: "#666" }}>{fn.description}</p>
        )}

        {fn.inputs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {fn.inputs.map(input => (
              <InputField
                key={input.name}
                input={input}
                value={values[input.name] ?? ""}
                hint={fn.hints?.[input.name]}
                onChange={v => setValues(prev => ({ ...prev, [input.name]: v }))}
              />
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={handleSubmit}
            disabled={isBusy || disabled}
            className="flex items-center gap-2 px-4 py-2 rounded text-[12px] font-bold transition-opacity"
            style={{
              background: disabled ? "#1A1A1A" : mode === "payable" ? "#EAB308" : "#E8001D",
              color: disabled ? "#555" : mode === "payable" ? "#000" : "#fff",
              opacity: isBusy ? 0.7 : 1,
              cursor: disabled || isBusy ? "not-allowed" : "pointer",
              fontFamily: "'Barlow', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            {isBusy && <Loader2 size={13} className="animate-spin" />}
            {isPending ? "Confirm in wallet..." : isConfirming ? "Confirming..." : "Execute"}
          </button>

          {disabled && (
            <span className="text-[11px]" style={{ color: "#555" }}>Contract address not set</span>
          )}

          {isSuccess && hash && (
            <a
              href={explorerUrl(hash)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px]"
              style={{ color: "#00C853" }}
            >
              <CheckCircle2 size={13} />
              Success — View tx
              <ExternalLink size={10} />
            </a>
          )}

          {hash && !isSuccess && !isConfirming && (
            <span className="text-[11px] font-mono" style={{ color: "#888" }}>
              {hash.slice(0, 10)}...{hash.slice(-6)}
            </span>
          )}
        </div>

        {writeError && (
          <div className="flex items-start gap-2 p-3 rounded" style={{ background: "rgba(232,0,29,0.08)", border: "1px solid rgba(232,0,29,0.2)" }}>
            <XCircle size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#E8001D" }} />
            <p className="text-[11px] font-mono break-all" style={{ color: "#ff6b6b" }}>
              {writeError.message.slice(0, 400)}
            </p>
          </div>
        )}
      </div>
    </CardShell>
  );
}
