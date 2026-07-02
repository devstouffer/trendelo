"use client";

import type { CSSProperties, ReactNode } from "react";
import Button from "../../../components/Button";
import DottedBackground from "../../../components/DottedBackground";

// ── Shared animations used across lesson players ─────────────────────────────
// Player-specific keyframes (quiz's bolt/shock, etc.) live in their own files.

export const LESSON_ANIM = `
@keyframes banner-slide-up {
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
@keyframes celebrate-pop {
  0%   { transform: scale(0.6) rotate(-8deg); opacity: 0; }
  60%  { transform: scale(1.12) rotate(4deg); }
  100% { transform: scale(1) rotate(0deg);    opacity: 1; }
}
@keyframes card-in {
  from { transform: translateY(10px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
.option-row:not(:disabled):hover { border-color: var(--color-primary-light); }
`;

// ── Background + keyframes wrapper ───────────────────────────────────────────

export function LessonShell({
  children,
  extraAnim,
  style,
}: {
  children: ReactNode;
  extraAnim?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#63b295",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <DottedBackground color="#eafef7" intensity={0.5} />
      <style>{LESSON_ANIM}</style>
      {extraAnim && <style>{extraAnim}</style>}
      {children}
    </div>
  );
}

// ── Sticky header: exit · progress bar · optional right slot ────────────────

export function LessonHeader({
  trackId,
  pct,
  rightSlot,
}: {
  trackId: string;
  pct: number;
  rightSlot?: ReactNode;
}) {
  return (
    <header
      className="sticky top-0 z-30 w-full px-4 py-3 flex items-center gap-3"
      style={{
        backgroundColor: "rgba(4, 38, 28, 0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(200,240,224,0.1)",
      }}
    >
      <Button
        href={`/learn/${trackId}`}
        variant="ghost"
        tone="dark"
        size="sm"
        aria-label="Exit lesson"
        style={{ padding: "0.4rem 0.65rem", borderRadius: 9999 }}
      >
        ✕
      </Button>

      <div
        className="flex-1 h-3 rounded-full border-2 overflow-hidden"
        style={{ borderColor: "rgba(232,245,238,0.24)", backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: "var(--color-primary-light)", transition: "width 300ms ease" }}
        />
      </div>

      {rightSlot && <div className="flex items-center gap-1 shrink-0">{rightSlot}</div>}
    </header>
  );
}

// ── Surface-low card panel that sits above the main interaction area ────────

export function LessonPromptPanel({
  eyebrow,
  kicker,
  children,
}: {
  eyebrow: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <div
      className="rounded-2xl px-7 py-8 mb-6"
      style={{ backgroundColor: "var(--color-surface-low)", border: "1px solid var(--color-ghost-border)" }}
    >
      <p
        className="text-xs font-bold uppercase tracking-widest mb-3"
        style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
      >
        {eyebrow}
      </p>
      {kicker && (
        <p className="text-sm font-bold mb-4" style={{ color: "var(--color-primary)", fontFamily: "var(--font-body)" }}>
          {kicker}
        </p>
      )}
      {children}
    </div>
  );
}

// ── Fixed bottom action bar (plain white, single primary button) ────────────

export function LessonActionBar({ children }: { children: ReactNode }) {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-30 px-4 py-4"
      style={{ backgroundColor: "#ffffff", borderTop: "1px solid rgba(8,80,65,0.1)" }}
    >
      <div className="max-w-lg mx-auto">{children}</div>
    </div>
  );
}

// ── Colored feedback banner that slides up from the bottom ──────────────────

export function LessonBanner({
  tone,
  children,
}: {
  tone: "primary" | "error" | "neutral";
  children: ReactNode;
}) {
  const backgroundColor =
    tone === "primary" ? "var(--color-primary)" : tone === "error" ? "var(--color-error)" : "var(--color-forest)";

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-30 px-4 py-4"
      style={{ backgroundColor, animation: "banner-slide-up 220ms cubic-bezier(0.22,1,0.36,1)" }}
    >
      <div className="max-w-lg mx-auto flex items-center justify-between gap-4">{children}</div>
    </div>
  );
}

// ── Completion / failure result card shell ───────────────────────────────────

export function ResultCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "var(--color-mint)", minHeight: "100vh" }}
    >
      <DottedBackground color="#085041" intensity={0.18} />
      <style>{LESSON_ANIM}</style>
      <div
        className="relative max-w-sm mx-4 w-full rounded-2xl border-2 p-8 bg-white text-center"
        style={{ borderColor: "var(--color-forest)", boxShadow: "4px 4px 0px var(--color-forest)" }}
      >
        {children}
      </div>
    </div>
  );
}

export function StatChip({ icon, label }: { icon: string; label: string }) {
  return (
    <span
      className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border"
      style={{ borderColor: "#c8f0e0", backgroundColor: "#eafef7", color: "var(--color-primary)", fontFamily: "var(--font-body)" }}
    >
      {icon} {label}
    </span>
  );
}
